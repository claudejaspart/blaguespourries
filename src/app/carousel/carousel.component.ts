import { Component, OnInit} from '@angular/core';
import { JokesService } from '../jokes.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit 
{
  currentPage : string = "jokes";

  constructor() 
  {}

  ngOnInit(): void 
  {}

  displayPage(pageName : string)
  {
    this.currentPage = pageName;
  }
  
}
