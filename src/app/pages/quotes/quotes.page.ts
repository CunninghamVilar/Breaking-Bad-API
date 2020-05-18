import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';

@Component({
    selector: 'app-quotes',
    templateUrl: './quotes.page.html',
    styleUrls: ['./quotes.page.scss'],
})

export class QuotesPage implements OnInit {

    //quote: any;
    quoteId = null;
    quote: any;
    quotes: any;

    

    constructor(private router: Router, private api: ApiService) { }

    ngOnInit() {
        this.quote = this.api.getQuotes();
        this.quotes.subscribe((data: any) => {
            console.log('my data: ', data);
        });
    }
    openDetails(quote: { quote_id: any; }) {
        let quoteId = quote.quote_id;
        this.router.navigateByUrl(`/tabs/quotes/${quoteId}`);
    }

}
