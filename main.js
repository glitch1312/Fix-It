kaboom({
	background: [ 0,0,0 ],
	scale: 3,
	font: "prstart",
})

//debug.inspect = true

loadRoot("assets/")
// Chargement des assets
// VISUALS
// all sprites have been created specifically for this game by  ..... under the ... License
// from Aseprite json
loadAseprite("talk_BG_tiles", "images/talk_BG_tiles.png", "images/talk_BG_tiles.json")
loadAseprite("Sprite_perso_velo", "images/Sprite_perso_velo.png", "images/Sprite_perso_velo.json")
loadAseprite("scene_dialogue_punch","images/scene_dialogue_punch.png", "images/scene_dialogue_punch.json")
loadAseprite("badass_symbol","images/Sprite_scene_jeu_vie.png","images/Sprite_scene_jeu_vie.json")
loadAseprite("coins_symbol","images/Sprite_scene_jeu_piece.png","images/Sprite_scene_jeu_piece.json")
loadAseprite("contenair","images/Sprite_out_contenair.png","images/Sprite_out_contenair.json")
loadAseprite("velo_sur_pied","images/Sprite_velosurpied.png","images/Sprite_velosurpied.json")
loadAseprite("etabli_fini","images/Sprite_etabli.png","images/Sprite_etabli.json")
loadAseprite("mecanix","images/sprite_maincharacter_petit.png","images/sprite_maincharacter_petit.json")
loadAseprite("mecanix_velo","images/Sprite_maincharacter_velo.png","images/Sprite_maincharacter_velo.json")
loadAseprite("choix_frapper_juste", "images/choix_frapper_juste_8images.png", "images/choix_frapper_juste_8images.json")
loadAseprite("choix_reparer", "images/choix_reparer.png", "images/choix_reparer.json")
loadAseprite("atelier_rave", "images/atelier_rave.png", "images/atelier_rave.json")
// clients
for (var i = 1; i <=24; i++) {
	loadAseprite("client_"+i+"_petit","images/client_"+i+"_petit.png", "images/client_"+i+"_petit.json") //punk
}
//clients grand
for (var i = 1; i <=24; i++) {
loadSprite("client_"+i+"_grand", "images/client_"+i+"_grand.png")
}

// perso autres
loadAseprite("perso_dechett_1","images/perso_dechett_1.png","images/perso_dechett_1.json")
loadAseprite("perso_interaction_1","images/perso_interaction_1.png","images/perso_interaction_1.json")
loadAseprite("perso_interaction_2","images/perso_interaction_2.png","images/perso_interaction_2.json")
loadAseprite("perso_interaction_3","images/perso_interaction_3.png","images/perso_interaction_3.json")
loadAseprite("perso_interaction_4","images/perso_interaction_4.png","images/perso_interaction_4.json")

loadAseprite("perso_flinta_1","images/flinta_1_petit.png","images/flinta_1_petit.json")
loadAseprite("perso_flinta_2","images/flinta_2_petit.png","images/flinta_2_petit.json")
loadAseprite("perso_flinta_3","images/flinta_3_petit.png","images/flinta_3_petit.json")
loadAseprite("perso_flinta_4","images/flinta_4_petit.png","images/flinta_4_petit.json")
loadAseprite("atelier_etabli_flyer","images/atelier_etabli_flyer.png","images/atelier_etabli_flyer.json")
loadAseprite("atelier_velo_sur_pied_kc","images/atelier_velo_sur_pied_kc.png","images/atelier_velo_sur_pied_kc.json")
loadAseprite("exte_maki","images/exte_maki.png","images/exte_maki.json")

// SPRITE ATLA
//Leshy SpriteSheet Tool https://www.leshylabs.com/apps/sstool/ to create the sprite atlas
loadSpriteAtlas("images/scene_repairfix.png", "images/scene_repairfix.json")
loadSpriteAtlas("images/scene_repair.png", "images/scene_repair.json")
loadSpriteAtlas("images/scene_inventaire.png", "images/scene_inventaire.json")
loadSpriteAtlas("images/sprite_outils.png","images/sprite_outils.json")
loadSpriteAtlas("images/tiles_outside.png","images/tiles_outside.json")
loadSpriteAtlas("images/tiles.png", "images/tiles.json")
loadSpriteAtlas("images/sorties.png", "images/sorties.json")

// SPRITES
loadSprite("atelier_mur_fond","images/atelier_mur_fond.png")
loadSprite("dialogbox","images/talk_boite.png")
loadSprite("wrench","images/Sprite-tool-wrench.png")
loadSprite("demontepneu","images/Sprite_demontepneu.png")
loadSprite("clef","images/Sprite_clef.png")
loadSprite("clepedale","images/Sprite_clepedale.png")
loadSprite("rider_en_pied","images/Sprite-characterenpied.png")
loadSprite("inventaire_note","images/sprite_inventaire_note.png")
loadSprite("mecanix_en_pied","images/Sprite_maincharacter_enpied.png")
loadSprite("velo_rouge","images/Sprite-velorouge.png")
loadSprite("arbre","images/Sprite_arbre.png")
loadSprite("dechett","images/Sprite_dechett.png")
loadSprite("carton_bulle","images/bulle.png")
loadSprite("carton_bilan","images/bilan_resume.png")
loadSprite("choix_bulle","images/choix_bulle.png")
loadSprite("atelier_poster","images/poster.png")
loadSprite("atelier_poster_grand","images/atelier_poster_grand.png")
loadSprite("atelier_armoire_kc","images/atelier_armoire_kc.png")
loadSprite("atelier_clee","images/atelier_clee.png")
loadSprite("atelier_poster2_grand","images/atelier_poster2_grand.png")
loadSprite("exte_banc","images/exte_banc.png")
loadSprite("exte_sirius","images/exte_sirius.png")





// AUDIOS
loadRoot("assets/")
// downloaded from https://mixkit.co/free-sound-effects/game/ under the Mixkit Sound Effects Free License
loadSound("audio_burnout", "audio/burnout.mp3");
loadSound("audio_fete", "audio/fete.mp3");
loadSound("audio_piece", "audio/piece.mp3");
loadSound("audio_reussite", "audio/porte.mp3");
loadSound("action_juste", "audio/reparer_frapper_juste.wav");
loadSound("audio_reparer", "audio/reparer.wav");
loadSound("page_debut", "audio/start.mp3");
//loadSound("hitSound", "audio/bomb_explosion.wav");
loadSound("hitSound", "audio/audio_frapper.wav");
loadSound("choix_faux","audio/cfaux.mp3")

loadSound("extraBonus", "audio/extra_bonus.wav");
loadSound("hitInRepair", "audio/retro_click.wav");
loadSound("unlock", "audio/unlock.wav");
loadSound("selector", "audio/selector.wav");
loadSound("retro_click", "audio/retro_click.wav");
loadSound("repair_sucess", "audio/repair_sucess.wav");
loadSound("porte", "audio/porte.wav");
loadSound("ouinouin", "audio/ouinouin.wav");
loadSound("frappez", "audio/frappez.wav");
loadSound("fond", "audio/fond.wav");
loadSound("carton", "audio/carton.wav");
loadSound("carton2", "audio/carton2.wav");
// downloaded from https://mixkit.co/free-sound-effects/game/
loadSound("minijeu", "audio/minijeu.mp3");
loadSound("exte", "audio/exte.mp3");

// FONTS
//joystix, prstart pour action
// alphbeta pour texte courant
// ... pour titre
// ... joystix pour status (chiffres)
// coup de <3 pixel
// retro pour tout prstartK
//https:www.1001fonts.com/pixel-millennium-font.html#license Pixel Millennium is licensed under the Creative Commons Attribution-NonCommercial-NoDerivs License (CC BY-NC-ND)
//loadFont("arcade","assets/fonts/joystix.otf")
loadFont("prstart","assets/fonts/pixel.ttf")
// downloaded at https://www.1001fonts.com/joystix-font.html under the https://www.1001fonts.com/joystix-font.html#license license
loadFont("joystix","assets/fonts/joystix.otf")
// ------INITIALIZATION-------//
// --CONSTANTS-- //
let totalCoins = 0
let totalStars = 0
let interactionDechetFlag = false // no interaction with dechetterie perso
let veloTag = false // no bikePost yet
let posterFlag = false
let flyersFlag = true
let jourIdx = 1 // game starts at day 1
let clientCounter = 1 // no client interaction at start
let fightCounter = 0
let justifiedFightCounter = 0
let repairCounter = 0
let fightGoalsList = [4,4,2,2]
let outdoorKey = false
let coinsAnimValueList = [0] //list for starting bilan journalier
let starsAnimValueList = [0]

const BOTTOM = 3/4*256
const TXTSIZE = 8
const TXTWIDTH = 150
const LARGETXTSIZE = 24
const MEDIUMTXTSIZE = 16
const PERSOSCALE = 1.4
const INITIALPOSITION = {x:center().x+10,y:center().y}//position in atelier at start, and at any return from other scenes
const CLIENTLINEPOSITION =  {x:center().x,y:center().y+30}
//palette
const MYPINK = rgb(222, 135,146)
const MYBLUE =rgb(52, 172, 186)
const MYYELLOW = rgb(255,224,126)
const MYPURPLE = rgb(79,30,69)
const MAP_WIDTH = 256
const MAP_HEIGHT = 256

