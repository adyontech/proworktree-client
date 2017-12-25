import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { ActivatedRoute } from '@angular/router';
import { LedgerService } from "./service/ledger.service";
import { IMyDpOptions } from 'mydatepicker';
declare var $: any;

@Component({
    selector: 'app-ledger',
    templateUrl: './ledger.component.html',
    styleUrls: ['./ledger.component.scss']
})

export class LedgerComponent implements OnInit {

    form: FormGroup;
    selectedIndex = 1;

    contraNumber: string;
    account: string;
    chequeNumber: string;
    drawnBank: string;

    paramId: string;

    constructor(
        private route: ActivatedRoute,
        public _ledgerService: LedgerService,
        public fb: FormBuilder,
        private router: Router) {
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
            xDate: [null, Validators.required],
            yDate: [null, Validators.required],
        });
        this.addParticular();
    }

    // real date picker active from here
    public myDatePickerOptions: IMyDpOptions = {
        // other options...
        dateFormat: 'dd.mm.yyyy',
    };

    public items: Array<string> = ['cash in hand(dr)', 'cash at bank(dr)', 'sales a / c(cr)', 'purchases a / c(dr)', 'stock in hand(dr)',
        ' sundry debtors(dr)', 'sundry creditors(cr)', 'current asset(dr)', 'current liabilities(cr)', 'non - current assets(dr)',
        ' non - current liabilities(cr)', 'capital(cr)', ' bank overdraft(cr)', 'duties and taxes(cr)', ' Deposit(asset)(DR)',
        ' Direct expenses(DR)', ' Direct Income(CR)', 'indirect expense(DR)', ' Indirect Income(CR)', ' Fixed Asset(DR)',
        ' Investments(DR)', ' Loans & advances(Asset)(DR)', ' Loans(liability)(CR)', ' Reserves and Surplus(CR)', ' Provisions(CR)',
        ' Bad debt(DR)', ' Suspense.'];


    public value: any = {};
    public _disabledV: string = '0';
    public disabled: boolean = false;
    private get disabledV(): string {
        return this._disabledV;
    }

    private set disabledV(value: string) {
        this._disabledV = value;
        this.disabled = this._disabledV === '1';
    }

    public selected(value: any): void {
        console.log('Selected value is: ', value);
    }

    public removed(value: any): void {
        console.log('Removed value is: ', value);
    }

    // public typed(value: any): void {
    //     console.log('New search input: ', value);
    // }

    public refreshValue(value: any): void {
        this.value = value;
    }




    public showNotification(from, align) {
        const type = ['', 'info', 'success', 'warning', 'danger'];

        var color = Math.floor((Math.random() * 4) + 1);
        $.notify({
            icon: "pe-7s-gift",
            message: "Welcome to <b>ProWorkTree Dashboard</b> - a beautiful freebie for every web developer."
        }, {
                type: type[color],
                timer: 1000,
                placement: {
                    from: from,
                    align: align
                }
            });
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

    setSelected(id: number) {
        this.selectedIndex = id;
    }


    onSubmit(user) {
        console.log(user);
    }



}

interface Customer {
    particularsData: Address[];
}

interface Address {
    particulars: string;  // required field
    amount: string;
}