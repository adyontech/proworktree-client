import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from "@angular/router";
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { UploadImageService } from "./../../sharedService/upload-image.service";
import { FormBuilder, FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {

  errorMessage: string;
  filesToUpload: Array<File>;
  selectedFileNames: string[] = [];
  @ViewChild('fileUpload') fileUploadVar: any;
  uploadResult: any;
  res: Array<string>;
  updateFileForm : FormGroup;

  constructor(private http: Http, private router: Router, private _uploadService: UploadImageService) {
    this.errorMessage = "";
    this.filesToUpload = [];
    this.selectedFileNames = [];
    this.uploadResult = "";
    this.updateFileForm = new FormGroup({});
  }

  isPdfFile: boolean = true;

  ngOnInit() {

  }

  onChangeFileType(fileType) {
    debugger;
    if (fileType == 'pdf') {
      this.isPdfFile = true;
    }else{
      this.isPdfFile = false;
    }
  }


  fileChangeEvent(fileInput: any) {
    debugger;
    //Clear Uploaded Files result message
    this.uploadResult = "";
    this.filesToUpload = <Array<File>>fileInput.target.files;

    for (let i = 0; i < this.filesToUpload.length; i++) {
      this.selectedFileNames.push(this.filesToUpload[i].name);
    }
  }

  cancelUpload() {
    this.filesToUpload = [];
    this.fileUploadVar.nativeElement.value = ""; this.selectedFileNames = [];
    this.uploadResult = ""; this.errorMessage = "";
  }

  onSubmitForm() {
    debugger;
    if (this.filesToUpload.length == 0) {
      alert('Please select at least 1 PDF files to upload!');
    }
    else if (this.filesToUpload.length > 3) {
      alert('Please select a maximum of 3 PDF files to upload!');
    }
    else {

      if (this.validateFile(this.selectedFileNames)) {
        this.uploadResult = "";
        var req = {
          url: "http://localhost:3000/auth/testuser/postimage",
          files: this.selectedFileNames
        }
        this._uploadService.upload(req).subscribe((response: any) => {
          debugger;
          this.uploadResult = response.data;

        }, (error) => {
          //this.fileUploadVar.nativeElement.value = "";
          this.selectedFileNames = [];
          this.filesToUpload = [];
        });

      } else {
        alert('invalid file type.');
      }


    }
  }

  validateFile(selectedFiles: string[]) {

    if (this.isPdfFile) {
      for (var i = 0; i < selectedFiles.length; i++) {
        if (selectedFiles[i].slice(-3).toUpperCase() != "PDF") {
          alert('Please selecte PDF files only!');
          return false;
        } else {
          return true;
        }
      }
    } else {
      for (var i = 0; i < selectedFiles.length; i++) {
        if (selectedFiles[i].slice(-3).toUpperCase() != "PNG" || selectedFiles[i].slice(-3).toUpperCase() != "JPG") {
          alert('Please selecte PNG/JPG files only!');
          return false;
        } else {
          return true;
        }
      }
    }
  }


}
