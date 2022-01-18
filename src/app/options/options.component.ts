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

  resetJokes()
  {
    this.displayMessage = true;
    this.deleteCardHistory();
    setTimeout(()=>this.displayMessage = false, 5000)
  }

  deleteCardHistory()
  {
    localStorage.setItem("card_history", JSON.stringify([]));
  }

}
