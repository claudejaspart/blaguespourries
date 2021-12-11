import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { JokesService } from '../jokes.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit 
{
  @ViewChild('showAnswer') showAnswer!:ElementRef;
  @ViewChild('answer') answer!:ElementRef;
  @ViewChild('jokecard') jokeCard!:ElementRef;
  allJokes = [] as Array<any>;
  currentJokeId : number = 0;
  selectedJoke : any;
  slideOutCarousel : boolean = false;
  slideInCarousel : boolean = false;
  exitOutCarousel : boolean = false;
  exitInCarousel : boolean = false;
  lastCard : boolean = false;
  firstCard : boolean = true;
  animationDelay : number = 400;

  constructor(private jokesService: JokesService) 
  {
    this.allJokes = jokesService.Jokes;
    this.currentJokeId = 0;
    this.firstCard = true;
    this.selectedJoke = this.allJokes[this.currentJokeId];
  }

  ngOnInit(): void 
  {
  }


  nextCard()
  {
    if (this.currentJokeId < this.allJokes.length - 1)
    {
      if ((this.currentJokeId+1) === (this.allJokes.length - 1))
        this.lastCard = true;

      this.slideOutCarousel = true;
      this.firstCard = false;
      setTimeout(()=>
      {
        this.currentJokeId++;
        this.selectedJoke = this.allJokes[this.currentJokeId];
        this.slideOutCarousel = false;
        this.slideInCarousel = true;
        setTimeout(()=>this.slideInCarousel = false, this.animationDelay);
      }, this.animationDelay)
    }
    else
    {
      this.lastCard = true;
    }
  }

  previousCard()
  {
    this.lastCard = false;
  
    if (this.currentJokeId > 0)
    {
      if ((this.currentJokeId-1) === 0)
        this.firstCard = true;

      this.exitOutCarousel = true;
      setTimeout(()=>
      {
        this.currentJokeId--;
        this.selectedJoke = this.allJokes[this.currentJokeId];
        this.exitOutCarousel = false;
        this.exitInCarousel = true
        setTimeout(()=>this.exitInCarousel = false, this.animationDelay);
      }, this.animationDelay)
    }
    else
    {
      this.firstCard = true;
    }
  }

}
