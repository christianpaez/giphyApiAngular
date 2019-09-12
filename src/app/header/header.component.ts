import { Component, OnInit, } from '@angular/core';
import { ContentComponent } from '../content/content.component'
import { GiphyService } from '../giphy.service';


@Component({
  providers:[ContentComponent ],
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  gifData = [];
  userInput: string;

  areGifsLoaded = false;
  constructor(private contentComponent: ContentComponent,
    private giphyService: GiphyService) { }


   

  ngOnInit() {
  }


 formSubmit(){
   console.log(this.userInput)
   if(this.userInput == undefined || !this.userInput.replace(/\s/g, '').length){
     window.alert("Search field is empty")   
    return;}
    let input = this.userInput;
    this.giphyService.getConfig(input)
    .subscribe((data: any) => {
      if(data.data.length === 0){
        alert('Your search did not prompt any results, please try again')
      }
      console.log(data)
      this.gifData = data.data;          
      this.areGifsLoaded = true;
    }, error => console.log('oops', error)    
    )   
  } 
}
