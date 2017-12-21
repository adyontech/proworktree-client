import { FormControl } from '@angular/forms';

export class GstinValidator {

    static isValid(control: FormControl) {
        const re = /\d{2}([a-zA-Z]){5}\d{4}([a-zA-Z]){1}\d[Zz]{1}[A-Z\d]{1}/.test(control.value);

        if (re) { return null; }
        return { "invalidEmail": false };
    }
}