// LEVELS INITIALIZATION with JSON
const clientsList = {
	"client1":{
			spriteName:"client_1_petit",
			bigSpriteName:"client_1_grand",
			dialogs:[
				[ "client_1_grand", "Bonjour" ],
				[ "mecanix_en_pied", "Bonjour, comment je peux vous aider ?"],
				[ "client_1_grand", "Je dois changer les cables des freins." ],
				[ "mecanix_en_pied", "d'accords, vous voulez me donner votre vélo?" ],
				[ "client_1_grand", "je le donnerai quand le mécano aura le temps de s'en occuper direct, j'en ai besoin, vous me donner le rendez-vous?" ],
				[ "mecanix_en_pied", "mais c'est moi la mécano..." ],
			],
			//repair scene
			outilsSprite:	["Sprite-tool-wrench","Sprite_clepedale"],
			outilsGoals:	[1,1],
			bombsSprite:	["Sprite_cliket","sprite_clee6pans","Sprite_marteau","sprite_tournevis","Sprite_demontepneu","sprite_demontechaine","sprite_clefmonte","Sprite_fouet","Sprite_clef","sprite_pince",],

			//health values
			isSexist: true,


	},
	"client2":{
			spriteName:"client_2_petit",
			bigSpriteName:"client_2_grand",
			dialogs:[
				[ "client_2_grand", "Salut, j'ai un problème avec mon vélo" ],
				[ "mecanix_en_pied", "Okay!\n Je vois que ta roue est voilée"],
				[ "client_2_grand", "Non je pense plutôt que c'est un truc au niveau de la chaine" ],
				[ "mecanix_en_pied", "C'est sur que ta roue est voilée. Elle touche le frein de façon irregulière." ],
				[ "client_2_grand", "Attends, je vais te montrer, quand on fait tourner le pédalier, ça entraine la chaine tu vois ?"]
			],
			//repair scene
			outilsSprite:["Sprite-tool-wrench","sprite_clefmonte","Sprite_demontepneu"],
			outilsGoals:	[1,1,1],
			bombsSprite:	["Sprite_cliket","sprite_clee6pans","Sprite_marteau","sprite_tournevis","sprite_demontechaine","Sprite_fouet","Sprite_clef","sprite_pince",],
			isSexist: true,

	},
	"client3":{
			spriteName:"client_3_petit",
			bigSpriteName:"client_3_grand",
			dialogs:[
				[ "mecanix_en_pied", "Bonjour, dites-moi tout!" ],
				[ "client_3_grand", "Je veux changer les plaquettes des mes freins à disques"],
				[ "mecanix_en_pied", "Bonne idée, elles sont usées?" ],
				[ "client_3_grand", "Nan mais ça couine...alors j'aimerais bien les changer" ],
				[ "mecanix_en_pied", "D'accord! On peut aussi essayer de nettoyer le tout d'abord"]
			],
			//repair scene
			outilsSprite:["sprite_tournevis","sprite_pince"],
			outilsGoals:	[1,1],
			bombsSprite:	["Sprite_cliket","sprite_clee6pans","Sprite_marteau","Sprite_demontepneu","sprite_demontechaine","sprite_clefmonte","Sprite_fouet","Sprite_clef",],
			isSexist: false,

	},
	"client4":{
			spriteName:"client_4_petit",
			bigSpriteName:"client_4_grand",
			dialogs:[
				[ "mecanix_en_pied", "Salut, qu'est-ce qui se passe?" ],
				[ "client_4_grand", "Je cherche le patron, j'ai un problème avec mon vélo"],
				[ "mecanix_en_pied", "Je peux vous répondre,dites-moi tout! " ],
				[ "client_4_grand", "Ah, vous êtes mécanicienne?" ],
				[ "mecanix_en_pied", "oui"],
				[ "client_4_grand", "C'est surprenant! Bravo!" ],
			],
			//repair scene
			outilsSprite:["Sprite_marteau"],
			outilsGoals:	[3],
			bombsSprite:	["Sprite_cliket","Sprite-tool-wrench","sprite_clee6pans","Sprite_demontepneu","sprite_demontechaine","sprite_clefmonte","Sprite_fouet","Sprite_clef",],
			isSexist: true,

	},
	"client5":{
			spriteName:"client_5_petit",
			bigSpriteName:"client_5_grand",
			dialogs:[
				[ "client_5_grand", "Bonjour, est ce que c'est possible de changer mon pneu ?"],
				[ "mecanix_en_pied", "heu oui, mais je sais pas trop les réf parce que c'est pas comme les vélos" ],
				[ "client_5_grand", "aucun soucis, j'ai pris du matos avec et j'ai une roue de rechange, je vais t'expliquer..." ],
			],
			//repair scene
			outilsSprite:["Sprite_marteau"],
			outilsGoals:	[3],
			bombsSprite:	["Sprite_cliket","Sprite-tool-wrench","sprite_clee6pans","Sprite_demontepneu","sprite_demontechaine","sprite_clefmonte","Sprite_fouet","Sprite_clef",],
			isSexist: false,

	},
	"client6":{
			spriteName:"client_6_petit",
			bigSpriteName:"client_6_grand",
			dialogs:[
				[ "client_6_grand", "Bonjour Comment ça va aujourd'hui ? Je vous amène mon vélo pour un check général de printemps héhé..."],
				[ "mecanix_en_pied", "Bonjour, Biensur je peux m'en occuper vous voulez me le donner?" ],
				[ "client_6_grand", "Attendez je vais vous le porter il est un peu lourd..." ],
			],
			//repair scene
			outilsSprite:["Sprite_marteau"],
			outilsGoals:	[3],
			bombsSprite:	["Sprite_cliket","Sprite-tool-wrench","sprite_clee6pans","Sprite_demontepneu","sprite_demontechaine","sprite_clefmonte","Sprite_fouet","Sprite_clef",],
			isSexist: true,

	},
	"client7":{
			spriteName:"client_7_petit",
			bigSpriteName:"client_7_grand",
			dialogs:[
				[ "mecanix_en_pied", "Bonjour" ],
				[ "client_7_grand", "J'aurais besoin d'un petit service, vous pourriez faire ca?"],
				[ "mecanix_en_pied", "Oui, bien sûr" ],
				[ "client_7_grand", "Parfait" ],
			],
			//repair scene
			outilsSprite:["sprite_demontechaine","sprite_tournevis"],
			outilsGoals:	[2,2],
			bombsSprite:	["Sprite_cliket","Sprite_marteau","Sprite-tool-wrench","sprite_clee6pans","Sprite_demontepneu","sprite_clefmonte","Sprite_fouet","Sprite_clef",],
			isSexist: false,

	},
	"client8":{
			spriteName:"client_8_petit",
			bigSpriteName:"client_8_grand",
			dialogs:[
				[ "client_8_grand", "Salut, il est où le mecano?"],
				[ "mecanix_en_pied", "C'est moi..." ],
				[ "client_8_grand", "ah. tu sais changer la guidoline?" ],
			],
			//repair scene
			outilsSprite:["sprite_demontechaine","sprite_tournevis"],
			outilsGoals:	[2,2],
			bombsSprite:	["Sprite_cliket","Sprite_marteau","Sprite-tool-wrench","sprite_clee6pans","Sprite_demontepneu","sprite_clefmonte","Sprite_fouet","Sprite_clef",],
			isSexist: true,

	},
	"client9":{
			spriteName:"client_9_petit",
			bigSpriteName:"client_9_grand",
			dialogs:[
				[ "client_9_grand", " Salut beauté, ça va ?"],
				[ "mecanix_en_pied", "mouais, il a quoi ton vélo?" ],
				[ "mecanix_en_pied", "je vois déjà que ton guidon est désaxé..." ],
				[ "client_9_grand", "ha ok. ça fait longtemps que tu travailles ici ?" ],
				[ "mecanix_en_pied", "c'est mon premier jour." ],
				[ "client_9_grand",  "tu finis à quelle heure je t'offre un verre !" ],

			],
			//repair scene
			outilsSprite:["sprite_demontechaine","sprite_tournevis"],
			outilsGoals:	[2,2],
			bombsSprite:	["Sprite_cliket","Sprite_marteau","Sprite-tool-wrench","sprite_clee6pans","Sprite_demontepneu","sprite_clefmonte","Sprite_fouet","Sprite_clef",],
			isSexist: true,

	},
	"client10":{
			spriteName:"client_10_petit",
			bigSpriteName:"client_10_grand",
			dialogs:[
				[ "mecanix_en_pied", "Bonjour" ],
				[ "client_10_grand", "Bonjour! j'ai cassé mon dérailleurs"],
				[ "mecanix_en_pied", "Dac, on peut le remplacer avec de l'occasion ou en commander un" ],
				[ "client_10_grand", "D'occas si possible ça serait parfait" ],
			],

			//repair scene
			outilsSprite:["Sprite_marteau"],
			outilsGoals:	[3],
			bombsSprite:	["Sprite_cliket","Sprite-tool-wrench","sprite_clee6pans","Sprite_demontepneu","sprite_demontechaine","sprite_clefmonte","Sprite_fouet","Sprite_clef",],
			isSexist: false,

	},
	"client11":{
			spriteName:"client_6_petit",
			bigSpriteName:"client_6_grand",
			dialogs:[
				[ "mecanix_en_pied", "Salut, qu'est-ce qui se passe?" ],
				[ "client_6_grand", " Salut, mon vélo freine plus"],
				[ "mecanix_en_pied", "oké je vais checker ça" ],
				[ "client_6_grand", "Est ce que stan est là ? je préfère que ça soit lui qui le fasse" ],
				[ "mecanix_en_pied", "il est pas là..."],
			],
			//repair scene
			outilsSprite:["sprite_demontechaine","sprite_tournevis"],
			outilsGoals:	[2,2],
			bombsSprite:	["Sprite_cliket","Sprite_marteau","Sprite-tool-wrench","sprite_clee6pans","Sprite_demontepneu","sprite_clefmonte","Sprite_fouet","Sprite_clef",],
			isSexist: true,

	},
	"client12":{
			spriteName:"client_12_petit",
			bigSpriteName:"client_12_grand",
					dialogs:[
				[ "client_12_grand", "Hello"],
				[ "mecanix_en_pied", "Salut" ],
				[ "client_12_grand", "ça fait plaisir de voir une femme ici" ],
				[ "mecanix_en_pied", "Yessay.. et donc ce vélo ?" ],
				[ "client_12_grand", "Voilà. Hé pis vous êtes quand même plus jolie avec le sourire !" ],
			],
			//repair scene
			outilsSprite:["sprite_demontechaine","sprite_tournevis"],
			outilsGoals:	[2,2],
			bombsSprite:	["Sprite_cliket","Sprite_marteau","Sprite-tool-wrench","sprite_clee6pans","Sprite_demontepneu","sprite_clefmonte","Sprite_fouet","Sprite_clef",],
			isSexist: true,
	},
	"client13":{
			spriteName:"client_13_petit",
			bigSpriteName:"client_13_grand",
			dialogs:[
				[ "client_13_grand", "Bonjour bonjour! j'aimerais changer de selle, celle-ci a un trou.."],
				[ "mecanix_en_pied", "Bonjour, oui ok, j'en ai pas en stock mais je peux en commander une si vous voulez?" ],
				[ "client_13_grand", "Ouais... hé ben on dirait que le lobby lgbt est venu refaire votre déco là" ],
			],
			//repair scene
			outilsSprite:["sprite_demontechaine","sprite_tournevis"],
			outilsGoals:	[2,2],
			bombsSprite:	["Sprite_cliket","Sprite_marteau","Sprite-tool-wrench","sprite_clee6pans","Sprite_demontepneu","sprite_clefmonte","Sprite_fouet","Sprite_clef",],
			isSexist: false,
	},
	"client14":{
			spriteName:"client_14_petit",
			bigSpriteName:"client_14_grand",
			dialogs:[
				[ "client_14_grand", "Bonjour! j'ai cassé un rayon sur ma roue avant.."],
				[ "mecanix_en_pied", "Okay, je vais le changer et dévoiler la roue s'il-y-a besoin" ],
				[ "client_14_grand", "Okay mais j'espère que ce sera pas aussi cher que la dernière fois" ],
			],
			//repair scene
			outilsSprite:["sprite_demontechaine","sprite_tournevis"],
			outilsGoals:	[2,2],
			bombsSprite:	["Sprite_cliket","Sprite_marteau","Sprite-tool-wrench","sprite_clee6pans","Sprite_demontepneu","sprite_clefmonte","Sprite_fouet","Sprite_clef",],
			isSexist: false,
	},
	"client15":{
			spriteName:"client_15_petit",
			bigSpriteName:"client_15_grand",
			dialogs:[
				[ "mecanix_en_pied", "Bonjour" ],
				[ "client_15_grand", "Hello, c'est possible de réparer mon vélo"],
				[ "mecanix_en_pied", "Oui bien sûr, il a quoi?" ],
				[ "client_15_grand", "Je sais pas, il est tout foutu il faut le réparer" ],
				[ "mecanix_en_pied", "Okay je vais regarder" ],
				[ "client_15_grand", "Merci, mais il est vraiment vieux et en mauvais état " ],
				[ "mecanix_en_pied", "Pas de soucis, tu me le passes?r" ],
				[ "client_15_grand", "Oui." ],


			],
			//repair scene
			outilsSprite:["sprite_demontechaine","sprite_tournevis"],
			outilsGoals:	[2,2],
			bombsSprite:	["Sprite_cliket","Sprite_marteau","Sprite-tool-wrench","sprite_clee6pans","Sprite_demontepneu","sprite_clefmonte","Sprite_fouet","Sprite_clef",],
			isSexist: false,
	},
	"client16":{
			spriteName:"client_16_petit",
			bigSpriteName:"client_16_grand",
			dialogs:[
				[ "mecanix_en_pied", "Salut" ],
				[ "client_16_grand", "Salut! il y a un truc qui marche pas bien avec mon vélo"],
				[ "mecanix_en_pied", "Tu veux m'expliquer plus en détail?" ],
				[ "client_16_grand", "Oui, quand je roule surtout à la montée il se passe des trucs bizarres avec les vitesses..." ],
			],
			//repair scene
			outilsSprite:["sprite_demontechaine","sprite_tournevis"],
			outilsGoals:	[2,2],
			bombsSprite:	["Sprite_cliket","Sprite_marteau","Sprite-tool-wrench","sprite_clee6pans","Sprite_demontepneu","sprite_clefmonte","Sprite_fouet","Sprite_clef",],
			isSexist: false,
	},
	"client17":{
			spriteName:"client_17_petit",
			bigSpriteName:"client_17_grand",
					dialogs:[
				[ "client_17_grand", "Hello"],
				[ "mecanix_en_pied", "Salut" ],
				[ "client_17_grand", "ça fait plaisir de voir une femme ici mais il parait qu'il y'a des moments ou c'est pas ouvert à tous le monde... c'est un peu limite quand même" ],
				[ "mecanix_en_pied", "Je pense que c'est nécessaire, et puis c'est un pratique qui date maintenant et qui se fait pour différents groupes" ],
				[ "client_17_grand", "Ah bon... je pensais que c'était une nouvelle mode..." ],
			],
			//repair scene
			outilsSprite:["sprite_demontechaine","sprite_tournevis"],
			outilsGoals:	[2,2],
			bombsSprite:	["Sprite_cliket","Sprite_marteau","Sprite-tool-wrench","sprite_clee6pans","Sprite_demontepneu","sprite_clefmonte","Sprite_fouet","Sprite_clef",],
			isSexist: true,
	},
	"client18":{
		spriteName:"client_18_petit",
		bigSpriteName:"client_18_grand",
		dialogs :[
			["client_18_grand","Salut! merci pour le tournevis ça m'a bien aidé"],
			["mecanix_en_pied","Hey, pas de soucis! merci de le ramener surtout!  ça a marché comme tu voulais?"],
			["client_18_grand","J'ai réussi à faire certains trucs, mais y'a des choses qui sont trop compliqués je crois, ça me ferait plaisir d'apprendre à l'occas mais je suis pas toujours à l'aise avec les trucs manuels... tu voudrais bien jeter un oeil ?"],
		]
		,
		//repair scene
		outilsSprite:["sprite_demontechaine","sprite_tournevis"],
		outilsGoals:	[2,2],
		bombsSprite:	["Sprite_cliket","Sprite_marteau","Sprite-tool-wrench","sprite_clee6pans","Sprite_demontepneu","sprite_clefmonte","Sprite_fouet","Sprite_clef",],
		isSexist: true,
	},
	"client19":{
			spriteName:"client_19_petit",
			bigSpriteName:"client_19_grand",
			dialogs:[
				[ "mecanix_en_pied", "Hello!" ],
				[ "client_19_grand", "Salut, je viens changer mes pédales "],
				[ "mecanix_en_pied", "Yes, ça marche" ],
				[ "client_19_grand", "Et je voulais dire aussi, avec mes potes on va venir les enlever vos affiches arc-en-ciel si vous les laisser" ],
				[ "mecanix_en_pied", "..." ],
				[ "client_19_grand", "..." ],
			],
			//repair scene
			outilsSprite:["sprite_demontechaine","sprite_tournevis"],
			outilsGoals:	[2,2],
			bombsSprite:	["Sprite_cliket","Sprite_marteau","Sprite-tool-wrench","sprite_clee6pans","Sprite_demontepneu","sprite_clefmonte","Sprite_fouet","Sprite_clef",],
			isSexist: true,
	},
	"client20":{
			spriteName:"client_20_petit",
			bigSpriteName:"client_20_grand",
				dialogs:[
					[ "mecanix_en_pied", "Salut" ],
					[ "client_18_grand", "Bonjour Madame!" ],
					[ "mecanix_en_pied", "Euh... je préfère que vous disiez pas Madame" ],
					[ "client_18_grand", "Rohlalala...on peut plus rien dire" ],
					[ "mecanix_en_pied", "C'est juste que vous ne me connaissez pas et en plus monsieur, madame c'est très binaire" ],
					[ "client_18_grand", "Oui bon vous êtes pas un Monsieur nan plus.." ],
					[ "mecanix_en_pied", "Peut-être bien que si.." ],
				],
			//repair scene
			outilsSprite:["sprite_demontechaine","sprite_tournevis"],
			outilsGoals:	[2,2],
			bombsSprite:	["Sprite_cliket","Sprite_marteau","Sprite-tool-wrench","sprite_clee6pans","Sprite_demontepneu","sprite_clefmonte","Sprite_fouet","Sprite_clef",],
			isSexist: true,
	},
	"client21":{
			spriteName:"client_21_petit",
			bigSpriteName:"client_21_grand",
			dialogs:[
				[ "mecanix_en_pied", "Hello!" ],
				[ "client_21_grand", "Coucou, dis j'ai un projet avec un cadre que j'ai récupéré, j'aimerais le repeindre."],
				[ "client_21_grand", "C'est possible de le faire ici?"],
				[ "mecanix_en_pied", "C'est pas l'idéal en vrai je fais pas trop de peinture" ],
				[ "client_21_grand", "Ha yut... bon et meuler des pièces, c'est possible?" ],
				[ "mecanix_en_pied", "Oui à fond!" ],
				[ "client_21_grand", "Trop bien !" ],
			],
			//repair scene
			outilsSprite:["sprite_demontechaine","sprite_tournevis"],
			outilsGoals:	[2,2],
			bombsSprite:	["Sprite_cliket","Sprite_marteau","Sprite-tool-wrench","sprite_clee6pans","Sprite_demontepneu","sprite_clefmonte","Sprite_fouet","Sprite_clef",],
			isSexist: false,
	},
	"client22":{
			spriteName:"client_22_petit",
			bigSpriteName:"client_22_grand",
			dialogs:[
				[ "mecanix_en_pied", "Hello!" ],
				[ "client_22_grand", "Coucou, dis j'ai un projet avec un cadre que j'ai récupéré, j'aimerais le repeindre."],
				[ "client_22_grand", "C'est possible de le faire ici?"],
				[ "mecanix_en_pied", "C'est pas l'idéal en vrai je fais pas trop de peinture" ],
				[ "client_22_grand", "Ha yut... bon et meuler des pièces, c'est possible?" ],
				[ "mecanix_en_pied", "Oui à fond!" ],
				[ "client_22_grand", "Trop bien !" ],
			],
			//repair scene
			outilsSprite:["sprite_demontechaine","sprite_tournevis"],
			outilsGoals:	[2,2],
			bombsSprite:	["Sprite_cliket","Sprite_marteau","Sprite-tool-wrench","sprite_clee6pans","Sprite_demontepneu","sprite_clefmonte","Sprite_fouet","Sprite_clef",],
			isSexist: false,
	},
	"client23":{
			spriteName:"client_23_petit",
			bigSpriteName:"client_23_grand",
			dialogs:[
				[ "mecanix_en_pied", "Hello!" ],
				[ "client_23_grand", "Coucou, dis j'ai un projet avec un cadre que j'ai récupéré, j'aimerais le repeindre."],
				[ "client_23_grand", "C'est possible de le faire ici?"],
				[ "mecanix_en_pied", "C'est pas l'idéal en vrai je fais pas trop de peinture" ],
				[ "client_23_grand", "Ha yut... bon et meuler des pièces, c'est possible?" ],
				[ "mecanix_en_pied", "Oui à fond!" ],
				[ "client_23_grand", "Trop bien !" ],
			],
			//repair scene
			outilsSprite:["sprite_demontechaine","sprite_tournevis"],
			outilsGoals:	[2,2],
			bombsSprite:	["Sprite_cliket","Sprite_marteau","Sprite-tool-wrench","sprite_clee6pans","Sprite_demontepneu","sprite_clefmonte","Sprite_fouet","Sprite_clef",],
			isSexist: false,
	},
	"client24":{
			spriteName:"client_24_petit",
			bigSpriteName:"client_24_grand",
			dialogs:[
				[ "mecanix_en_pied", "Hello!" ],
				[ "client_24_grand", "Coucou, dis j'ai un projet avec un cadre que j'ai récupéré, j'aimerais le repeindre."],
				[ "client_24_grand", "C'est possible de le faire ici?"],
				[ "mecanix_en_pied", "C'est pas l'idéal en vrai je fais pas trop de peinture" ],
				[ "client_24_grand", "Ha yut... bon et meuler des pièces, c'est possible?" ],
				[ "mecanix_en_pied", "Oui à fond!" ],
				[ "client_24_grand", "Trop bien !" ],
			],
			//repair scene
			outilsSprite:["sprite_demontechaine","sprite_tournevis"],
			outilsGoals:	[2,2],
			bombsSprite:	["Sprite_cliket","Sprite_marteau","Sprite-tool-wrench","sprite_clee6pans","Sprite_demontepneu","sprite_clefmonte","Sprite_fouet","Sprite_clef",],
			isSexist: false,
	},

}

