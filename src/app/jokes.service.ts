import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JokesService {

  constructor() { }

  Jokes = [
    {
      type: 'pourrie',
      main: '0 Vous avez tout vu ! Vous êtes un pro des blagues pourries !',
      answer: 'FELICITATIONS !',
      image: '../../assets/images/congrats.jpg'
    },
    {
      type: 'pourrie',
      main: '1 C’est un hibou qui rentre dans une casserole d’eau chaude et du coup …',
      answer: 'hibou !',
      image: '../../assets/images/owl.jpg'
    },
    {
      type: 'pourrie',
      main: '2 Qu’est-ce qui est vert et qui pousse sous l’eau ?',
      answer: 'Un chou-marin',
      image: '../../assets/images/algue.jpg'
    },
    {
      type: 'pourrie',
      main: '3 Pourquoi un chasseur emmène-t-il son fusil aux toilettes ?',
      answer: 'Pour tirer la chasse',
      image: '../../assets/images/chasseur.jpg'
    },
    {
      type: 'pourrie',
      main: '4 Vous connaissez l’histoire de la chaise ?',
      answer: 'Elle est pliante.',
      image: '../../assets/images/chaise.jpg'
    }
  ];

}
