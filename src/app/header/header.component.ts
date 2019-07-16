import { Component, OnInit } from '@angular/core';
import { ContentComponent } from '../content/content.component'





@Component({
  providers:[ContentComponent ],
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private contentComponent: ContentComponent) { }

  ngOnInit() {
  }


  formSubmit(){
    this.contentComponent.showConfig();
    

  }
}
