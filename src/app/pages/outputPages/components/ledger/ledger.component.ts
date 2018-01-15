import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { LedgerService } from "./service/ledger.service";
import { IMyDpOptions } from 'mydatepicker';

declare var $: any;

@Component({
    selector: 'app-ledgerOut',
    templateUrl: './ledger.component.html',
    styleUrls: ['./ledger.component.scss']
})

export class LedgerComponent implements OnInit {

    // Models 
    public dateFrom: Date;
    public dateTo: Date;
    public dropdFilter: string;


    LedgerData: Array<string>;
    form: FormGroup;
    public dataCopy: any;
    public paramId: string;
    public closeResult: string;


    dropdownList = [];
    selectedItems = [];
    dropdownSettings = {};
    public items: Array<string> = [];

    constructor(
        private route: ActivatedRoute,
        public _ledgerService: LedgerService,
        public fb: FormBuilder, ) {

    }


    ngOnInit() {
        this.getLedgerNames();

    }

    // real date picker active from here
    public myDatePickerOptions: IMyDpOptions = {
        // other options...
        dateFormat: 'dd.mm.yyyy',
    };
    public selected(value: any): void {

        console.log('Selected value is: ', value);
        this._ledgerService.ledgerName = value.id;
        this.dataCopy = this._ledgerService.getIncomingData().map(
            (response) => response.json()
        ).subscribe(
            (data) => {
                this.LedgerData = data.formData;
                console.log(this.LedgerData)
            })
    }

    getLedgerNames() {
        this.dataCopy = this._ledgerService.getLedgerNames().map(
            (response) => response.json()
        ).subscribe(
            (data) => {
                // console.log(data)
                this.items = this.items.concat(data.ledgerData);
            })
    }




}
