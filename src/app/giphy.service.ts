import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { componentFactoryName } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class GiphyService {


  constructor(private http: HttpClient) { }

  //apiUrl = "https://api.giphy.com/v1/gifs/search?api_key=gkG2MatMwElfCfnJXaIvOnOw2wvnmU0T&q=cheese&limit=4&offset=0&rating=G&lang=en"
   baseUrl = "https://api.giphy.com/v1/gifs/search?";
   apiKey = "api_key=gkG2MatMwElfCfnJXaIvOnOw2wvnmU0T&q=";
   searchWords  = "ugly worm"
   limit = "&limit=4&offset=0&rating=G&lang=en"

   apiUrl = this.baseUrl + this.apiKey + this.searchWords + this.limit
  
  getConfig(input) {
    console.log(input)
    let apiUrl = this.baseUrl + this.apiKey + input + this.limit
    console.log(apiUrl)
    return this.http.get(apiUrl)  
  }
}
