import { Component } from '@angular/core';
import { GatewayService } from "./../../service/gateway.service";
@Component({
    selector: 'gnavbar',
    templateUrl: './gheader.component.html',
    styleUrls: ['./gheader.component.scss','../../gateway.component.scss']
})

export class gheaderComponent {
    keys: Array<string>;
    dataValue: any;
    currentIndex;

    constructor(public _gatewayService: GatewayService) { }

    
    logout() {
        // remove user from local storage to log user out
        window.localStorage.removeItem('user');
        console.log(localStorage)
    }
};