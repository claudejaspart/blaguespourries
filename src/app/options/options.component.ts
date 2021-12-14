import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit 
{
  @Output() page = new EventEmitter<string>();
  displayMessage : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  quitOptions()
  {
    this.page.emit("jokes");
  }

  showMessage()
  {
    this.displayMessage = true;
    setTimeout(()=>this.displayMessage = false, 5000)
  }

}
