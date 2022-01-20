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
    },
    {
      type: 'pourrie',
      main: "C'est l'histoire du ptit dej, tu la connais ?",
      answer: "Pas de bol !",
      image: 'petitdej.jpg'
    },
    {
      type: 'pourrie',
      main: "C'est l'histoire d'une blague vaseuse...",
      answer: "... Mets tes bottes.",
      image: 'vase.jpg'
    },
    {
      type: 'pourrie',
      main: "C'est l'histoire d'un pingouin qui respire par les fesses.",
      answer: "Un jour il s’assoit et il meurt.",
      image: 'pingouin.jpg'
    },
    {
      type: 'pourrie',
      main: "Comment s'appelle les fesses de la Schtroumpfette ?",
      answer: "Le blu-ray.",
      image: 'blu.jpg'
    },
    {
      type: 'pourrie',
      main: "C'est quoi une chauve souris avec une perruque ?",
      answer: "Une souris.",
      image: 'chauvesouris.jpg'
    },
    {
      type: 'pourrie',
      main: "Que dit un escargot quand il croise une limace ?",
      answer: "Oh la belle décapotable.",
      image: 'escargot.jpg'
    },
    {
      type: 'pourrie',
      main: "Pourquoi les canards sont toujours à l'heure ?",
      answer: "Parce qu’ils sont dans l’étang.",
      image: 'canards.jpg'
    },
    {
      type: 'pourrie',
      main: "Qu'est-ce qui est dur, blanc, avec le bout rouge, et qui sent la pisse ?",
      answer: "Une borne kilométrique.",
      image: 'question.png'
    },
    {
      type: 'pourrie',
      main: "Que fait un crocodile quand il rencontre une superbe femelle ?",
      answer: "Il lacoste",
      image: 'crocodile.jpg'
    },
    {
      type: 'pourrie',
      main: "C'est quoi un petit pois avec une épée face à une carotte avec une épée ?",
      answer: "Un bonduel",
      image: 'petitpois.jpg'
    },
    {
      type: 'pourrie',
      main: "Quel est le point commun entre les maths et le sexe ?",
      answer: "Plus il y a d’inconnues, plus c’est chaud.",
      image: 'maths.jpeg'
    },
    {
      type: 'pourrie',
      main: "Pourquoi les pêcheurs ne sont pas gros ?",
      answer: "Parce qu’ils surveillent leur ligne.",
      image: 'pecheur.jpg'
    },
    {
      type: 'pourrie',
      main: "C'est l'histoire d'un papier qui tombe à l'eau.",
      answer: "Il crie 'Au secours ! J’ai pas pied !'",
      image: 'papier.jpg'
    },
    {
      type: 'pourrie',
      main: "Que fait une fraise sur un cheval ?",
      answer: "Tagada Tagada",
      image: 'cheval.jpg'
    },
    {
      type: 'pourrie',
      main: "C'est l'histoire de 2 patates qui traversent la route.",
      answer: "L’une d’elle se fait écraser. L’autre dit : « Oh purée ! »",
      image: 'patate.jpg'
    },
    {
      type: 'pourrie',
      main: "Quelle est la différence entre un rappeur et un campeur ?",
      answer: "Le rappeur nique ta mère et le campeur monte ta tente.",
      image: 'rappeur.jpg'
    },
    {
      type: 'pourrie',
      main: "Pourquoi les Belges viennent-ils à la messe avec du savon ?",
      answer: "Pour l’Ave Maria.",
      image: 'eglise.jpg'
    },
    {
      type: 'pourrie',
      main: "Une fesse gauche rencontre une fesse droite :",
      answer: "Tu ne trouves pas que ça pue dans le couloir ? ",
      image: 'puanteur.jpg'
    },
    {
      type: 'pourrie',
      main: "C'est l'histoire d'un poil.",
      answer: "Avant il était bien, maintenant il est pubien.",
      image: 'poil.jpg'
    },
    {
      type: 'pourrie',
      main: "Quelle est la mamie qui fait peur aux voleurs ?",
      answer: "Mamie Traillette.",
      image: 'mamie.jpg'
    }
  ];

}
