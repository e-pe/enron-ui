import { Component } from '@angular/core';

import { EnronSearchService } from './services/EnronSearchService';

@Component({
  selector: 'app-enron-search',
  templateUrl: './EnronSearch.html',
  styleUrls: ['./EnronSearch.css']
})
export class EnronSearch {
    private mails: any = [];
    private mailCount: Number = 0;

    constructor(private searchService: EnronSearchService) {

    }

    searchClick(searchText) {
        this.searchService.fetchMails({
            query: searchText,

            onSuccess: (data) => {
                this.mails = data.mails;
                this.mailCount = data.count;
            }
        })
    }
}
