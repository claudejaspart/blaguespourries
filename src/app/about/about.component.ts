import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit 
{
  @Output() page = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  quitPage()
  {
    this.page.emit("jokes");
  }

}