// INVENTORY
// state can be : unavailable,available, owned
let inventory = {
	"Démonte-pneu":	{
		spriteName : "Sprite_demontepneu",
		state: "owned",
		cost: "10",
	},
	"Dérive-chaine":	{
		spriteName : "sprite_demontechaine",
		state: "owned",
		cost: "25",

	},
	"Tournevis":	{
		spriteName : "sprite_tournevis",
		state: "available",
		cost: "10",

	},
	"Clef ":	{
		spriteName : "sprite_clefmonte",
		state: "available",
		cost: "10",

	},
	"Clé métrique de 5mm":	{
		spriteName : "Sprite_clef",
		state: "available",
		cost: "30",

	},
	"Double clé de 5mm":	{
		spriteName : "Sprite-tool-wrench",
		state: "available",
		cost: "30",

	},

	"Clé à pédale":	{
		spriteName : "Sprite_clepedale",
		state: "available",
		cost: "30",

	},

	"Clé à cliquet":	{
		spriteName : "Sprite_cliket",
		state: "available",
		cost: "20",

	},
	"Pince":	{
		spriteName : "sprite_pince",
		state: "unavailable",
		cost: "10",

	},
	"Sprite_marteau":	{
		spriteName : "Sprite_marteau",
		state: "unavailable",
		cost: "25",

	},
	"Fouet à chaine":	{
		spriteName : "Sprite_fouet",
		state: "unavailable",
		cost: "60",

	},
	"Ensemble de clé":	{
		spriteName : "sprite_clee6pans",
		state: "unavailable",
		cost: "40",

	},
}

// list of initial speed for the repair game
const speedMin_List = [35,40,60,75]

// --FUNCTIONS-- //
function addTextOnDialogBox(msg){
	console.log("In the addTextOnDialogBox function");
let textBox = add([
	sprite("dialogbox"),//, width: width() - 230
	anchor("center"),
	pos(center().x,BOTTOM),
])
let txt = add([
	text(msg, { size:  TXTSIZE,width:TXTWIDTH }),//, width: width() - 230
	anchor("center"),
	pos(center().x,BOTTOM),
	color(MYPURPLE),
])
onKeyPress(()=>{
	destroy(txt),
	destroy(textBox)})
}

// Add messages on collision with an object
function affichageOnCollision(player,colObjTag,colMsg){
		player.onCollide(colObjTag,()=>{
		let textBox = add([
		sprite("dialogbox"),//, width: width() - 230
		anchor("center"),
		pos(center().x,BOTTOM),
	])
	let txt = add([
		text(colMsg, { size:  TXTSIZE,width:TXTWIDTH }),//, width: width() - 230
		anchor("center"),
		pos(center().x,BOTTOM),
		color(MYPURPLE),
	])
	onKeyPress(()=>{
		destroy(txt),
		destroy(textBox)})
})
}

// Reset variables to restard day cycle
function resetDayVariables(totalCoins,totalStars){
			coinsAnimValueList.push(totalCoins);
			starsAnimValueList.push(totalStars);
			console.log(coinsAnimValueList);
			console.log(starsAnimValueList);

			clientCounter = 1 // reset clientCounter for the next day
			repairCounter = 0
			fightCounter = 0
			justifiedFightCounter = 0
			jourIdx = jourIdx +1 // next day
			console.log("in the reset function the dayis " +jourIdx)
			return jourIdx;
		}

// Function to automatixe the path and dialog for endoftheday interaction
function interactionJour(jourIdx,levelAtelier,justifiedFightCounter,totalCoins,totalStars,
	playerPosition/*{x:,y:}*/,persoSprite,target1/*{x:,y:}*/,dialogInteractionList,target2,flag){
		let waitTime = 0.3
			// map and status are already loaded
		const colBox = 3
		const player = add([
			sprite("mecanix",{anim:"idle"}),
			anchor("center"),
			pos(playerPosition.x,playerPosition.y),
			area({ shape: new Polygon([vec2(-colBox,-colBox+14),vec2(-colBox,0), vec2(colBox,0),vec2(colBox,-colBox+14)]) }),
			body(),
			scale(PERSOSCALE)
		])
		player.flipX = true

		// Add the other pers
		const perso = levelAtelier.spawn([
			sprite(persoSprite,{anim:"walk_right"}),
			anchor("center"),
			pos(0,160),//the default position is in front of the workshop
			area({ shape: new Polygon([vec2(-colBox,-colBox+14),vec2(-colBox,0), vec2(colBox,0),vec2(colBox,-colBox+14)]) }),
			body(),
			scale(PERSOSCALE),
			agent({ speed: 80, allowDiagonals: true }),],1,1)
		let aller = wait(0.5,()=>{perso.setTarget(vec2(
				target1.x,//Math.floor((center().x+45) / TILE_WIDTH) * TILE_WIDTH + TILE_WIDTH / 2,
				target1.y//Math.floor((center().y-65)  / TILE_HEIGHT) * TILE_HEIGHT + TILE_HEIGHT / 2,
			))})
	//once the aller is done
let firstTarget= 	perso.onTargetReached(()=>{
	let dialogInteraction1 = dialogInteractionList


	// add dialog box
	let textBox = add([
		sprite("dialogbox"),//, width: width() - 230
		anchor("center"),
		pos(center().x,BOTTOM),
		"textBox"
	])
	//initialization
	let initDialog = dialogInteraction1.length
	let levelDialog = dialogInteraction1

	// Text bubble
	const txtWidth = 150; // Ideal Width
	const txtMargins = 15;
	let txt = add([
		text("", { size:  TXTSIZE,  width: txtWidth }),//, width: width() - 230
		anchor("center"),
		pos(center().x,BOTTOM),
		color(MYPURPLE),
	])
	// Update the on screen sprite & text
	function updateDialog() {
		const [ char, dialog ] = dialogInteraction1[curDialog]
		console.log(dialog);
		// Use a new sprite component to replace the old one
	//	avatar.use(sprite(char))
		// Update the dialog text
		// mettre le texte lettre apres lettre
	txt.text = dialog
}
	//initialization
	let curDialog = 0
		updateDialog()
	let dialogAction = onKeyPress("enter", () => {
		// Cycle through the dialogs
		curDialog = (curDialog + 1) % dialogInteraction1.length
		console.log(curDialog);
		if (curDialog==0){
			// dialog finished, options to choose
			dialogAction.paused = true
			firstTarget.paused=true
			play("audio_reussite")
			destroy(textBox)
			destroy(txt)
			let lastKeyPress = onKeyPress("enter",() => {
				lastKeyPress.paused = true
				dialogAction.paused = true
				firstTarget.paused=true
				perso.flipX=true
				let retour = perso.setTarget(vec2(
					target2.x,//Math.floor((center().x+45) / TILE_WIDTH) * TILE_WIDTH + TILE_WIDTH / 2,
					target2.y//Math.floor((center().y-65)  / TILE_HEIGHT) * TILE_HEIGHT + TILE_HEIGHT / 2,
				))

				console.log("Before the fade\n le jour "+jourIdx+"\n le justifiedFightCounter "+justifiedFightCounter+"\n la thune c'est "+totalCoins+"\n les stars "+totalStars)
				perso.onTargetReached(()=>{
					console.log("Target reached")
					dialogAction.paused =true
					// day two
					if (jourIdx==2){
						if(flag==true){
						let poster = add([
							sprite("atelier_poster"),
							pos(center().x-(6.5*16),MAP_HEIGHT/2-(5.5*16))
						])
						posterFlag = true
					}
				}
					// dqy three
					// additional person for day three
					if(jourIdx==3){
						const flinta1 = levelAtelier.spawn([
							sprite("perso_flinta_1",{anim:"walk_right"}),
							anchor("center"),
							pos(MAP_WIDTH/2-6*16,MAP_HEIGHT/2+2*16),//the default position is in front of the workshop
							area({ shape: new Polygon([vec2(-colBox,-colBox+14),vec2(-colBox,0), vec2(colBox,0),vec2(colBox,-colBox+14)]) }),
							body(),
							scale(PERSOSCALE),
							agent({ speed: 80, allowDiagonals: true }),],1,1)

						const flinta2 = levelAtelier.spawn([
								sprite("perso_flinta_2",{anim:"walk_right"}),
								anchor("center"),
								pos(MAP_WIDTH/2-6*16,MAP_HEIGHT/2+3.5*16),//the default position is in front of the workshop
								area({ shape: new Polygon([vec2(-colBox,-colBox+14),vec2(-colBox,0), vec2(colBox,0),vec2(colBox,-colBox+14)]) }),
								body(),
								scale(PERSOSCALE),
								agent({ speed: 80, allowDiagonals: true }),],1,1)

								const flinta3 = levelAtelier.spawn([
									sprite("perso_flinta_3",{anim:"walk_right"}),
									anchor("center"),
										pos(MAP_WIDTH/2-7*16,center().y+2*16),//the default position is in front of the workshop
									area({ shape: new Polygon([vec2(-colBox,-colBox+14),vec2(-colBox,0), vec2(colBox,0),vec2(colBox,-colBox+14)]) }),
									body(),
									scale(PERSOSCALE),
									agent({ speed: 80, allowDiagonals: true }),],1,1)

									const flinta4 = levelAtelier.spawn([
										sprite("perso_flinta_4",{anim:"walk_right"}),
										anchor("center"),
										pos(MAP_WIDTH/2-7*16,center().y+4*16),//the default position is in front of the workshop
										area({ shape: new Polygon([vec2(-colBox,-colBox+14),vec2(-colBox,0), vec2(colBox,0),vec2(colBox,-colBox+14)]) }),
										body(),
										scale(PERSOSCALE),
										agent({ speed: 80, allowDiagonals: true }),],1,1)

						wait(0.5,()=>{
						flinta1.setTarget(vec2(7*16,11*16))
						flinta2.setTarget(vec2(8*16,12*16))
						flinta2.onTargetReached(()=>{
							flinta3.setTarget(vec2(6*16,11*16))
							flinta4.setTarget(vec2(4*16,9*16))
						})
					})
					// update the flyerFlag
					flyersFlag = true
					}

					if(jourIdx==3){
						console.log("wea rea in the waiting time");
						waitTime= 3.3 // to wait to reach target
					}else {
						waitTime = 0.3
					}
					wait(waitTime,()=>{
						console.log("Wait time is"+waitTime);
						let fadeOut = add([
						pos(center().x, center().y),
						anchor("center"),
						color(BLACK),
    				rect(256, 256),
    				area(),
						fadeIn(1.2),
						opacity(1),
					])
					//to the next day
					let newjourIdx = resetDayVariables(totalCoins,totalStars)
					// door is open now
					outdoorKey = true
					console.log("apres le reset\n le jour"+newjourIdx+"\n le justifiedFightCounter "+justifiedFightCounter+"\n la thune c'est "+totalCoins+"\n les stars "+totalStars)
					wait(1,()=>go("atelier",newjourIdx,totalCoins,totalStars,INITIALPOSITION))
			})

			})
			}
		)
	}else{
		updateDialog()
	}
	})
})
}

// Status bar
function addStatusBar(jourIdx,totalCoins,totalStars){

		const sBoxHeight  = 18
		const sBoxWidth   = 200
		const sBoxmargins = 22

		const coinsLabel = add([
			text("$ "+ totalCoins, {font: "prstart", size:TXTSIZE}),
			//pos(center().x-(MAP_WIDTH/2)+sBoxmargins, 25),
			pos(center().x+75, 17),
		])

		const starsLabel = add([
			text("* "+ totalStars, {font: "prstart", size:TXTSIZE}),
			//pos(center().x-(MAP_WIDTH/2)+sBoxmargins, 25),
			pos(center().x+95, 17),
		])

		const jour = add([
			text("JOUR "+jourIdx+"/5", {font: "prstart", size:TXTSIZE}),
			pos(center().x-(MAP_WIDTH/2)+sBoxmargins, 17),
		])

	}

function player_movement(player,speed){
		// onKeyDown() registers an event that runs every frame as long as user is holding a certain key
		onKeyDown("left", () => {
			// .move() is provided by pos() component, move by pixels per second
			player.play("walk_right")
			player.move(-speed, 0)
			player.flipX = true
		})
		onKeyDown("right", () => {
			player.play("walk_right")
			player.move(speed, 0)
			player.flipX = false
		})

		onKeyDown("up", () => {
			player.play("up")
			player.move(0, -speed)
		})
		onKeyDown("down", () => {
			player.play("down")
			player.move(0, speed)
		})
	}
	function launchDialog(interactionDialog){

			// add dialog box
			let textBox = add([
			sprite("dialogbox"),//, width: width() - 230
			anchor("center"),
			pos(center().x,BOTTOM),
			"textBox"
			])
			// container for text in dialog box
			const txtWidth = 150; // Ideal Width
			const txtMargins = 15;
			let txt = add([
			text("", { size:  TXTSIZE,  width: txtWidth }),//, width: width() - 230
			anchor("center"),
			pos(center().x,BOTTOM),
			color(MYPURPLE),
			])
			//initialization
			let initDialog = interactionDialog.length
			let levelDialog = interactionDialog
			let curDialog = 0
			function updateDialog() {
			const [ char, dialog ] = interactionDialog[curDialog]
			txt.text = dialog
			}
			//initialization with first sentence text
			updateDialog()

			let dialogAction = onKeyPress("enter", () => {
		// Cycle through the dialogs
		curDialog = (curDialog + 1) % interactionDialog.length
		if (curDialog==0){
			// dialog finished, options to choose
			dialogAction.paused = true
			destroy(textBox)
			destroy(txt)
					// flog of the dialog is modified is open now
					return true;
			}else{
		updateDialog()
		}
	})
	}
