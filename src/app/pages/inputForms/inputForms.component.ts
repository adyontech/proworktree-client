import { Component, OnInit } from '@angular/core';
import { InputFormService } from "./service/inputForms.service";

import { Router, ActivatedRoute, Params } from '@angular/router';
declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: 'user', title: 'User Profile', icon: 'pe-7s-user', class: '' },
    { path: 'table', title: 'Table List', icon: 'pe-7s-note2', class: '' },
    { path: 'typography', title: 'Typography', icon: 'pe-7s-news-paper', class: '' },
    { path: 'icons', title: 'Icons', icon: 'pe-7s-science', class: '' },
    { path: 'maps', title: 'Maps', icon: 'pe-7s-map-marker', class: '' },
    { path: 'notifications', title: 'Notifications', icon: 'pe-7s-bell', class: '' },
    { path: 'upgrade', title: 'Upgrade to PRO', icon: 'pe-7s-rocket', class: 'active-pro' },
];
@Component({
    selector: 'app-inputForms',
    templateUrl: './inputForms.component.html',
    styleUrls: ['./inputForms.component.scss']
})

export class InputFormsComponent implements OnInit {

    menuItems: any[];

    constructor(
        private activatedRoute: ActivatedRoute,
        private _inputFormService: InputFormService,

        ) {
        this.activatedRoute.params.subscribe((params: Params) => {
            this._inputFormService.paramCompanyName = params['id'];
        });
    }
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
    isMobileMenu() {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };

}