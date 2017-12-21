import { Component, OnInit } from '@angular/core';
import { GatewayService } from "./service/gateway.service";
import { LoginService } from "./../login/service/login.service";
'./../login/'
@Component({
  selector: 'app-gateway',
  templateUrl: './gateway.component.html',
  styleUrls: ['./gateway.component.scss']
})

export class GatewayComponent {
  currentIndex: number;
  constructor(public _gatewayService: GatewayService) {
  }
  changeRoute(n) {
    this.currentIndex = n;
  }
}