function add_bordure_map(){
	// MAP POUR FAIRE LA BORDURE
	const MAP_WIDTH = 256;
	const MAP_HEIGHT = 256;
	const bordurebordure = addLevel([

		 "KbbbbbbbbbbbbbbN",
		 "G--------------L",
		 "G--------------L",
		 "G--------------L",
		 "G--------------L",
		 "G--------------L",
		 "G--------------L",
		 "G--------------L",
		 "G--------------L",
		 "G--------------L",
		 "G--------------L",
		 "G--------------L",
		 "G--------------L",
		 "G--------------L",
		 "G--------------L",
		 "QvvvvvvvvvvvvvvP",
	],{
		// define the size of each block
		tileWidth:16,
		tileHeight:16,
		//scale :2,
		pos:vec2(center().x - (MAP_WIDTH/2), 0),
		// assign to each symbol a sprite
		tiles: {
			"K": () => [
				sprite("talk_BG_tiles",{anim: "talk_bg_coinGH"}),
				area(),
				body({isStatic:true}),
			],
			"b": () => [
				sprite("talk_BG_tiles",{anim: "talk_bg_bordhaut"}),
				area(),
				body({isStatic:true}),
			],
			"N": () => [
				sprite("talk_BG_tiles",{anim: "talk_bg_coinDH"}),
				area(),
				body({isStatic:true}),
			],
			"G": () => [
				sprite("talk_BG_tiles",{anim: "talk_bg_bordgauche"}),
				area(),
				body({isStatic:true}),
			],
			"L": () => [
				sprite("talk_BG_tiles",{anim: "talk_bg_borddroite"}),
				area(),
				body({isStatic:true}),
			],
			"-": () => [
				sprite("talk_BG_tiles",{anim: "talk_bg_fond"}),
				outline(40, 40),
			],
			"Q": () => [
			sprite("talk_BG_tiles",{anim: "talk_bg_coinGB"}),
				area(),
				body({isStatic:true}),
			],
			"v": () => [
				sprite("talk_BG_tiles",{anim: "talk_bg_bordbas"}),
				area(),
				body({isStatic:true}),

			],
			"P": () => [
				sprite("talk_BG_tiles",{anim: "talk_bg_coinDB"}),
				area(),
				body({isStatic:true}),

			]
			}
		})
	}
function add_atelier_map(){
		// MAP
		const MAP_WIDTH = 256;
		const MAP_HEIGHT = 256;
		const levelAtelier = addLevel([
			"KbbbbbbbbbbbbbbN",
			"GMMMMMMMMMMMMMML",
			"GmmmmmmmmmmmmmmL",
			"GZoooooooooooooL",
			"G--ootOOOOOO---L",
			"G--tt----------L",
			"G---T----t-----L",
			"Gt-------------L",
			"G------tt------L",
			"G--------------L",
			"X-T-------t----L",
			"W--tt---t------L",
			"w-----------t--e",
			"S---T----------D",
			"Gt--TT----t----c",
			"QvvvvvvvvvvvvvvP",
		],{
			// define the size of each block
			tileWidth:16,
			tileHeight:16,
			//scale :2,
			pos:vec2(center().x - (MAP_WIDTH/2), 0),
			// assign to each symbol a sprite
			tiles: {
				"W": () => [
					sprite("scene_atelier_tile_sortiegaucheH1"),
					area(),
					body({ isStatic: true }),
					"clientEntrance"
				],
				"w": () => [
					sprite("scene_atelier_tile_sortiegaucheH2"),
					area(),
					body({ isStatic: true }),
						"clientEntrance"
				],
				"S": () => [
					sprite("sortieBasGauche"),
					area(),
					body({ isStatic: true }),
					"clientEntrance"

				],
				"X": () => [
					sprite("sortieHautGauche"),
					area(),
					body({ isStatic: true }),
					"clientEntrance"
				],

				"=": () => [
					sprite("etabli"),
					area(),
					body({ isStatic: true }),
					"etabli"
				],
				"K": () => [
					sprite("coinHauteGauche"),
					area(),
					body({isStatic:true}),
				],
				"b": () => [
					sprite("bordHaute"),
					area(),
					body({isStatic:true}),
				],
				"N": () => [
					sprite("coinHauteDroite"),
					area(),
					body({isStatic:true}),
				],
				"P": () => [
					sprite("coinBasDroite"),
					area(),
					body({isStatic:true}),
				],
				"Q": () => [
					sprite("coinBasGauche"),
					area(),
					body({isStatic:true}),
				],
				"o": () => [
					sprite("tuileOmbre"),
					area(),
					body({isStatic:true}),
				],
				"O": () => [//ombre avec colliion
					sprite("tuileOmbre"),
					area(),
						body({isStatic:true}),
						"etabli"

				],
				"G": () => [
					sprite("bordDroite"),
					area(),
					body({isStatic:true}),
				],
				"M": () => [
					sprite("murFond"),
					area(),
					body({isStatic:true}),
				],
				"Z": () => [
					sprite("tuileOmbre"),
					area(),
					body({isStatic:true}),
					"affiche"
				],
				"m": () => [
					sprite("basMurFond"),
					area(),
					body({isStatic:true}),

				],
				"L": () => [
					sprite("bordGauche"),
					area(),
					body({isStatic:true}),
				],
				"D": () => [
					sprite("sortieDroite"),
					area(),
					body({ isStatic: true} ),
					"outsideDoorDroite",
				],
				"c": () => [
					sprite("sortieBasDroite"),
					area(),
					body({ isStatic: true} ),

				],
				"e": () => [
					sprite("sortieHautDroite"),
					area(),
					body({ isStatic: true} ),

				],
				"C": () => [
					sprite("tuile1"),
					area(),
					body({isStatic:true}),
				],
				"H": () => [
					sprite("tuileHaut"),
					area(),
					body({isStatic:true}),

				],
				"v": () => [
					sprite("bordBas"),
					area(),
					body({isStatic:true}),

				],
				"-": () => [
					sprite("tuile1"),
					outline(40, 40),
				],
				"t": () => [
					sprite("tuile2"),
					outline(40, 40),
				],
				"T": () => [
					sprite("tuile3"),
					outline(40, 40),
				],

			}
			})

			// ADD ATELIER ITEMS
			// table du milieu
			if (flyersFlag==false){
				const table = add([
				sprite("etabli_fini",{anim:"idle"}),
				scale(1),
				anchor("center"),
				pos(center().x,MAP_HEIGHT/2+16),
				area(),
				body({isStatic:true})
				])
			}else {
				console.log("In the loop with flyers");
				const table = add([
				sprite("etabli_fini",{anim:"idle"}),
				scale(1),
				anchor("center"),
				pos(center().x,MAP_HEIGHT/2+16),
				area(),
				body({isStatic:true})
				])

				let colBox =5
				const tableFlyers = add([
				sprite("atelier_etabli_flyer",{anim:"idle"}),
				scale(1),
				anchor("center"),
				pos(center().x,MAP_HEIGHT/2+16),
				area({ shape: new Polygon([vec2(-25,-17),vec2(-25,10), vec2(-5,10),vec2(-5,-17)]) }),
				body({isStatic:true}),
				"flyers"
			])
			}
			//mur du murFond
			const murFond = add([
				sprite("atelier_mur_fond"),
				anchor("center"),
				pos(center().x,56)
			])
			//velos
			const velo_rouge_1 = add([
				sprite("velo_rouge"),
				scale(1),
				anchor("center"),
				pos(center().x,5*16),
				area(),
				body({isStatic:true})
			])
		  const velo_rouge_2 = add([
				sprite("velo_rouge"),
				scale(1),
				anchor("center"),
				pos(center().x+6*16,7.75*16),
				area(),body({isStatic:true})])
			const velo_rouge_3 = add([
					sprite("velo_rouge"),
					scale(1),
					anchor("center"),
					pos(center().x+6*16,8.5*16),
					area(),
				body({isStatic:true})
			])
			const velo_rouge_4 = add([
					sprite("velo_rouge"),
					scale(1),
					anchor("center"),
					pos(center().x+6*16,9.25*16),
					area(),
					body({isStatic:true})
				])
// add velo sur pied items
if(veloTag==true){
			const velo_sur_pied_1 = add([
				sprite("velo_sur_pied",{anim:"idle"}),
				scale(1),
				anchor("center"),
				pos(center().x-(6*16),8*16),
				area(),
						body({isStatic:true}),
							"pied_velos"
			])
			const velo_sur_pied_2 = add([
				sprite("velo_sur_pied",{anim:"idle"}),
				scale(1),
				anchor("center"),
				pos(center().x+2*16,MAP_HEIGHT-2*16),
				area(),
				body({isStatic:true}),
				"pied_velos"
			])
		}

// add poster item
	if(posterFlag==true){
			let poster = add([
				sprite("atelier_poster"),
				pos(center().x-(6.5*16),MAP_HEIGHT/2-(5.5*16))
			])
		}


return levelAtelier
	}
// ------ Boucle de Gameplay ------- //
// ------ Start --------------------------------------------------- //
scene("start", (jourIdx,totalCoins,totalStars) => {
		let musicDebut = play("page_debut")
		add_bordure_map()
		// Titre
		const title = add([
			text("Fix it !", { size: LARGETXTSIZE, font:"joystix" ,width:MAP_WIDTH-64}),
			scale(1),
			anchor("center"),
			pos(center().x,center().y-0.6*(MAP_HEIGHT/2))
		])

		// But
		const but = add([
			text("Nouvel atelier de mécanique vélo!\n Attention, cet atelier ne supporte aucune remarques sexiste?! \n Survivra-t'il?",
			{ size: TXTSIZE+2, font:"prstart" , width:MAP_WIDTH-64}),
			scale(1),
			anchor("center"),
			pos(center().x,center().y-0.2*(MAP_HEIGHT/2))
		])
		// Instructions
		const instructions = add([
			text("Utilise les touches fléchées et la touche retour pour te déplacer et interagir", { size: TXTSIZE+2, font:"prstart",width:MAP_WIDTH -64}),
			scale(1),
			anchor("center"),
			pos(center().x,center().y+0.2*(MAP_HEIGHT/2))
		])

		onKeyPress("enter", () => {
			musicDebut.paused = true
			go("atelier", jourIdx,totalCoins,totalStars,INITIALPOSITION,clientCounter)
		})
	})
	// ------ Boucle de Gameplay ----  //
	// ------ Scene d'ouverture ----------------------------------------------- //
scene("atelier", (jourIdx,totalCoins,totalStars, saved_position,clientCounter)=> {
	let music = play("page_debut")
		add_atelier_map()
		// collision Box size
		const colBox = 5
		const player = add([
			sprite("mecanix"),
			// center() returns the center point vec2(width() / 2, height() / 2)
			anchor("center"),
			//console.log(saved_position),
			pos(saved_position.x,saved_position.y),//the default position is in front of the workshop
			area({ shape: new Polygon([vec2(-colBox,-colBox+14),vec2(-colBox,0), vec2(colBox,0),vec2(colBox,-colBox+14)]) }),
			//area(),
			body(),
			// scalePerso
			scale(PERSOSCALE)],
		"player")
			// animate the player
		//player.play("walk_right")
		//player.flipX = true
		const SPEED = 100;
		player_movement(player,SPEED)

		// add collision// add velo sur provided Collision
		if (veloTag==true){
				player.onCollide("pied_velos",()=>{
				let textBox = add([
				sprite("dialogbox"),//, width: width() - 230
				anchor("center"),
				pos(center().x,BOTTOM),
			])
			let txt = add([
				text("Incroyable! Quelles trouvailles on fait a la dechet!", { size:  TXTSIZE,width:TXTWIDTH }),//, width: width() - 230
				anchor("center"),
				pos(center().x,BOTTOM),
				color(MYPURPLE),
			])
			onKeyPress(()=>{
				destroy(txt),
				destroy(textBox)
			})
			})}
		// add poster collision
		if(posterFlag==true){
			player.onCollide("affiche", () => {
				let textBox = add([
					sprite("atelier_poster_grand"),//, width: width() - 230
					// 	text("Complète ton inventaire pour\n un TURFU RADIEUX!", { size:  TXTSIZE }),//, width: width() - 230
					anchor("center"),
					pos(center().x,center().y-10),
					"afficheMessage"
				])
				onKeyPress(()=>{destroyAll("afficheMessage")})
			})	}
			// add flyers collision
			if(flyersFlag==true){
				player.onCollide("flyers", () => {
					let poster2 = add([
						sprite("atelier_poster2_grand"),//, width: width() - 230
						// 	text("Complète ton inventaire pour\n un TURFU RADIEUX!", { size:  TXTSIZE }),//, width: width() - 230
						anchor("center"),
						pos(center().x,center().y-10),
						"afficheMessage2"
					])
					onKeyPress(()=>{
						destroyAll("afficheMessage2")})
				})
				player.onCollideEnd("flyers", () => {
	  			addTextOnDialogBox("Mmmh.. je m'étais dit que je les distribuerai, peut-être que je devrais faire ca avant que les clients arrivent.")
					})
			}



				//status
				addStatusBar(jourIdx,totalCoins,totalStars)
				// add the mecanix// Add player game object
				let default_position = saved_position




				// CLIENTS LINE IN ATELIER
				let SHIFT_CLIENTLINE = {x:-20,y:Math.random([-15,15])}
				let FIRST_CLIENTLINE = {x:center().x-10, y:MAP_HEIGHT/2+16*3.8}

				// FUNCTION TO LOOP ON CLIENT SPRITES
				function addClientInLine(clientkey,index,tag){

					const clientLine = add([
						sprite(clientkey.spriteName,{anim:"walk_right"}),
						// center() returns the center point vec2(width() / 2, height() / 2)
						anchor("center"),
						//console.log(saved_position),
						pos(FIRST_CLIENTLINE.x+index*SHIFT_CLIENTLINE.x,FIRST_CLIENTLINE.y+index*SHIFT_CLIENTLINE.y),//the default position is in front of the workshop
						area({ shape: new Polygon([vec2(-colBox,-colBox+20),vec2(-colBox,0), vec2(colBox,0),vec2(colBox,-colBox+20)]) }),
						body(),
						// pas de isStatic
						scale(PERSOSCALE),
						"client", //necessary tag for collision
						tag,
					])

				}

				// CREATE THE CLIENT LINE from a JSON
				// show 6 clients at a time
				// ADD ERROR
				let lLength = 0
				console.log("just before the loop, the clientCounter is:"+clientCounter);
				for (let i = 0; i <= (6-clientCounter); i++) {
					if (clientsList.hasOwnProperty(Object.keys(clientsList)[i])){
						// add a counter to know how many clients you have in line
						lLength = lLength +1
						// add a client sprite in Line
						addClientInLine(clientsList[Object.keys(clientsList)[i]],i,Object.keys(clientsList)[i]/*tag*/)

						// add a collision per client
						player.onCollide(Object.keys(clientsList)[i]/*client key*/, () => {
							//play("portal")
							// If there's a next level, origin() to the same scene but load the next level
							music.paused = true
							go("clientDialog",Object.keys(clientsList)[i], jourIdx, totalCoins,totalStars)
						})

					}
					// if there is no client anymore then the game is "finished"
					if (lLength==0){
						player.onCollide("clientEntrance", () => {
							let textBox = add([
							sprite("dialogbox"),//, width: width() - 230
							anchor("center"),
							pos(center().x,BOTTOM),
							"clientMessage"
						])
						let txt = add([
							text("Les prochains clients\n viendront dans la prochaine démo! \ To be continued...", { size:  TXTSIZE }),//, width: width() - 230
							anchor("center"),
							pos(center().x,BOTTOM),
							color(MYPURPLE),
							"clientMessage"
						])
					})
					}
				}


				// PORTAL from atelier to other scenes
				if (outdoorKey == true){
				player.onCollide("outsideDoorDroite", () => {
					play("porte")
					let BORDERNOCOLLISION = 96; // this is the distance from the center to the border without colliding to left door
					let modified_pos = ({x:center().x-BORDERNOCOLLISION,y:player.pos.y})//keep the height and modify the x, leaving on the right means arriving on left side
					//play("portal")
					// If there's a next level, origin() to the same scene but load the next level
					music.paused = true
					go("outside", jourIdx, totalCoins,totalStars, modified_pos )
				})
				}
				// explanation message for the closed door
				if (outdoorKey == false){
					affichageOnCollision(player,"outsideDoorDroite","Tu n'as pas la clé pour ouvrir cette porte...")
				}
				player.onCollide("etabli", () => {
					let saved_position = player.pos
					music.paused = true
					// This collision shows the state of the inventory.
					go("inventaire", jourIdx, totalCoins, totalStars,saved_position,clientCounter)
				})


			})

