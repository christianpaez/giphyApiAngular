import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  gifTitle:string = "GIF Title"
  gifDate:string = "GIF Date"

  constructor() { 
    

  }

  ngOnInit() {
  }

}
