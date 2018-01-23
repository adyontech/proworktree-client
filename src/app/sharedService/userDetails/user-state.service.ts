import { Injectable } from '@angular/core';

@Injectable()
export class UserStateService {
  userData: UserInterface
  paramId: string;
  constructor() {
    
  }

  dummySetter(){
    this.userData = {
      userName: '',
      token: ''
    };
  }

  setUserData(userName: string, token: string) {
    this.userData.userName = userName;
    this.userData.token = token;
    window.localStorage.setItem('user', JSON.stringify(this.userData));
    console.log(window.localStorage)
  }

  removeUserData() {
    this.userData.userName = '';
    this.userData.token = '';
    window.localStorage.setItem('user', JSON.stringify(this.userData));
    console.log(window.localStorage)
  }
}

interface UserInterface {
  userName: string,
  token: string
}