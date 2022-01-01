import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { JokesService } from '../jokes.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit 
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
  visitedCards = new Array();

  constructor(private jokesService: JokesService) 
  {
    localStorage.removeItem("card_history");

    this.allJokes = jokesService.Jokes;
    this.currentJokeId = this.randomNextCard();
    this.selectedJoke = this.allJokes[this.currentJokeId];
    this.firstCard = true;
  }

  ngOnInit(): void 
  {
  }

  randomNextCard() : number
  {
    let max = this.allJokes.length;
    let min = 1;
    let cardId = 1;

    if (localStorage.getItem("card_history") === null)
    {
      cardId =  Math.floor(Math.random() * (max - min) + min);
      this.visitedCards.push(cardId);
      localStorage.setItem("card_history", JSON.stringify(this.visitedCards));
    }
    else
    {
        this.visitedCards = JSON.parse(localStorage.getItem('card_history') || '{}');
        cardId =  Math.floor(Math.random() * (max - min) + min);
       
        while(this.isCardInHistory(this.visitedCards, cardId))
        {
          cardId =  Math.floor(Math.random() * (max - min) + min);
        }
        
        this.visitedCards.push(cardId);
        localStorage.setItem("card_history", JSON.stringify(this.visitedCards));
    }

    return cardId;
  }

  isCardInHistory(visitedCards: any, cardId: number) : boolean
  {
    for(let i=0; i<visitedCards.length; i++)
      if (visitedCards[i] === cardId)
        return true;
    
    return false;
  }


  nextCard()
  {
    if (!this.lastCard && this.visitedCards.length !== (this.allJokes.length-1))
    {
      this.currentJokeId = this.randomNextCard();
      this.firstCard = false;
      this.animationChangeNextCard();
    }
    else if (!this.lastCard)
    {
      this.currentJokeId = 0;
      this.lastCard = true;
      this.animationChangeNextCard();
    }
  }

  previousCard()
  {
    this.lastCard = false;
    if (!this.firstCard)
    {
      let cardHistory = JSON.parse(localStorage.getItem('card_history') || '{}');
      if (cardHistory.length > 1)
      {
        this.currentJokeId = cardHistory.pop();
        localStorage.setItem("card_history", JSON.stringify(cardHistory));
      }
      else
      {
        this.firstCard = true;
        if (localStorage.getItem("card_history") !== null)
        {        
          this.currentJokeId = cardHistory[0];
          localStorage.removeItem("card_history");
        }
      }

      this.animationChangePreviousCard();
    }
  }


  animationChangeNextCard()
  {
    this.slideOutCarousel = true;
    setTimeout(()=>
    {
      this.selectedJoke = this.allJokes[this.currentJokeId];
      this.slideOutCarousel = false;
      this.slideInCarousel = true;
      setTimeout(()=>this.slideInCarousel = false, this.animationDelay);
    }, this.animationDelay)
  }

  animationChangePreviousCard()
  {
    this.exitOutCarousel = true;
    setTimeout(()=>
    {
      this.selectedJoke = this.allJokes[this.currentJokeId];
      this.exitOutCarousel = false;
      this.exitInCarousel = true
      setTimeout(()=>this.exitInCarousel = false, this.animationDelay);
    }, this.animationDelay)
  }
}
