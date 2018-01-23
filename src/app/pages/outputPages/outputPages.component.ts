import { Component, OnInit } from '@angular/core';
import { OutputPagesService } from "./service/outputPages.service";

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
    selector: 'app-outputPages',
    templateUrl: './outputPages.component.html',
    styleUrls: ['./outputPages.component.scss']
})

export class OutputPagesComponent implements OnInit {

    menuItems: any[];

    constructor(
        private activatedRoute: ActivatedRoute,
        private _outputPagesService: OutputPagesService,

        ) {
        this.activatedRoute.params.subscribe((params: Params) => {
            this._outputPagesService.paramCompanyName = params['id'];
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