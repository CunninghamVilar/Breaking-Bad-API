import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.page.html',
  styleUrls: ['./quotes.page.scss'],
})
export class QuotesPage implements OnInit {

    episode: any;
    episodeId = null;
    quote: any;
    quotes: any;

    constructor(private router: Router, private api: ApiService) { }

  ngOnInit() {
        this.quote = this.api.getQuotes();
        this.quotes.subscribe(data => {
            console.log('my data: ', data);
        });
    }
    openDetails(quote) {
        let quoteId = quote.quote_id;
        this.router.navigateByUrl(`/tabs/quotes/${quote}`);
    }

}
