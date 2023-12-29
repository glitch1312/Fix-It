export { textList, dialogboxList, collisionList, dialogsList, bonusList, references};

const textList = {
  "FR": {
    soustitre:"Nouvel atelier de mécanique vélo!\nAttention, cet atelier ne supporte aucune remarques sexiste! \nSurvivra-t'il?",
    instructions:"Utilise les touches fléchées pour te déplacer et la toucher enter pour interagir",
    jour:"JOUR ",
    dechett1:"Incroyable! Quelle trouvaille j'ai fait à la dechet!",
    getflyer:"(espace pour prendre les flyers)",
    firstday:"Je suis prêtex pour ce premier jour!",
    hint1:"Oups, j'ai l'impression d'avoir oublié un truc...",
    chat1:"Tiens des croquettes pour toi!",
    dechett2:"Hé resalut! Si t'as besoin de quelque chose, tu sais où me trouver haha. Je bouge jamais d'ici!",
    retourInstruction:"(esc pour retour à l'atelier)",
    initInventaire:"Démonte-pneu:\nTu n'as pas encore cet objet.",
    actionJuste:"Bien joué!",
    choixfaux:"ça me fatigue..",
    actionJuste2:"Bien fait!",
    choixfaux2:"Oups",
    choiceR:"Reparez!",
    choiceF:"Frappez!",
    bilan:"BILAN DU JOUR",
    repair:"REPARATIONS",
    claques:"CLAQUES",
    totalClients:"6 CLIENTEXS",
    reussi:"Wouahhh j'ai viré tous les sexistes!",
    presquereussi:"J'ai fait du bon travail.",
    warning:"Je suis épuiséex... Ça me fatigue ces remarques sexistes...",
    warningBankrupt:"Ça va être dur de payer le loyer...",
    burnout:"Je suis totalement epuiséex par le sexisme...\nJe ne peux plus travailler.",
    bankrupt:"Impossible de payer le loyer...",
    bravo:"BRAVO!\n ",
    bravocontent:"J'ai réussi à faire tourner l'atelier pendant une semaine sans m'épuiser ni faire faillite!\nJe suis sacrément badass! ",
    restart:"(espace pour recommencer le jeu)",
    bankruptcontent:"C'est pas grave je ferais plus attention à qui je frappe la prochaine fois...",
    burnoutcontent:"C'est l'enfer, c'est impossible de travailler dans des conditions pareils.",

  },
  "EN":{
    soustitre:"",
    instructions:"",
    jour:"",
    dechett1:"",
    getflyer:"",
    hint1:"",
    chat1:"",
    dechett2:"",
    retourInstruction:"",
    initInventaire:"",
    actionJuste:"",
    choixfaux:"",
    actionJuste2:"",
    choixfaux2:"",
    choiceR:"",
    choiceF:"",
    bilan:"",
    repair:"",
    claques:"",
    totalClients:"",
    reussi:"",
    presquereussi:"",
    warning:"",
    warningBankrupt:"",
    burnout:"",
    bankrupt:"",
    bravo:"\n ",
    bravocontent:"",
    restart:"",
    bankruptcontent:"",
    burnoutcontent:"",








  }
}

const dialogboxList ={
  "FR":{
     text1:"C'est tôt là, je pourrais aller faire un tour avant que les clientexs arrivent.",
     text2:"Je vais m'occuper des stands de vélos!",
     text3:"C'est réparé!",
     text4:"Je vais réparer l'armoire, on n'y verra plus rien, tkt!",
     text5:"C'est tout bon!",
     text6:"Je t'ai amené un dérive-chaine pour te remercier de l'atelier de la dernière fois!",
     text7:"Encore trop merci de nous avoir permis d'utiliser ton magasin pour l'atelier!",
     text8:"J'ai entendu dire qu'il y avait besoin d'aide, je peux pas porter de trucs alors j'ai amené un gâteau!",
     text9:"Le gateau est sur la table",
     text10:"J'ai bien compris que vous arriviez à tout réparer, mais je me suis dit que ce serait encore plus sympa avec des boissons! ",
     text11:"Amuse-toi bien!",
     text12:"Wouaf! Je suis chou nan?!",
  },
  "EN":{
    text1:"",
    text2:"",
    text3:"",
    text4:"",
    text5:"",
    text6:"",
    text7:"",
    text8:"",
    text9:"",
    text10:"",
    text11:"",
    text12:"",
  }
}


