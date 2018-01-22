import { Component, Input, ViewChild, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { ActivatedRoute } from '@angular/router';
import { ReceiptService } from "./service/receipt.service";
import { IMyDpOptions } from 'mydatepicker';
import { BsModalComponent, BsModalBodyComponent } from "ng2-bs3-modal";

declare var $: any;

@Component({
    selector: 'app-receipt',
    host: { '(window:keydown)': 'hotkeys($event)' },
    templateUrl: './receipt.component.html',
    styleUrls: ['./receipt.component.scss']
})

export class ReceiptComponent implements OnInit {
    // Models 
    contentId: string = "";
    public dateFrom: Date;
    public dateTo: Date;
    public dropdFilter: string;


    //Modal for column hide and show

    VColReceiptType: string = "ColReceiptType";
    VColReceiptThrough: string = "ColReceiptThrough";
    VColChequeNO: string = "ColChequeNO";
    VColAgainst: string = "ColAgainst";

    @ViewChild('modal')
    modal: BsModalComponent;


    @Input()
    public ColReceiptType: Boolean = false;
    public ColReceiptThrough: Boolean = false;
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
        public _receiptService: ReceiptService,
        public fb: FormBuilder, ) {

    }
    ngOnInit() {
        this.getIncomingData();
        this.dropdownList = [
            { "id": "ColReceiptType", "itemName": "Receipt Type" },
            { "id": "ColReceiptThrough", "itemName": "Receipt Through" },
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

        this.modal.onClose.subscribe(this.onClose.bind(this));
    }

    hotkeys(event) {
        if (event.keyCode == 65) {

            this.modal.open();
        }
    }

    onItemSelect(item: any): void {
        switch (item.id) {
            case this.VColReceiptType:
                this.ColReceiptType = true;
                break;
            case this.VColReceiptThrough:
                this.ColReceiptThrough = true;
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
        switch (item.id) {
            case this.VColReceiptType:
                this.ColReceiptType = false;
                break;
            case this.VColReceiptThrough:
                this.ColReceiptThrough = false;
                break;
            case this.VColChequeNO:
                this.ColChequeNO = false;
                break;
            case this.VColAgainst:
                this.ColAgainst = false;
                break;
        }
        console.log(this.selectedItems);
    }
    onSelectAll(items: any) {
        // console.log(items);
        this.ColReceiptType = true;
        this.ColReceiptThrough = true;
        this.ColChequeNO = true;
        this.ColAgainst = true;
    }
    onDeSelectAll(items: any) {
        // console.log(items);
        this.ColReceiptType = false;
        this.ColReceiptThrough = false;
        this.ColChequeNO = false;
        this.ColAgainst = false;
    }
    onClose() {
        console.log('Modal Closed');
        this.contentId = "";
    }
    // real date picker active from here
    public myDatePickerOptions: IMyDpOptions = {
        // other options...
        dateFormat: 'dd.mm.yyyy',
    };

    getIncomingData() {
        this.dataCopy = this._receiptService.getIncomingData().map(
            (response) => response.json()
        ).subscribe(
            (data) => {
                console.log(data)
                this.incomingData = data.receiptData;
            })
    }

    editData(id) {
        console.log(id);
        this.contentId = id;
        this._receiptService.contentId = id;

    }

    deleteData(id) {


    }

    copyData(id) {


    }

}
