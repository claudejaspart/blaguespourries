import {  Component, Output, EventEmitter, OnInit } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';



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
  btnDisabled: boolean = true;

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
    if (!this.btnDisabled)
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

  checkForm()
  {
    if (this.firstname && this.lastname && this.email)
      this.btnDisabled = false;
    else  
      this.btnDisabled = true;
  }

}
