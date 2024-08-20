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
    soustitre:"New bicycle repair shop!\nWarning, sexist comments are not tolerated! \nWill you make it?",
    instructions:"Use the arrow keys to move around and the enter key to interact",
    jour:"DAY ",
    dechett1:"Amazing! What a find I’ve made at the landfill!",
    getflyer:"(spacebar to take the flyers)",
    firstday:"I’m ready for this first day!",
    hint1:"Oops, I feel like I’m forgetting something...",
    chat1:"Here some cat food for you!",
    dechett2:"Hey, hi again! If you need anything, you know where to find me. I’m always here!",
    retourInstruction:"(esc to go back to the workshop)",
    initInventaire:"Tire lever:\n You don’t have this object yet.",
    actionJuste:"Well done!",
    choixfaux:"I’m tired of it...",
    actionJuste2:"You asked for it!",
    choixfaux2:"Oops",
    choiceR:"Fix!",
    choiceF:"Hit!",
    bilan:"RESULTS",
    repair:"REPAIRS",
    claques:"SLAPS",
    totalClients:"6 CUSTOMERS",
    reussi:"Wouahhh I kicked out all the sexists!",
    presquereussi:"I’ve done a good job.",
    warning:"I’m exausted... I’m tired of all these sexist comments...",
    warningBankrupt:"How am I going to pay my rent...",
    burnout:"I’m completely exausted by sexism...\nI can’t work anymore.",
    bankrupt:"I can’t pay the rent...",
    bravo:"Congrats!\n ",
    bravocontent:"I made it to run the shop for a week without getting burnout or going bankrupt!\nI slay! ",
    restart:"(spacebar to play again)",
    bankruptcontent:"It’s okay I’ll be more careful of who I hit next time...",
    burnoutcontent:"Fucking hell, it’s impossible to work in these conditions",

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
    text1:"It’s quite early, maybe I could go for a walk before customers arrive.",
   text2:"I will take care of bike stands!",
   text3:"It’s fixed!",
   text4:"I’ll fix the cupboard, you won't see a thing, don’t worry!",
   text5:"All good!",
   text6:"I brought you a chain tool to thank you for last time!",
   text7:"Thanks again for sharing you workshop with us!",
   text8:"I heard you might need help, I can’t lift stuff so I brought some cake!",
   text9:"Cake on the table",
   text10:"I know you can fix anything, but I thought it would be nicer with drinks!",
   text11:"Enjoy!",
   text12:"Woof! I’m cute, right?!",
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
         text1:"I don’t have the key for this door...",
         text2:"Holly shit...The door is completely smashed. What a mess!",
         text3:"Argh my stands... I need help to repair this.",
         text4:"Now that I fixed them, these three nice racebikes are ready to go!",
         text5:"Oops, my bike is in a real bad state and to think that I’m a bike mechanic...",
         text6:"I could go for a walk, there isn’t any customers yet",
         text7:"Mmm... I thought I’d hand them out, maybe I should do that before customers come in.",
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
     ["p","Hey!"],
     ["m","Hi! Can I sit with you?"],
     ["p","Yes, but you have to share your potato chips with me... and the pigeons haha"],
     ["m","Okay!"],
     ["p","How is it to run this shop?"],
     ["m","Cool! I really enjoy repairing bikes, you know."],
     ["p","Oh yes! And what about customers?"],
     ["m","Well, slap in the face for those who exaggerate"],
     ["p","Haha you’re funny. I have a trick for you, I press spacebar to knock them out, directly."],
     ["m","Whoa! I’ll try for sure."]
   ],
   dechettDialog1:[

   ["PNJ","Hey you! What are you doing here?"],
     ["M","Hi! What is this place?"],
     ["PNJ","It’s the landfill, you didn’t know? You’re not from here?"],
     ["M","No, I’ve just started to work at the bike repair shop around the corner."],
     ["PNJ", "Ha yeah and how is it going? I knew the previous mechanic, they were nice but I believe it wasn’t always easy with customers."],
     ["M", "Yey I can see that...There are a bunch of dudes trying to explain my job to me, it’s a pain."],
     ["PNJ","I understand, same here. Also today someone brought some bike stands, not too shabby, do you want to take them?"],
     ["M", "Yaaas, thanks! Well, I'm off again... see you soon!"]
   ],
   dechettDialog2:[
     ["PNJ","Hey, you again!"],
     ["M","Hello! What’s up?"],
     ["PNJ","I’m okay,it’s a chill day. And you?"],
     ["M","A bit tired from work, but there was a group of cute and sweet people who came to the shop yesterday, it was cool!"],
     ["PNJ", "With time you’ll probably have more friendly people and less douchebags"],
     ["M", "Yeah, you’re right. Actually, I was coming here to give you some flyers. It’s for the protest against police brutality."],
     ["PNJ","Oh thanks! I heard about it but I don’t have the deets."],
     ["M", "Well, everything is written on it, here!"],
     ["PNJ","Perfect, I’ll hand them out, it’s important."],
   ],
    dechettDialog3 : [
       ["PNJ","Hey, you again!!!"],
       ["M","Hello..."],
       ["PNJ","Are you okay? You look weird..."],
       ["M","Nah life sucks.. Some people broke in and destroyed some stuffs at the shop, I think they dislike the queer vibe we have."],
       ["PNJ", "Oh shit...Come on! I’ll join, we will fix it!"],
       ["M", "Yes, I actually wanted to ask you if you would be up to help."],
       ["PNJ","Sure! We can fix anything anyway, don’t we? Hihi"],
       ["M", "Fuck yeah! I’m happy to hear this. See you there!"],
       ["PNJ","Yes, I’ll close here and come asap. Seeya."],
     ],
     dialogInteraction1 :[
       ["pnj","Hi hi!"],
       ["m","Hey! Sorry we’re closed. You can come back tomorrow."],
       ["pnj","Yes, but I didn’t want to repair my bike..."],
       ["m","Uh okay, well why are you here then?"],
       ["pnj","Uh... ha yes! Haha sorry. I’m here to give you my key, I used to work here before and I forgot to give it back. I’m a bit spacey sometimes."],
       ["m","Ah! Thank you!"],
       ["pnj","You welcome, see you next time...bye bye"]
     ],
     dialogInteraction2 : [
      ["PNJ","Hello! I'm touring the neighborhood and was wondering if I could put up a poster here?"],
      ["M","Yes ok, you can put it up on the wall on the back there."],
      ["PNJ","Thanks! You working here, that’s lit ! Also can I borrow you a screwdriver?"],
      ["M","Sure, here it is."],
      ["PNJ","Thank you, see you soon!"],
    ],
    dialogInteraction3 :[
        ["PNJ","Hey hey!"],
        ["M","Hello, we’re closed..."],
        ["PNJ","Yes actually, I wanted to ask you something, now that it’s closed. I’m part of a collective named Vélacyraptix, have you ever heard about us?"],
        ["M","Ha yeay sounds familiar, you organize bike mechanic workshops, right?"],
        ["PNJ","Yeah, one was planned for tonight, but something came up and we were wondering if we could do it here in the shop..."],
        ["M","How? Don’t you wanna come during the day?"],
        ["PNJ","Well we organize workshops without cisgender men..."],
        ["M","Oh okay I see. Great idea ! It’s true that it is annoying to have tools taken from your hands and everything mansplained all the time. I know that too well. You can use the shop, make yourself at home!"],
        ["PNJ","Thanks so nice from you!"],
        ["M","Wait! If you see the person dressed as a dino, tell them you're doing this, they’ve just left and said they wanted to learn how to fix bikes!"],
        ["PNJ","Great idea ! Can we leave some flyers here and you can hand them out to people you know?"],
         ["M","Yep! Okay I’ll leave now, don’t forget to put back the keys in the mailbox please."],
        ["PNJ","Sure, have a nice evening! Come on people we can do the workshop here!"]
      ],
      dialogInteraction4 :[
          ["pnj","Hey, I heard that not everyone is welcomed here..."],
          ["m","What do you mean? "],
          ["pnj","Well it’s extreme to exclude men, and on top of that I heard that we get slapped if we say something you don’t like..."],
          ["m","Uh..."],
          ["pnj","Well, be careful..."],
       ],




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

    bonus1:"I won a tire lever!",
    bonus2:"I won cat food!",
    bonus3:"I won potato chips!",
    bonus4:"I won a toolbox!",

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
      titleList:[
  "\"A Quick & Easy Guide to They/Them Pronouns\"",
  "\"Men Explain Things to Me\"",
  "\"Beyond the Gender Binary \"",
  "\"Detransition, Desistance, and Disinformation: A Guide for Understanding Transgender Children Debates\"",
  "\"The Will to Change: Men, Masculinity, and Love\"",
  "\"Objectification of women still exists\"",
  ],
      authorList:[
  "Archie Bongiovanni & Tristan Jimerson",
  "Rebecca Solnit",
  "Alok Vaid-Menon",
  "Julia Serano",
  "bell hooks",
  " Rebekah Barquero",
  ],
      coverTextList:[
  "\"Archie, a snarky genderqueer artist, and Tristan, a cisgender dude, team up in this short and fun comic guide that explains what pronouns are, why they matter, and how to use them. They also include what to do if you make a mistake, and some tips-and-tricks for those who identify outside of the binary to keep themselves safe in this binary-centric world.\"",
  "\"Rebecca Solnit took on what often goes wrong in conversations between men and women. She wrote about men who wrongly assume they know things and wrongly assume women don’t, about why this arises, and how this aspect of the gender wars works, airing some of her own hilariously awful encounters.\"",
  "\"In Beyond the Gender Binary, poet, artist, and LGBTQIA+ rights advocate Alok Vaid-Menon deconstructs, demystifies, and reimagines the gender binary.\"",
  "\"This brochure is for anyone who finds the debate around trans issues and detransitions hard to follow, or who doesn't know what to think. And with good reason! Lately, this theme has been appearing more and more frequently in public debate, but not by just anyone and anywhere.\"",
  "\"Everyone needs to love and be loved—even men. But to know love, men must be able to look at the ways that patriarchal culture keeps them from knowing themselves, from being in touch with their feelings, from loving.\"",
  "\"Women continue to be the focus of sexual objectification in our society, and have been for hundreds of years, despite advances of equality between the sexes. And it’s not just men that are objectifying women, women do it as well.\"",
  ],
    },
}
