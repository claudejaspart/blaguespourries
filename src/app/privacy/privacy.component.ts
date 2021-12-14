import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.css']
})
export class PrivacyComponent implements OnInit {

  @Output() page = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }


  quit()
  {
    this.page.emit("jokes");
  }

}
