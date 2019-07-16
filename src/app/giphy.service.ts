import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GiphyService {

  constructor(private http: HttpClient) { }

  apiUrl = "https://api.giphy.com/v1/gifs/search?api_key=gkG2MatMwElfCfnJXaIvOnOw2wvnmU0T&q=cheese&limit=4&offset=0&rating=G&lang=en"
  getConfig() {
    console.log("called from service")
    return this.http.get(this.apiUrl);
  }


}
