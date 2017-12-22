import { Component, OnInit } from '@angular/core';
// import { DashboardService } from "./service/dashboard.service";

import { ActivatedRoute } from '@angular/router';
import { JournalEntryService } from "./service/journalEntry.service";
@Component({
    selector: 'app-journalEntry',
    templateUrl: './journalEntry.component.html',
    styleUrls: ['./journalEntry.component.scss']
})

export class JournalEntryComponent implements OnInit {

    paramId: string;

    constructor(private route: ActivatedRoute, public _paymentService: JournalEntryService) {
        this.route.params.subscribe(params => this.paramId = params.id);
        console.log(this.paramId)
    }

    ngOnInit() {
    }

}