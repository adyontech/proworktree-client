import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';

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
    dateFrom: Date;
    dateTo: Date;
    dropdFilter: string;


    form: FormGroup;
    dataCopy: any;
    paramId: string;
    closeResult: string;
    
    
    dropdownList = [];
    selectedItems = [];
    dropdownSettings = {};

    constructor(
        private route: ActivatedRoute,
        public _ledgerService: LedgerService,
        public fb: FormBuilder, ) {

    }
    ngOnInit() {
        this.getUnderGroupList();
        this.dropdownList = [
            // { "id": "Transportaion Mode", "itemName": "Transportaion Mode" },
            // { "id": "Type of sales", "itemName": "Type of sales" },
            // { "id": "place of supply", "itemName": "place of supply" },
            // { "id": "GST rate", "itemName": "GST rate" },
            // { "id": "Vehicle Number", "itemName": "Vehicle Number" }
            { "id": "1", "itemName": "Transportaion Mode" },
            { "id": "2", "itemName": "Type of sales" },
            { "id": "3", "itemName": "place of supply" },
            { "id": "4", "itemName": "GST rate" },
            { "id": "5", "itemName": "Vehicle Number" }
        ];
        // this.selectedItems = [
        //     { "id": 2, "itemName": "Transportaion Mode" },
        //     { "id": "Type of sales", "itemName": "Type of sales" },
        //     { "id": "place of supply", "itemName": "place of supply" },
        //     { "id": "GST rate", "itemName": "GST rate" }
        // ];
        this.dropdownSettings = {
            singleSelection: false,
            text: "Select filter",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: false,
            classes: "myclass custom-class"
        }; 
    }
    onItemSelect(item: any) {
        console.log(item.id);
        console.log(this.selectedItems);
    }
    OnItemDeSelect(item: any) {
        console.log(item);
        console.log(this.selectedItems);
    }
    onSelectAll(items: any) {
        console.log(items);
    }
    onDeSelectAll(items: any) {
        console.log(items);
    }
    // real date picker active from here
    public myDatePickerOptions: IMyDpOptions = {
        // other options...
        dateFormat: 'dd.mm.yyyy',
    };

    getUnderGroupList() {
        console.log("jhjgh");
        this.dataCopy = this._ledgerService.getUnderGroupList().map(
            (response) => response.json()
        ).subscribe(
            (data) => {
                console.log(data);
            })
    }



}
