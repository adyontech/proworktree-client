import { Component, Input, ViewChild, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PaymentService } from "./service/payment.service";
import { IMyDpOptions } from 'mydatepicker';
import { BsModalComponent, BsModalBodyComponent } from "ng2-bs3-modal";
declare var $: any;

@Component({
  selector: "app-payment",
  host: { "(window:keydown)": "hotkeys($event)" },
  templateUrl: "./payment.component.html",
  styleUrls: ["./payment.component.scss"]
})
export class PaymentComponent implements OnInit {
  public form: FormGroup;
  public selectedIndex = 1;
  public dataCopy: any;
  public paramId: string;
  public totalAmount: number;
  @ViewChild("moodal") moodal: BsModalComponent;
  open() {
    this.moodal.open();
  }

  constructor(
    private route: ActivatedRoute,
    public _paymentService: PaymentService,
    public fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.getAccountNames();
    this.getLedgerUGNames();
    this.form = this.fb.group({
      paymentNumber: [""],
      date: [""],
      account: [""],
      paymentType: [""],
      paymentThrough: [""],
      chequeNumber: [""],
      drawnOn: [null, Validators.required],
      particularsData: this.fb.array([]),
      narration: [""],
      against: [""],
      file: [""]
    });
    this.addParticular();
  }

  hotkeys(event) {
    if (event.keyCode == 76 && event.ctrlKey) {
      this.moodal.open();
    }
  }

  // real date picker active from here
  public myDatePickerOptions: IMyDpOptions = {
    // other options...
    dateFormat: "dd.mm.yyyy"
  };

  public ledgerList: Array<string> = [];
  public accountList: Array<string> = [];

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

  public selected(value: any): void {
    // console.log('Selected value is: ', value);
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
          "Welcome to <b>ProWorkTree </b> - a beautiful freebie for every web developer."
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
      particulars: ["", Validators.required],
      amount: [""]
    });
  }
  addParticular() {
    this.totalSum();
    const control = <FormArray>this.form.controls["particularsData"];
    const addCtrl = this.initParticular();
    control.push(addCtrl);
  }
  removeParticular(i: number) {
    const control = <FormArray>this.form.controls["particularsData"];
    control.removeAt(i);
    this.totalSum();
  }

  totalSum(){
      var formControls = this.form.controls.particularsData["controls"];
      this.totalAmount = 0;
      for (let i = 0; i < formControls.length; i++) {
        let amount = formControls[i].controls.amount.value;
        if (!isNaN(amount) && amount !== "") this.totalAmount += parseFloat(amount);
        // console.log(this.totalAmount);
      }
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

  getLedgerUGNames() {
    this.dataCopy = this._paymentService
      .getLedgerUGNames()
      .map(response => response.json())
      .subscribe(data => {
        this.ledgerList = this.ledgerList.concat(data.ledgerData);
      });
  }
  getAccountNames() {
    this.dataCopy = this._paymentService
      .getAccountNames()
      .map(response => response.json())
      .subscribe(data => {
        this.accountList = this.accountList.concat(data.accountNameList);
      });
  }

  setSelected(id: number) {
    this.selectedIndex = id;
  }

  onSubmit(user) {
    console.log(user);
    this._paymentService.createNewEntry(user).subscribe(data => {});
  }
}
