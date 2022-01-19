import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit 
{

  @Output() page = new EventEmitter<string>();
  closemenu : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  displayOptions()
  {
    this.closemenu = true;
    this.page.emit("options");
  }

  displayContact()
  {
    this.closemenu = true;
    this.page.emit("contact");
  }

  displayPrivacy()
  {
    this.closemenu = true;
    this.page.emit("privacy");
  }

  displayAbout()
  {
    this.closemenu = true;
    this.page.emit("about");
  }

}