// ------ Boucle de Gameplay ------- //
// ------ Dialogue avec le client --------------------------------------------------- //
scene("clientDialog", (clientKey,jourIdx,totalCoins,totalStars) => {

		// MAP POUR FAIRE LA BORDURE
		const MAP_WIDTH = 256;
		const MAP_HEIGHT = 256;
		const bordurebordure = addLevel([

			 "KbbbbbbbbbbbbbbN",
			 "G--------------L",
			 "G--------------L",
			 "G--------------L",
			 "G--------------L",
			 "G--------------L",
			 "G--------------L",
			 "G--------------L",
			 "G--------------L",
			 "G--------------L",
			 "G--------------L",
			 "G--------------L",
			 "G--------------L",
			 "G--------------L",
			 "G--------------L",
			 "QvvvvvvvvvvvvvvP",
		],{
			// define the size of each block
			tileWidth:16,
			tileHeight:16,
			//scale :2,
			pos:vec2(center().x - (MAP_WIDTH/2), 0),
			// assign to each symbol a sprite
			tiles: {
				"K": () => [
					sprite("talk_BG_tiles",{anim: "talk_bg_coinGH"}),
					area(),
					body({isStatic:true}),
				],
				"b": () => [
					sprite("talk_BG_tiles",{anim: "talk_bg_bordhaut"}),
					area(),
					body({isStatic:true}),
				],
				"N": () => [
					sprite("talk_BG_tiles",{anim: "talk_bg_coinDH"}),
					area(),
					body({isStatic:true}),
				],
				"G": () => [
					sprite("talk_BG_tiles",{anim: "talk_bg_bordgauche"}),
					area(),
					body({isStatic:true}),
				],
				"L": () => [
					sprite("talk_BG_tiles",{anim: "talk_bg_borddroite"}),
					area(),
					body({isStatic:true}),
				],
				"-": () => [
					sprite("talk_BG_tiles",{anim: "talk_bg_fond"}),
					outline(40, 40),
				],
				"Q": () => [
				sprite("talk_BG_tiles",{anim: "talk_bg_coinGB"}),
					area(),
					body({isStatic:true}),
				],
				"v": () => [
					sprite("talk_BG_tiles",{anim: "talk_bg_bordbas"}),
					area(),
					body({isStatic:true}),

				],
				"P": () => [
					sprite("talk_BG_tiles",{anim: "talk_bg_coinDB"}),
					area(),
					body({isStatic:true}),

				]
				}
			})
		// Status Bar

		addStatusBar(jourIdx,totalCoins,totalStars)

		// Update the on screen sprite & text
		function updateDialog() {
			const [ char, dialog ] = levelDialog[curDialog]
			// Use a new sprite component to replace the old one
			avatar.use(sprite(char))
			// Update the dialog text
			// mettre le texte lettre apres lettre
			txt.text = dialog
		}
		//initialization
		let curDialog = 0

		// Character avatar (the set up applies to all the avatar of the dialog)
		const avatar = add([
			sprite("mecanix"),
			scale(1),
			anchor("center"),
			pos(center().x, BOTTOM/2),
		])

		// Text bubble
		const txtWidth = 150; // Ideal Width
		const txtMargins = 15;

		// find the current dialog
		// retrieve dialogs from JSON
		let initDialog = clientsList[clientKey].dialogs.length
		levelDialog = clientsList[clientKey].dialogs

		let textBox = add([
			sprite("dialogbox"),//, width: width() - 230
			anchor("center"),
			pos(center().x,BOTTOM),
		])
		let txt = add([
			text("", { size:  TXTSIZE,  width: txtWidth }),//, width: width() - 230
			anchor("center"),
			pos(center().x,BOTTOM),
			color(MYPURPLE),
		])


		onKeyPress("enter", () => {
			// Cycle through the dialogs
			curDialog = (curDialog + 1) % levelDialog.length
			if (curDialog==0){
				// dialog finished, options to choose
				go("choix",clientKey, jourIdx,totalCoins,totalStars)
			}
			updateDialog()
		})


		//firt call to initialize on enter
	 updateDialog()

})

// ---- Monde exterieur -----//
scene("outside", (jourIdx, totalCoins,totalStars,position)=>{
			let musicOutside = play("exte")
			// at start of the outside scene the contenair is closed
			//let ouvertTag=false

			// MAP POUR FAIRE LA BORDURE
			const MAP_WIDTH = 256;
			const MAP_HEIGHT = 256;
			const bordurebordure = addLevel([
				 "KkkkBhHKkkkkkkkB",
				 "GmmmdHhGmmmmmmmd",
				 "GfFVrkkRffFfVVfd",
				 "GFfVmmmmVcqqFffd",
				 "GFVffFFVVQVVFffd",
				 "GFcqqqqqqWfffVFd",
				 "GFQfFVQFFFFFfVVd",
				 "GFQFFFQFFFFVfVVd",
				 "GFQFFFQFFFFffVVd",
				 "GFQFFFwqqqpFVVfd",
				 "GfffFFFVfVQvFvFd",
				 "GfffFFFVfVwqqpFd",
				 "NfffFFFVfVfvFQFd",
				 "DqqqqqqqqqqqqWFd",
				 "SfffFFFVfVfvFvFd",
				 "zZZZZZZZZZZZZZZX",
			],{
				// define the size of each block
				tileWidth:16,
				tileHeight:16,
				//scale :2,
				pos:vec2(center().x - (MAP_WIDTH/2), 0),
				// assign to each symbol a sprite
				tiles: {
					"K": () => [
						sprite("scene_out_tile_coinHG"),
						area(),
						body({isStatic:true}),

					],
					"k": () => [
						sprite("scene_out_tile_bordhaut"),
						area(),
								body({isStatic:true}),
					],
					"B": () => [
						sprite("scene_out_tile_coinHD"),
						area(),
								body({isStatic:true}),
					],

					"h": () => [
						sprite("scene_out_tile_BG1"),
						area(),
					],
					"y": () => [
						sprite("scene_out_tile_BG3"),
						area(),
					],
					"H": () => [
						sprite("scene_out_tile_BG2"),
						area(),
					],
					"D": () => [
						sprite("scene_out_tile_BG2"),
						area(),
						"atelierDoorGauche"
					],
					"G": () => [
						sprite("scene_out_tile_bordgauche"),
						area(),
								body({isStatic:true}),
					],
					"m": () => [
						sprite("scene_out_tile_mur"),
						area(),
					],
					"d": () => [
						sprite("scene_out_tile_borddroite"),
						area(),
								body({isStatic:true}),
					],
					"j": () => [
						sprite("scene_out_tile_borddroite"),
						area(),
								body({isStatic:true}),
					],
					"f": () => [
						sprite("scene_out_tile_herbe"),
						area(),
					],
					"F": () => [
						sprite("scene_out_tile_herbe3"),
						area(),
					],
					"V": () => [
						sprite("scene_out_tile_herbe2"),
						area(),
					],
					"v": () => [
						sprite("scene_out_tile_herbe2"),
						area(),
					],
					"r": () => [
						sprite("scene_out_tile_replicoinbasdroite"),
						area(),
								body({isStatic:true}),
					],
					"R": () => [
						sprite("scene_out_tile_replicoinbasgauche"),
						area(),
								body({isStatic:true}),
					],
					"c": () => [
						sprite("scene_out_tile_chemincoinHG"),
						area(),
					],
					"q": () => [
						sprite("scene_out_tile_cheminhorizontal"),
						area(),
					],
					"Q": () => [
						sprite("scene_out_tile_cheminvertical"),
						area(),
					],
					"W": () => [
						sprite("scene_out_tile_chemincoinBD"),
						area(),
					],
					"w": () => [
						sprite("scene_out_tile_chemincoinBG"),
						area(),
					],
					"p": () => [
						sprite("scene_out_tile_chemincoinHD"),
						area(),

					],
					"z": () => [
						sprite("scene_out_tile_coinbasgauche"),
						area(),
								body({isStatic:true}),
					],
					"Z": () => [
						sprite("scene_out_tile_bordbas"),
						area(),
								body({isStatic:true}),
					],
					"X": () => [
						sprite("scene_out_tile_coinBD"),
						area(),
								body({isStatic:true}),
					],
					"S": () => [
						sprite("scene_out_tile_sortieBgauche"),
						area(),
								body({isStatic:true}),
					],
					"N": () => [
						sprite("scene_out_tile_sortieHgauche"),
						area(),
						body({isStatic:true}),
					],
					}
				})
			// add status bar
			addStatusBar(jourIdx,totalCoins,totalStars)
		// add the mecanix// Add player game object
			const colBox =5
		//ITEMSconst player =

		const dechetterie = add([
			sprite("dechett"),
			// center() returns the center point vec2(width() / 2, height() / 2)
			anchor("center"),
			pos(center().x+5*16,65),// the modified position from before
			area(),
			body({isStatic:true}),

		])
		// const contenairSprite = add([
		// 	sprite("contenair",{anim:"idle_close"}),
		// 	// center() returns the center point vec2(width() / 2, height() / 2)
		// 	anchor("center"),
		// 	pos(center().x+4*16-8,56),// the modified position from before
		// 	area(),
		// 	body({isStatic:true}),
		// 	"contenair",
		// ])
		let arbre1 = add([
			sprite("arbre"),
			// center() returns the center point vec2(width() / 2, height() / 2)
			anchor("center"),
			pos(center().x-32,center().y),// the modified position from before
			area(),
			body({isStatic:true}),
		])
		let arbre2 = add([
			sprite("arbre"),
			// center() returns the center point vec2(width() / 2, height() / 2)
			anchor("center"),
			pos(center().x-36,center().y+32),// the modified position from before
			area(),
			body({isStatic:true}),
		])

		const player = add([
			sprite("mecanix_velo"),
			// center() returns the center point vec2(width() / 2, height() / 2)
			anchor("center"),
			pos(position.x,position.y),// the modified position from before
			area({ shape: new Polygon([vec2(-colBox,-colBox+14),vec2(-colBox,0), vec2(colBox,0),vec2(colBox,-colBox+14)]) }),
			body(),
			// pas de isStatic
			scale(PERSOSCALE)
		])
		// animate the player
		//player.play("roule")
		const SPEED = 100;
		player_movement(player,SPEED)
		// Perso dechetterie
		const persoDechett = add([
			sprite("perso_dechett_1"),
			// center() returns the center point vec2(width() / 2, height() / 2)
			anchor("center"),
			pos(center().x+3*16,MAP_HEIGHT/2-5*16),// the modified position from before
			area({ shape: new Polygon([vec2(-colBox,-colBox+14),vec2(-colBox,0), vec2(colBox,0),vec2(colBox,-colBox+14)]) }),
			body({isStatic:true}),
			scale(PERSOSCALE),
			"perso_dechett_1"
		])
		persoDechett.flipX = true


		// DECHETERRIE DIALOG
		let dechettDialog1 = [
["PNJ","Hé toi ! qu'est ce que tu fais là ?"],
["M"," Hé salut! C'est quoi cet endroit ?"],
["PNJ"," C'est la dechetterie, tu connais pas ? t'es pas d'ici ?"],
["M"," non, je viens de commencer de taffer à l'atelier de vélo pas loin d'ici"],
["PNJ", "Ha ouais et ça va ? je connaissais la personne d'avant, iel était sympa mais je crois que c'était pas toujours évident avec les clients."],
["M", "ha ouais je vois... je me fais pas mal expliquer mon taf par des types c'est un peu chiant."],
["PNJ","je comprends, ça m'arrive ici aussi des fois. Ha aujourd'hui quelqu'un a amené des pieds de vélo même pas pété, tu veux les prendre ?"],
["M", "Grave! merci. bon j'y retourne... à bientôt !"]
]


		// Interaction with the personnage dechetterie
		player.onCollide("perso_dechett_1",()=>{
			// First Interaction On Day 1
			if(interactionDechetFlag == false){

			//interaction happened
			interactionDechetFlag = launchDialog(dechettDialog1)
			veloTag =true // now you have the bikePost
			let leftWin = onKeyPress("left",()=>{
				musicOutside.paused=true
				play("audio_reussite")
				musicOutside.paused=false
				leftWin.paused =true
				rightWin.paused =true
				upWin.paused =true
				downWin.paused =true
			})
			let rightWin = onKeyPress("right",()=>{
				musicOutside.paused=true
				play("audio_reussite")
				musicOutside.paused=false
				leftWin.paused =true
				rightWin.paused =true
				upWin.paused =true
				downWin.paused =true
			})
			let upWin = onKeyPress("up",()=>{
				musicOutside.paused=true
				play("audio_reussite")
				musicOutside.paused=false
				leftWin.paused =true
				rightWin.paused =true
				upWin.paused =true
				downWin.paused =true
			})
			let downWin = onKeyPress("down",()=>{
				musicOutside.paused=true
				play("audio_reussite")
				musicOutside.paused=false
				leftWin.paused =true
				rightWin.paused =true
				upWin.paused =true
				downWin.paused =true
			})

			}else{
			// Other days
			// add dialog box
			let textBox = add([
			sprite("dialogbox"),//, width: width() - 230
			anchor("center"),
			pos(center().x,BOTTOM),
			"textBox"
			])
			// container for text in dialog box
			const txtWidth = 150; // Ideal Width
			const txtMargins = 15;
			let txt = add([
			text("Hé resalut! si t'as besoin de quelque chose, tu sais où me trouver haha je bouge jamais d'ici !", { size:  TXTSIZE,  width: txtWidth }),//, width: width() - 230
			anchor("center"),
			pos(center().x,BOTTOM),
			color(MYPURPLE),
			])
			onKeyPress(()=>{
				destroy(txt),
				destroy(textBox)
			})

		}
		})

		//Collision
		player.onCollide("atelierDoorGauche", () => {
			play("porte")
			let BORDERNOCOLLISION = 96; // this is the distance from the center to the border without colliding to left door
			let modified_pos = ({x:center().x+BORDERNOCOLLISION,y:player.pos.y})//keep the height and modify the x, leaving on the right means arriving on left side
			// If there's a next level, origin() to the same scene but load the next level
			musicOutside.paused=true
			go("atelier", jourIdx, totalCoins,totalStars,modified_pos,1)
		})


	// // if any key is pressed then the message are destroyed
	// const destroyMess = onKeyPress( () => {destroyAll("message")})
	//Collision

	// player.onCollide("contenair", () => {
	// 	destroyMess.paused = true
	// 		const txtWidth = 150;
	// 	console.log("In the conteanir collision")
	//  if(totalStars > 35){
	// 	 let textBox = add([
	// 		 sprite("dialogbox"),//, width: width() - 230
	// 		 anchor("center"),
	// 		 pos(center().x,BOTTOM),
	// 		 "message"
	// 	 ])
 //
 //
	// 	 if (ouvertTag==false){
	// 	let txt =  add([
	// 		 text("Oh tu as trouvé un nouvel outil!...", { size:  TXTSIZE,  width: txtWidth }),//, width: width() - 230
	// 		 anchor("center"),
	// 		 pos(center().x,BOTTOM),
	// 		 color(MYPURPLE),
	// 		  "message"
	// 	 ])
	// 	 // change the sprite
	// 	 contenairSprite.play("opening")
	// 	// fint the next UNAVAILABLE TOOLS
	// 	onKeyPress("enter",()=>{
	// 	for (const key of Object.keys(inventory)) {
	// 			// AVAILABLE TOOLS
	// 			if (inventory[key].state == "unavailable"){
	// 				let textBox = add([
	// 				sprite("dialogbox"),//, width: width() - 230
	// 				anchor("center"),
	// 				pos(center().x,BOTTOM),
	// 				"message"
	// 			])
	// 			let txt = add([
	// 				text("Tu as maintenant dans ton inventaire:\n"+key, { size:  TXTSIZE,  width: txtWidth }),//, width: width() - 230
	// 				anchor("center"),
	// 				pos(center().x,BOTTOM),
	// 				color(MYPURPLE),
	// 				"message"
	// 			])
	// 			inventory[key].state ="owned"
	// 			break
	// 			}
	// 		}
	// 		contenairSprite.play("idles_open")
	// 	 destroyMess.paused = false
	// 	 ouvertTag = true
	//  })
	//  }else{
	// 	 add([
 // 			 text("Il n'y a plus rien dans ce contenair", { size:  TXTSIZE,  width: txtWidth }),//, width: width() - 230
 // 			 anchor("center"),
 // 			 pos(center().x,BOTTOM),
 // 			 color(MYPURPLE),
 // 			  "message"
 // 		 ])
	// 	 destroyMess.paused = false
	//  }
 //
 //
 // }else{
	//  destroyMess.paused = false
	//  let textBox = add([
	// 	 sprite("dialogbox"),//, width: width() - 230
	// 	 anchor("center"),
	// 	 pos(center().x,BOTTOM),
	// 	 "message"
	//  ])
	//  add([
	// 	 text("Tu n'as pas assez de force pour\n t'aventurer dans cette déchetterie", { size:  TXTSIZE,  width: txtWidth }),//, width: width() - 230
	// 	 anchor("center"),
	// 	 pos(center().x,BOTTOM),
	// 	 color(MYPURPLE),
	// 		"message"
	//  ])
 // }
	//  })

 })

