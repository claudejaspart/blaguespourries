import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit 
{

  @Output() page = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  displayOptions()
  {
    this.page.emit("options");
  }

  displayContact()
  {
    this.page.emit("contact");
  }

  displayPrivacy()
  {
    this.page.emit("privacy");
  }

  displayAbout()
  {
    this.page.emit("about");
  }

}
