import { Component, OnInit, Input } from '@angular/core';
import { GiphyService } from '../giphy.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  @Input('areGifsLoaded') areGifsLoaded: string;
  @Input('gifData') gifData: [];



  //console.log(data.data[0].images.fixed_height.url)

  constructor(private giphyService: GiphyService) { 
  }

  ngOnInit() {
    }    
  }


  

  
