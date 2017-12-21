import { FormControl } from '@angular/forms';

export class PhoneValidator {

    static isValid(control: FormControl) {
        const re = /\d{10}/.test(control.value);

        if (re) { return null; }
        return { "invalidEmail": false };
    }
}