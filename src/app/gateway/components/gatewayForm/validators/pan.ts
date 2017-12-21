import { FormControl } from '@angular/forms';

export class PanValidator {

    static isValid(control: FormControl) {
        const re = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/.test(control.value);

        if (re) { return null; }
        return { "invalidEmail": false };
    }
}