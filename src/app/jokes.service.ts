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
      main: "Comment appelle-t-on un bébé éléphant prématuré ?",
      answer: "Un éléphant tôt.",
      image: 'elephant.jpg'
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
    },
    {
      type: 'pourrie',
      main: "Qu'est-ce qui est vert et qui pousse dans le jardin",
      answer: "Un extraterrestre qui fait caca.",
      image: 'cactus.jpg'
    },
    {
      type: 'pourrie',
      main: "C'est l'histoire d'une brioche qui n'allait jamais aux sports d'hiver",
      answer: "Parce qu’elle ne savait Pasquier.",
      image: 'ski.jpg'
    },
    {
      type: 'pourrie',
      main: "Comment fait un chat pour s'essuyer les fesses quand il fait caca dans le désert ?",
      answer: "Tu donnes ta langue au chat ?",
      image: 'cat.jpg'
    },
    {
      type: 'pourrie',
      main: "C'est l'histoire d'un putois qui rencontre un autre putois.",
      answer: "Il lui dit : 'tu pues toi !'",
      image: 'putois.jpg'
    },
    {
      type: 'pourrie',
      main: "Qu'est-ce qu'un bossu sans bras ni jambes ?",
      answer: "Une madeleine.",
      image: 'bossu.jpg'
    },
    {
      type: 'pourrie',
      main: "C'est l'histoire d'un flamant rose.",
      answer: "Un jour il a pris son pied, et il est tombé.",
      image: 'flamant.jpg'
    },
    {
      type: 'pourrie',
      main: "Pourquoi les girafes ont-elles un long cou ?",
      answer: "Parce qu’elles puent des fesses.",
      image: 'girafe.jpg'
    },
    {
      type: 'pourrie',
      main: "Un bébé héron demande à son papa : 'on est des quoi, nous, des tapons ?'",
      answer: "Mais non, on est des hérons, petit, pas tapons !",
      image: 'heron.jpg'
    },
    {
      type: 'pourrie',
      main: "Qu'est-ce qui est jaune et qui fait 'crac crac' ?",
      answer: "Un poussin qui mange des chips.",
      image: 'poussin.jpg'
    },
    {
      type: 'pourrie',
      main: "Que prend un éléphant dans un bar ?",
      answer: "Beaucoup de place",
      image: 'elephant.jpg'
    },
    {
      type: 'pourrie',
      main: "C'est l'histoire d'un têtard. Il croyait qu'il était tôt.",
      answer: "Mais en fait il est têtard.",
      image: 'tetard.jpg'
    },
    {
      type: 'pourrie',
      main: "Pourquoi le lapin est bleu ?",
      answer: "Parce qu’on l’a peint.",
      image: 'lapinbleu.jpg'
    },
    {
      type: 'pourrie',
      main: "Comment appelle-t-on un lapin sourd ?",
      answer: "LAAAAAAAAAPIIIIIIIIINNNNNNNN!!!!!!",
      image: 'lapin.jpg'
    },
    {
      type: 'pourrie',
      main: "Pourquoi faut-il enlever ses lunettes avant un alcootest ?",
      answer: "Ca fait 2 verres en moins.",
      image: 'alcootest.jpg'
    },
    {
      type: 'pourrie',
      main: "Pourquoi Mickey Mouse ?",
      answer: "Parce que Mario Bros.",
      image: 'mickey.jpg'
    },
    {
      type: 'pourrie',
      main: "Tu connais l'histoire de la feuille ?",
      answer: "Elle déchire.",
      image: 'feuilleverte.jpg'
    },
    {
      type: 'pourrie',
      main: "Que sent l'oreiller d'un nain ?",
      answer: "Les pieds.",
      image: 'nain.jpg'
    },
    {
      type: 'pourrie',
      main: "Quel genre de melon donne du lait ?",
      answer: "Le mamelon.",
      image: 'melon.jpg'
    },
    {
      type: 'pourrie',
      main: "Que dit un sommelier quand il est en retard ?",
      answer: "Désolé, y’avait des bouchons.",
      image: 'sommelier.jpg'
    },
    {
      type: 'pourrie',
      main: "Que fait un hippie quand il veut uriner ?",
      answer: "Il peace.",
      image: 'hippie.jpg'
    },
    {
      type: 'pourrie',
      main: "Comment appelle t'on une manif de non voyants ?",
      answer: "Un festival de cannes.",
      image: 'nonvoyant.jpg'
    },
    {
      type: 'pourrie',
      main: "Quel crustacé est le plus léger de la mer ?",
      answer: "La palourde.",
      image: 'mer.jpg'
    },
    {
      type: 'pourrie',
      main: "Qu'est-ce qui est pire qu'un chaton dans une poubelle ?",
      answer: "Un chaton dans deux poubelles.",
      image: 'chaton.jpg'
    },
    {
      type: 'pourrie',
      main: "Quel est le pire moment dans la vie d'une poule ?",
      answer: "Quand elle passe du coq à l’âne.",
      image: 'poule.jpeg'
    },
    {
      type: 'pourrie',
      main: "Comment se torche un nain ?",
      answer: "En courant dans l’herbe.",
      image: 'nain.jpg'
    },
    {
      type: 'pourrie',
      main: "L'amour, c'est comme les cartes :",
      answer: "Si on est seul il vaut mieux avoir une bonne main.",
      image: 'cartes.jpg'
    },
    {
      type: 'pourrie',
      main: "De quelle couleur est la voiture de John Travolta ?",
      answer: "Grease",
      image: 'johntravolta.jpg'
    },
    {
      type: 'pourrie',
      main: "Que font les brosses à dents le 14 juillet ?",
      answer: "Un feu dentifrice",
      image: 'brossesadent.jpg'
    },
    {
      type: 'pourrie',
      main: "Qu'est-ce qui vole et qui brille ?",
      answer: "Une mouche avec une dent en or",
      image: 'ovni.jpg'
    },
    {
      type: 'pourrie',
      main: "Pourquoi les bretons sont-ils tous frères et soeurs ?",
      answer: "Parce qu’ils n’ont Quimper",
      image: 'bretagne.jpg'
    },
    {
      type: 'pourrie',
      main: "Qu'est-ce qu'un nem qui fait de la musique ?",
      answer: "Un NEM-P3",
      image: 'nem.jpg'
    },
    {
      type: 'pourrie',
      main: "Comment appelle t-on les testicules des dauphins ?",
      answer: "Les boules de Flipper.",
      image: 'dauphin.jpeg'
    },
    {
      type: 'pourrie',
      main: "Comment reconnait-on un politicien qui ment ?",
      answer: "Ses lèvres bougent.",
      image: 'politicien.jpg'
    },
    {
      type: 'pourrie',
      main: "Pourquoi peint-on un chat à Noël ?",
      answer: "Pour faire un chat peint de Noël",
      image: 'chatpin.jpg'
    },
    {
      type: 'pourrie',
      main: "Quelle est la meilleure chose de la Suisse ?",
      answer: "Aucune idée, mais le drapeau est un gros plus.",
      image: 'suisse.jpeg'
    },
    {
      type: 'pourrie',
      main: "De quoi a besoin un astronaute claustrophobe ?",
      answer: "D’un peu d’espace.",
      image: 'astronaute.jpg'
    },
    {
      type: 'pourrie',
      main: "Que dit-on à l'enterrement d'un comptable ?",
      answer: "Qu’il comptait beaucoup pour les gens.",
      image: 'comptable.jpg'
    },
    {
      type: 'pourrie',
      main: "Un petit nuage se ballade avec sa mère, tout à coup il s'arrête :",
      answer: "Maman maman, j’ai envie de faire pluie pluie.",
      image: 'nuage.jpg'
    },
    {
      type: 'pourrie',
      main: "Quelle est la fée la plus méchante ?",
      answer: "La fessée.",
      image: 'fee.jpg'
    },
    {
      type: 'pourrie',
      main: "Que raconte une maman dinosaure à son bébé dinosaure ?",
      answer: "Une préhistoire.",
      image: 'dino.jpg'
    },
    {
      type: 'pourrie',
      main: "Comment reconnait-on un innocent qui va se faire guillotiner ?",
      answer: "Il n'est pas coupable.",
      image: 'guillo.jpg'
    },
    {
      type: 'pourrie',
      main: "Qu'est ce qui est transparent, qui est léger et qui sent la carotte ?",
      answer: "Un pet de lapin.",
      image: 'lapin.jpg'
    },
    {
      type: 'pourrie',
      main: "Pourquoi les vaches ne parlent pas ?",
      answer: "Parce que sur la grange, c'est écrit : La Ferme !",
      image: 'vache.jpg'
    },
    {
      type: 'pourrie',
      main: "Des escargots se baladent sur la plage, soudain ils croisent une limace :",
      answer: "Demi-tour, on est sur la plage des nudistes !",
      image: 'escargot.jpg'
    },
    {
      type: 'pourrie',
      main: "Pourquoi les éléphants n'aiment pas les ordinateurs ?",
      answer: "Parce qu'ils ont peur des souris !",
      image: 'elephant.jpg'
    },
    {
      type: 'pourrie',
      main: "Qu'est ce qui fait des bulles et pue le moustique ?",
      answer: "Un pet de grenouille",
      image: 'grenouille.jpg'
    },
    {
      type: 'pourrie',
      main: "Quelle est la différence entre l'intelligence et les parachutes ?",
      answer: "Aucune, quand on n’en a pas, on s'écrase.",
      image: 'parachute.jpg'
    },
    {
      type: 'pourrie',
      main: "Quel est le sport préféré des électriciens ?",
      answer: "Le karaté, car ils connaissent toutes les prises.",
      image: 'electricien.jpg'
    },
    {
      type: 'pourrie',
      main: "Quel est l'animal le plus fort de tous ?",
      answer: "La tortue parce qu'elle transporte sa maison sur le dos",
      image: 'animal.jpg'
    },
    {
      type: 'pourrie',
      main: "Pourquoi les girafes n'existent pas ?",
      answer: "Parce que c'est un coup monté.",
      image: 'girafe.jpg'
    },
    {
      type: 'pourrie',
      main: "Quels animaux marchent sur la tête ?",
      answer: "Les poux.",
      image: 'animal.jpg'
    },
    {
      type: 'pourrie',
      main: "Un gendarme arrête un conducteur en excès de vitesse : Papiers ?",
      answer: "Ciseaux !",
      image: 'alcootest.jpg'
    },
    {
      type: 'pourrie',
      main: "Qu'est-ce qu'un yaourt à la campagne ?",
      answer: "Un yaourt nature",
      image: 'yaourt.jpeg'
    },
    {
      type: 'pourrie',
      main: "Comment appelle-t-on le pilote d'un corbillard ?",
      answer: "Un pilote décès.",
      image: 'corbillard.jpg'
    },
    {
      type: 'pourrie',
      main: "Quel est le comble pour un serrurier ?",
      answer: "Mettre la clé sous la porte.",
      image: 'serrure.jpg'
    },
    {
      type: 'pourrie',
      main: "Comment appelle-t'on une baguette qui ne trouve pas son chemin ?",
      answer: "Un pain perdu.",
      image: 'pain.jpg'
    },
    {
      type: 'pourrie',
      main: "Tu connais la blague du diable ?",
      answer: "Elle est d’enfer.",
      image: 'diable.jpg'
    },
    {
      type: 'pourrie',
      main: "Que se disent deux yaourts dans un ascenseur ?",
      answer: "On va a quel laitage ?",
      image: 'yaourt.jpeg'
    },
    {
      type: 'pourrie',
      main: "Quelle sensation ont les médicaments dans une boîte de pilule ?",
      answer: "Ils se sentent comprimés",
      image: 'comprimes.jpg'
    }
  ];

}
