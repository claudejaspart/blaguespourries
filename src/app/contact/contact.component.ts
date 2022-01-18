import {  Component, Output, EventEmitter, OnInit } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { NgForm } from '@angular/forms';


export class HttpClientHelper
{
  static baseURL: string = 'http://localhost:4201';
}


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit 
{
  // initialisation
  @Output() page = new EventEmitter<string>();
  firstname: string = "";
  lastname : string = "";
  email: string = "";
  message : string = "";
  messageSent : boolean = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void 
  {
    this.messageSent = false;
  }

  quitPage()
  {
    this.page.emit("jokes");
  }

  sendArticle()
  {

    // création d'un nouvel article
    this.http
    .post(`${HttpClientHelper.baseURL}/contact`, 
    {
      firstname: this.firstname,
      lastname : this.lastname,
      email : this.email,
      message : this.message
    }
    ,{responseType:'text',observe:'events'})
    .subscribe(event => 
    {
      if (event.type === HttpEventType.Response && event.status === 200)
      {
          this.messageSent = true;
      }
    });  
    
  }

}
