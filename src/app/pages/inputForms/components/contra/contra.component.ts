import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { ActivatedRoute } from '@angular/router';
import { ContraService } from "./service/contra.service";

import { INgxMyDpOptions } from 'ngx-mydatepicker';
@Component({
    selector: 'app-contra',
    templateUrl: './contra.component.html',
    styleUrls: ['./contra.component.scss']
})

export class ContraComponent implements OnInit {
    form: FormGroup;
    selectedIndex = 1;

    contraNumber: string;
    account: string;
    chequeNumber: string;
    drawnBank: string;

    paramId: string;





    constructor(private route: ActivatedRoute, public _contraService: ContraService, public fb: FormBuilder, private router: Router) {
        this.route.params.subscribe(params => this.paramId = params.id);
        console.log(this.paramId)
    }


    ngOnInit() {
        this.form = this.fb.group({
            contraNumber: [''],
            date: [''],
            account: [''],
            chequeNumber: [''],
            drawnBank: [''],
            particularsData: this.fb.array([]),
            file: [""],
            myDate: [null, Validators.required]
        });
        this.addParticular();
    }


    initParticular() {
        return this.fb.group({
            particulars: ['', Validators.required],
            amount: ['']
        })
    }
    addParticular() {
        const control = <FormArray>this.form.controls['particularsData'];
        const addCtrl = this.initParticular();
        control.push(addCtrl);
    }
    removeParticular(i: number) {
        const control = <FormArray>this.form.controls['particularsData'];
        control.removeAt(i);
    }

    // calender codes 
    myOptions: INgxMyDpOptions = {
        dateFormat: 'dd.mm.yyyy',
    };
    setDate(): void {
        // Set today date using the patchValue function
        let date = new Date();
        this.form.patchValue({
            myDate: {
                date: {
                    year: date.getFullYear(),
                    month: date.getMonth() + 1,
                    day: date.getDate()
                }
            }
        });
    }

    clearDate(): void {
        // Clear the date using the patchValue function
        this.form.patchValue({ myDate: null });
    }


    // file upload code here
    handleFileUpload(event) {
        var file: File = event.target.files[0];
        let valid: boolean;

        // valid = this.fileValidator.isValidLogo(file);
        // if (valid && file.size < 200000) {
        //     this.fileValidator.checkPixel(file, (value) => {
        //         if (value) {
        //             this.file_size = false;
        //             this.file_view = true;
        //             this.file = value;
        //         }
        //     });
        // }
        // else {
        //     this.file_size = true;
        // }
    }





    onSubmit(user) {
        console.log(user);
    }

    setSelected(id: number) {
        this.selectedIndex = id;
    }

}

interface Customer {
    particularsData: Address[];
}

interface Address {
    particulars: string;  // required field
    amount: string;
}