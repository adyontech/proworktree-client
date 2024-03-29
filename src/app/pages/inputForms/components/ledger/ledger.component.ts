import { Component, ViewChild, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';

import { ActivatedRoute } from '@angular/router';
import { LedgerService } from "./service/ledger.service";
import { IMyDpOptions } from 'mydatepicker';
import { BsModalComponent } from 'ng2-bs3-modal';

declare var $: any;

@Component({
    selector: 'app-ledger',
    host: { '(window:keydown)': 'hotkeys($event)' },
    templateUrl: './ledger.component.html',
    styleUrls: ['./ledger.component.scss'],
})

export class LedgerComponent implements OnInit {
    form: FormGroup;
    selectedIndex = 1;
    dataCopy: any;
    paramId: string;
    closeResult: string;
    @ViewChild('modal')
    modal: BsModalComponent;
    open() {
        this.modal.open();
    }
    constructor(
        private route: ActivatedRoute,
        public _ledgerService: LedgerService,
        public fb: FormBuilder,) {
            
    }
    ngOnInit() {
        this.getUnderGroupList();
        this.form = this.fb.group({
            ledgerName: [''],
            underGroup: [''],
            applicableTax: [''],
            businessType: [''],
            gstin: [''],
            name: [''],
            email: [''],
            pan: [''],
            address: [''],
            city: [''],
            state: [''],
            pinCode: [''],
            country: [''],
            phoneNumber: [''],
            qty: [''],
            rate: [''],
            total: ['']

        });
    }

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
            message: "Welcome to <b>ProWorkTree </b> - a beautiful freebie for every web developer."
        }, {
                type: type[color],
                timer: 1000,
                placement: {
                    from: from,
                    align: align
                }
            });
    }

    hotkeys(event) {
        if (event.keyCode == 81) {
            
                this.modal.open();
        }
    }


    setSelected(id: number) {
        this.selectedIndex = id;
    }



    getUnderGroupList() {
        this.dataCopy = this._ledgerService.getUnderGroupList().map(
            (response) => response.json()
        ).subscribe(
            (data) => {

                data = data.ugData.map(item => item.groupName);
                // console.log(data);
                this.items = this.items.concat(data);
                // console.log(this.items);

            })
    }

    onSubmit(user) {
        user.underGroup = this.form.get('underGroup').value[0].text;
        user.state = this.form.get('state').value[0].text;
        user.country = this.form.get('country').value[0].text;

        console.log(user);
        this._ledgerService.createNewLedger(user)
            .subscribe(
            (data) => {
                // console.log('hello gateway service')
            }
            )
    }

}
