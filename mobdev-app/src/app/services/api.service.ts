import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
    provideIn: `root`
})

export class ApiService {
    getQuotes(): any {
        throw new Error("Method not implemented.");
    }
    
    constructor(private http: HttpClient) { }

    //getEpisodes() 
    //{
    //return this.http.get(`https://www.breakingbadapi.com/api/episodes`)
    // }

    //getEpisode(id) 
    //{
    //return this.http.get(`https://www.breakingbadapi.com/api/episodes/${id}`)
    // }
    getEpisodes() {
        return this.http.get(`https://4200-f239c721-da99-478a-bc62-a24f9b2a0a06.ws-eu01.gitpod.io/assets/episodes.json`)
    }

    getEpisode(id) {
        return this.http.get(`https://4200-f239c721-da99-478a-bc62-a24f9b2a0a06.ws-eu01.gitpod.io/assets/episode.json`)
    }

    //getCharacters() 
    //{
    //eturn this.http.get(`https://www.breakingbadapi.com/api/characters`)
    //}

    //getCharacter(id) 
    //{
    //return this.http.get(`https://breakingbadapi.com/api/characters/${id}`)
    //}

    getCharacters() {
        return this.http.get(`https://4200-f239c721-da99-478a-bc62-a24f9b2a0a06.ws-eu01.gitpod.io/assets/characters.json`)
    }

    getCharacter(id) {
        return this.http.get(`https://4200-f239c721-da99-478a-bc62-a24f9b2a0a06.ws-eu01.gitpod.io/assets/character.json`)
    }


    getQuotes() {
        return this.http.get(`https://4200-f239c721-da99-478a-bc62-a24f9b2a0a06.ws-eu01.gitpod.io/assets/quotes.json`)
    }

    getQuote(id) {
        return this.http.get(`https://4200-f239c721-da99-478a-bc62-a24f9b2a0a06.ws-eu01.gitpod.io/assets/quote.json`)
    }



    //findQuote(search: any) {

        //return this.http.get(`http://breakingbadapi.com/api/quote?author=${search}`).pipe(new Map( quote => {
            //return quote;
        //})
        
    //}

}


