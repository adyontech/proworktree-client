export class LogoValidator {

    image_px: boolean = false;

    public isValidLogo(file: File) {
        const re = /.(jpg|png)$/;

        if (re.test(file.name))
            return true;
        return false;
    }

    public checkPixel(file: File, callback: Function) {
        var base64Value;
        this.getBase64(file, (result) => {
            base64Value = result;
            this.loadImage(base64Value, (width, height) => {
                // console.log('height :', height);
                // console.log('width :', width);

                if (width < 200 || height < 200) {
                //    console.log('image not valid ' + this.image_px)
                    callback(null);
                }
                else
                    callback(base64Value);
            });
        });
    }

    private getBase64(file: File, callback: Function) {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            callback(reader.result);
        };
        reader.onerror = (error) => {
            console.log('Error: ', error);
        };
    }

    private loadImage(base64Value: string, callback: Function) {
        var image = new Image();
        image.onload = function () {
            callback(image.width, image.height);
        }
        image.src = base64Value;
    }
}