// ------ Boucle de Gameplay ----  //
// ------ Scene d'inventaire' ----------------------------------------------- //
scene("inventaire", (jourIdx,totalCoins,totalStars,saved_position,clientCounter)=> {

		// MAP POUR FAIRE L'INVENTAIRE
		const MAP_WIDTH = 256;
		const MAP_HEIGHT = 256;

		const inventaire_map = addLevel([
			 "KbbbbbbbbbbbbbbN",
			 "Gu-------------L",
			 "G--------------L",
			 "G-=----------=-L",
			 "G------u-------L",
			 "G--------------L",
			 "G-------u------L",
			 "G--==------u---L",
			 "Gu-------------L",
			 "GjjjjjjjjjjjjjjL",
			 "GzzZZzzzzzZzzzZL",
			 "GETtRBBBBBBBBBBL",
			 "GETtRBBBBBBBBBBL",
			 "GETtRBBBBBBBBBBL",
			 "GETtRBBBBBBBBBBL",
			 "QvvvvvvvvvvvvvvP",
		],{
			// define the size of each block
			tileWidth:16,
			tileHeight:16,
			//scale :2,
			pos:vec2(center().x - (MAP_WIDTH/2), 0),
			// assign to each symbol a sprite
			tiles: {

				"j": () => [
					sprite("tile_inventaire_etabli_jonctioninventaire"),
					area(),
					body({isStatic:true}),
				],
				"z": () => [
					sprite("tile_inventaire_etabli"),
					area(),
					body({isStatic:true}),
				],
				"Z": () => [
					sprite("tile_inventaire_etabli2"),
					area(),
					body({isStatic:true}),
				],
				"B": () => [
					sprite("tile_inventaire_etabli_plein"),
					area(),
					body({isStatic:true}),
				],
				"E": () => [
					sprite("tile_tirroir1"),
					area(),
					body({isStatic:true}),
				],
				"T": () => [
					sprite("tile_tirroir2"),
					area(),
					body({isStatic:true}),
				],
				"t": () => [
					sprite("tile_tirroir3"),
					area(),
					body({isStatic:true}),
				],
				"R": () => [
					sprite("tile_tirroir4"),
					area(),
					body({isStatic:true}),
				],
				"K": () => [
					sprite("coinHauteGauche"),
					area(),
					body({isStatic:true}),
				],
				"b": () => [
					sprite("bordHaute"),
					area(),
					body({isStatic:true}),
				],
				"N": () => [
					sprite("coinHauteDroite"),
					area(),
					body({isStatic:true}),
				],
				"G": () => [
					sprite("bordDroite"),
					area(),
					body({isStatic:true}),
				],
				"L": () => [
					sprite("bordGauche"),
					area(),
					body({isStatic:true}),
				],
				"u": () => [
					sprite("tile_inventaire_mur"),
					outline(40, 40),
				],
				"=": () => [
					sprite("tile_inventaire_mur2"),
					outline(40, 40),
				],
				"-": () => [
					sprite("tile_inventaire_mur3"),
					outline(40, 40),
				],
				"Q": () => [
				sprite("coinBasGauche"),
					area(),
					body({isStatic:true}),
				],
				"v": () => [
					sprite("bordBas"),
					area(),
					body({isStatic:true}),

				],
				"P": () => [
					sprite("coinBasDroite"),
					area(),
					body({isStatic:true}),

				]
				}
			})

		// add INSTRUCTIONS sur le fond
		const return_instruction = add([
			text("( appuie sur esc pour retour à l'atelier) ", {font: "prstart", size:TXTSIZE, width:TXTWIDTH}),
			anchor("center"),
			pos(center().x+36, BOTTOM+40),
		])

		// add STATUS bar
		addStatusBar(jourIdx,totalCoins,totalStars)

		//GAME
		let i=0
		let posX = 0
		let posY = 0
		let positionList = []
		let achatList = []
		let possAchat = ""
		// loop on all the dictionary of tools to check which ones are available or not
		for (const key of Object.keys(inventory)) {
			const shiftX = 34
			const shiftY = 45
			const textCostSize = TXTSIZE -2
			posX = center().x-(MAP_WIDTH/2)+(((i)%6)*shiftX)+40
			posY = 50+(Math.floor(i/6)*shiftY)
			// AVAILABLE TOOLS
			// show the tool with half opacity if it is available
			if (inventory[key].state == "available"){
				//console.log("this tool is available : "+key)
				add([
					sprite(inventory[key].spriteName),
					scale(1),
					anchor("center"),
					pos(posX,posY), // the % takes into account how many tools per line we want
					opacity(0.5),// for available opacity is half

				])
				// no price because they aren't bought but gained through the interactions
				// add([
				// 	text(inventory[key].cost+" $",{size:textCostSize}),
				// 	scale(1),
				// 	anchor("center"),
				// 	pos(posX,posY+20), // the % takes into account how many tools per line we want
				// ])

					positionList.push(Array(posX,posY+5))
				// if(totalCoins>=inventory[key].cost){
				// 			possAchat = "Appuie sur enter pour l'acheter"
				// 	}else{
				// 			possAchat = "Tu ne peux pas \nl'acheter pour l'instant"
				// 	}

					//achatList.push(key+":\n"+"Cet outil coûte "+inventory[key].cost+"$\n"+possAchat)
			achatList.push(key+":\n"+"Tu n'as pas encore cet outil")

			}
			// OWNED TOOLS
			// show the tools in full opacity if owned
			if (inventory[key].state == "owned"){
				//console.log("this tool is available : "+key)
				add([
					sprite(inventory[key].spriteName),
					scale(1),
					anchor("center"),
					pos(posX,posY), // the % takes into account how many tools per line we want
					opacity(1) // for available opacity is half
				])

				// price already paid
				// add([
				// 	text("",{size:textCostSize}),
				// 	scale(1),
				// 	anchor("center"),
				// 	pos(posX,posY+20), // the % takes into account how many tools per line we want
				// ])
				positionList.push(Array(posX,posY+5))
				achatList.push(key+":\n"+"Tu as déjà cet outil!")
			}
			i++
		}
		const length = achatList.length

		// create the selector
		const selector = add([
			rect(24,44),
			anchor("center"),
			color(1,1,1),
			opacity(0.05),
			pos(center().x-5.5*16,55)
		])
		// create the achat texte
		const achatTexte = add([
			text("Démonte-pneu:\nTu as déjà cet outil!",{size:TXTSIZE}),
			pos(center().x-(MAP_WIDTH/8),BOTTOM-(MAP_WIDTH/15))
		])
		//move the selector and modify the achat texte
		let selectorIndex = 1
		onKeyPress("right", () => {
			// use position where a tool has been saved and put it in position list
			selector.pos.x =positionList[selectorIndex][0]
			selector.pos.y =positionList[selectorIndex][1]
			// use achat texte list
			achatTexte.text = achatList[selectorIndex]
			selectorIndex++
			selectorIndex = selectorIndex%length
			play("selector")
	})
		// Old version
		// buy the tools you can buy
		// const achat = onKeyPress("enter", () => {
		// 	play("unlock")
		// 	if (selectorIndex == 0){
		// 	selectorIndex=length}
		// 	key = Object.keys(inventory)[(selectorIndex-1)]
		// 	if(totalCoins>=inventory[key].cost){
		// 		inventory[key].state = "owned"
		// 		totalCoins = totalCoins - inventory[key].cost
		// 		achatTexte.text = "Quel bel achat!"
		// 		achat.paused = true
		// 	}
		//	})
		// onKeyPress("enter", () => {
		// 	go("inventaire", jourIdx, totalCoins, totalStars,saved_position,clientCounter)
		// })

		// leave the inventory for the workshop
		// the saved_position needs to be tweeked to avoid colliding again with the inventory
		let shiftX = 0 //coming from the bottom of the etabli
		if (saved_position.x<center().x){
			 shiftX = -8 //coming from left shifting on left
		}else{
			 shiftX = +8  //coming from right shifting on right
		}
		let mod_saved_position = saved_position.add(vec2(shiftX,+8)) // backward half a tile to avoid coliding again

		// ADD INITIAL MESSAGE
		addTextOnDialogBox("Si je trouve tous les outils manquants, mon atelier sera le plus classe!")
		// LEAVE SCENE
		onKeyPress("escape", () => {
			go("atelier",jourIdx,totalCoins,totalStars,mod_saved_position,clientCounter)})

	})

