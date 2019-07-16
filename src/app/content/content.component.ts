import { Component, OnInit } from '@angular/core';
import { GiphyService } from '../giphy.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  gifData = [];

  areGifsLoaded = false;

  
  //console.log(data.data[0].images.fixed_height.url)

  constructor(private giphyService: GiphyService) { 
  }

  ngOnInit() {
    this.giphyService.getConfig()
    .subscribe((data: any) => {
      this.gifData = data.data;
      this.areGifsLoaded = true;
      console.log(this.gifData)  
      console.log(this.areGifsLoaded)
    })    
  }

  
  showConfig() {
    console.log("search function")
    
  }

  

  

}
