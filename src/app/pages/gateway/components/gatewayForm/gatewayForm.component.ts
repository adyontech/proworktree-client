import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { GatewayService } from "./../../service/gateway.service";
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

// Calling all Validators
import { EmailValidator } from '../gatewayForm/validators/email';
import { GstValidator } from '../gatewayForm/validators/gst';
import { GstinValidator } from '../gatewayForm/validators/gstin';
import { HsnValidator } from '../gatewayForm/validators/hsn';
import { NameValidator } from '../gatewayForm/validators/name';
import { PanValidator } from '../gatewayForm/validators/pan';
import { PhoneValidator } from '../gatewayForm/validators/phone';
import { LogoValidator } from '../gatewayForm/validators/logo';

import { IMyDpOptions } from 'mydatepicker';

import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

@Component({
	selector: 'gatewayForm',
	templateUrl: './gatewayForm.component.html',
	styleUrls: ['./gatewayForm.component.scss'],
})
export class GatewayFormComponent implements OnInit {
	form: FormGroup;

	companyName: string = 'ProWorkTree';
	email: string;

	imageFile: string;
	image_view: boolean = false;
	imageValidator: LogoValidator;
	image_size: boolean = false;
	image_px: boolean = false;

	constructor(public _gatewayService: GatewayService, public fb: FormBuilder, private router: Router) {
		this.imageValidator = new LogoValidator();
		//called first time before the ngOnInit()
	}

	ngOnInit() {
		this.form = this.fb.group({
			companyName: [
				'',
				//  Validators.compose([Validators.minLength(6),
				// NameValidator.isValid])
			],

			pan: ['', Validators.compose([Validators.maxLength(10), PanValidator.isValid])],

			address: ['', Validators.compose([Validators.minLength(10)])],

			city: [''],

			state: ['', Validators.compose([Validators.minLength(1)])],

			gstin: ['', Validators.compose([Validators.maxLength(15), GstinValidator.isValid])],

			phoneNo: ['', Validators.compose([Validators.maxLength(10), PhoneValidator.isValid])],

			language: ['', Validators.compose([Validators.required])],

			email: ['', Validators.compose([Validators.minLength(6), EmailValidator.isValid])],

			natureOfBuisness: ['', Validators.compose([Validators.required])],

			NatureOfPackage: ['', Validators.compose([Validators.required])],

			currency: ['', Validators.compose([Validators.required])],

			startDate: ['', Validators.compose([Validators.required])],

			endDate: ['', Validators.compose([Validators.required])],

			logo: [''],

			signature: [''],
		});
	}

	onSubmit(user) {
		console.log(user);
		user.pan = user.pan.toUpperCase();
		user.gstin = user.gstin.toUpperCase();
		user.logo = this.imageFile;
		// user.endDate = user.endDate.toDateString();
		// user.startDate = user.startDate.toDateString();
		user.logo = 'https://lorempixel.com/400/200/';

		// this._AlertService.warningAlert('Save Information ?')
		//   .then(data => {
		//     if (data) {
		//       this._gatewayService.createNewCompany(user)
		//         .subscribe(res => user = res)

		//       this.imageFile = '';
		//       this._AlertService.successAlert('Redirecting to company List page')
		//       setTimeout(() => {
		//         this.router.navigate(['/gateway/companylist'])
		//       }, 4000)
		//     }
		//   })

		this._gatewayService.createNewCompany(user).subscribe(data => {
			// console.log('hello gateway service')
		});
	}
	public myDatePickerOptions: IMyDpOptions = {
		// other options...
		dateFormat: 'dd.mm.yyyy',
	};
	handleFileUpload(event) {
		var imageFile: File = event.target.files[0];
		let valid: boolean;

		valid = this.imageValidator.isValidLogo(imageFile);
		if (valid && imageFile.size < 200000) {
			this.imageValidator.checkPixel(imageFile, value => {
				if (value) {
					this.image_size = false;
					this.image_px = false;
					this.image_view = true;
					this.imageFile = value;
				} else {
					this.image_px = true;
				}
			});
		} else {
			this.image_size = true;
		}
	}

	downloadPdf() {
		pdfMake.vfs = pdfFonts.pdfMake.vfs;
		var dd = {
			content: [
				'This is an sample PDF printed with pdfMake',
				{ text: 'Company Name :' + this.companyName, fontSize: 15 },
				{ text: 'Company Name :' + this.companyName, fontSize: 15 },
			],
		};
		pdfMake.createPdf(dd).open();
	}
}