// ------ Boucle de Gameplay ----  //
// ------ Option ----------------------------------------------- //
scene("choix", (clientKey,jourIdx,totalCoins,totalStars) => {

		// MAP POUR FAIRE LA BORDURE
		const MAP_WIDTH = 256;
		const MAP_HEIGHT = 256;
		addLevel([

			 "KbbbbbbbbbbbbbbN",
			 "G--------------L",
			 "G--------------L",
			 "G--------------L",
			 "G--------------L",
			 "G--------------L",
			 "G--------------L",
			 "G--------------L",
			 "G--------------L",
			 "G--------------L",
			 "G--------------L",
			 "G--------------L",
			 "G--------------L",
			 "G--------------L",
			 "G--------------L",
			 "QvvvvvvvvvvvvvvP",
		],{
			// define the size of each block
			tileWidth:16,
			tileHeight:16,
			//scale :2,
			pos:vec2(center().x - (MAP_WIDTH/2), 0),
			// assign to each symbol a sprite
			tiles: {
				"K": () => [
				sprite("scene_texte_repairfix_coinGHt"),
					area(),
					body({isStatic:true}),
				],
				"b": () => [
					sprite("scene_texte_repairfix_bordhaut"),
						area(),
					body({isStatic:true}),
				],
				"N": () => [
					sprite("scene_texte_repairfix_coinHD"),
					area(),
					body({isStatic:true}),
				],
				"G": () => [
					sprite("scene_texte_repairfix_bordgauchet"),
					area(),
					body({isStatic:true}),
				],
				"L": () => [
					sprite("scene_texte_repairfix_borddroite"),
					area(),
					body({isStatic:true}),
				],
				"-": () => [
					sprite("fond"),
					outline(40, 40),
				],
				"Q": () => [
					sprite("scene_texte_repairfix_coinGB"),
					area(),
					body({isStatic:true}),
				],
				"v": () => [
					sprite("scene_texte_repairfix_bordbas"),
					area(),
					body({isStatic:true}),

				],
				"P": () => [
					sprite("scene_texte_repairfix_coinDB"),
					area(),
					body({isStatic:true}),

				]
				}
			})

		// status bar
		addStatusBar(jourIdx,totalCoins,totalStars)
	// function Coloring
	function coloring(object){
		// time constant with multiplcation for faster effect
		const t = time()*5
		if (Math.floor(t)%2==0){
			//initial color
			object.color = rgb(222, 135,146)
		}else{
			//final color
			object.color = rgb(52, 172, 186)
		}
	}
		// handle if the choice has been made or not
		let choiceFlag = false // choice not made yet

		// Character avatar (the set up applies to all the avatar of the dialog)
		const avatar = add([
			sprite(clientsList[clientKey].bigSpriteName),
			scale(1),
			anchor("center"),
			pos(center().x, BOTTOM/2),
		])
		// buttons
		const RepairBtn = add([
				text("Reparez!",{font:"joystix",size:TXTSIZE+6}),
				pos(vec2(center().x,center().y+0.3*(MAP_HEIGHT/2))),
				area({ cursor: "pointer", }),
				scale(1),
				anchor("center"),
			])

		const FightBtn = add([
					text("Frappez!",{font:"joystix",size:TXTSIZE+6}),
					pos(vec2(center().x,center().y+0.5*(MAP_HEIGHT/2))),
					area({ cursor: "pointer", }),
					scale(1),
					anchor("center"),
				])

			// initialization
			// by default the repair button is highlighted and te choice is repair
			RepairBtn.onUpdate(() => coloring(RepairBtn))
			let repairFlag = true

		//start with "hovering" Repair button
		let onHover = true

		const tinyShift = 14
		const arrow = add([
			text(">",{size:LARGETXTSIZE}),
			pos(center().x-64,center().y+0.3*(MAP_HEIGHT/2)-tinyShift)

		])
		//option Réparez
		onKeyPress("up", () => {
					//move arrow
					arrow.pos.y = center().y+0.3*(MAP_HEIGHT/2)-tinyShift
					// putting the other button color back to default_position
					FightBtn.onUpdate(() => {
						FightBtn.color = (0,0,0)
					})
					//coloring
					RepairBtn.onUpdate(() => coloring(RepairBtn))
					//repairFlag
					repairFlag = true
			})
			// coloring arrow all the time
				arrow.onUpdate(() => coloring(arrow))

		//option Frappez
		onKeyPress("down", () => {
				// moving the arrow
				arrow.pos.y = center().y+0.5*(MAP_HEIGHT/2)-tinyShift
				// puttint the other button color back to default_position
				RepairBtn.onUpdate(() => {RepairBtn.color = (0,0,0)	})
				// Coloring button
				FightBtn.onUpdate(() => coloring(FightBtn))
				//repairFlag for choice
				repairFlag = false
			})

			function DoSituationTest(repairFlag,clientKey){
				if(repairFlag==true && clientsList[clientKey].isSexist==false){return 0}
				if(repairFlag==true && clientsList[clientKey].isSexist==true){return 1}
				if(repairFlag==false && clientsList[clientKey].isSexist==true){return 2}
				if(repairFlag==false && clientsList[clientKey].isSexist==false){return 3}
			}
			// Enter key press
			 onKeyPress("enter",() => {
				 if(choiceFlag == false) {
					 choiceFlag = true
					 destroy(RepairBtn)
					 destroy(FightBtn)
					 destroy(arrow)

			switch(DoSituationTest(repairFlag,clientKey)){
				case 0:
				//choix reparer est juste
				repairCounter++
				play("audio_reparer")
				wait(0.4,()=>play("audio_piece"))
				wait(1,()=>play("audio_reparer"))
				wait(1.4,()=>play("audio_piece"))
				add([
				sprite("choix_reparer",{anim:"move"}),
				scale(1),
				anchor("center"),
				pos(center().x,center().y),
				lifespan(1.6),
			  ])

				wait(1.6, () => {
					add([
						 sprite("choix_bulle"),//, width: width() - 230
						 anchor("center"),
						 scale(1),
						 pos(center().x-10,BOTTOM+15),
						 "textBox"
					 ])
					 add([
					text("Bien joué!",{size:MEDIUMTXTSIZE,width:TXTWIDTH}),
					anchor("center"),
					pos(center().x,BOTTOM),
					color(MYPURPLE)
				])
				play("action_juste")})
			 // if you repair you get money
			 totalCoins = totalCoins + 10
				break;

				case 1: // Reparation mauvaix choix
				repairCounter++
				play("audio_reparer")
				wait(0.4,()=>play("audio_piece"))
				wait(1,()=>play("audio_reparer"))
				wait(1.4,()=>play("audio_piece"))
				add([
				sprite("choix_reparer",{anim:"move"}),
				scale(1),
				anchor("center"),
				pos(center().x,center().y),
				lifespan(1.6),
			  ])
				wait(2.2, () => {
					add([
						 sprite("choix_bulle"),//, width: width() - 230
						 anchor("center"),
						 scale(1),
						 pos(center().x-10,BOTTOM+15),
						 "textBox"
					 ])
				//commnet
				add([text("ça me fatigue...",{size:MEDIUMTXTSIZE,width:TXTWIDTH}),
					anchor("center"),
					pos(center().x,BOTTOM),
					color(MYPURPLE)
				])
			play("choix_faux")})

		 // if you hit you get experience
		 totalCoins = totalCoins + 10
			 break;

			 case 2: // Fight bon choix
			 fightCounter++
			 justifiedFightCounter++
			// animation
			play("hitSound")
			wait(0.8,()=>play("hitSound"))
			//wait(1.3,()=>play("ouinouin"))
			//wait(0.6,()=>play("extraBonus"))
			add([
			sprite("choix_frapper_juste",{anim:"hit"}),
			scale(1),
			anchor("center"),
			pos(center().x,center().y),
			lifespan(1.6),
		  ])

			wait(1.8, () => {
				add([
					 sprite("choix_bulle"),//, width: width() - 230
					 anchor("center"),
					 scale(1),
					 pos(center().x-10,BOTTOM+15),
					 "textBox"
				 ])
				 add([
				text("Dans ta gueule!",{size:MEDIUMTXTSIZE,width:TXTWIDTH}),
				anchor("center"),
				pos(center().x,BOTTOM),
				color(MYPURPLE)
			])
			play("action_juste")})
			// if you fight  you get experience
			totalStars = totalStars + 10
			break;

			case 3: // Fight mauvais choix
			fightCounter++
			play("hitSound")
			wait(0.3,()=>play("extraBonus"))
			wait(0.8,()=>play("hitSound"))
			wait(1.1,()=>play("extraBonus"))
			//wait(1.3,()=>play("ouinouin"))

			add([
			sprite("choix_frapper_juste",{anim:"hit"}),
			scale(1),
			anchor("center"),
			pos(center().x,center().y-25),
			lifespan(1.6),
			])
			wait(1.6, () => {
			//choix bulle de fond
			add([
				 sprite("choix_bulle"),//, width: width() - 230
				 anchor("center"),
				 scale(1),
				 pos(center().x-10,BOTTOM+15),
				 "textBox"
			 ])
			 add([
				text("Oups",{size:MEDIUMTXTSIZE,width:TXTWIDTH}),
				anchor("center"),
				pos(center().x,BOTTOM),
				color(MYPURPLE)
			])
		play("choix_faux")
	})

	 // if you hit you get experience
	 totalStars = totalStars + 10
		 break;
			}

	 }else{
		 //  Choice and correspondant anim have been done next client or end of day carton
		 // delete previous client
		 delete clientsList[clientKey]

		 if (clientCounter == 6){

			 go("Carton_Journalier",clientKey,jourIdx,totalCoins,totalStars, 10,10,1)

		 }else{
			 // increase client counter
			 clientCounter ++

			 go("atelier", jourIdx,totalCoins,totalStars,INITIALPOSITION,clientCounter)
		 }
	 }
			 })
}) // click replace by keyboard

