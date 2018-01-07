import { Component,Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { ActivatedRoute } from '@angular/router';
import { PaymentService } from "./service/payment.service";
import { IMyDpOptions } from 'mydatepicker';
declare var $: any;

@Component({
    selector: 'app-payment',
    templateUrl: './payment.component.html',
    styleUrls: ['./payment.component.scss']
})

export class PaymentComponent implements OnInit {

    // Models 
    public dateFrom: Date;
    public dateTo: Date;
    public dropdFilter: string;


    //Modal for column hide and show

    VColPaymentType: string = "ColPaymentType";
    VColPaymentThrough: string = "ColPaymentThrough";
    VColChequeNO: string = "ColChequeNO";
    VColAgainst: string = "ColAgainst";

    @Input()
    public ColPaymentType: Boolean = false;
    public ColPaymentThrough: Boolean = false;
    public ColChequeNO: Boolean = false;
    public ColAgainst: Boolean = false;

    incomingData: Array<string>;
    form: FormGroup;
    public dataCopy: any;
    public paramId: string;
    public closeResult: string;

    dropdownList = [];
    selectedItems = [];
    dropdownSettings = {};

    constructor(
        private route: ActivatedRoute,
        public _paymentService: PaymentService,
        public fb: FormBuilder, ) {

    }
    ngOnInit() {
        this.getIncomingData();
        this.dropdownList = [
            { "id": "ColPaymentType", "itemName": "Payment Type" },
            { "id": "ColPaymentThrough", "itemName": "Payment Through" },
            { "id": "ColChequeNO", "itemName": "Cheque Number" },
            { "id": "ColAgainst", "itemName": "Against" },
        ];
        this.dropdownSettings = {
            singleSelection: false,
            text: "Select filter",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: false,
            classes: "myclass custom-class"
        };
    }
    onItemSelect(item: any): void {
        switch (item.id) {
            case this.VColPaymentType:
                this.ColPaymentType = true;
                break;
            case this.VColPaymentThrough:
                this.ColPaymentThrough = true;
                break;
            case this.VColChequeNO:
                this.ColChequeNO = true;
                break;
            case this.VColAgainst:
                this.ColAgainst = true;
                break;

        }
        console.log(this.selectedItems);
    }

    OnItemDeSelect(item: any) {
        console.log(item);
        console.log(this.selectedItems);
    }
    onSelectAll(items: any) {
        // console.log(items);
        this.ColPaymentType = true;
        this.ColPaymentThrough = true;
        this.ColChequeNO = true;
        this.ColAgainst = true;
    }
    onDeSelectAll(items: any) {
        // console.log(items);
        this.ColPaymentType = false;
        this.ColPaymentThrough = false;
        this.ColChequeNO = false;
        this.ColAgainst = false;
    }
    // real date picker active from here
    public myDatePickerOptions: IMyDpOptions = {
        // other options...
        dateFormat: 'dd.mm.yyyy',
    };

    getIncomingData() {
        this.dataCopy = this._paymentService.getIncomingData().map(
            (response) => response.json()
        ).subscribe(
            (data) => {
                console.log(data.paymentData)
                this.incomingData = data.paymentData;
            })
    }

    editData(id){
        console.log(id);
        this._paymentService.contentId = id;

    }
    
    deleteData(id){


    }

    copyData(id){


    }

}
