import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class UploadImageService {

  filesToUpload: Array<File>;

  constructor(private http: Http) { }


  upload(req: any) {
    this.filesToUpload = req.files;
    let url = req.url;

    let formData: FormData = new FormData();
    for (var i = 0; i < this.filesToUpload.length; i++) {
      formData.append('file', this.filesToUpload[i], this.filesToUpload[i].name);
    }
    debugger;
    return this.http.post(url, formData).map((res: Response) => {
      debugger;
      res.json()
    }
    )

  }






}
