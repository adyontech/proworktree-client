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
import { CashInHandsService } from "./service/cashInHands.service";
import { IMyDpOptions } from "mydatepicker";
import { BsModalComponent, BsModalBodyComponent } from "ng2-bs3-modal";

declare var $: any;

@Component({
  selector: "app-cashInHands",
  host: { "(window:keydown)": "hotkeys($event)" },
  templateUrl: "./cashInHands.component.html",
  styleUrls: ["./cashInHands.component.scss"]
})
export class CashInHandsComponent implements OnInit {
  contentId: string = "";
  public dateFrom: Date;
  public dateTo: Date;

  @ViewChild("modal") modal: BsModalComponent;

  incomingData: Array<string>;
  form: FormGroup;
  public dataCopy: any;
  public paramId: string;
  public closeResult: string;
  public ledgerList: Array<string> = [];

  constructor(
    private route: ActivatedRoute,
    public _cashInHandsService: CashInHandsService,
    public fb: FormBuilder
  ) {}

  ngOnInit() {
    this.getLedgerNameData();

    this.modal.onClose.subscribe(this.onClose.bind(this));
  }

  hotkeys(event) {
    if (event.keyCode == 76 && event.ctrlKey) {
      this.modal.open();
    }
  }

  onClose() {
    console.log("Modal Closed");
    this.contentId = "";
  }
  public myDatePickerOptions: IMyDpOptions = {
    // other options...
    dateFormat: "dd.mm.yyyy"
  };

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
    this.getIncomingData(value.id);
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

  getLedgerNameData() {
    this.dataCopy = this._cashInHandsService
      .getLedgerNameData()
      .map(response => response.json())
      .subscribe(data => {
        // console.log(data);
        // data = data.ledgerData.map(item=> item)
        this.ledgerList = this.ledgerList.concat(data.ledgerData);
      });
  }

  getIncomingData(ledgerName) {
    console.log(ledgerName);
    this.dataCopy = this._cashInHandsService
      .getIncomingData(ledgerName)
      .map(response => response.json())
      .subscribe(data => {
        data.formData.map(el => {
          console.log(el.data);
          this.incomingData = el.data;
        });
        console.log(this.incomingData);
      });
  }

  editData(id) {
    console.log(id);
    this.contentId = id;
    this._cashInHandsService.contentId = id;
  }

  deleteData(id) {}

  copyData(id) {}
}
