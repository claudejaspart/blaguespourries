import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { JokesService } from '../jokes.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit 
{
  // définition des variables

  // éléments HTML
  @ViewChild('showAnswer') showAnswer!:ElementRef;
  @ViewChild('answer') answer!:ElementRef;
  @ViewChild('jokecard') jokeCard!:ElementRef;

  // variables de style
  lastCard : boolean = false;
  firstCard : boolean = true;
  slideOutCarousel : boolean = false;
  slideInCarousel : boolean = false;
  exitOutCarousel : boolean = false;
  exitInCarousel : boolean = false;
  animationDelay : number = 400;

  // variables logiques
  jokesFullList = [] as Array<any>;
  jokeHistory = [] as Array<number>;
  jokeCursor: number = 0;
  currentJoke : any;


  constructor(private jokesService: JokesService) 
  {
    // suppression historique pour les tests
    localStorage.removeItem("card_history");

    // récupération de toutes les blagues
    this.jokesFullList = jokesService.Jokes;

    // récupération de l'historique
    this.jokeHistory = this.getCardHistory();

    // initialisation du curseur
    this.jokeCursor = this.jokeHistory.length - 1;

    // nouvelle carte
    this.nextCard();
  }

  ngOnInit(): void 
  {
  }

  nextCard()
  {
    if (this.jokeHistory[this.jokeCursor] !== 0)
    {
      // carte à afficher
      this.jokeHistory.push(this.pickRandomCardId())

      // changement de position du curseur
      this.jokeCursor++;

      // animation nouvelle carte
      if (this.jokeCursor > 0)
        this.animateNextCard();
      else
        this.currentJoke = this.jokesFullList[this.jokeHistory[this.jokeCursor]]

      // sauvegarde de l'historique
      this.saveCardHistory();

      // bouton next indispo si dernier element
      if (this.jokeHistory[this.jokeCursor] === 0)
      {
        this.lastCard = true;
        this.deleteCardHistory();
      }

      // bouton previous dispo;
      if (this.jokeCursor > 0)
        this.firstCard = false;
    }
  }

  previousCard()
  {
    if (this.jokeCursor > 0)
    {      
      // changement de position du curseur
      this.jokeCursor--;

      // animation retour
      this.animatePreviousCard();

      // gestion du bouton suivant
      this.lastCard = false;

      // bouton previous dispo;
      if (this.jokeCursor === 0)
        this.firstCard = true;
    }
  }

  // choisis une blague au hasard
  pickRandomCardId() : number
  {
    // initialisation
    let max = this.jokesFullList.length;
    let min = 1;
    let cardId = 0;
    
    // choix d'une carte
    if (this.jokeHistory.length < this.jokesFullList.length - 1)
    {
      do
      {
        cardId =  Math.floor(Math.random() * (max - min) + min);
      }
      while (this.isCardInHistory(cardId))
    }
  
    return cardId;
  }

  animateNextCard()
  {
    this.slideOutCarousel = true;
    setTimeout(()=>
    {
      // selection de la blague
      this.currentJoke = this.jokesFullList[this.jokeHistory[this.jokeCursor]];
      this.slideOutCarousel = false;
      this.slideInCarousel = true;
      setTimeout(()=>this.slideInCarousel = false, this.animationDelay);
    }, this.animationDelay)
  }

  animatePreviousCard()
  {
    this.exitOutCarousel = true;
    setTimeout(()=>
    {
      this.currentJoke = this.jokesFullList[this.jokeHistory[this.jokeCursor]]
      this.exitOutCarousel = false;
      this.exitInCarousel = true
      setTimeout(()=>this.exitInCarousel = false, this.animationDelay);
    }, this.animationDelay)
  }



  // vérifie si l'id de la blague n'est pas déjà dans la liste
  isCardInHistory(cardId : number) : boolean
  {
    for(let i=0; i<this.jokeHistory.length; i++)
      if (this.jokeHistory[i] === cardId)
        return true;

    return false;
  }



  // sauvegarde de l'historique
  saveCardHistory()
  {
    localStorage.setItem("card_history", JSON.stringify(this.jokeHistory));
  }

  // sauvegarde de l'historique
  deleteCardHistory()
  {
    localStorage.setItem("card_history", JSON.stringify([]));
  }
  
  // recupère l'historique qui a été stocké
  getCardHistory() : Array<number>
  {
    if (localStorage.getItem("card_history") !== null)
    {
      return JSON.parse(localStorage.getItem('card_history') || '{}');
    }
    else
    {
      return [];
    }
  }

}
