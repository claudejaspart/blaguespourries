import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JokesService {

  constructor() { }


  Jokes = [
    {
      type: 'pourrie',
      main: 'Vous avez tout vu ! Vous êtes un pro des blagues pourries !',
      answer: 'FELICITATIONS !',
      image: 'congrats.jpg'
    },
    {
      type: 'pourrie',
      main: 'C’est un hibou qui rentre dans une casserole d’eau chaude et du coup …',
      answer: 'hibou !',
      image: 'owl.jpg'
    },
    {
      type: 'pourrie',
      main: 'Qu’est-ce qui est vert et qui pousse sous l’eau ?',
      answer: 'Un chou-marin',
      image: 'algue.jpg'
    },
    {
      type: 'pourrie',
      main: 'Pourquoi un chasseur emmène-t-il son fusil aux toilettes ?',
      answer: 'Pour tirer la chasse',
      image: 'chasseur.jpg'
    },
    {
      type: 'pourrie',
      main: 'Vous connaissez l’histoire de la chaise ?',
      answer: 'Elle est pliante.',
      image: 'chaise.jpg'
    },
    {
      type: 'pourrie',
      main: 'Vous connaissez l’histoire de l’armoire ?',
      answer: 'Elle est pas commode.',
      image: 'armoire.jpg'
    },
    {
      type: 'pourrie',
      main: 'Comment appelle-t-on une fleur qui ne prend sa graine qu’à moitié ?',
      answer: 'Une migraine.',
      image: 'fleur.jpg'
    },    
    {
      type: 'pourrie',
      main: 'Qu’est-ce qui fait « toin-toin » ?',
      answer: 'Un tanard.',
      image: 'canard.jpg'
    },
    {
      type: 'pourrie',
      main: 'Comment appelle-t-on un nain qui distribue le courrier ?',
      answer: 'Un nain posteur',
      image: 'nain.jpg'
    },
    {
      type: 'pourrie',
      main: 'Qu’est-ce qu’un canife ?',
      answer: 'Un petit fien.',
      image: 'caniche.jpeg'
    },
    {
      type: 'pourrie',
      main: 'Avec quoi ramasse-t-on la papaye ?',
      answer: 'Avec une foufourche.',
      image: 'papaye.jpg'
    },
    {
      type: 'pourrie',
      main: 'Comment appelle-t-on un chien sans pattes ?',
      answer: 'On ne l’appelle pas, on va le chercher ...',
      image: 'chien.jpg'
    },
    {
      type: 'pourrie',
      main: 'Deux grains de sable arrivent à la plage :',
      answer: 'La vache ! C’est blindé !',
      image: 'plage.jpg'
    },
    {
      type: 'pourrie',
      main: 'T’as deux poussins, tu n’en veux qu’un. Tu fais quoi ?',
      answer: "T'en pousses un ...",
      image: 'poussin.jpg'
    },
    {
      type: 'pourrie',
      main: 'Pourquoi les Belges vont-ils toujours aux toilettes avec du pain ?',
      answer: "Pour donner à manger au Canard WC",
      image: 'pain.jpg'
    },
    {
      type: 'pourrie',
      main: 'Pourquoi n’y a-t-il plus de mammouths ?',
      answer: "Parce qu’il n’y a plus de pappouths.",
      image: 'mammouth.jpg'
    },
    {
      type: 'pourrie',
      main: 'Vous connaissez l’histoire du lit vertical ?',
      answer: "Elle est à dormir debout.",
      image: 'litvertical.jpg'
    },
    {
      type: 'pourrie',
      main: 'Tu connais la recette de la tarte Tatin ?',
      answer: "Tu fais une tarte, tu la mets au four et puis tatin !!!",
      image: 'tarte.jpg'
    },
    {
      type: 'pourrie',
      main: 'Que fait une vache quand elle a les yeux fermés ?',
      answer: "Elle fabrique du lait concentré !",
      image: 'vache.jpg'
    },
    {
      type: 'pourrie',
      main: 'C’est l’histoire d’un mec qui rentre dans un café..',
      answer: "Et plouf !",
      image: 'cafeparis.jpg'
    },
    {
      type: 'pourrie',
      main: "Que dit Frodon devant sa maison ?",
      answer: "C’est là que j’hobbit.",
      image: 'frodon.jpg'
    },
    {
      type: 'pourrie',
      main: "Vous voulez une blague à deux balles ?",
      answer: "Pan ! Pan !",
      image: 'deuxballes.jpg'
    }
  ];

}