scene("Carton_Journalier", (clientKey,jourIdx,totalCoins,totalStars, forcePercentIncrease,clientelePercentIncrease,isIncreaseTrue) => {
		add_bordure_map()
		play("carton")
		const TXTSIZEBILAN = TXTSIZE+3
		// FOND BILAN
		let textBox = add([
			sprite("carton_bilan"),//, width: width() - 230
			anchor("center"),
			scale(1),
			pos(center().x,center().y-55),
			"textBox"
		])
		// JOUR
		const bilanTxt = add([
			text("BILAN DU JOUR\n--------------\n"+repairCounter+" REPARATIONS\n"+fightCounter+" CLAQUES\n--------------\n6 CLIENTS", {font: "prstart", size:TXTSIZEBILAN}),color(MYPURPLE),
			pos(center().x-70, MAP_HEIGHT/4-20),
		])
		let coinsAnim = add([
			text("$ : ", {font: "prstart", size:TXTSIZEBILAN}),color(MYPURPLE),
			pos(center().x+45,  (MAP_HEIGHT/4)),
		])
		let starsAnim = add([
			text("* : ", {font: "prstart", size:TXTSIZEBILAN}),color(MYPURPLE),
			pos(center().x+45,  (MAP_HEIGHT/4)+14),
		])

		// compare the obtained statistics (fights and repairs) with the ideal situation
		function compareStats(justifiedFightCounter){
			let caseNumber
			console.log("In the compareStats function");
			console.log("justifiedFightCounter is :"+justifiedFightCounter);
			console.log("goal is :"+fightGoalsList[jourIdx-1]);
			console.log("fightCounter is :"+fightCounter);

			// we use the fight counter to make sure you didnt fight too much
			if(justifiedFightCounter == fightGoalsList[jourIdx-1] && fightCounter == fightGoalsList[jourIdx-1]){
				caseNumber = 0
			}
			if(fightCounter == fightGoalsList[jourIdx-1]+1 || justifiedFightCounter == fightGoalsList[jourIdx-1]-1){
				caseNumber = 1
			}
			// you fighted 2 times too much but hit all the ones you should ahve hit
			if(fightCounter == fightGoalsList[jourIdx-1]+2 || justifiedFightCounter == fightGoalsList[jourIdx-1]){
				caseNumber = 3
			}
			// you fighted two times not enough when you should have fighted
			if(justifiedFightCounter == fightGoalsList[jourIdx-1]-2){
				caseNumber = 2
			}
			// you fighted more than two times too much but hit all the ones you should have hit
			if(fightCounter > fightGoalsList[jourIdx-1]+2 && justifiedFightCounter == fightGoalsList[jourIdx-1]){
				caseNumber = 5
			}
			if(justifiedFightCounter < fightGoalsList[jourIdx-1]-2){
				caseNumber = 4
			}
			console.log("The number returned is"+caseNumber);
			return caseNumber
		}
		// based on the comparison of stats produce the right follow-up
		function bilanJournalier(caseNumber,jourIdx){
			console.log("The case number is"+caseNumber);
			const BOTTOMTEXT = BOTTOM-35
			// FOND BILAN
			 let bulleFond = add([
				sprite("carton_bulle"),//, width: width() - 230
				anchor("center"),
				scale(1),
				pos(center().x-10,BOTTOM-25),
				"textBox"
			])
			switch(caseNumber){

			// BONUS
			case 0 :
			// message
				add([text("Wouahhh quel superbe travail je fais!",
				{ size: TXTSIZE, width:TXTWIDTH, font:"joystix"}),color(MYPURPLE),scale(1),anchor("center"),pos(center().x,BOTTOMTEXT)])
			// instruction
				 add([
						text("(appuie sur enter pour retourner à l'atelier)", { size: TXTSIZE }),
						scale(1),anchor("center"),pos(center().x,BOTTOM+10),])
						onKeyPress("enter", () => {
							if(jourIdx==1){go("interactionJour1", jourIdx, totalCoins,totalStars,INITIALPOSITION)}
							if(jourIdx==2){go("interactionJour2", jourIdx, totalCoins,totalStars,INITIALPOSITION)}
							if(jourIdx==3){go("interactionJour3", jourIdx, totalCoins,totalStars,INITIALPOSITION)}
							if(jourIdx==4){go("interactionJour4", jourIdx, totalCoins,totalStars,INITIALPOSITION)}

						})

			break;
			// BASIC
			case 1 :
			add([text("J'ai fait du bon travail.",
				{ size: TXTSIZE,width:TXTWIDTH, font:"joystix"}),color(MYPURPLE),scale(1),anchor("center"),pos(center().x,BOTTOMTEXT)])
			// instruction
				add([
							text("(appuie sur enter pour retourner à l'atelier)", { size: TXTSIZE }),
							scale(1),anchor("center"),pos(center().x,BOTTOM+10),])
							onKeyPress("enter", () => {
								if(jourIdx==1){go("interactionJour1", jourIdx, totalCoins,totalStars,INITIALPOSITION)}
								if(jourIdx==2){go("interactionJour2", jourIdx, totalCoins,totalStars,INITIALPOSITION)}
								if(jourIdx==3){go("interactionJour3", jourIdx, totalCoins,totalStars,INITIALPOSITION)}
								if(jourIdx==4){go("interactionJour4", jourIdx, totalCoins,totalStars,INITIALPOSITION)}


							})
				break;
			case 2 :
			// BASIC with Burnout WARNING:=
			add([text("J'ai fait du bon travail, mais je suis épuiséex...",
				{ size: TXTSIZE,width:TXTWIDTH, font:"joystix"}),color(MYPURPLE),scale(1),anchor("center"),pos(center().x,BOTTOMTEXT)])
				// instruction
					 add([
							text("(appuie sur enter pour retourner à l'atelier)", { size: TXTSIZE }),
							scale(1),anchor("center"),pos(center().x,BOTTOM+10),])
							// next
							onKeyPress("enter", () => {
								if(jourIdx==1){go("interactionJour1", jourIdx, totalCoins,totalStars,INITIALPOSITION)}
								if(jourIdx==2){go("interactionJour2", jourIdx, totalCoins,totalStars,INITIALPOSITION)}
								if(jourIdx==3){go("interactionJour3", jourIdx, totalCoins,totalStars,INITIALPOSITION)}
								if(jourIdx==4){go("interactionJour4", jourIdx, totalCoins,totalStars,INITIALPOSITION)}


							})
							break;
			case 3 :
			// BASIC with Bankrupt WARNING:
				add([text("J'ai fait du bon travail, mais je ne gagne pas tant d'argent...",
					{ size: TXTSIZE, width:TXTWIDTH,font:"joystix"}),color(MYPURPLE),scale(1),anchor("center"),pos(center().x,BOTTOMTEXT)])
					// instruction
						 add([
								text("(appuie sur enter pour retourner à l'atelier)", { size: TXTSIZE }),
								scale(1),anchor("center"),pos(center().x,BOTTOM+10),])
				// next
				onKeyPress("enter", () => {
					if(jourIdx==1){go("interactionJour1", jourIdx, totalCoins,totalStars,INITIALPOSITION)}
					if(jourIdx==2){go("interactionJour2", jourIdx, totalCoins,totalStars,INITIALPOSITION)}
					if(jourIdx==3){go("interactionJour3", jourIdx, totalCoins,totalStars,INITIALPOSITION)}
					if(jourIdx==4){go("interactionJour4", jourIdx, totalCoins,totalStars,INITIALPOSITION)}


				})
				break;
			case 4 :
			// GAMEOVER BURNOUT
			add([text("Je suis riche mais epuiséex...\nC'est le burnout..",
				{ size: TXTSIZE,width:TXTWIDTH, font:"joystix"}),scale(1),color(MYPURPLE),anchor("center"),pos(center().x,BOTTOMTEXT)])
			wait(4,()=>go("Burnout"))
break;
			case 5 :
			// GAMEOVER BANKRUPT
			add([text("Je me suis bien amuséex!\nmais c'est la faillite...",
				{ size: TXTSIZE, font:"joystix"}),scale(1),anchor("center"),color(MYPURPLE),pos(center().x,BOTTOMTEXT)])
		  wait(7,()=>go("Bankrupt"))
			break;
		}
}

		// coins animation
		let pauseCoins = false;
		let pauseStars = false;
 		let updateInterval = 0.05;

 		let coinsAnimValue = coinsAnimValueList[jourIdx-1]; // start at total from previous day
		let starsAnimValue = starsAnimValueList[jourIdx-1]; // start at total from previous day
 		let timeFromLastUpdate = 0;
		console.log("Out of the update");
		console.log("jourIdx"+jourIdx);
		console.log(coinsAnimValue);
		console.log(starsAnimValue);

// source https://docs.replit.com/tutorials/kaboom/game-of-life-kaboom
		let statusUpdate = onUpdate(() => {
			if (pauseCoins == true && pauseStars == true){

				statusUpdate.cancel()
				// compare day status with goal and based on this go to different paths

				bilanJournalier(compareStats(justifiedFightCounter),jourIdx)
				return;
			}
			timeFromLastUpdate += dt();
			if (timeFromLastUpdate < updateInterval) return;
			timeFromLastUpdate = 0;
			if (coinsAnimValue>=totalCoins) {
				pauseCoins=true
			}else{
				coinsAnimValue++
				coinsAnim.text ="$ : "+coinsAnimValue+"\n"
			}
			if (starsAnimValue>=totalStars) {
				pauseStars=true
			}else{
				starsAnimValue++
				starsAnim.text ="* : "+starsAnimValue+"\n"
			}})

//			onDestroy("statusUpdate", () => console.log("Now there is no more update and I print smth ");)
	})

	scene("interactionJour2", (jourIdx,totalCoins,totalStars,position) => {
		//function instead of commander
		levelAtelier = add_atelier_map()
		//status
		addStatusBar(jourIdx,totalCoins,totalStars)

		let dialogInteraction2 =[
			["PNJ","Hello ! je suis en train de faire le tour du quartier et je me demandais si je pouvais poser une affiche ici?"],
			["M","Salut, oui ok tu peux la mettre sur le mur du fond."],
			["PNJ","Merci! c'est stylé que tu bosses ici!"],
			["PNJ","ha et t'es dac de me prêter un tournevis plat?"],
			["M","oui pas de soucis, voilà"],
			["PNJ","merci à bientôt!"],
		]

		// try with function
		interactionJour(jourIdx,levelAtelier,justifiedFightCounter,totalCoins,totalStars,
			{x:center().x-44,y:center().y-(3*16)},"perso_interaction_2",{x:16*4,y:16*7},dialogInteraction2,{x:16*2,y:16*5},true)
		})
	scene("interactionJour1", (jourIdx,totalCoins,totalStars,position) => {
			//function instead of commander
			levelAtelier = add_atelier_map()

			//status
			addStatusBar(jourIdx,totalCoins,totalStars)

			let dialogInteraction1 = [
				["pnj","Hé salut"],
				["m","Salut! désolée c'est fini pour aujourd'hui, il faut revenir demain..."],
				["pnj","oui, oui je venais pas pour réparer mon vélo..."],
				["m","heu ok, tu viens pour quoi alors?"],
				[" pnj","heu... ha oui! haha pardon. je viens te filer la clée que j'ai oublié de rendre quand j'ai arrêté de bosser ici. je suis un peu tête en l'air des fois."],
				["m","ah! merci"],
				["pnj","de rien, allé à la proch ciao ciao! heu, la sortie c'est par là hein."]
			]

			// try with function
			interactionJour(1,levelAtelier,justifiedFightCounter,totalCoins,totalStars,
				{x:center().x-2*16,y:center().y-(3*16)},"perso_interaction_1",{x:16*5,y:16*7},dialogInteraction1,{x:16*1.5,y:16*11},false)
				// without function
				// 		// add the mecanix// Add player game object
				// 		const colBox = 3
				// 		const player = add([
				// 			sprite("mecanix",{anim:"idle"}),
				// 			anchor("center"),
				// 			pos(center().x-2*16,center().y-(3*16)),//the default position is in front of the workshop
				// 			area({ shape: new Polygon([vec2(-colBox,-colBox+14),vec2(-colBox,0), vec2(colBox,0),vec2(colBox,-colBox+14)]) }),
				// 			body(),
				// 			scale(PERSOSCALE)
				// 		])
				// 		player.flipX = true
				//
				// 		// Add the other pers
				// 		const perso = levelAtelier.spawn([
				// 			sprite("perso_interaction_1",{anim:"walk_right"}),
				// 			anchor("center"),
				// 			pos(0,160),//the default position is in front of the workshop
				// 			area({ shape: new Polygon([vec2(-colBox,-colBox+14),vec2(-colBox,0), vec2(colBox,0),vec2(colBox,-colBox+14)]) }),
				// 			body(),
				// 			scale(PERSOSCALE),
				// 			agent({ speed: 80, allowDiagonals: true }),
				// 		],1,1)
				//
				// 		let aller = onKeyPress("enter",() => {
				// 			perso.setTarget(vec2(
				// 				16*5,//Math.floor((center().x+45) / TILE_WIDTH) * TILE_WIDTH + TILE_WIDTH / 2,
				// 				16*7//Math.floor((center().y-65)  / TILE_HEIGHT) * TILE_HEIGHT + TILE_HEIGHT / 2,
				// 			))
				// 		})
				// 		// let retour = onKeyPress("enter",() => { perso.setTarget(vec2(
				// 		// 		16*0,//Math.floor((center().x+45) / TILE_WIDTH) * TILE_WIDTH + TILE_WIDTH / 2,
				// 		// 		16*12//Math.floor((center().y-65)  / TILE_HEIGHT) * TILE_HEIGHT + TILE_HEIGHT / 2,
				// 		// 	))})
				// 		// retour.paused
				//
				// 	//once the aller is done
				// let firstTarget= 	perso.onTargetReached(()=>{
				//
				// let dialogInteraction1 = [
				// 			["pnj","Hé salut"],
				// 		["m","Salut! désolée c'est fini pour aujourd'hui, il faut revenir demain..."],
				// 		["pnj","oui, oui je venais pas pour réparer mon vélo..."],
				// 		["m","heu ok, tu viens pour quoi alors?"],
				// 		[" pnj","heu... ha oui! haha pardon. je viens te filer la clée que j'ai oublié de rendre quand j'ai arrêté de bosser ici. je suis un peu tête en l'air des fois."],
				// 		["m","ah! merci"],
				// 		["pnj","de rien, allé à la proch ciao ciao! heu, la sortie c'est par là hein."]
				// 		]
				// 			aller.paused =true
				//
				// 	// add dialog box
				// 	let textBox = add([
				// 		sprite("dialogbox"),//, width: width() - 230
				// 		anchor("center"),
				// 		pos(center().x,BOTTOM),
				// 		"textBox"
				// 	])
				// 	//initialization
				// 	let initDialog = dialogInteraction1.length
				// 	let levelDialog = dialogInteraction1
				//
				// 	// Text bubble
				// 	const txtWidth = 150; // Ideal Width
				// 	const txtMargins = 15;
				// 	let txt = add([
				// 		text("", { size:  TXTSIZE,  width: txtWidth }),//, width: width() - 230
				// 		anchor("center"),
				// 		pos(center().x,BOTTOM),
				// 		color(MYPURPLE),
				// 	])
				// 	// Update the on screen sprite & text
				// 	function updateDialog() {
				// 		const [ char, dialog ] = dialogInteraction1[curDialog]
				// 		console.log(dialog);
				// 		// Use a new sprite component to replace the old one
				// 	//	avatar.use(sprite(char))
				// 		// Update the dialog text
				// 		// mettre le texte lettre apres lettre
				// 		txt.text = dialog
				// 	}
				// 	//initialization
				// 	let curDialog = 0
				// 		updateDialog()
				// 	let dialogAction = onKeyPress("enter", () => {
				// 		// Cycle through the dialogs
				// 		curDialog = (curDialog + 1) % dialogInteraction1.length
				// 		if (curDialog==0){
				// 			// dialog finished, options to choose
				// 			dialogAction.paused = true
				// 			firstTarget.paused=true
				// 			play("audio_reussite")
				// 			destroy(textBox)
				// 			destroy(txt)
				// 			onKeyPress("enter",() => {
				// 				dialogAction.paused = true
				// 				firstTarget.paused=true
				// 				perso.flipX=true
				// 				let retour = perso.setTarget(vec2(
				// 					16*1,//Math.floor((center().x+45) / TILE_WIDTH) * TILE_WIDTH + TILE_WIDTH / 2,
				// 					16*11//Math.floor((center().y-65)  / TILE_HEIGHT) * TILE_HEIGHT + TILE_HEIGHT / 2,
				// 				))
				// 				console.log("Before the fade\n le jour "+jourIdx+"\n le justifiedFightCounter "+justifiedFightCounter+"\n la thune c'est "+totalCoins+"\n les stars "+totalStars)
				// 				perso.onTargetReached(()=>{
				// 					dialogAction.paused =true
				// 					let fadeOut = add([
				// 						pos(center().x, center().y-30),
				// 						anchor("center"),
				// 						color(BLACK),
				//     				rect(256, 256),
				//     				area(),
				// 						fadeIn(1),
				// 						opacity(1),
				// 					])
				// 					//to the next day
				// 					let newjourIdx = resetDayVariables(totalCoins,totalStars)
				// 					// door is open now
				// 					outdoorKey = true
				// 					console.log("apres le reset\n le jour"+newjourIdx+"\n le justifiedFightCounter "+justifiedFightCounter+"\n la thune c'est "+totalCoins+"\n les stars "+totalStars)
				// 				wait(1,()=>go("atelier",newjourIdx,totalCoins,totalStars,INITIALPOSITION))
				// 			})
				// 			}
				// 		)
				// 	}else{
				// 		updateDialog()
				// 	}
				// 	})
				// })
			})
	scene("interactionJour3", (jourIdx,totalCoins,totalStars,position) => {
		levelAtelier = add_atelier_map()
			//status
			addStatusBar(jourIdx,totalCoins,totalStars)


			let dialogInteraction3 = [
					["pnj","Coucou, excuse-moi c'est possible de te poser une question là?"],
					["m","Oui, dis-moi! "],
					["pnj","En fait je fais partie d'un collectif qui s'appelle Vélacyraptix... "],
					["m","Ah oui! J'en ai entendu parler. Vous faites des atelier de mécanique en mixité choisie sans hommes cisgenres nan?! "],
					["pnj","Oui c'est ca, on propose des moments pour apprendre à réparer et bricoler des vélos sans homme cisgenres. Le but c'est de limiter l'impact du patriarcat un ptit moment quoi..."],
					["m","C'est cool! C'est quand le prochain? "],
					["pnj","Et ben justement...on en a un ce soir mais on savait pas trop ou le faire... notre plan pour emprunter des outils est tombe a l'eau..Est-ce qu'on pourrait se mettre ici?"],
					["m","Oh... euh oui bien sur! Y'a tout ce qui faut et c'est super comme idée"],
					]

			// try with function
			interactionJour(3,levelAtelier,justifiedFightCounter,totalCoins,totalStars,
				{x:center().x-2*16,y:center().y-(3*16)}/*player postiion*/,"perso_interaction_3",{x:16*5,y:16*7},dialogInteraction3,{x:16*5,y:16*9},true)})

scene("interactionJour4", (jourIdx,totalCoins,totalStars,position) => {
	levelAtelier = add_atelier_map()
		//status
		addStatusBar(jourIdx,totalCoins,totalStars)


		let dialogInteraction4 = [
				["pnj","Hey, j'ai entendu qu'ici tous le mondes est pas le bienvenu... "],
				["m","T'entends quoi par la? "],
				["pnj","Bah que c'est un peu extreme d'exclure des gars, en plus il parait qu'on se ramasse des claques si on dit des trucs qui vous plaisent pas"],
				["m","Ah oui! "],
				["pnj","Bref faites gaffe  a vous ..."],
				]

		// try with function
		interactionJour(4,levelAtelier,justifiedFightCounter,totalCoins,totalStars,
			{x:center().x-2*16,y:center().y-(3*16)}/*player postiion*/,"perso_interaction_4",{x:16*5,y:16*7},dialogInteraction4,{x:16*1.5,y:16*11},true)})


// ADD GAME OVER SCENE
scene("Bankrupt", (jourIdx,totalCoins,totalStars) => {
	play("audio_fete")
	add_bordure_map()
	// add party mood
	const raveParty = add([
		sprite("atelier_rave",{anim:"idle"}),
		anchor("center"),
		scale(1),
		pos(center().x-10,BOTTOM-25),
	])
	// Titre
	const title = add([
		text("GAME OVER!\n ", { size: LARGETXTSIZE, font:"joystix" }),
		scale(1),
		anchor("center"),
		pos(center().x,center().y-0.6*(MAP_HEIGHT/2))
	])

	// Recommencez le jeu
	add([
				text("(recharge la page pour recommencer le jeu)", { size: TXTSIZE }),
				scale(1),anchor("center"),pos(center().x,BOTTOM+5),])

	onKeyPress(() => {
			  				    quit()
			  				})
})

scene("Burnout", (jourIdx,totalCoins,totalStars) => {
	play("audio_burnout")
	add_atelier_map()
	// Titre
	const title = add([
		text("GAME OVER!\n ", { size: LARGETXTSIZE, font:"joystix" }),
		scale(1),
		anchor("center"),
		pos(center().x,center().y-0.3*(MAP_HEIGHT/2))
	])

	// Recommencez le jeu
	add([
				text("(recharge la page pour recommencer le jeu)", { size: TXTSIZE }),
				scale(1),anchor("center"),pos(center().x,BOTTOM+5),])

	onKeyPress(() => {
				    quit()
				})
})

function start() {
		// Start with the "game" scene, with initial parameters
	//	go("atelier", 1, 85,0/*totalCoins*/,50,INITIALPOSITION)
//go("interactionJour4",4,totalCoins,totalStars,INITIALPOSITION)
 go("start",jourIdx,totalCoins,totalStars/*force*/,INITIALPOSITION)
//go("outside",2,30,30,INITIALPOSITION)	//go("interactionJour1", (1,0,40,20,INITIALPOSITION))//go("clientDialog",1,75,100/*totalCoins*/,50/*force*/)
 //justifiedFightCounter=4
 //go("Carton_Journalier","client1",1,30,30,10,10,1)
	}
start()
