import { Component, Input, ViewChild, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  FormArray,
  FormBuilder,
  Validators
} from "@angular/forms";
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";

import { ActivatedRoute } from "@angular/router";
import { SalesService } from "./service/sales.service";
import { IMyDpOptions } from "mydatepicker";
import { BsModalComponent, BsModalBodyComponent } from "ng2-bs3-modal";
declare var $: any;

@Component({
  selector: "app-sales",
  templateUrl: "./sales.component.html",
  styleUrls: ["./sales.component.scss"]
})
export class SalesComponent implements OnInit {
  form: FormGroup;
  selectedIndex = 1;
  public dataCopy: any;
  public dataCopy1: any;
  public dataCopy2: any;
  private prsrData: any;
  paramId: string;
  @ViewChild("moodal") moodal: BsModalComponent;
  open() {
    this.moodal.open();
  }

  constructor(
    private route: ActivatedRoute,
    public _salesService: SalesService,
    public fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.getPrsrList();
    this.getLedgerUGNames();
    this.getSalesUGNames();
    this.form = this.fb.group({
      invoiceNumber: [""],
      vehicleNumber: [""],
      partyName: [""],
      saleType: [""],
      transportationMode: [""],
      supplyPlace: [""],
      particularsData: this.fb.array([]),
      narration: [""],
      file: [""],
      date: [null, Validators.required]
    });
    this.addParticular();
  }

  hotkeys(event) {
    if (event.keyCode == 65 && event.ctrlKey) {
      this.moodal.open();
    }
  }

  // real date picker active from here
  public myDatePickerOptions: IMyDpOptions = {
    // other options...
    dateFormat: "dd.mm.yyyy"
  };

  public ledgerList: Array<string> = [];
  public salesList: Array<string> = [];
  public prsrList: Array<string> = [];

  public items: Array<string> = [
    "Amsterdam",
    "Antwerp",
    "Athens",
    "Barcelona",
    "Berlin",
    "Birmingham",
    "Bradford",
    "Bremen",
    "Brussels",
    "Bucharest",
    "Budapest",
    "Cologne",
    "Copenhagen",
    "Dortmund",
    "Dresden",
    "Dublin",
    "Düsseldorf",
    "Essen",
    "Frankfurt",
    "Genoa",
    "Glasgow",
    "Gothenburg",
    "Hamburg",
    "Hannover",
    "Helsinki",
    "Kraków",
    "Leeds",
    "Leipzig",
    "Lisbon",
    "London",
    "Madrid",
    "Manchester",
    "Marseille",
    "Milan",
    "Munich",
    "Málaga",
    "Naples",
    "Palermo",
    "Paris",
    "Poznań",
    "Prague",
    "Riga",
    "Rome",
    "Rotterdam",
    "Seville",
    "Sheffield",
    "Sofia",
    "Stockholm",
    "Stuttgart",
    "The Hague",
    "Turin",
    "Valencia",
    "Vienna",
    "Vilnius",
    "Warsaw",
    "Wrocław",
    "Zagreb",
    "Zaragoza",
    "Łódź"
  ];

  public value: any = {};
  public _disabledV: string = "0";
  public disabled: boolean = false;
  private get disabledV(): string {
    return this._disabledV;
  }

  private set disabledV(value: string) {
    this._disabledV = value;
    this.disabled = this._disabledV === "1";
  }

  public selectedprsr(value: any, indexValue): void {
    let particularsData = <FormArray>this.form.controls["particularsData"];
    let array = particularsData.at(indexValue);
    array.patchValue({
      units: this.prsrData.prsr[0].units,
      gstRate: this.prsrData.prsr[0].gstRate
    });
  }

  public removed(value: any): void {
    console.log("Removed value is: ", value);
  }

  // public typed(value: any): void {
  //     console.log('New search input: ', value);
  // }

  public refreshValue(value: any): void {
    this.value = value;
  }

  public showNotification(from, align) {
    const type = ["", "info", "success", "warning", "danger"];

    var color = Math.floor(Math.random() * 4 + 1);
    $.notify(
      {
        icon: "pe-7s-gift",
        message:
          "Welcome to <b>ProWorkTree Dashboard</b> - a beautiful freebie for every web developer."
      },
      {
        type: type[color],
        timer: 1000,
        placement: {
          from: from,
          align: align
        }
      }
    );
  }

  initParticular() {
    return this.fb.group({
      nameOfProduct: [""],
      qty: [""],
      units: [""],
      rate: [""],
      subAmount: [""],
      gstRate: [""],
      amount: [""]
    });
  }
  addParticular() {
    const control = <FormArray>this.form.controls["particularsData"];
    const addCtrl = this.initParticular();
    control.push(addCtrl);
  }
  removeParticular(i: number) {
    const control = <FormArray>this.form.controls["particularsData"];
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
    // if (user.subAmount == "") {
    //   user.subAmount = user.qty * user.rate;
    // }
    user.particularsData.map(el => {
      if (el.subAmount == "") {
        el.subAmount = el.qty * el.rate;
        el.subAmount = el.subAmount.toString();
      }
      if (el.amount == "") {
        el.amount = el.qty * el.rate + el.qty * el.rate * el.gstRtae;
        el.amount = el.amount.toString();
      }
    });
    console.log(user);
    this._salesService.createNewEntry(user).subscribe(data => {});
  }

  getLedgerUGNames() {
    this.dataCopy = this._salesService
      .getLedgerUGNames()
      .map(response => response.json())
      .subscribe(data => {
        // console.log(data);
        this.ledgerList = this.ledgerList.concat(data.ledgerData);
      });
  }

  getSalesUGNames() {
    this.dataCopy1 = this._salesService
      .getSalesUGNames()
      .map(response => response.json())
      .subscribe(data => {
        // console.log(data)
        this.salesList = this.salesList.concat(data.salesLedgerList);
      });
  }

  getPrsrList() {
    this.dataCopy2 = this._salesService
      .getprsrList()
      .map(response => response.json())
      .subscribe(data => {
        this.prsrData = data;
        // console.log(data.prsr)
        this.prsrList = data.prsr.map(item =>
          this.prsrList.concat(item.prsrName)
        )[0];
      });
  }
}

// interface Customer {
//   particularsData: Address[];
// }

// interface Address {
//   nameOfProduct: string; // required field
//   qty: string;
//   units: string;
//   rate: string;
//   subAmount: string;
//   gstRate: string;
//   amount: string;
// }
