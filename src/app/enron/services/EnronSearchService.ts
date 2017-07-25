import { Injectable } from '@angular/core';

import { Http, Request, RequestMethod} from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class EnronSearchService {
    private appUrl: string = 'http://localhost:8080/';

    constructor(private http: Http) {

    }

    fetchMails(options): Promise<any> {
        let fetchMailRequest = new Request({
            method: RequestMethod.Get,
            url: this.appUrl + 'enron/mails/search?q=' + options.query
        });

        return this.http.request(fetchMailRequest)
            .toPromise()
            .then((response) => {
                if (options.onSuccess) {
                    options.onSuccess(response.json());
                }
            });
    }
}