const collisionList ={
  "FR":{
     text1:"Je n'ai pas la clé pour ouvrir cette porte...",
     text2:"Oh mince...La porte de l'armoire est toute défoncée. Quel zbeul...",
     text3:"Argh mes jolis stands... Je vais avoir besoin d'aide.",
     text4:"Maintenant que je les ai réparés, ces trois jolis vélos de courses sont prêt à rouler!",
     text5:"Oups, mon vélo est vraiment dans un état lamentable, et dire que je suis mécaniciennex...",
     text6:"Je pourrais aller faire un tour, il n'y a pas encore de clientexs",
     text7:"Mmmh.. je m'étais dit que je les distribuerai, peut-être que je devrais faire a avant que les clientexs arrivent.",

  },
  "EN":{
    text1:"",
    text2:"",
    text3:"",
    text4:"",
    text5:"",
    text6:"",
    text7:"",
  }
}


const dialogsList={
  "FR":{
    dialogChips:[
			["p","Hey!"],
			["m","Salut! Je peux m'asseoir avec toi?"],
			["p","Oui, mais seulement si tu partages tes chips avec moi.. et les pigeons haha"],
			["m","Allez okay!"],
			["p","Comment c'est alors de gérer ce magasin?"],
			["m","C'est cool! J'adore faire des réparations!"],
			["p","Ah yes! Et les clients?"],
			["m","Une petite claque pour celleux qui exagèrent."],
			["p","Hahah tu me fait bien rire. Si jamais mon trick c'est d'appuyer sur espace pour direct les later."],
			["m","Ohh trop merci! Je vais essayer."]
		],
    dechettDialog1:[
			["PNJ","Hé toi! Qu'est-ce que tu fais là?"],
			["M","Hé salut! C'est quoi cet endroit?"],
			["PNJ","C'est la déchetterie, tu connais pas? T'es pas d'ici?"],
			["M","Non, je viens de commencer de taffer à l'atelier de vélo pas loin d'ici."],
			["PNJ", "Ha ouais et ça va? Je connaissais la personne d'avant, iel était sympa mais je crois que c'était pas toujours évident avec les clientexs."],
			["M", "Ha ouais je vois...Je me fais pas mal expliquer mon taf par des types c'est un peu chiant."],
			["PNJ","Je comprends, ça m'arrive ici aussi des fois. Ha aujourd'hui quelqu'un a amené des stands pour vélo en bon état, tu veux les prendre?"],
			["M", "Grave! Merci. Bon j'y retourne... à bientôt!"]
    ],
    dechettDialog2:[
			["PNJ","Hé toi, te revoilà!"],
			["M","Hé salut! Comment tu vas ?"],
			["PNJ","Pas mal, c'est une journée tranquille. Et toi?"],
			["M","Un peu fatiguée du taf, mais y'a des personnes sympas qui sont passées hier c'était cool!"],
			["PNJ", "Avec le temps t'auras probablement plus de copainexs que de relouexs!"],
			["M", "Ouais t'as raison. Aussi je passais par la parce que j'ai des flyers pour la manif contre les violences policieres."],
			["PNJ","Oh merci, j'en ai entendu parler mais j'ai pas les détails."],
			["M", "Bah y'a tout écrit dessus,tiens!"],
			["PNJ","Top, je vais les faire tourner c'est important."],
    ],
     dechettDialog3 : [
				["PNJ","Hé encore toi!"],
				["M","Coucou..."],
				["PNJ","Ça va? Tu fais une tête bizarre..."],
				["M","Nan c'est nul.. Y'a des gens qui ont cassé des trucs au magasin, j'ai l'impression qu'iels sont pas fan de l'esprit queer du truc."],
				["PNJ", "Oh merde...Allez je viens avec toi on va réparer tout ca!"],
				["M", "Oui je venais justement te demander si tu voulais bien me filer un coup de main."],
				["PNJ","Grave! On sait tout réparer de toute facon nan?! Hihi"],
				["M", "Oh cool, ca me fait plaisir d'entendre ca. On se retrouve là-bas?"],
				["PNJ","Oui, je ferme la déchett et j'arrive. A toute!"],
			],
      dialogInteraction1 :[
        ["pnj","Hé salut!"],
        ["m","Salut! Désolée c'est fini pour aujourd'hui, il faut revenir demain..."],
        ["pnj","Oui, oui je venais pas pour réparer mon vélo..."],
        ["m","Heu ok, tu viens pour quoi alors?"],
        ["pnj","Heu... ha oui! Haha pardon. Je viens te filer la clé que j'ai oublié de rendre quand j'ai arrêté de bosser ici. Je suis un peu tête en l'air des fois."],
        ["m","Ah! Merci!"],
        ["pnj","De rien, allez à la proch ciao ciao..."]
      ],
      dialogInteraction2 : [
       ["PNJ","Hello! Je suis en train de faire le tour du quartier et je me demandais si je pouvais poser une affiche ici?"],
       ["M","Oui ok tu peux la mettre sur le mur du fond."],
       ["PNJ","Merci! C'est stylé que tu bosses ici! Ha et t'es dac de me prêter un tournevis plat?"],
       ["M","Oui pas de soucis, voilà."],
       ["PNJ","Merci à bientôt!"],
     ],
     dialogInteraction3 :[
         ["PNJ","Hey salut!"],
         ["M","Salut, c'est fermé pour aujourd'hui..."],
         ["PNJ","Oui justement,je suis venue te demander quelque chose, je fais partie d'un collectif qui s'appelle Vélacyraptix tu as déjà entendu parler?"],
         ["M","Ha oui ça me dit quelque chose, vous faites des ateliers non?"],
         ["PNJ","Oui, et il y en avait un ce soir, mais il y a eu un imprévu et on se demandait si on pouvait le faire ici..."],
         ["M","Comment ça? Vous voulez pas venir la journée plutôt?"],
         ["PNJ","En fait on fait des ateliers en mixité choisie sans mec cisgenre..."],
         ["M","Ha oui ok, je vois! C'est une trop bonne idée, c'est vrai que c'est pas toujours évident de se faire prendre les outils des mains et se faire toujours tout expliquer...haha, je connais ça... Vous êtes bienvenux!"],
         ["PNJ","Merci c'est trop sympa!"],
         ["M","HA! Si vous voyez la personne habillée en dino dites lui que vous faites ça, elle vient de partir et elle disait qu'elle voulait apprendre à mieux bricoler!"],
         ["PNJ","Bonne idée ! Ha oui et tu serais dac qu'on te laisse des flyers et d'en donner aux gens que tu connais?"],
          ["M","Bien sûr! bon je vais y aller je vous laisse les clées remettez les dans la boite à clé"],
         ["PNJ","Ca marche, bonne soirée ! Allez les gentexs vous pouvez venir !"]
       ],
       dialogInteraction4 :[
           ["pnj","Hey, j'ai entendu qu'ici tout le monde n'est pas le bienvenu... "],
           ["m","T'entends quoi par là? "],
           ["pnj","Bah que c'est un peu extrême d'exclure des gars, en plus il parait qu'on se ramasse des claques si on dit des trucs qui vous plaisent pas."],
           ["m","Euh okay..."],
           ["pnj","Bref faites gaffe à vous..."],
        ],





  },
  "EN":{
    dialogChips:[
			["p",""],
			["m",""],
			["p",""],
			["m",""],
			["p",""],
			["m",""],
			["p",""],
			["m",""],
			["p",""],
			["m",""]
		],
    dechettDialog1:[
      ["PNJ",""],
      ["M",""],
      ["PNJ",""],
      ["M",""],
      ["PNJ", ""],
      ["M",""],
      ["PNJ",""],
      ["M", ""]
    ],
    dialogInteraction1 :[
      ["pnj",""],
      ["m",""],
      ["pnj",""],
      ["m",""],
      ["pnj",""],
      ["m",""],
      ["pnj",""]
    ],
    dialogInteraction2 : [
     ["PNJ",""],
     ["M",""],
     ["PNJ",""],
     ["M",""],
     ["PNJ",""],
   ],
   dialogInteraction3 : [
       ["PNJ",""],
       ["M",""],
       ["PNJ",""],
       ["M",""],
       ["PNJ",""],
       ["M",""],
       ["PNJ",""],
       ["M",""],
       ["PNJ",""],
       ["M",""],
       ["PNJ",""],
        ["M",""],
       ["PNJ",""]
     ],
     dialogInteraction4 :[
         ["pnj",""],
         ["m",""],
         ["pnj",""],
         ["m",""],
         ["pnj",""],
         ]


  }
}


