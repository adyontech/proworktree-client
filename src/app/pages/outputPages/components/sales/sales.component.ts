import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { ActivatedRoute } from '@angular/router';
import { SalesService } from "./service/sales.service";
import { IMyDpOptions } from 'mydatepicker';
declare var $: any;

@Component({
    selector: 'app-sales',
    templateUrl: './sales.component.html',
    styleUrls: ['./sales.component.scss']
})


// Index
// declaration
// constructor
// ngOnInit
// datepicker functions
// select functions
// Notification
// particulars functions
// file handler 
// tab navigator 
// submit functions


export class SalesComponent implements OnInit {


    form: FormGroup;
    selectedIndex = 1;

    invoiceNumber: string;
    vehicleNumber: string;
    date: string;
    partyName: string;
    saleType: string;
    transportationMode: string;
    supplyPlace: string;
    nameOfProduct: string;  // required field
    qty: string;
    units: string;
    rate: string;
    subAmount: string;
    gstRate: string;
    amount: string;
    narration: string;
    total: number;
    

    paramId: string;





    constructor(
        private route: ActivatedRoute,
        public _salesService: SalesService,
        public fb: FormBuilder,
        private router: Router) {
        this.route.params.subscribe(params => this.paramId = params.id);
        console.log(this.paramId)
    }


    ngOnInit() {
        this.form = this.fb.group({
            invoiceNumber: [''],
            LtransportationMode:[''],
            vehicleNumber:[''],
            partyName: [''],
            saleType: [''],
            transportationMode: [''],
            supplyPlace: [''],
            particularsData: this.fb.array([]),
            file: [""],
            date: [null, Validators.required],
        });
        this.addParticular();
    }

    // real date picker active from here
    public myDatePickerOptions: IMyDpOptions = {
        // other options...
        dateFormat: 'dd.mm.yyyy',
    };

    public items: Array<string> = ['Amsterdam', 'Antwerp', 'Athens', 'Barcelona',
        'Berlin', 'Birmingham', 'Bradford', 'Bremen', 'Brussels', 'Bucharest',
        'Budapest', 'Cologne', 'Copenhagen', 'Dortmund', 'Dresden', 'Dublin',
        'Düsseldorf', 'Essen', 'Frankfurt', 'Genoa', 'Glasgow', 'Gothenburg',
        'Hamburg', 'Hannover', 'Helsinki', 'Kraków', 'Leeds', 'Leipzig', 'Lisbon',
        'London', 'Madrid', 'Manchester', 'Marseille', 'Milan', 'Munich', 'Málaga',
        'Naples', 'Palermo', 'Paris', 'Poznań', 'Prague', 'Riga', 'Rome',
        'Rotterdam', 'Seville', 'Sheffield', 'Sofia', 'Stockholm', 'Stuttgart',
        'The Hague', 'Turin', 'Valencia', 'Vienna', 'Vilnius', 'Warsaw', 'Wrocław',
        'Zagreb', 'Zaragoza', 'Łódź'];

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
            nameOfProduct: [''],
            qty: [''],
            units: [''],
            rate: [''],
            subAmount: [''],
            gstRate: [''],
            amount: [''],
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
    nameOfProduct: string;  // required field
    qty: string;
    units: string;
    rate: string;
    subAmount: string;
    gstRate: string;
    amount: string;
}