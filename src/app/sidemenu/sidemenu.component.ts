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
    this.page.emit("options");
    this.closemenu = true;
    setTimeout(()=>this.closemenu = false, 500);
  }

  displayContact()
  {
    this.page.emit("contact");
    this.closemenu = true;
    setTimeout(()=>this.closemenu = false, 500);
  }

  displayPrivacy()
  {
    this.page.emit("privacy");
    this.closemenu = true;
    setTimeout(()=>this.closemenu = false, 500);
  }

  displayAbout()
  {
    this.page.emit("about");
    this.closemenu = true;
    setTimeout(()=>this.closemenu = false, 500);
  }

}
