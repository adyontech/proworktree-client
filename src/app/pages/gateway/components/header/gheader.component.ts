import { Component } from '@angular/core';

@Component({
    selector: 'gnavbar',
    templateUrl: './gheader.component.html',
    styleUrls: ['./gheader.component.scss','../../gateway.component.scss']
})

export class gheaderComponent {
    keys: Array<string>;
    dataValue: any;
    currentIndex;

    constructor() { }
};