const bonusList={
  "FR":{
    bonus1:"J'ai gagné un démonte-pneu!",
    bonus2:"J'ai gagné des croquettes pour chat!",
    bonus3:"J'ai gagné des chips!",
    bonus4:"J'ai gagné une boîte à outils!",

  },
  "EN":{

  }
}


const references ={
  "FR":{
    titleList:["\"Guide de language inclusif\"","\"M'explique pas la vie mec !\"","\"Les mecs lourds ou le paternalisme lubrique\"", "\"Une histoire de genres\"","\"Détransition, désistance et désinformation : Un guide pour comprendre le débat sur les enfants trans\"","\"La crise de la masculinité - Autopsie d'un mythe tenace\"" ],
    authorList:["Amnesty International","Rokhaya Diallo & Blachette","Natacha Henry","Lexie","Julia Serano","Francis Dupuis-Déri"],
    coverTextList:["\"La langue joue un rôle dans la construction et la perpétuation de discriminations et de stéréotypes qui touchent autant les femmes que d’autres minorités (personnes LGBTQIA+, personnes racisées, personnes en situation de handicap etc..). Adopter une communication inclusive, c’est améliorer la représentation de la société, en accordant une visibilité égalitaire et respectueuse à l’ensemble de ses membres. Par exemple, joueureusex est un accord inclusif non-binaire.\"",
    	"\"Sous forme de saynètes humoristiques, cet ouvrage aborde les concepts de mansplaining, quand l’homme explique à une femme comment s’exprimer et comment penser de manière condescendante, de manterrupting, quand un homme coupe systématiquement la parole à une femme qui tente de s’exprimer, le manspreading quand l’homme prend ses aises dans les lieux publics notamment dans les transports en communs. Ces comportements masculins sont la résultante d’un patriarcat ordinaire.\"",
    	"\"Avec des yeux comme ça, je ne peux rien vous refuser\",\"vous êtes mariée ? c'est pas grave, je suis pas jaloux.\" Entre la drague et le harcèlement sexuel, il existe chez certains hommes une façon plus ou moins vulgaire et équivoque de s'en prendre aux femmes, en particulier dans le monde du travail... En une phrase ou deux, ils sexualisent la relation et mettent leur interlocutrice en position d'infériorité. Natacha Henry décrit et analyse ce comportement.\"",
    // qu'elle baptise ,paternalisme lubrique, et qui ponctue le quotidien des femmes."
    "\"A l'heure où les questions de genre et d'identité sont de plus en plus présentes dans l'espace public, voici un guide qui déconstruit tous les préjugés, les abus de langage, les non-sens liés aux transidentités, afin de mieux comprendre celles-ci et de leur donner les armes pour s'émanciper. [...] Ce livre engagé est une vraie boussole pour les personnes trans, [...] mais aussi pour les personnes cisgenres, concernées ou non, car c'est sa propre place dans la société et le traitement des différences qu'il s'agit de questionner.\"",
    "\"Cette brochure s’adresse à toustes celleux qui trouvent le débat autours des enjeux trans et des détransitions difficile à suivre et qui ne savent pas quoi en penser. Et pour cause ! Ces derniers temps, ce thème apparait de plus en plus souvent dans le débat public, mais pas porté par n’importe qui et n’importe où.\"",
    "Une crise de la masculinité, dit-on, sévit dans nos sociétés trop féminisées. Dans ce livre, Francis Dupuis-Déri propose une étonnante enquête sur ce discours de la \"crise de la masculinité\", dont il retrace l'histoire longue [...]. Il se demande finalement quelle est la signification politique de cette rhétorique, qui a pour effet de susciter la pitié envers les hommes, de justifier les violences masculines contre les femmes et de discréditer le projet de l'égalité entre les sexes."]

  },
  "EN":{
    titleList:[],
    authorList:[],
    coverTextList:[],
  },
}
