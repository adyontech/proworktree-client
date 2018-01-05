import { Component, Input, OnInit } from '@angular/core';
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
    public dateFrom: Date;
    public dateTo: Date;
    public dropdFilter: string;


    //Modal for column hide and show

    VColTransportation: string = "ColTransportation";
    VColSaleType: string = "ColSaleType";
    VColPlaceSupply: string = "ColPlaceSupply";
    VColVehicle: string = "ColVehicle";
    VColGstRate: string = "ColGstRate";

    @Input()
    public ColTransportation: Boolean = false;
    public ColSaleType: Boolean = false;
    public ColPlaceSupply: Boolean = false;
    public ColVehicle: Boolean = false;
    public ColGstRate: Boolean = false;


    form: FormGroup;
    public dataCopy: any;
    public paramId: string;
    public closeResult: string;


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
            { "id": "ColTransportation", "itemName": "Transportaion Mode" },
            { "id": "ColSaleType", "itemName": "Type of sales" },
            { "id": "ColPlaceSupply", "itemName": "place of supply" },
            { "id": "ColVehicle", "itemName": "GST rate" },
            { "id": "ColGstRate", "itemName": "Vehicle Number" }
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
        console.log(typeof item.id);
        console.log(typeof this.VColTransportation);
        // item.id
        switch (item.id) {
            case this.VColTransportation:
                this.ColTransportation = true;
                break;
            case this.VColSaleType:
                this.ColSaleType = true;
                break;
            case this.VColPlaceSupply:
                this.ColPlaceSupply = true;
                break;
            case this.VColVehicle:
                this.ColVehicle = true;
                break;
            case this.VColGstRate:
                this.ColGstRate = true;
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
        this.ColTransportation = true;
        this.ColSaleType = true;
        this.ColPlaceSupply = true;
        this.ColVehicle = true;
        this.ColGstRate = true;
    }
    onDeSelectAll(items: any) {
        // console.log(items);
        this.ColTransportation = false;
        this.ColSaleType = false;
        this.ColPlaceSupply = false;
        this.ColVehicle = false;
        this.ColGstRate = false;
    }
    // real date picker active from here
    public myDatePickerOptions: IMyDpOptions = {
        // other options...
        dateFormat: 'dd.mm.yyyy',
    };

    getUnderGroupList() {
        this.dataCopy = this._ledgerService.getUnderGroupList().map(
            (response) => response.json()
        ).subscribe(
            (data) => {
                console.log(data);
            })
    }



}
