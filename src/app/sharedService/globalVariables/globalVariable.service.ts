import { Injectable } from '@angular/core';

@Injectable()
export class GlobalVariableService {

  baseClientUrl: String = 'http://localhost:4200/';
  baseServerUrl: String = 'http://localhost:3000';

  // baseServerUrl = 'https://pwt-server.herokuapp.com';

  constructor() {
    
  }

  }