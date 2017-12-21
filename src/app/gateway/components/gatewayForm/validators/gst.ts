import { FormControl } from '@angular/forms';

export class GstValidator {

    static isValid(control: FormControl) {
        const re = /^[ A-Za-z0-9_@./#&+-]*$/.test(control.value);

        if (re) { return null; }
        return { "invalidEmail": false };
    }
}