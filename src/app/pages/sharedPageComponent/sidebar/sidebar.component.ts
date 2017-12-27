import { Component, OnInit } from '@angular/core';
import { UserStateService } from "./../../../sharedService/userDetails/user-state.service";

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: 'contra', title: 'Contra', icon: 'pe-7s-graph', class: '' },
    { path: 'display', title: 'Display', icon: 'pe-7s-user', class: '' },
    { path: 'journalentry', title: 'Journal Entry', icon: 'pe-7s-note2', class: '' },
    { path: 'ledger', title: 'Ledger', icon: 'pe-7s-news-paper', class: '' },
    { path: 'payment', title: 'Payment', icon: 'pe-7s-science', class: '' },
    { path: 'purchase', title: 'Purchase', icon: 'pe-7s-map-marker', class: '' },
    { path: 'purchasereturn', title: 'Purchase Return', icon: 'pe-7s-science', class: '' },
    { path: 'receipt', title: 'Receipt', icon: 'pe-7s-science', class: '' },
    { path: 'reports', title: 'Reports', icon: 'pe-7s-rocket', class: '' },
    { path: 'sales', title: 'Sales', icon: 'pe-7s-rocket', class: '' },
    { path: 'salesreturn', title: 'Sales Return', icon: 'pe-7s-bell', class: '' },

];

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
    menuItems: any[];
    paramId: string;
    constructor(
        private _userStateService: UserStateService) {
        this.paramId =  this._userStateService.paramId
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