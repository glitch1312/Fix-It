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
loadAseprite("choix_frapper_v2", "images/choix_frapper_v2.png", "images/choix_frapper_v2.json")
loadAseprite("choix_reparer", "images/choix_reparer.png", "images/choix_reparer.json")
loadAseprite("atelier_rave", "images/atelier_rave.png", "images/atelier_rave.json")
loadAseprite("exte_banc_perso", "images/exte_banc_perso.png", "images/exte_banc_perso.json")
loadAseprite("exte_arbre_anime", "images/exte_arbre_anime.png", "images/exte_arbre_anime.json")
loadAseprite("start_fond", "images/start_fond.png", "images/start_fond.json")
loadAseprite("start_fond", "images/start_fond.png", "images/start_fond.json")
loadAseprite("nuit_Z","images/nuit_Z.png","images/nuit_Z.json")
loadAseprite("mecanix_chat","images/mecanix_chat.png","images/mecanix_chat.json")
loadAseprite("bonus_chips","images/bonus_chips.png","images/bonus_chips.json")
loadAseprite("bonus_boites","images/bonus_boites.png","images/bonus_boite.json")


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
loadAseprite("exte_sirius","images/exte_sirius.png","images/exte_sirius.json")
loadAseprite("croquettes","images/croquettes.png","images/croquettes.json")
loadAseprite("atelier_mur_fond","images/atelier_mur_fond.png","images/atelier_mur_fond.json")
//loadSprite("atelier_mur_fond","images/atelier_mur_fond.png")


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
loadSprite("dialogbox","images/talk_boite.png")
loadSprite("wrench","images/Sprite-tool-wrench.png")
loadAseprite("demontepneu","images/demonte_pneu.png","images/demonte_pneu.json")
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
loadSprite("atelier_bibliotheque","images/atelier_bibliotheque.png")
loadSprite("atelier_cover","images/atelier_cover.png")
loadSprite("atelier_cafe","images/atelier_cafe.png")

loadSprite("atelier_armoire_kc","images/atelier_armoire_kc.png")
loadSprite("atelier_clee","images/atelier_clee.png")
loadSprite("atelier_poster2_grand","images/atelier_poster2_grand.png")
loadSprite("exte_banc","images/exte_banc.png")
loadSprite("exte_scudo","images/exte_scudo.png")
loadSprite("velo_sur_pied_vide","images/atelier_velo_sur_pied_vide1.png")
loadSprite("tile_exte_chemin_fin_horizontal","images/tile_exte_chemin_fin_horizontal.png")
loadSprite("tile_exte_chemin_fin_verticall","images/tile_exte_chemin_fin_verticall.png")






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
//audio
let musicFond = play("page_debut", {
    volume: 0.8,
    loop: true
})
musicFond.paused = true
let interrupt = false
let totalCoins = 0
let totalStars = 0
let interactionDechetFlag = false // no interaction with dechetterie perso
let flyerDechetFlag = false
let helpDechetFlag = false
let dialogFinished = false
let veloTag = false // no bikePost yet
let posterFlag = false
let flyersFlag = false
let flyersTaken = false
let croquettesFlag= false
let croquettesGivenFlag = false
let chipsFlag = false
let chipsGivenFlag = false
let boiteOutilsFlag = false
let deriveChaineGained = false
let showClients = true
let jumpToHitFlag = false
let jourIdx = 1 // game starts at day 1
let clientCounter = 1 // no client interaction at start
let fightCounter = 0
let justifiedFightCounter = 0
let repairCounter = 0
let fightGoalsList = [4,4,2,2]
let outdoorKey = false
let coinsAnimValueList = [0] //list for starting bilan journalier
let starsAnimValueList = [0]


const MAP_WIDTH = 256
const MAP_HEIGHT = 256
const BOTTOM = 3/4*256
const TXTSIZE = 8
const TXTWIDTH = 150
const LARGETXTSIZE = 24
const MEDIUMTXTSIZE = 16
const PERSOSCALE = 1.4
const INITIALPOSITION = {x:center().x+20,y:MAP_HEIGHT/2+40}//position in atelier at start, and at any return from other scenes
const CLIENTLINEPOSITION =  {x:center().x,y:MAP_HEIGHT/2+30}
//palette
const MYPINK = rgb(222, 135,146)
const MYBLUE =rgb(52, 172, 186)
const MYYELLOW = rgb(255,224,126)
const MYPURPLE = rgb(79,30,69)
const MYDARKPINK = rgb(238, 106,124)
const MYDARKBLUE = rgb(99,138,159)
const MYLIGHTBLUE = rgb(138,162,173)

//GLOBAL


// LEVELS INITIALIZATION with JSON
let INITIALCLIENTSLIST = {
 "client1":{
		 spriteName:"client_1_petit",
		 bigSpriteName:"client_1_grand",
		 dialogs:[
			 [ "client_1_grand", "Bonjour!" ],
			 [ "mecanix_en_pied", "Bonjour, comment je peux vous aider ?"],
			 [ "client_1_grand", "Je dois changer les câbles des freins." ],
			 [ "mecanix_en_pied", "D'accord, vous voulez me donner votre vélo?" ],
			 [ "client_1_grand", "Je le donnerai quand le mécano aura le temps de s'en occuper direct, j'en ai besoin, vous me donnez le rendez-vous?" ],
			 [ "mecanix_en_pied", "Mais c'est moi la mécano..." ],
		 ],
		 isSexist: true,
 },
 "client2":{
		 spriteName:"client_2_petit",
		 bigSpriteName:"client_2_grand",
		 dialogs:[
			 [ "client_2_grand", "Salut, y'a quelque chose qui va pas avec mon vélo." ],
			 [ "mecanix_en_pied", "Okay! Je vois que ta roue est voilée."],
			 [ "client_2_grand", "Non je pense plutôt que c'est un truc au niveau de la chaine." ],
			 [ "mecanix_en_pied", "C'est sûr que ta roue est voilée. Elle touche le frein de façon irregulière." ],
			 [ "client_2_grand", "Attends, je vais te montrer, quand on fait tourner les pédales, ça fais tourner la chaine tu vois?"],
			 [ "mecanix_en_pied", "Oui, je comprends assez bien la mécanique..." ],
		 ],
		 isSexist: true,

 },
 "client3":{
		 spriteName:"client_3_petit",
		 bigSpriteName:"client_3_grand",
		 dialogs:[
			 [ "mecanix_en_pied", "Bonjour, dites-moi tout!" ],
			 [ "client_3_grand", "Je veux changer les plaquettes des mes freins à disques."],
			 [ "mecanix_en_pied", "Bonne idée, elles sont usées?" ],
			 [ "client_3_grand", "Nan mais ça couine...alors j'aimerais bien les changer." ],
			 [ "mecanix_en_pied", "D'accord, je te propose quand même d'essayer de les nettoyer d'abord."]
		 ],
		 isSexist: false,

 },
 "client4":{
		 spriteName:"client_4_petit",
		 bigSpriteName:"client_4_grand",
		 dialogs:[
			 [ "mecanix_en_pied", "Salut, qu'est-ce qu'il se passe?" ],
			 [ "client_4_grand", "Je cherche le patron, j'ai un problème avec mon vélo."],
			 [ "mecanix_en_pied", "Je peux vous répondre, dites-moi tout!" ],
			 [ "client_4_grand", "Ah, vous êtes mécanicienne?" ],
			 [ "mecanix_en_pied", "Oui."],
			 [ "client_4_grand", "C'est surprenant! Bravo!" ],
			 [ "mecanix_en_pied", "Merci..."],
		 ],
		 isSexist: true,

 },
 "client5":{
		 spriteName:"client_5_petit",
		 bigSpriteName:"client_5_grand",
		 dialogs:[
			 [ "client_5_grand", "Bonjour, est-ce que c'est possible de changer mon pneu?"],
			 [ "mecanix_en_pied", "Heu oui, mais je sais pas trop les réf parce que c'est pas comme les vélos." ],
			 [ "client_5_grand", "Aucun soucis, j'ai pris du matos avec et j'ai une roue de rechange, je vais t'expliquer..." ],
		 ],
		 isSexist: false,

 },
 "client6":{
		 spriteName:"client_6_petit",
		 bigSpriteName:"client_6_grand",
		 dialogs:[
			 [ "client_6_grand", "Bonjour, comment ça va aujourd'hui? Je vous amène mon vélo pour un check général de printemps héhé..."],
			 [ "mecanix_en_pied", "Bonjour, parfait je peux m'en occuper vous voulez me le donner?" ],
			 [ "client_6_grand", "Attendez je vais vous le porter il est un peu lourd..." ],
		 ],
		 isSexist: true,

 },
 "client7":{
		 spriteName:"client_7_petit",
		 bigSpriteName:"client_7_grand",
		 dialogs:[
			 [ "mecanix_en_pied", "Bonjour." ],
			 [ "client_7_grand", "J'aurais besoin d'un petit service, vous pourriez faire ca?"],
			 [ "mecanix_en_pied", "Oui, bien sûr." ],
			 [ "client_7_grand", "Parfait!" ],
		 ],
		 isSexist: false,

 },
 "client8":{
		 spriteName:"client_8_petit",
		 bigSpriteName:"client_8_grand",
		 dialogs:[
			 [ "client_8_grand", "Salut, il est où le mecano?"],
			 [ "mecanix_en_pied", "C'est moi." ],
			 [ "client_8_grand", "Ah. Tu sais changer la guidoline?" ],
			  [ "mecanix_en_pied", "Oui oui..." ],
		 ],
		 isSexist: true,

 },
 "client9":{
		 spriteName:"client_9_petit",
		 bigSpriteName:"client_9_grand",
		 dialogs:[
			 [ "client_9_grand", "Salut beauté, ça va?"],
			 [ "mecanix_en_pied", "Mouais... il a quoi ton vélo? Je vois déjà que ton guidon est désaxé." ],
			 [ "client_9_grand", "Ha ok. Ça fait longtemps que tu travailles ici?" ],
			 [ "mecanix_en_pied", "C'est mon deuxième jour." ],
			 [ "client_9_grand",  "Tu finis à quelle heure je t'offre un verre!" ],
			 [ "mecanix_en_pied", "..." ],
		 ],
		 isSexist: true,

 },
 "client10":{
		 spriteName:"client_10_petit",
		 bigSpriteName:"client_10_grand",
		 dialogs:[
			 [ "mecanix_en_pied", "Bonjour!" ],
			 [ "client_10_grand", "Bonjour! J'ai cassé mon dérailleur."],
			 [ "mecanix_en_pied", "Dac, on peut le remplacer avec de l'occasion ou en commander un." ],
			 [ "client_10_grand", "D'occas si possible...j'ai pas envie d'attendre." ],
		 ],
		 isSexist: false,

 },
 "client11":{
		 spriteName:"client_11_petit",
		 bigSpriteName:"client_11_grand",
		 dialogs:[
			 [ "mecanix_en_pied", "Salut, qu'est-ce qui se passe?" ],
			 [ "client_11_grand", "Salut, mon vélo freine plus."],
			 [ "mecanix_en_pied", "Oké je vais checker ça." ],
			 [ "client_11_grand", "Est-ce que stan est là? Je préfère que ça soit lui qui le fasse." ],
			 [ "mecanix_en_pied", "Il est pas là..."],
		 ],
		 isSexist: true,

 },
 "client12":{
		 spriteName:"client_12_petit",
		 bigSpriteName:"client_12_grand",
				 dialogs:[
			 [ "client_12_grand", "Hello."],
			 [ "mecanix_en_pied", "Salut." ],
			 [ "client_12_grand", "Ça fait plaisir de voir une femme ici!" ],
			 [ "mecanix_en_pied", "Yessay... et donc ce vélo?" ],
			 [ "client_12_grand", "Le voilà. Hé pis vous êtes quand même plus jolie avec le sourire!" ],
		 ],
		 isSexist: true,
 },
 "client13":{
		 spriteName:"client_13_petit",
		 bigSpriteName:"client_13_grand",
		 dialogs:[
			 [ "client_13_grand", "Hé on dirait que le lobby LGBTQIA+ est venu refaire votre déco là..."],
			 [ "mecanix_en_pied", "Euh...je peux faire quelque chose pour vous? "],
			 ["client_13_grand", "Vous vendez des selles? Celle-ci a un trou..."],
			 [ "mecanix_en_pied", "Oui ok, j'en ai pas en stock mais je peux en commander une si vous voulez?" ],
			 [ "client_13_grand", "Ouais bof... " ],
		 ],
		 isSexist: true,
 },
 "client14":{
		 spriteName:"client_14_petit",
		 bigSpriteName:"client_14_grand",
		 dialogs:[
			 [ "client_14_grand", "Bonjour! J'ai cassé un rayon sur ma roue avant..."],
			 [ "mecanix_en_pied", "Okay, je vais le changer et dévoiler la roue s'il-y-a besoin." ],
			 [ "client_14_grand", "Okay mais j'espère que ce sera pas aussi cher que la dernière fois!" ],
		 ],
		 isSexist: false,
 },
 "client15":{
		 spriteName:"client_15_petit",
		 bigSpriteName:"client_15_grand",
		 dialogs:[
			 [ "mecanix_en_pied", "Bonjour bonjour!" ],
			 [ "client_15_grand", "Hello, c'est possible de réparer mon vélo?"],
			 [ "mecanix_en_pied", "Oui bien sûr, il a quoi?" ],
			 [ "client_15_grand", "Je sais pas, il est tout foutu il faut le réparer." ],
			 [ "mecanix_en_pied", "Okay je vais regarder." ],
			 [ "client_15_grand", "Merci, mais il est vraiment vieux et en mauvais état..." ],
			 [ "mecanix_en_pied", "Pas de soucis, tu me le passes?" ],
			 [ "client_15_grand", "Oui." ],
		 ],
		 isSexist: false,
 },
 "client16":{
		 spriteName:"client_16_petit",
		 bigSpriteName:"client_16_grand",
		 dialogs:[
			 [ "mecanix_en_pied", "Salut." ],
			 [ "client_16_grand", "Salut! Il y a un truc qui marche pas bien avec mon vélo"],
			 [ "mecanix_en_pied", "Tu veux m'expliquer plus en détail?" ],
			 [ "client_16_grand", "Oui, quand je roule surtout à la montée il se passe des trucs bizarres avec les vitesses..." ],
			 [ "mecanix_en_pied", "C'est sûrement la chaine, je peux m'en charger." ],
		 ],
		 isSexist: false,
 },
 "client17":{
		 spriteName:"client_17_petit",
		 bigSpriteName:"client_17_grand",
				 dialogs: [
             [ "client_17_grand", "Hello."],
             [ "mecanix_en_pied", "Salut!" ],
             [ "client_17_grand", "C'est très politique comme déco quand même." ],
             [ "mecanix_en_pied", "Je pense que c'est nécessaire." ],
             [ "client_17_grand", "Ah bon... je pensais que c'était une nouvelle mode..." ],
              [ "client_17_grand", "C'est possible de changer mes câbles de freins?" ],
         ],
		 isSexist: true,
 },
 "client18":{
	 spriteName:"client_18_petit",
	 bigSpriteName:"client_18_grand",
	 dialogs :[
		 ["client_18_grand","Salut! Merci pour le tournevis ça m'a bien aidé."],
		 ["mecanix_en_pied","Hey, pas de soucis! Merci de le ramener surtout! Ça a marché comme tu voulais?"],
		 ["client_18_grand","J'ai réussi à faire certains trucs, mais y'a des choses qui sont trop compliquées je crois, ça me ferait plaisir d'apprendre à l'occas mais je suis pas toujours à l'aise avec les trucs manuels... tu voudrais bien jeter un oeil ?"],
	 ]
	 ,
	 isSexist: false,
 },
 "client19":{
		 spriteName:"client_19_petit",
		 bigSpriteName:"client_19_grand",
		 dialogs: [
[ "client_19_grand", "Hello."],
     [ "mecanix_en_pied", "Salut!" ],
     [ "client_19_grand", "Ça fait plaisir de voir une femme travailler ici, moi je trouve ça super ! Mais il paraît qu'il y'a des moments où c'est pas ouvert à tout le monde... c'est un peu limite quand même non?" ],
     [ "mecanix_en_pied", "Je pense que c'est nécessaire, et puis se réunir entre personnes qui vivent des trucs similaires c'est un truc qui se fait depuis longtemps." ],
     [ "client_19_grand", "Mais c'est un peu une mode le féminisme, moi je suis plutôt humaniste... tout le monde est égal quoi..." ],
          [ "client_19_grand", "Bref, je viens pour mon vélo en fait hein, hahaha! c'est possible de régler les vitesses?" ],
    ],
		 isSexist: true,
 },
 "client20":{
		 spriteName:"client_20_petit",
		 bigSpriteName:"client_20_grand",
			 dialogs:[
				 [ "mecanix_en_pied", "Salut" ],
				 [ "client_20_grand", "Bonjour Madame!" ],
				 [ "mecanix_en_pied", "Euh... je préfère que vous disiez pas Madame." ],
				 [ "client_20_grand", "Rohlalala...on peut plus rien dire." ],
				 [ "mecanix_en_pied", "C'est juste que vous ne me connaissez pas et en plus monsieur, madame c'est très binaire." ],
				 [ "client_20_grand", "Oui bon vous êtes pas un Monsieur nan plus.." ],
				 [ "mecanix_en_pied", "Peut-être que je suis ni l'un ni l'autre..." ],
			 ],
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
			 [ "client_21_grand", "Ha zut... bon et meuler des pièces, c'est possible?" ],
			 [ "mecanix_en_pied", "Oui à fond!" ],
			 [ "client_21_grand", "Trop bien!" ],
		 ],
		 isSexist: false,
 },
 "client22":{
		 spriteName:"client_22_petit",
		 bigSpriteName:"client_22_grand",
		 	 dialogs:[
		 		 [ "mecanix_en_pied", "Hello!" ],
		 		 [ "client_22_grand", "Salut, je viens changer mes pédales."],
		 		 [ "mecanix_en_pied", "Yes, ça marche." ],
		 		 [ "client_22_grand", "Je voulais vous demander vous faites aussi des ateliers qu'entre gars?" ],
		 		 [ "mecanix_en_pied", "..." ],
		 		 [ "client_22_grand", "..." ],
		 	 ],
		 isSexist: true,
 },
 "client23":{
		 spriteName:"client_23_petit",
		 bigSpriteName:"client_23_grand",
		 dialogs:[
             [ "mecanix_en_pied", "Hello!" ],
             [ "client_23_grand", "Coucou, est-ce que tu peux m'aider j'ai commandé une nouvelle cassette."],
             [ "mecanix_en_pied", "Oui, évidemment."],
             [ "client_23_grand", "Je sais pas trop comment la changer par contre..."],
             [ "mecanix_en_pied", "On peut faire ça ensemble."],
             [ "client_23_grand", "Trop cool!" ],
         ]
,
		 isSexist: false,
 },
 "client24":{
		 spriteName:"client_24_petit",
		 bigSpriteName:"client_24_grand",
		 dialogs:[
            [ "mecanix_en_pied", "Hello!" ],
             [ "client_24_grand", "J'ai mes freins qui freinent plus..."],
             [ "mecanix_en_pied", "Oh je vois, c'est des freins à disques?" ],
             [ "client_24_grand", "Oui, je pense qu'il faut faire une purge mais j'ai jamais fait ça." ],
             [ "mecanix_en_pied", "Si tu veux je peux t'apprendre en le faisant avec toi." ],
             [ "client_24_grand", "Oui d'accord." ],
         ],
		 isSexist: false,
 },
}
// ------ Boucle de Gameplay ------- //
// ------ Start --------------------------------------------------- //
scene("start",() => {

	// in case of a restart
	 totalCoins = 0
	 totalStars = 0
	 interactionDechetFlag = false // no interaction with dechetterie perso
	 flyerDechetFlag = false
	 helpDechetFlag = false
	 dialogFinished = false
	 veloTag = false // no bikePost yet
	 posterFlag = false
	 flyersFlag = false
	 flyersTaken = false
	 showClients = true
	 croquettesFlag= false
	 croquettesGivenFlag = false
	 chipsFlag = false
	 chipsGivenFlag = false
	 boiteOutilsFlag = false
	 jourIdx = 1 // game starts at day 1
	 clientCounter = 1 // no client interaction at start
	 fightCounter = 0
	 justifiedFightCounter = 0
	 repairCounter = 0
	 fightGoalsList = [4,4,2,3]
	 outdoorKey = false
	 coinsAnimValueList = [0] //list for starting bilan journalier
	 starsAnimValueList = [0]
	 clientsList = INITIALCLIENTSLIST


		add_bordure_map()
		// image de fond

		const fond = add([
			sprite("start_fond", {anim:"idle"}),
			scale(1),
			anchor("center"),
			pos(center().x,MAP_HEIGHT/2)
		])
		// Titre
		const title = add([
			text("Fix it !", { size: LARGETXTSIZE, font:"joystix" ,width:MAP_WIDTH-64}),
			scale(1),
			anchor("center"),
			pos(center().x+5,MAP_HEIGHT/2-0.6*(MAP_HEIGHT/2)),
			color(MYLIGHTBLUE)
		])
		// But
		const but = add([
			text("Nouvel atelier de mécanique vélo!\nAttention, cet atelier ne supporte aucune remarques sexiste! \nSurvivra-t'il?",
			{ size: TXTSIZE+2, font:"prstart" , width:MAP_WIDTH-64}),
			scale(1),
			anchor("center"),
			pos(center().x+5,MAP_HEIGHT/2-0.2*(MAP_HEIGHT/2)),
		color(MYLIGHTBLUE)
		])
		// Instructions
		const instructions = add([
			text("Utilise les touches fléchées pour te déplacer et la toucher enter pour interagir", { size: TXTSIZE+2,align:"center", font:"prstart",width:TXTWIDTH+50}),
			scale(1),
			anchor("center"),
			pos(center().x,MAP_HEIGHT/2+5.7*16),
			color(MYDARKBLUE)
		])
		// lancer le jeu
		onKeyPress("enter", () => {

			console.log(clientsList);
			go("atelier", jourIdx,totalCoins,totalStars,INITIALPOSITION,clientCounter)
		})
})


	// INVENTORY
	// state can be : unavailable,available, owned
	let inventory = {
		"Clé":	{
			spriteName : "atelier_clee",
			state: "available",
			cost: "10",

		},
		"Stand pour vélo #1":	{
			spriteName : "velo_sur_pied_vide",
			state: "available",
			cost: "30",

		},
		"Stand pour vélo #2":	{
			spriteName : "velo_sur_pied_vide",
			state: "available",
			cost: "30",

		},
		"Démonte-pneu":	{
			spriteName : "Sprite_demontepneu",
			state: "available",
			cost: "10",
		},
		"Croquettes":	{
			spriteName : "croquettes",
			state: "available",
			cost: "10",

		},
		"Chips":	{
			spriteName : "bonus_chips",
			state: "available",
			cost: "10",
		},
		"Boîte à outils":	{
			spriteName : "bonus_boites",
			state: "available",
			cost: "10",
		},
		// "Tournevis":	{
		// 	spriteName : "sprite_tournevis",
		// 	state: "available",
		// 	cost: "10",
		//
		// },

		// "Clef ":	{
		// 	spriteName : "sprite_clefmonte",
		// 	state: "available",
		// 	cost: "10",
		//
		// },

		"Dérive-chaine":	{
			spriteName : "sprite_demontechaine",
			state: "available",
			cost: "25",

		},
		// "Clé métrique de 5mm":	{
		// 	spriteName : "Sprite_clef",
		// 	state: "available",
		// 	cost: "30",
		//
		// },
		// "Double clé de 5mm":	{
		// 	spriteName : "Sprite-tool-wrench",
		// 	state: "available",
		// 	cost: "30",
		//
		// // },
		//
		// "Clé à pédale":	{
		// 	spriteName : "Sprite_clepedale",
		// 	state: "available",
		// 	cost: "30",
		//
		// },
		//
		// "Clé à cliquet":	{
		// 	spriteName : "Sprite_cliket",
		// 	state: "available",
		// 	cost: "20",
		//
		// },
		// "Pince":	{
		// 	spriteName : "sprite_pince",
		// 	state: "unavailable",
		// 	cost: "10",
		//
		// },
		// "Sprite_marteau":	{
		// 	spriteName : "Sprite_marteau",
		// 	state: "unavailable",
		// 	cost: "25",
		//
		// },
		// "Fouet à chaine":	{
		// 	spriteName : "Sprite_fouet",
		// 	state: "unavailable",
		// 	cost: "60",
		//
		// },
		// "Ensemble de clé":	{
		// 	spriteName : "sprite_clee6pans",
		// 	state: "unavailable",
		// 	cost: "40",
		//
		// },
	}

	// list of initial speed for the repair game
	//const speedMin_List = [35,40,60,75]

//end ofscene start
// --FUNCTIONS-- //
function DoSituationTest(repairFlag,clientKey){
	if(repairFlag==true && clientsList[clientKey].isSexist==false){return 0}
	if(repairFlag==true && clientsList[clientKey].isSexist==true){return 1}
	if(repairFlag==false && clientsList[clientKey].isSexist==true){return 2}
	if(repairFlag==false && clientsList[clientKey].isSexist==false){return 3}
}
function addBonus(textBonus,spriteName,inventoryKeyName){//change text
			add([
				text(textBonus,{ size: TXTSIZE, width:TXTWIDTH, font:"joystix"}),
				color(MYBLUE),scale(1),anchor("center"),pos(center().x,BOTTOM-35)
				])
			add([
				sprite(spriteName,{anim:"shine"}),
				scale(1.4),
				area(),
				pos(center().x,MAP_HEIGHT/2-4*16),
				anchor("center"),
				outline(4),
				])
			inventory[inventoryKeyName].state = "owned"
}
function goInteraction(jourIdx,totalCoins,totalStars){
	if(jourIdx==1){go("interactionJour1", jourIdx, totalCoins,totalStars,INITIALPOSITION)}
	if(jourIdx==2){go("interactionJour2", jourIdx, totalCoins,totalStars,INITIALPOSITION)}
	if(jourIdx==3){go("interactionJour3", jourIdx, totalCoins,totalStars,INITIALPOSITION)}
	if(jourIdx==4){go("interactionJour4", jourIdx, totalCoins,totalStars,INITIALPOSITION)}
}
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
			showClients = false //by default clients aren't shown before necessary interactions
			repairCounter = 0
			fightCounter = 0
			justifiedFightCounter = 0
			jourIdx = jourIdx +1 // next day
			console.log("in the reset function the day is " +jourIdx)
			return jourIdx;
		}

// Function to automatixe the path and dialog for endoftheday interaction
function interactionJour(jourIdx,levelAtelier,justifiedFightCounter,totalCoins,totalStars,
	playerPosition/*{x:,y:}*/,persoSprite,target1/*{x:,y:}*/,dialogInteractionList,target2){
	let waitTime = 0.3
	// map and status are already loaded
	const colBox = 3
	let mecanixSprite = "mecanix"
	if (croquettesGivenFlag == true ){mecanixSprite = "mecanix_chat"}


	// Add the other pers
	const perso = levelAtelier.spawn([
		sprite(persoSprite,{anim:"walk_right"}),
		anchor("center"),
		pos(0,160),//the default position is in front of the workshop
		area({ shape: new Polygon([vec2(-colBox,-colBox+14),vec2(-colBox,0), vec2(colBox,0),vec2(colBox,-colBox+14)]) }),
		body(),
		scale(PERSOSCALE),
		agent({ speed: 80, allowDiagonals: true }),
			],
	1,1)
	const player = add([
		sprite(mecanixSprite,{anim:"idle"}),
		anchor("center"),
		pos(playerPosition.x,playerPosition.y),
		area({ shape: new Polygon([vec2(-colBox,-colBox+14),vec2(-colBox,0), vec2(colBox,0),vec2(colBox,-colBox+14)]) }),
		body(),
		scale(PERSOSCALE)
	])
		player.flipX = true
	let aller = wait(0.5,()=>{perso.setTarget(vec2(
			target1.x,//Math.floor((center().x+45) / TILE_WIDTH) * TILE_WIDTH + TILE_WIDTH / 2,
			target1.y//Math.floor((MAP_HEIGHT/2-65)  / TILE_HEIGHT) * TILE_HEIGHT + TILE_HEIGHT / 2,
		))})
	//once the aller is done
  let firstTarget= 	perso.onTargetReached(()=>{
	let dialogInteraction1 = dialogInteractionList
	// add dialog box
	let textBox = add([
		sprite("dialogbox"),//, width: width() - 230
		anchor("center"),
		pos(center().x-8,BOTTOM),
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
		pos(center().x-8,BOTTOM),
		color(MYPURPLE),
	])
	// Update the on screen sprite & text
	function updateDialog(txtBox) {
		const [ char, dialog ] = dialogInteraction1[curDialog]
		//console.log(dialog);
		// Use a new sprite component to replace the old one
		//avatar.use(sprite(char))
		// Update the dialog text
		// mettre le texte lettre apres lettre
		txt.text = dialog
		//txt.pos.x = center().x -8+ (curDialog%2)*15
		//txtBox.pos.x = center().x-8 + (curDialog%2)*15
		if(curDialog%2==0){
			txt.color=MYPURPLE
		}else {
			txt.color = MYBLUE
		}
	}
	//initialization
	let curDialog = 0
	updateDialog(textBox)
	let dialogAction = onKeyPress("enter", () => {
		// Cycle through the dialogs
		curDialog = (curDialog + 1) % dialogInteraction1.length
		//console.log(curDialog);
		if (curDialog==0){
			// dialog finished, options to choose
			dialogAction.paused = true
			firstTarget.paused=true
			// object gained animation
			// day one: key gained
			if (jourIdx==1){
				play("audio_reussite") //indicate that an object has been gained
				add([
					sprite("atelier_clee"),
					scale(1),
					area(),
					pos(player.pos),
					anchor("center"),
					outline(4),
					move(UP,100),
				])
				// now the object is owned in the INVENTORY
				inventory["Clé"].state ="owned"
			}
			destroy(textBox)
			destroy(txt)
			let lastKeyPress = onKeyPress("enter",() => {
				lastKeyPress.paused = true
				dialogAction.paused = true
				firstTarget.paused=true
				perso.flipX=true
				let retour = perso.setTarget(vec2(
					target2.x,//Math.floor((center().x+45) / TILE_WIDTH) * TILE_WIDTH + TILE_WIDTH / 2,
					target2.y//Math.floor((MAP_HEIGHT/2-65)  / TILE_HEIGHT) * TILE_HEIGHT + TILE_HEIGHT / 2,
				))

				console.log("Before the fade\n le jour "+jourIdx+"\n le justifiedFightCounter "+justifiedFightCounter+"\n la thune c'est "+totalCoins+"\n les stars "+totalStars)
				perso.onTargetReached(()=>{
					//console.log("Target reached")
					dialogAction.paused =true

					// day two
					if (jourIdx==2){
						let poster = add([
							sprite("atelier_poster"),
							pos(center().x-(6.5*16),MAP_HEIGHT/2-(5.5*16))
						])
						posterFlag = true
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
										pos(MAP_WIDTH/2-7*16,MAP_HEIGHT/2+2*16),//the default position is in front of the workshop
									area({ shape: new Polygon([vec2(-colBox,-colBox+14),vec2(-colBox,0), vec2(colBox,0),vec2(colBox,-colBox+14)]) }),
									body(),
									scale(PERSOSCALE),
									agent({ speed: 80, allowDiagonals: true }),],1,1)

									const flinta4 = levelAtelier.spawn([
										sprite("perso_flinta_4",{anim:"walk_right"}),
										anchor("center"),
										pos(MAP_WIDTH/2-7*16,MAP_HEIGHT/2+4*16),//the default position is in front of the workshop
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
						//console.log("wea rea in the waiting time");
						waitTime= 3.3 // to wait to reach target
						}else {
						waitTime = 0.3
						}
				wait(waitTime,()=>{
						//console.log("Wait time is"+waitTime);
						let fadeOut = add([
						pos(center().x, MAP_HEIGHT/2),
						anchor("center"),
						color(BLACK),
    				rect(256, 256),
    				area(),
						fadeIn(1.2),
						opacity(1),
						musicFond.paused = true
					])
					wait(0.8,()=>{
						add([
							sprite("nuit_Z",{anim:"idle"}),
							anchor("center"),
							pos(center().x, MAP_HEIGHT/2)
						])
					})
					console.log("avant le call du reset");
					console.log("totalCoins c'est "+totalCoins);
					console.log("totalStars c'est "+ totalStars);
					//to the next day
					let newjourIdx = resetDayVariables(totalCoins,totalStars)
					// day 2 is an exception as it will show clients without any interactions
					if (jourIdx==2){
						showClients = true
					}
					// door is open now
					outdoorKey = true
					console.log("apres le reset\n le jour"+newjourIdx+"\n le justifiedFightCounter "+justifiedFightCounter+"\n la thune c'est "+totalCoins+"\n les stars "+totalStars)
					wait(2,()=>go("atelier",newjourIdx,totalCoins,totalStars,INITIALPOSITION,clientCounter))//clientcounter is zero because by default we want no clients. Some necessary interaction have to happen first
			})

			})
			})
	}else{
		updateDialog(textBox)
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
//GLOBAL
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
function justDialog(interactionDialog){
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
			// indicate who is talking
			if(curDialog%2==0){
				txt.color= MYDARKPINK
			}else {
				txt.color = MYBLUE
			}
			}
			//initialization with first sentence text
			updateDialog()

		 	let	dialogAction = onKeyPress("enter", () => {
		// Cycle through the dialogs
		curDialog = (curDialog + 1) % interactionDialog.length
		if (curDialog==0){
			// dialog finished, options to choose
			dialogAction.paused = true
			interrupt = false
			destroy(textBox)
			destroy(txt)
				}else{
			updateDialog()
		}
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
			// indicate who is talking
			//txt.pos.x = center().x+6 -(curDialog%2)*15
			//textBox.pos.x = center().x+6 - (curDialog%2)*15
			if(curDialog%2==0){
				txt.color= MYDARKPINK
			}else {
				txt.color = MYBLUE
			}
			}
			//initialization with first sentence text
			updateDialog()

		 	let	dialogAction = onKeyPress("enter", () => {
		// Cycle through the dialogs
		curDialog = (curDialog + 1) % interactionDialog.length
		if (curDialog==0){
			// dialog finished, options to choose
			dialogAction.paused = true
			destroy(textBox)
			destroy(txt)
			interrupt = false
			console.log(jourIdx);
			//console.log(interactionDechetFlag);
			// flog of the dialog is modified is open now
			if (jourIdx==2 && interactionDechetFlag==false){
				interactionDechetFlag = true
			// day two : bike posts gained at the dechetterie
					play("audio_reussite") //indicate that an object has been gained
					add([
						sprite("velo_sur_pied_vide"),
						scale(1),
						area(),
						pos(center().x+3*16-8,MAP_HEIGHT/2-5*16),//close to perso dechet position
						anchor("center"),
						outline(4),
						move(UP,100),
					])
					// add in the inventory
					inventory["Stand pour vélo #1"].state = "owned"
					inventory["Stand pour vélo #2"].state = "owned"

			showClients = true// now clients will show up
			veloTag =true // now you have the bikePost
			}
			if (jourIdx==4 && flyerDechetFlag == false){
				flyerDechetFlag = true
				play("audio_reussite") //indicate that an action has been successfully executed
			}
			if (jourIdx==5 && helpDechetFlag == false){
				helpDechetFlag = true
			}
			}else{
			updateDialog()
		}
	})

	// if anything is touched before the end of the dialog
	// onKeyPress("down",()=>{destroy(txt),destroy(textBox)})
	// onKeyPress("up",()=>{destroy(txt),destroy(textBox)})
	// onKeyPress("left",()=>{destroy(txt),destroy(textBox)})
	// onKeyPress("right",()=>{destroy(txt),destroy(textBox)})
	return dialogFinished

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

			add_atelier_items()
// DAY 5
if (jourIdx==5){
			// add armoire cassee
			console.log("in the armoire kc")
			let armoireKc = add([
				sprite("atelier_armoire_kc"),
				area(),
				body({isStatic:true}),
				anchor("center"),
				pos(center().x-(4*16),3.5*16),
				"armoireKc"
			])
			// replace pied de velo broke broken ones
				destroyAll("pied_velos")
				const velo_sur_pied_1_kc = add([
					sprite("atelier_velo_sur_pied_kc"),
					scale(1),
					anchor("center"),
					pos(center().x-(6*16),8*16),
					area({ shape: new Polygon([vec2(-12,15),vec2(-12,-7), vec2(12,-7),vec2(12,15)]) }),
					body({isStatic:true}),
					"pied_velos_kc"
				])
				const velo_sur_pied_2_kc = add([
					sprite("atelier_velo_sur_pied_kc"),
					scale(1),
					anchor("center"),
					pos(center().x+2*16,MAP_HEIGHT-2*16),
					area({ shape: new Polygon([vec2(-12,15),vec2(-12,-7), vec2(12,-7),vec2(12,15)]) }),
					body({isStatic:true}),
					"pied_velos_kc"
				])
		}
return levelAtelier
	}
function add_atelier_items(){
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
	// bibliotheque
	const bibliotheque = add([
		sprite("atelier_bibliotheque"),
		scale(0.5),
		anchor("center"),
		area(),
		pos(center().x+24,MAP_HEIGHT/2+20),
		"bibliotheque"
	])
	// atelier_cafe
	const cafe = add([
		sprite("atelier_cafe"),
		scale(0.05),
		anchor("center"),
		area(),
		pos(center().x,MAP_HEIGHT/2),
		"cafe"
	])
	//mur du murFond
	const murFond = add([
		sprite("atelier_mur_fond",{anim:"idle"}),
		anchor("center"),
		pos(center().x,48),
	])

	//velos
	const velo_rouge_1 = add([
		sprite("velo_rouge"),
		scale(1),
		anchor("center"),
		pos(center().x,5*16),
		area(),
		body({isStatic:true}),
		"velorouge",
			"velorouge1"
	])
	const velo_rouge_2 = add([
		sprite("velo_rouge"),
		scale(1),
		anchor("center"),
		pos(center().x+6*16,7.75*16),
		area(),body({isStatic:true}),
			"velorouge"
	])
	const velo_rouge_3 = add([
			sprite("velo_rouge"),
			scale(1),
			anchor("center"),
			pos(center().x+6*16,8.5*16),
			area(),
		body({isStatic:true}),
		"velorouge"
	])
	const velo_rouge_4 = add([
			sprite("velo_rouge"),
			scale(1),
			anchor("center"),
			pos(center().x+6*16,9.25*16),
			area(),
			body({isStatic:true}),
			"velorouge",
				"velorouge4"
		])
	// add velo sur pied items, on day 5 we have the broken version
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
	if(boiteOutilsFlag==true){
		let boiteAOutils = add([
			sprite("bonus_boites"),
			pos(center().x-(6.5*16),MAP_HEIGHT/2+(5.5*16)),
			area(),
			body({isStatic:true}),

		])
	}
	}
function add_atelier_collisions(player,totalCoins,totalStars){
	// add collision// add velo sur provided Collision
	if (veloTag==true){
			player.onCollide("pied_velos",()=>{
			let textBox = add([
			sprite("dialogbox"),//, width: width() - 230
			anchor("center"),
			pos(center().x,BOTTOM),
		])
		let txt = add([
			text("Incroyable! Quelle trouvaille j'ai fait à la dechet!", { size:  TXTSIZE,width:TXTWIDTH }),//, width: width() - 230
			anchor("center"),
			pos(center().x,BOTTOM),
			color(MYBLUE),
			"trouvailles"
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
				pos(center().x,MAP_HEIGHT/2-10),
				"afficheMessage"
			])
			onKeyPress(()=>{destroyAll("afficheMessage")})
		})	}
		//check for first collision with poster
	let firstCollisionDone = false
	// add flyers collision
	if(flyersFlag==true){
			player.onCollide("flyers", () => {
				onKeyPress("enter",()=>{
					let poster2 = add([
					sprite("atelier_poster2_grand"),//, width: width() - 230
					// 	text("Complète ton inventaire pour\n un TURFU RADIEUX!", { size:  TXTSIZE }),//, width: width() - 230
					anchor("center"),
					pos(center().x,MAP_HEIGHT/2-10),
					"afficheMessage2"])
					let distributeInstruction = add([
						text("(\"espace\" pour prendre les flyers) ", {font: "prstart", size:TXTSIZE, width:TXTWIDTH}),
						anchor("center"),
						color(MYPURPLE),
						pos(center().x+16, MAP_HEIGHT/2+4.5*16),
						"distributeInstruction"
						])
					onKeyPress("space",()=>{

						destroyAll("distributeInstruction")
						destroyAll("flyers")

						play("audio_reussite")
						flyersTaken = true
						flyersFlag = false //no more flyers on the table for the rest of the game
						})
					onKeyPress(()=>{
					destroyAll("afficheMessage2")
					destroyAll("distributeInstruction")
				})
				})
			})
		}

	// collision
	if (jourIdx==5){
	affichageOnCollision(player,"armoireKc","Oh mince...La porte de l'armoire est toute défoncée. Quel zbeul...")
	affichageOnCollision(player,"pied_velos_kc","Argh mes jolis stands... Je vais avoir besoin d'aide.")
	}
	//
	if (jourIdx==1){
	affichageOnCollision(player,"velorouge4","Maintenant que je les ai réparés, ces trois jolis vélos de courses sont prêt à rouler!")
	affichageOnCollision(player,"velorouge1","Oups, mon vélo est vraiment dans un état lamentable, et dire que je suis mécaniciennex...")


	player.onCollide("cafe",()=>{
	let textBox = add([
	sprite("dialogbox"),//, width: width() - 230
	anchor("center"),
	pos(center().x,BOTTOM),
])
let txt = add([
	text("Je suis prêtex pour ce premier jour!", { size:  TXTSIZE,width:TXTWIDTH }),//, width: width() - 230
	anchor("center"),
	pos(center().x,BOTTOM),
	color(MYPURPLE),
])
onKeyPress(()=>{
	destroy(txt),
	destroy(textBox)})
	// showClients = true
	// player.pos.x = INITIALPOSITION.x
	// player.pos.y = INITIALPOSITION.y
})

	}


	player.onCollide("etabli", () => {
		//const enterInventaire = onKeyPress("enter",()=>{
		let saved_position = player.pos
		// This collision shows the state of the inventory.
		//enterInventaire.paused=true
		go("inventaire", jourIdx, totalCoins, totalStars,saved_position,clientCounter)
		})
	//	enterInventaire.paused = false

//bibliothque content

let titleList = ["Les mecs lourds ou le paternalisme lubrique","M'explique pas la vie mec !",]
let authorList = ["Natacha Henry","Rokhaya Diallo & Blachette",]
let coverTextList=["Avec des yeux comme ça, je ne peux rien vous refuser, votre téléphone, il est sur le menu ? ,vous êtes mariée ? c'est pas grave, je suis pas jaloux. . Entre la drague et le harcèlement sexuel,il existe chez certains hommes une façon plus ou moins vulgaire et équivoque de s'en prendre aux femmes, en particulier dans le monde du travail... En une phrase ou deux, ils sexualisent la relation et mettent leur interlocutrice en position d'infériorité. Du regard appuyé au commentaire déplacé en passant par la remarque ,limite,"
//, Natacha Henry décrit et analyse ce comportement qu'elle baptise ,paternalisme lubrique, et qui ponctue le quotidien des femmes."
,"Sous forme de saynètes humoristiques, cet ouvrage aborde les concepts de mansplaining, quand l’homme explique à une femme comment s’exprimer et comment penser de manière condescendante, de manterrupting, quand un homme coupe systématiquement la parole à une femme qui tente de s’exprimer, le manspreading quand l’homme prend ses aises dans les lieux publics notamment dans les transports en communs.Ces comportements masculins sont la résultante d’un patriarcat ordinaire."
// Il est temps pour les femmes de prendre leur véritable place dans la Cité, d’exprimer leurs valeurs, leurs pensées et de faire valoir leurs domaines de compétences. Bref, de refuser les manifestations du patriarcat !"
]

	player.onCollide("bibliotheque", () => {
		interrupt=true

				let i  = 0
				let cover = add([
					sprite("atelier_cover"),//, width: width() - 230
					// 	text("Complète ton inventaire pour\n un TURFU RADIEUX!", { size:  TXTSIZE }),//, width: width() - 230
					anchor("center"),
					pos(center().x,MAP_HEIGHT/2-10),
					"cover"
				])
				let coverTitle = add([
					text(titleList[i], { size:  MEDIUMTXTSIZE,width:TXTWIDTH }),//, width: width() - 230
					anchor("center"),
					pos(center().x,MAP_HEIGHT/2-10*8),
					color(MYPURPLE),
					"cover"
				])
				let coverAuthor = add([
					text(authorList[i], { size:  MEDIUMTXTSIZE,width: TXTWIDTH,align:"right" }),//, width: width() - 230
					anchor("center"),
					pos(center().x,MAP_HEIGHT/2-6.5*8),
					color(MYBLUE),
					"cover"
				])
				let coverText = add([
					text(coverTextList[i], { size:  TXTSIZE,width:TXTWIDTH }),//, width: width() - 230
					anchor("center"),
					pos(center().x,MAP_HEIGHT/2+16),
					color(MYPURPLE),
					"cover"
				])
				let arrows = add([
					text("<--      -->", { size:  TXTSIZE,width:TXTWIDTH,align:"center" }),//, width: width() - 230
					anchor("center"),
					pos(center().x,MAP_HEIGHT/2+9.5 *8),
					color(MYBLUE),
					"cover"
				])
					let length = coverTextList.length
				onKeyPress("right",()=>{
					i = (i+1)%length
					coverText.text = coverTextList[i]
					coverTitle.text = titleList[i]
					coverAuthor.text = authorList[i]})
				onKeyPress("left",()=>{
					i =((i-1)+length)%length
					coverText.text = coverTextList[i]
					coverTitle.text = titleList[i]
					coverAuthor.text = authorList[i]})
			//	onKeyPress("enter",()=>{destroyAll("cover")})
				onKeyPress("escape",()=>{
					interrupt = false
					destroyAll("cover")})

	})
	}
	// ------ Boucle de Gameplay ----  //
	// ------ Scene d'ouverture ----------------------------------------------- //
scene("atelier", (jourIdx,totalCoins,totalStars, saved_position,clientCounter)=> {
	console.log("totalCoins is "+totalCoins);
		if(clientCounter == 1){musicFond.paused = false}
		add_atelier_map()

		// collision Box size
		const colBox = 5
		let mecanixSprite = "mecanix"
		if (croquettesGivenFlag == true ){mecanixSprite = "mecanix_chat"}
		const player = add([
			sprite(mecanixSprite),
			// center() returns the center point vec2(width() / 2, height() / 2)
			anchor("center"),
			//console.log(saved_position),
			pos(saved_position.x,saved_position.y),//the default position is in front of the workshop
			area({shape: new Polygon([vec2(-colBox,-colBox+14),vec2(-colBox,0), vec2(colBox,0),vec2(colBox,-colBox+14)])}),
			//area(),

			body(),
			// scalePerso
			scale(PERSOSCALE),
			"player"
			])
		// animate the player
		//player.play("walk_right")
		//player.flipX = true
		const speed = 60;
		//player_movement(player,SPEED)
		// movement
		let offset = 1
		onUpdate(() => {
		if (isKeyDown("left") && interrupt == false) {
			player.play("walk_right")
			player.area.offset.x = -offset
			player.area.offset.y = 0

			player.move(-speed, 0)
			player.flipX = true
		}})
		onUpdate(() => {
		if (isKeyDown("right")&& interrupt == false) {
			player.play("walk_right")
			player.area.offset.x = offset
			player.area.offset.y = 0
			player.move(speed, 0)
			player.flipX = false
		}})
		onUpdate(() => {
		if (isKeyDown("up")&& interrupt == false) {
			player.play("up")
			player.area.offset.x = 0
			player.area.offset.y = -offset
			player.move(0, -speed)
			player.flipX = true
		}})
		onUpdate(() => {
		if (isKeyDown("down")&& interrupt == false) {
			player.play("down")
			player.area.offset.x = 0
			player.area.offset.y = offset
			player.move(0, speed)
			player.flipX = false
		}})
		add_atelier_collisions(player,totalCoins,totalStars)

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
						sprite(clientkey.spriteName,{anim:"walk_right",speed:3}),
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
				//console.log("just before the loop, the clientCounter is:"+clientCounter);
				if (showClients==true){
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

								go("clientDialog",Object.keys(clientsList)[i], jourIdx, totalCoins,totalStars)
							})

						}

						// if there is no client anymore then the game is "finished"
						// if (lLength==0){
						// 	player.onCollide("clientEntrance", () => {
						// 		let textBox = add([
						// 		sprite("dialogbox"),//, width: width() - 230
						// 		anchor("center"),
						// 		pos(center().x,BOTTOM),
						// 		"clientMessage"
						// 	])
						// 	let txt = add([
						// 		text("Les prochains clients\n viendront dans la prochaine démo! \ To be continued...", { size:  TXTSIZE }),//, width: width() - 230
						// 		anchor("center"),
						// 		pos(center().x,BOTTOM),
						// 		color(MYPURPLE),
						// 		"clientMessage"
						// 	])
						// })
						// }
					}
				}
				//if there isn't any client yet, its because the PJ has to do smth
				if (showClients==false & jourIdx != 1 ){
					affichageOnCollision(player,"clientEntrance","Je pourrais aller faire un tour, il n'y a pas encore de clients")//player,colObjTag,colMsg
					if (flyersTaken == true){
						affichageOnCollision(player,"clientEntrance","Mmmh.. je m'étais dit que je les distribuerai, peut-être que je devrais faire a avant que les clients arrivent.")//player,colObjTag,colMsg
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
					musicFond.paused = true
					go("outside", jourIdx, totalCoins,totalStars, modified_pos )
				})
				}
				// explanation message for the closed door
				if (outdoorKey == false){
					affichageOnCollision(player,"outsideDoorDroite","Je n'ai pas la clé pour ouvrir cette porte...")
				}



			})

scene("jourFinal",(jourIdx,totalCoins,totalStars, saved_position,clientCounter)=>{
		// MAP and ITEMS
		console.log("This is the final day: "+jourIdx);
		let levelAtelier = add_atelier_map()
		//status
		addStatusBar(jourIdx,totalCoins,totalStars)
		// INITIALIZATION of FLAGS
		let finalInt0 = false
		let finalInt1 = false
		let finalInt2 = false
		let finalInt3 = false
		let finalInt4 = false
		let allieInt = false
		// add ITEMS
		const velo_sur_pied_1_kc = add([
			sprite("atelier_velo_sur_pied_kc"),
			scale(1),
			anchor("center"),
			pos(center().x-(6*16),8*16),
			area({ shape: new Polygon([vec2(-12,15),vec2(-12,-7), vec2(12,-7),vec2(12,15)]) }),
			body({isStatic:true}),
"pied_velos_kc"
		])
		const velo_sur_pied_2_kc = add([
			sprite("atelier_velo_sur_pied_kc"),
			scale(1),
			anchor("center"),
			pos(center().x+2*16,MAP_HEIGHT-2*16),
			area({ shape: new Polygon([vec2(-12,15),vec2(-12,-7), vec2(12,-7),vec2(12,15)]) }),
			body({isStatic:true}),
"pied_velos_kc"
		])
		let armoireKc = add([
			sprite("atelier_armoire_kc"),
			area(),
			body({isStatic:true}),
			anchor("center"),
			pos(center().x-(4*16),3.5*16),
			"armoireKc"
		])
		let poster = add([
			sprite("atelier_poster"),
			pos(center().x-(6.5*16),MAP_HEIGHT/2-(5.5*16))
		])
		// ADD PERSOS
		let louise = add([
			sprite("perso_dechett_1",{anim:"walk_right"}),
			anchor("center"),
			pos(center().x+1*16,MAP_HEIGHT/2+5*16),// the modified position from before
			area(),
			body({isStatic:true}),
			scale(PERSOSCALE),
			"louise",
		])
		let flinta1 = add([
			sprite("perso_flinta_1",{anim:"walk_right"}),
			anchor("center"),
			pos(center().x-3.5*16,MAP_HEIGHT/2-(2.5*16)),// the modified position from before
			area(),
			body({isStatic:true}),
			scale(PERSOSCALE),
			"flinta1",
		])
		let flinta2 = add([
			sprite("perso_flinta_2",{anim:"walk_right"}),
			anchor("center"),
			pos(center().x-5*16,MAP_HEIGHT/2-2*16),// the modified position from before
			area(),
			body({isStatic:true}),
			scale(PERSOSCALE),
			"flinta2",
		])
		let flinta3bis = levelAtelier.spawn([
			sprite("perso_flinta_3",{anim:"walk_right"}),
			anchor("center"),
			pos(MAP_WIDTH/2-3*16,MAP_HEIGHT/2+4*16),// the modified position from before
			area(),
			body({isStatic:true}),
			scale(PERSOSCALE),
			agent({ speed: 80, allowDiagonals: true }),
			"flinta3",
		])
	// PLAYER
		const colBox = 5
		let mecanixSprite = "mecanix"
		if (croquettesGivenFlag == true ){mecanixSprite = "mecanix_chat"}
		const player = add([
			sprite(mecanixSprite),
			// center() returns the center point vec2(width() / 2, height() / 2)
			anchor("center"),
			//console.log(saved_position),
			pos(saved_position.x,saved_position.y),//the default position is in front of the workshop
			area({ shape: new Polygon([vec2(-colBox,-colBox+14),vec2(-colBox,0), vec2(colBox,0),vec2(colBox,-colBox+14)]) }),
			//area(),
			body(),
			// scalePerso
			scale(PERSOSCALE),
			"player"
			])
			// animate the player
			//player.play("walk_right")
			//player.flipX = true
			const SPEED = 80;
			player_movement(player,SPEED)
			// COLLISIONS
			add_atelier_collisions(player,totalCoins,totalStars)
			destroyAll("trouvailles")
		//ADD INTERACTION WITH PERSO
		player.onCollide("louise", () => {
			if(finalInt0==false){
				addTextOnDialogBox("Je vais m'occuper des stands de vélos!"),
				wait(1.4,()=>{
					destroyAll("pied_velos_kc")
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
				})

				finalInt0=true
			}else{
				addTextOnDialogBox("C'est réparé!")
			}
		})
		player.onCollide("flinta1", () => {
 			if(finalInt1	==false){
				addTextOnDialogBox("Je vais réparer l'armoire, on n'y verra plus rien, tkt!")
 				wait(1.4,()=>{destroyAll("armoireKc")}),
 				finalInt1=true
 			}else{
 				addTextOnDialogBox("C'est tout bon!")
 			}
 		})
		player.onCollide("flinta2", () => {
			if(finalInt2==false){
				addTextOnDialogBox("Je t'ai amené un dérive-chaine pour te remercier de l'atelier de la dernière fois!")
				if (deriveChaineGained==false){
				play("audio_reussite") //indicate that an object has been gained
				add([
					sprite("sprite_demontechaine"),
					scale(1),
					area(),
					pos(player.pos),
					anchor("center"),
					outline(4),
					move(UP,100),
				])
				// now the object is owned in the INVENTORY
				inventory["Dérive-chaine"].state ="owned"
			}
			finalInt2=true
			}else{
				addTextOnDialogBox("Encore trop merci de nous avoir permis d'utiliser ton magasin pour l'atelier!")
			}
		})
		player.onCollide("flinta3", () => {
 			if(finalInt3==false){
				addTextOnDialogBox("J'ai entendu dire qu'il y avait besoin d'aide, je peux pas porter de trucs alors j'ai amené des biscuits!")
 				finalInt3=true
				flinta3bis.setTarget(vec2(11*16,10.5*16))
 			}else{
 				addTextOnDialogBox("Je vais mettre les biscuits sur la table")
 			}
 		})
		//player.onCollideEnd("flinta3",()=>{flinta3.setTarget(vec2(center().x-2.5*16,MAP_HEIGHT/2+2*16))})
		flinta3bis.onTargetReached(()=>{
				let allie = add([
				sprite("client_6_petit",{anim:"walk_right"}),
				anchor("center"),
				pos(center().x-6.5*16,MAP_HEIGHT/2+4*16),// the modified position from before
				area(),
				body({isStatic:true}),
				scale(PERSOSCALE),
				"allie"
			])

			player.onCollide("allie", () => {
					addTextOnDialogBox("J'ai bien compris que vous arriviez à tout réparer, mais je me suis dit que ce serait encore plus sympa avec des boissons! ")
					allieInt = true
			})
		})
		onUpdate(()=>{
			 console.log("in the update");
				if(finalInt0==true && finalInt1 == true && finalInt2 == true && finalInt3 == true && allieInt==true){
					wait(5.5,()=>{
						musicFond.paused = true
						go("partyWin")})
				}
					else{
			}
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
		if(chipsGivenFlag==true){

		let spaceAction = onKeyPress("space", () => {
			spaceAction.paused = true
			// MAP POUR FAIRE LA BORDURE
			add_bordure_map_purple()
			// Character avatar )
			const avatar = add([
				sprite(clientsList[clientKey].bigSpriteName),
				scale(1),
				anchor("center"),
				pos(center().x, BOTTOM/2),
			])
				//jump directly without dialog
				jumpToHitFlag = true

				jumpToSituation(false/*repairFlag is false because we hit*/,clientKey,jourIdx,totalCoins,totalStars)

		})
	}


		//firt call to initialize on enter
	 updateDialog()

})

// ---- Monde exterieur -----//
scene("outside", (jourIdx, totalCoins,totalStars,position)=>{

			let musicOutside = play("exte",{loop:true})
			// at start of the outside scene the contenair is closed
			//let ouvertTag=false

			// MAP POUR FAIRE LA BORDURE
			const MAP_WIDTH = 256;
			const MAP_HEIGHT = 256;
			const bordurebordure = addLevel([
				 "KkkkBhHKkkkkkkkB",
				 "GmmmdHhGmmmmmmmd",
				 "GfaVrkkRffFfVFfd",
				 "GFfVmmmmVcqqJffd",
				 "GFaafVFVVQVVFffd",
				 "GFcqqqqqqWffaVFd",
				 "GFQfaVFQFaFFfaVd",
				 "GFQvFaFQvFFVfVVd",
				 "GFLvvFFQFFFafVVd",
				 "GFaaFFFwqqqqqpfd",
				 "GfffaFFVfVFvFQFd",
				 "GfffFvFVfVFaFQFd",
				 "NfffvaFVfVfvFQFd",
				 "DqqqqqqqqqqqqWFd",
				 "SfffvFFVfVfvFvFd",
				 "zZZZZZZZZZZZZZZX",
			],{
				// define the size of each block
				tileWidth:16,
				tileHeight:16,
				//scale :2,
				pos:vec2(center().x - (MAP_WIDTH/2), 0),
				// assign to each symbol a sprite
				tiles: {
					"J": () => [
						sprite("tile_exte_chemin_fin_horizontal"),
						area(),
						body({isStatic:true}),
					],
					"L": () => [
						sprite("tile_exte_chemin_fin_verticall"),
						area(),
						body({isStatic:true}),
					],
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
						body({isStatic:true}),
					],
					"y": () => [
						sprite("scene_out_tile_BG3"),
						area(),
					],
					"H": () => [
						sprite("scene_out_tile_BG2"),
						area(),
							body({isStatic:true}),
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
						body({isStatic:true}),
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
					"a": () => [
						sprite("scene_out_tile_herbefleur"),
						area(),
					],
					"Q": () => [
						sprite("scene_out_tile_cheminvertical"),
						area(),
					],
					"W": () => [
						sprite("scene_out_tile_chemincoinBD"),
					//	area(),
					],
					"w": () => [
						sprite("scene_out_tile_chemincoinBG"),
					//	area(),
					],
					"p": () => [
						sprite("scene_out_tile_chemincoinHD"),
					//	area(),

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

		// add the mecanix// Add player game object
		const colBox =5
		//ITEMSconst player =

		const dechetterie = add([
			sprite("exte_scudo"),
			// center() returns the center point vec2(width() / 2, height() / 2)
			anchor("center"),
			pos(center().x+4.75*16,65),// the modified position from before
			area({ shape: new Polygon([vec2(-17,-22),vec2(-17,15), vec2(23,15),vec2(23,-22)]) }),
			body({isStatic:true}),
			scale(1.3)
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


		let banc1 = add([
			sprite("exte_banc"),
			// center() returns the center point vec2(width() / 2, height() / 2)
			anchor("center"),
			pos(center().x+4.2*16,MAP_HEIGHT/2+6),// the modified position from before
			area(),
			body({isStatic:true}),
			scale(1.3)
		])
		let banc2 = add([
			sprite("exte_banc"),
			// center() returns the center point vec2(width() / 2, height() / 2)
			anchor("center"),
			pos(center().x-6,MAP_HEIGHT/2-4*16+6),// the modified position from before
			area(),
			body({isStatic:true}),
			scale(1.3)
		])
		if(croquettesGivenFlag == false ){
		let exteMaki = add([
			sprite("exte_maki",{anim:"walk_right"}),
			// center() returns the center point vec2(width() / 2, height() / 2)
			anchor("center"),
			pos(center().x-4.5*16,MAP_HEIGHT/2-5.5*16),
			area(),
			body({isStatic:true}),
			scale(1),
			"chatMaki"
		])
	}
		let exteSirius = add([
			sprite("exte_sirius",{anim:"walk_right"}),
			// center() returns the center point vec2(width() / 2, height() / 2)
			anchor("center"),
			pos(center().x+5*16,MAP_HEIGHT/2+3*16),
			area(),
			body({isStatic:true}),
			scale(1),
			"chien"
		])

		let banc_perso = add([
			sprite("exte_banc_perso",{anim:"idle"}),
			// center() returns the center point vec2(width() / 2, height() / 2)
			anchor("center"),
			pos(center().x-4*16,MAP_HEIGHT/2+3.3*16),// the modified position from before
			area({ shape: new Polygon([vec2(-colBox,-colBox+14),vec2(-colBox,-10), vec2(colBox,-10),vec2(colBox,-colBox+14)]) }),
			body({isStatic:true}),
			scale(1.3),
			"perso_exte"
		])
		let dialogChips = [
			["p","Hey!"],
			["m","Salut! Je peux m'asseoir avec toi?"],
			["p","Oui, mais seulement si tu partages tes chips avec moi.. et les pigeons haha"],
			["m","Allez okay!"],
			["p","Comment c'est alors de gérer ce magasin?"],
			["m","C'est cool! J'adore faire des réparations!"],
			["p","Ah yes! Et les clients?"],
			["m","Une petite claque pour ceux qui exagèrent."],
			["p","Hahah tu me fait bien rire. Si jamais mon trick c'est d'appuyer sur espace pour direct les later."],
			["m","Ohh trop merci! Je vais essayer."]
		]
		// Perso dechetterie
		const persoDechett = add([
			sprite("perso_dechett_1",{anim:"idle"}),
			// center() returns the center point vec2(width() / 2, height() / 2)
			anchor("center"),
			pos(center().x+3*16,MAP_HEIGHT/2-5*16),// the modified position from before
			area({ shape: new Polygon([vec2(-colBox,-colBox+14),vec2(-colBox,-7), vec2(colBox,-7),vec2(colBox,-colBox+14)]) }),
			body({isStatic:true}),
			scale(PERSOSCALE),
			"perso_dechett_1"
		])
		persoDechett.flipX = true
		const player = add([
			sprite("mecanix_velo"),
			// center() returns the center point vec2(width() / 2, height() / 2)
			anchor("center"),
			pos(position.x,position.y),// the modified position from before
			area({ shape: new Polygon([vec2(-colBox,-colBox+14),vec2(-colBox,0), vec2(colBox,0),vec2(colBox,-colBox+14)]) }),
			body(),
			// pas de isStatic
			scale(PERSOSCALE),
			"player"
		])
		let arbre1 = add([
			sprite("exte_arbre_anime",{anim:"shine"}),
			// center() returns the center point vec2(width() / 2, height() / 2)
			anchor("center"),
			pos(center().x-16*3,MAP_HEIGHT/2),// the modified position from before
			area({ shape: new Polygon([vec2(-colBox,30),vec2(-colBox,0), vec2(colBox,0),vec2(colBox,30)]) }),
			body({isStatic:true}),
		])
		let arbre2 = add([
			sprite("arbre"),
			// center() returns the center point vec2(width() / 2, height() / 2)
			anchor("center"),
			pos(center().x-16*2.5,MAP_HEIGHT/2+2*16),// the modified position from before
			area({ shape: new Polygon([vec2(-17,14),vec2(-17,-10), vec2(colBox,-10),vec2(colBox,14)]) }),
			body({isStatic:true}),
		])
		let arbre3 = add([
			sprite("exte_arbre_anime",{anim:"shine"}),
			// center() returns the center point vec2(width() / 2, height() / 2)
			anchor("center"),
			pos(center().x-16*4.5,MAP_HEIGHT/2+1*16),// the modified position from before
			area({ shape: new Polygon([vec2(-colBox,25),vec2(-colBox,-15), vec2(17,-15),vec2(17,25)]) }),
			body({isStatic:true}),
		])
		let arbre4 = add([
			sprite("arbre"),
			// center() returns the center point vec2(width() / 2, height() / 2)
			anchor("center"),
			pos(center().x-16*5.5,MAP_HEIGHT/2+2.5*16),// the modified position from before
			area({ shape: new Polygon([vec2(-colBox,14),vec2(-colBox,-15), vec2(17,-15),vec2(17,14)]) }),
			body({isStatic:true}),
		])
		let arbre5 = add([
			sprite("exte_arbre_anime",{anim:"shine"}),
			// center() returns the center point vec2(width() / 2, height() / 2)
			anchor("center"),
			pos(center().x+16*2,MAP_HEIGHT/2+5.7*16),// the modified position from before
			area({ shape: new Polygon([vec2(-colBox,14),vec2(-colBox,0), vec2(colBox,0),vec2(colBox,14)]) }),
			body({isStatic:true}),
		])
		let arbre6 = add([
			sprite("exte_arbre_anime",{anim:"shine"}),
			// center() returns the center point vec2(width() / 2, height() / 2)
			anchor("center"),
			pos(center().x+16*0.8,MAP_HEIGHT/2+5.7*16),// the modified position from before
			area({ shape: new Polygon([vec2(-colBox,14),vec2(-colBox,0), vec2(colBox,0),vec2(colBox,14)]) }),
			body({isStatic:true}),
		])
		let arbre7 = add([
			sprite("exte_arbre_anime",{anim:"shine"}),
			// center() returns the center point vec2(width() / 2, height() / 2)
			anchor("center"),
			pos(center().x+16*5.5,MAP_HEIGHT/2-8),// the modified position from before
			area({ shape: new Polygon([vec2(-colBox,14),vec2(-colBox,0), vec2(colBox,0),vec2(colBox,14)]) }),
			body({isStatic:true}),
		])
		let arbre8 = add([
			sprite("exte_arbre_anime",{anim:"shine"}),
			// center() returns the center point vec2(width() / 2, height() / 2)
			anchor("center"),
			pos(center().x-16*5.5,MAP_HEIGHT/2-6*16),// the modified position from before
			area({ shape: new Polygon([vec2(-colBox,14),vec2(-colBox,0), vec2(colBox,0),vec2(colBox,14)]) }),
			body({isStatic:true}),
		])
		// collision avec le perso exte
		player.onCollide("perso_exte",()=>{
			if(chipsFlag == true){
				interrupt = true
				justDialog(dialogChips)
				chipsGivenFlag = true
				chipsFlag=false
			}else {
				addTextOnDialogBox("Amuse-toi bien!")
			}
		})
		// collision avec le chat
		player.onCollide("chatMaki",()=>{
			if(croquettesFlag == true){
				addTextOnDialogBox("Tiens des croquettes pour toi!")
				player.sprite = "mecanix_chat"
				croquettesGivenFlag = true
				croquettesFlag = false
			}else {
				addTextOnDialogBox("Miaowww...")

			}
		})
		// collision avec le chat
		player.onCollide("chien",()=>{
				addTextOnDialogBox("Wouaf! Je suis chou nan?!")
		})
		// animate the player
		//player.play("roule")
		const speed = 60;
		//player_movement(player,SPEED)
		// movement
		onUpdate(() => {
		if (isKeyDown("left") && interrupt == false) {
			player.play("walk_right")
			player.move(-speed, 0)
			player.flipX = true
		}})
		onUpdate(() => {
		if (isKeyDown("right")&& interrupt == false) {
			player.play("walk_right")
			player.move(speed, 0)
			player.flipX = false
		}})
		onUpdate(() => {
		if (isKeyDown("up")&& interrupt == false) {
			player.play("up")
			player.move(0, -speed)
			player.flipX = true
		}})
		onUpdate(() => {
		if (isKeyDown("down")&& interrupt == false) {
			player.play("down")
			player.move(0, speed)
			player.flipX = false
		}})

	// add status bar
		addStatusBar(jourIdx,totalCoins,totalStars)
		// DECHETERRIE DIALOG
		let dechettDialog1 = [
			["PNJ","Hé toi! Qu'est-ce que tu fais là?"],
			["M","Hé salut! C'est quoi cet endroit?"],
			["PNJ","C'est la déchetterie, tu connais pas? T'es pas d'ici?"],
			["M","Non, je viens de commencer de taffer à l'atelier de vélo pas loin d'ici."],
			["PNJ", "Ha ouais et ça va? Je connaissais la personne d'avant, iel était sympa mais je crois que c'était pas toujours évident avec les clients."],
			["M", "Ha ouais je vois...Je me fais pas mal expliquer mon taf par des types c'est un peu chiant."],
			["PNJ","Je comprends, ça m'arrive ici aussi des fois. Ha aujourd'hui quelqu'un a amené des stands pour vélo en bon état, tu veux les prendre?"],
			["M", "Grave! Merci. Bon j'y retourne... à bientôt!"]
			]
		let dechettDialog2 = [
				["PNJ","Hé toi, te revoilà!"],
				["M","Hé salut! Comment tu vas ?"],
				["PNJ","Pas mal, c'est une journée tranquille. Et toi?"],
				["M","Un peu fatiguée du taf, mais y'a des personnes sympas qui sont passées hier c'était cool!"],
				["PNJ", "Avec le temps t'auras probablement plus de copainexs que de relouexs!"],
				["M", "Ouais t'as raison. Aussi je passais par la parce que j'ai des flyers pour la manif contre les violences policieres."],
				["PNJ","Oh merci, j'en ai entendu parler mais j'ai pas les détails."],
				["M", "Bah y'a tout écrit dessus,tiens!"],
				["PNJ","Top, je vais les faire tourner c'est important."],
				]
		// Atelier vandaliser
		let dechettDialog3 = [
				["PNJ","Hé encore toi!"],
				["M","Coucou..."],
				["PNJ","Ça va? Tu fais une tête bizarre..."],
				["M","Nan c'est nul.. Y'a des gens qui ont cassé des trucs au magasin, j'ai l'impression qu'iels sont pas fand de l'esprit queer du truc."],
				["PNJ", "Oh merde...Allez je viens avec toi on va réparer tout ca!"],
				["M", "Oui je venais justement te demander si tu voulais bien me filer un coup de main."],
				["PNJ","Grave! On sait tout réparer de toute facon nan?! Hihi"],
				["M", "Oh cool, ca me fait plaisir d'entendre ca. On se retrouve là bas?"],
				["PNJ","Oui, je ferme la déchett et j'arrive. A toute!"],
				]


		// Interaction with the personnage dechetterie
		player.onCollide("perso_dechett_1",()=>{
			interrupt = true

			//After the first interaction
			if(interactionDechetFlag == true){

				//The day 4 with flyers
				if(flyersTaken == true && flyerDechetFlag == false){
					// the dialog is about giving the flyersFlag
					launchDialog(dechettDialog2)
					console.log("The value of flyerDechetFlag is"+flyerDechetFlag)
					showClients = true //now clients will show up
					flyersTaken = false // the message with the client door shoud be againt the iniitla one
				}else{
					if(jourIdx==5 && helpDechetFlag == false){
						console.log(helpDechetFlag);
						launchDialog(dechettDialog3)
						showClients = true //now clients will show up
					}else{
					//Normal days
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
					text("Hé resalut! Si t'as besoin de quelque chose, tu sais où me trouver Haha Je bouge jamais d'ici!", { size:  TXTSIZE,  width: txtWidth }),//, width: width() - 230
					anchor("center"),
					pos(center().x+8,BOTTOM),
					color(MYPINK),//color Louise
					])
					if(jourIdx==5 && helpDechetFlag==true){
						txt.text = "Allez vas-y, j'arrive bientôt!"
					}
					onKeyPress(()=>{
						interrupt = false
						destroy(txt),
						destroy(textBox)
						})
				}
				}

			}else{
				//interaction happened
				launchDialog(dechettDialog1)
				console.log("The value of intearctionFlagDechet is"+interactionDechetFlag)
		}
		})

		//Collision
		player.onCollide("atelierDoorGauche", () => {
			play("porte")
			let BORDERNOCOLLISION = 96; // this is the distance from the center to the border without colliding to left door
			let modified_pos = ({x:center().x+BORDERNOCOLLISION,y:player.pos.y})//keep the height and modify the x, leaving on the right means arriving on left side
			// If there's a next level, origin() to the same scene but load the next level
			musicOutside.paused=true
			musicFond.paused = false
			if(jourIdx==5 && helpDechetFlag == true){
			go("jourFinal", jourIdx, totalCoins,totalStars,modified_pos,clientCounter)
			}else{
			go("atelier", jourIdx, totalCoins,totalStars,modified_pos,clientCounter)
		}
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

		// add sprite note
		let note = add([
	 		 sprite("inventaire_note"),//, width: width() - 230
	 		 anchor("center"),
			 scale(0.8),
	 		 pos(center().x+8*8,9*8),
	 	 ])
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
			const column = 4
			posX = center().x-(MAP_WIDTH/2)+(((i)%column)*shiftX)+40
			posY = 50+(Math.floor(i/column)*shiftY)
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
			achatList.push(key+":\n"+"Tu n'as pas encore cet objet.")

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
				achatList.push(key+":\n"+"Tu as déjà cet objet!")
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
			text("Démonte-pneu:\nTu n'as pas encore cet objet.",{size:TXTSIZE}),
			pos(center().x-(MAP_WIDTH/8),BOTTOM-(MAP_WIDTH/15))
		])
		//move the selector and modify the achat texte
		let selectorIndex = 0
		onKeyPress("right", () => {
			selectorIndex= (selectorIndex+1)%length
			// use position where a tool has been saved and put it in position list
			selector.pos.x =positionList[selectorIndex][0]
			selector.pos.y =positionList[selectorIndex][1]
			// use achat texte list
			achatTexte.text = achatList[selectorIndex]
			play("selector")
	})
	onKeyPress("left", () => {
		console.log(selectorIndex);
		selectorIndex = (selectorIndex-1+length)%length
		// use position where a tool has been saved and put it in position list
		selector.pos.x =positionList[selectorIndex][0]
		selector.pos.y =positionList[selectorIndex][1]
		// use achat texte list
		achatTexte.text = achatList[selectorIndex]
		play("selector")
})

onKeyPress("up", () => {
	console.log(selectorIndex);
	selectorIndex = (selectorIndex+4+length)%length
	// use position where a tool has been saved and put it in position list
	selector.pos.x =positionList[selectorIndex][0]
	selector.pos.y =positionList[selectorIndex][1]
	// use achat texte list
	achatTexte.text = achatList[selectorIndex]
	play("selector")
})
onKeyPress("down", () => {
	console.log(selectorIndex);
	selectorIndex = (selectorIndex-4+length)%length
	// use position where a tool has been saved and put it in position list
	selector.pos.x =positionList[selectorIndex][0]
	selector.pos.y =positionList[selectorIndex][1]
	// use achat texte list
	achatTexte.text = achatList[selectorIndex]
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
		console.log("In the inventaire");
		console.log("Total coins is : "+totalCoins);
		console.log("Total stars is : "+totalStars);
		// ADD INITIAL MESSAGE
	//	addTextOnDialogBox("Si je trouve tous les outils manquants, mon atelier sera le plus classe!")
		// LEAVE SCENE
		onKeyPress("escape", () => {
			if(jourIdx==5 && helpDechetFlag == true){
			go("jourFinal", jourIdx, totalCoins,totalStars,mod_saved_position,clientCounter)}
			else{
			go("atelier",jourIdx,totalCoins,totalStars,mod_saved_position,clientCounter)}
		}
		)

	})

function jumpToSituation (repairFlag,clientKey,jourIdx,totalCoins,totalStars){
	onKeyPress("space",()=>{})
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
		pos(center().x,MAP_HEIGHT/2),
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
			pos(center().x+15,BOTTOM),
			color(MYBLUE)
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
		pos(center().x,MAP_HEIGHT/2),
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
		add([text("ça me fatigue..",{size:MEDIUMTXTSIZE,width:TXTWIDTH}),
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
	let choixFrapperSprite= "choix_frapper_juste"
	// if we go directly to the hit
	if (jumpToHitFlag =true){
		 choixFrapperSprite= "choix_frapper_v2"
		 // re initialize
		 jumpToHitFlag = false
	}

	add([
	sprite(choixFrapperSprite,{anim:"hit"}),
	scale(1),
	anchor("center"),
	pos(center().x,MAP_HEIGHT/2),
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
		text("Bien fait!",{size:MEDIUMTXTSIZE,width:TXTWIDTH}),
		anchor("center"),
		pos(center().x+15,BOTTOM),
		color(MYBLUE)
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
	pos(center().x,MAP_HEIGHT/2),
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
		pos(center().x+30,BOTTOM),
		color(MYBLUE)
	])
play("choix_faux")
})

// if you hit you get experience
totalStars = totalStars + 10
 break;
	}
	 onKeyPress("enter",() => {

			 //  Choice and correspondant anim have been done next client or end of day carton
			 // delete previous client
			 //delete clientsList[clientKey]
			 clientsList =  Object.keys(clientsList).filter(key => key != clientKey).reduce((acc, key) => {
	        acc[key] = clientsList[key];
	        return acc;
	    }, {});
			 if (clientCounter == 6){
				 go("Carton_Journalier",clientKey,jourIdx,totalCoins,totalStars, 10,10,1)
			 }else{
				 clientCounter ++
				 go("atelier", jourIdx,totalCoins,totalStars,INITIALPOSITION,clientCounter)
			 }
		 })
	 }
	 function add_bordure_map_purple(){
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
	 }
// ------ Boucle de Gameplay ----  //
// ------ Option ----------------------------------------------- //
scene("choix", (clientKey,jourIdx,totalCoins,totalStars) => {


		add_bordure_map_purple()
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
				pos(vec2(center().x,MAP_HEIGHT/2+0.3*(MAP_HEIGHT/2))),
				area({ cursor: "pointer", }),
				scale(1),
				anchor("center"),
			])
		const FightBtn = add([
					text("Frappez!",{font:"joystix",size:TXTSIZE+6}),
					pos(vec2(center().x,MAP_HEIGHT/2+0.5*(MAP_HEIGHT/2))),
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
			pos(center().x-64,MAP_HEIGHT/2+0.3*(MAP_HEIGHT/2)-tinyShift)

		])
		//instruction
		// if (jourIdx == 1){
		// 	let instruction = add([
		// 		text("(appuie sur enter pour choisir)", { size: TXTSIZE }),
		// 		scale(1),
		// 		opacity(0.7),
		// 		anchor("center"),
		// 		pos(center().x,BOTTOM+20),
		// 	"instruction"])
		// }
		//option Réparez
		onKeyPress("up", () => {
					//move arrow
					arrow.pos.y = MAP_HEIGHT/2+0.3*(MAP_HEIGHT/2)-tinyShift
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
				arrow.pos.y = MAP_HEIGHT/2+0.5*(MAP_HEIGHT/2)-tinyShift
				// puttint the other button color back to default_position
				RepairBtn.onUpdate(() => {RepairBtn.color = (0,0,0)	})
				// Coloring button
				FightBtn.onUpdate(() => coloring(FightBtn))
				//repairFlag for choice
				repairFlag = false
			})

		// Enter key press
		 onKeyPress("enter",() => {
			 if(choiceFlag == false) {
				 choiceFlag = true
				 //destroyAll("instruction")
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
				pos(center().x,MAP_HEIGHT/2),
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
					pos(center().x+15,BOTTOM),
					color(MYBLUE)
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
				pos(center().x,MAP_HEIGHT/2),
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
				add([text("ça me fatigue..",{size:MEDIUMTXTSIZE,width:TXTWIDTH}),
					anchor("center"),
					pos(center().x,BOTTOM),
					color(MYBLUE)
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
			pos(center().x,MAP_HEIGHT/2),
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
				text("Bien fait!",{size:MEDIUMTXTSIZE,width:TXTWIDTH}),
				anchor("center"),
				pos(center().x+15,BOTTOM),
				color(MYBLUE)
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
			pos(center().x,MAP_HEIGHT/2),
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
				pos(center().x+30,BOTTOM),
				color(MYBLUE)
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
		 //delete clientsList[clientKey]
		 clientsList =  Object.keys(clientsList).filter(key => key != clientKey).reduce((acc, key) => {
        acc[key] = clientsList[key];
        return acc;
    }, {});
		 //console.log("The filtered list");
		 //console.log(clientsList);
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

scene("bonus",(jourIdx,totalCoins,totalStars)=>{

			add_bordure_map()
			let bulleFond = add([
			 sprite("carton_bulle"),//, width: width() - 230
			 anchor("center"),
			 scale(1),
			 pos(center().x-10,BOTTOM-25),
		 ])
			play("audio_reussite") //indicate that an object has been gained
			//instruction
			// let instruction = add([
			// 		text("(appuie sur enter pour retourner à l'atelier)", { size: TXTSIZE }),
			// 		scale(1),anchor("center"),pos(center().x,BOTTOM+10),])
			// // item based on the day
			switch(jourIdx){
			// BONUS
			case 1 :
			// add text, sprite and update inventory
			addBonus("J'ai gagné un démonte-pneu","demontepneu","Démonte-pneu")
			onKeyPress("enter", () => {	goInteraction(jourIdx,totalCoins,totalStars) })
			break;

			case 2 :
			// add text, sprite and update inventory
			addBonus("J'ai gagné des croquettes pour chat!","croquettes","Croquettes")
			croquettesFlag = true //flag to modify the collision with the cat
			onKeyPress("enter", () => {	goInteraction(jourIdx,totalCoins,totalStars) })
			break;

			case 3:
			// add text, sprite and update inventory
			addBonus("J'ai gagné des chips!","bonus_chips","Chips")
			chipsFlag = true //flag to modify the collision with the pers exte
			onKeyPress("enter", () => {
							goInteraction(jourIdx,totalCoins,totalStars)
					 })
			break;
			case 4:
			addBonus("J'ai gagné une boîte à outils!","bonus_boites","Boîte à outils")
			boiteOutilsFlag = true
			onKeyPress("enter", () => {
							goInteraction(jourIdx,totalCoins,totalStars)
					 })
			break;
		}
})
scene("Carton_Journalier", (clientKey,jourIdx,totalCoins,totalStars, forcePercentIncrease,clientelePercentIncrease,isIncreaseTrue) => {
		add_bordure_map()
		play("carton")
		const TXTSIZEBILAN = TXTSIZE+3
		// FOND BILAN
		let textBox = add([
			sprite("carton_bilan"),//, width: width() - 230
			anchor("center"),
			scale(1),
			pos(center().x,MAP_HEIGHT/2-55),
			"textBox"
		])
		// JOUR
		const bilanTxt = add([
			text("BILAN DU JOUR\n--------------\n"+repairCounter+" REPARATIONS\n"+fightCounter+" CLAQUES\n--------------\n6 CLIENTS", {font: "prstart", size:TXTSIZEBILAN}),color(MYPURPLE),
			pos(center().x-70, MAP_HEIGHT/4-20),
			"bilan"
		])
		let coinsAnim = add([
			text("$ : ", {font: "prstart", size:TXTSIZEBILAN}),color(MYPURPLE),
			pos(center().x+45,  (MAP_HEIGHT/4)),
			"bilan"
		])
		let starsAnim = add([
			text("* : ", {font: "prstart", size:TXTSIZEBILAN}),color(MYPURPLE),
			pos(center().x+45,  (MAP_HEIGHT/4)+14),
			"bilan"
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
			// if( ){
			// 	caseNumber = 1
			// }
			// you fighted 2 times too much but hit all the ones you should ahve hit
			if(fightCounter == fightGoalsList[jourIdx-1]+1 && justifiedFightCounter == fightGoalsList[jourIdx-1]){
				caseNumber = 3
			}
			// you fighted two times not enough when you should have fighted
			if(justifiedFightCounter == fightGoalsList[jourIdx-1]-2 || justifiedFightCounter == fightGoalsList[jourIdx-1]-1){
				caseNumber = 2
			}
			// you fighted more than two times too much but hit all the ones you should have hit
			if(fightCounter >= fightGoalsList[jourIdx-1]+2 && justifiedFightCounter == fightGoalsList[jourIdx-1]){
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
			])
			switch(caseNumber){

			// BONUS
			case 0 :

				let bravo = add([text("Wouahhh j'ai viré tous les sexistes!",
				{ size: TXTSIZE, width:TXTWIDTH,align:"center",font:"joystix"}),color(MYBLUE),scale(1),anchor("center"),pos(center().x,BOTTOMTEXT)])
				// object gained
				onKeyPress("enter",()=>{go("bonus",jourIdx,totalCoins,totalStars)})

			break;
			// BASIC
			case 1 :
			add([text("J'ai fait du bon travail.",
				{ size: TXTSIZE,width:TXTWIDTH, font:"joystix"}),color(MYPURPLE),scale(1),anchor("center"),pos(center().x,BOTTOMTEXT)])
			// instruction
				// add([
				// 			text("(appuie sur enter pour retourner à l'atelier)", { size: TXTSIZE }),
				// 			scale(1),anchor("center"),pos(center().x,BOTTOM+10),])
							onKeyPress("enter", () => {
								if(jourIdx==1){go("interactionJour1", jourIdx, totalCoins,totalStars,INITIALPOSITION)}
								if(jourIdx==2){go("interactionJour2", jourIdx, totalCoins,totalStars,INITIALPOSITION)}
								if(jourIdx==3){go("interactionJour3", jourIdx, totalCoins,totalStars,INITIALPOSITION)}
								if(jourIdx==4){go("interactionJour4", jourIdx, totalCoins,totalStars,INITIALPOSITION)}
							})
				break;
			case 2 :
			// BASIC with Burnout WARNING:=
			add([text("Je suis épuiséex... Ça me fatigue ces remarques sexistes...",
				{ size: TXTSIZE,width:TXTWIDTH, font:"joystix"}),color(MYBLUE),scale(1),anchor("center"),pos(center().x,BOTTOMTEXT)])
				// instruction
					 // add([
						// 	text("(appuie sur enter pour retourner à l'atelier)", { size: TXTSIZE }),
						// 	scale(1),anchor("center"),pos(center().x,BOTTOM+10),])
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
				add([text("Ça va être dur de payer le loyer...",
					{ size: TXTSIZE, width:TXTWIDTH,font:"joystix"}),color(MYBLUE),scale(1),anchor("center"),pos(center().x,BOTTOMTEXT)])
					// instruction
						 // add([
							// 	text("(appuie sur enter pour retourner à l'atelier)", { size: TXTSIZE }),
							// 	scale(1),anchor("center"),pos(center().x,BOTTOM+10),])
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
			add([text("Je suis totalement epuiséex par le sexisme...\nJe ne peux plus travailler.",
				{ size: TXTSIZE,width:TXTWIDTH, font:"joystix"}),scale(1),color(MYBLUE),anchor("center"),pos(center().x,BOTTOMTEXT)])
			wait(4.5,()=>go("Burnout"))
break;
			case 5 :
			// GAMEOVER BANKRUPT
			add([text("Impossible de payer le loyer...tant pis je me suis bien amuséex et c'est la fête!",
				{ size: TXTSIZE, font:"joystix", width:TXTWIDTH}),scale(1),anchor("center"),color(MYBLUE),pos(center().x,BOTTOMTEXT)])
		  wait(4.5,()=>go("Bankrupt"))
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

	scene("interactionJour1", (jourIdx,totalCoins,totalStars,position) => {
			//function instead of commander
			levelAtelier = add_atelier_map()

			//status
			addStatusBar(jourIdx,totalCoins,totalStars)

			let dialogInteraction1 = [
				["pnj","Hé salut!"],
				["m","Salut! Désolée c'est fini pour aujourd'hui, il faut revenir demain..."],
				["pnj","Oui, oui je venais pas pour réparer mon vélo..."],
				["m","Heu ok, tu viens pour quoi alors?"],
				["pnj","Heu... ha oui! Haha pardon. Je viens te filer la clé que j'ai oublié de rendre quand j'ai arrêté de bosser ici. Je suis un peu tête en l'air des fois."],
				["m","Ah! merci!"],
				["pnj","De rien, allé à la proch ciao ciao..."]
				 //heu, la sortie c'est par là hein."]
			]

			// try with function
			interactionJour(1,levelAtelier,justifiedFightCounter,totalCoins,totalStars,
				{x:center().x-1.8*16,y:MAP_HEIGHT/2-(2*16)},"perso_interaction_1",{x:16*5,y:16*7},dialogInteraction1,{x:16*1.5,y:16*11},false,1)
				// without function
				// 		// add the mecanix// Add player game object
				// 		const colBox = 3
				// 		const player = add([
				// 			sprite("mecanix",{anim:"idle"}),
				// 			anchor("center"),
				// 			pos(center().x-2*16,MAP_HEIGHT/2-(3*16)),//the default position is in front of the workshop
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
				// 				16*7//Math.floor((MAP_HEIGHT/2-65)  / TILE_HEIGHT) * TILE_HEIGHT + TILE_HEIGHT / 2,
				// 			))
				// 		})
				// 		// let retour = onKeyPress("enter",() => { perso.setTarget(vec2(
				// 		// 		16*0,//Math.floor((center().x+45) / TILE_WIDTH) * TILE_WIDTH + TILE_WIDTH / 2,
				// 		// 		16*12//Math.floor((MAP_HEIGHT/2-65)  / TILE_HEIGHT) * TILE_HEIGHT + TILE_HEIGHT / 2,
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
				// 					16*11//Math.floor((MAP_HEIGHT/2-65)  / TILE_HEIGHT) * TILE_HEIGHT + TILE_HEIGHT / 2,
				// 				))
				// 				console.log("Before the fade\n le jour "+jourIdx+"\n le justifiedFightCounter "+justifiedFightCounter+"\n la thune c'est "+totalCoins+"\n les stars "+totalStars)
				// 				perso.onTargetReached(()=>{
				// 					dialogAction.paused =true
				// 					let fadeOut = add([d
				// 						pos(center().x, MAP_HEIGHT/2-30),
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
	scene("interactionJour2", (jourIdx,totalCoins,totalStars,position) => {
		//function instead of commander
		levelAtelier = add_atelier_map()
		//status
		addStatusBar(jourIdx,totalCoins,totalStars)

		let dialogInteraction2 =[
			["M","Coucou!"],
			["PNJ","Hello! Je suis en train de faire le tour du quartier et je me demandais si je pouvais poser une affiche ici?"],
			["M","Oui ok tu peux la mettre sur le mur du fond."],
			["PNJ","Merci! C'est stylé que tu bosses ici!"],
			["PNJ","Ha et t'es dac de me prêter un tournevis plat?"],
			["M","Oui pas de soucis, voilà."],
			["PNJ","Merci à bientôt!"],
		]

		// try with function
		interactionJour(jourIdx,levelAtelier,justifiedFightCounter,totalCoins,totalStars,
			{x:center().x-40,y:MAP_HEIGHT/2-(2*16)},"perso_interaction_2",{x:16*4,y:16*7},dialogInteraction2,{x:16*2,y:16*5},true,1)
		})
	scene("interactionJour3", (jourIdx,totalCoins,totalStars,position) => {
		levelAtelier = add_atelier_map()
			//status
			addStatusBar(jourIdx,totalCoins,totalStars)

			let dialogInteraction3 =
			[
	        ["PNJ","Hey salut!"],
	        ["M","Salut, c'est fermé pour aujourd'hui..."],
	        ["PNJ","Oui justement,je suis venue de demander quelque chose, je fais partie d'un collectif qui s'appelle Vélacyraptix tu as déjà entendu parler?"],
	        ["M","Ha oui ça me dit quelque chose, vous faites des ateliers non?"],
	        ["PNJ","Oui, et il y en avait un ce soir, mais il y a eu un imprévu et on se demandait si on pouvait le faire ici..."],
	        ["M","Comment ça? Vous voulez pas venir la journée plutôt?"],
	        ["PNJ","En fait on fait des ateliers en mixité choisie sans mec cisgenre..."],
	        ["M","Ha oui ok, je vois! C'est une trop bonne idée, c'est vrai que c'est pas toujours évident de se faire prendre les outils des mains et se faire toujours tout expliquer...haha, je connais ça... Vous êtes bienvenux!"],
	        ["PNJ","Merci c'est trop sympa!"],
	        ["M","HA! Si vous voyez la personne habillée en dino dites lui que vous faites ça, elle vient de partir et elle disait qu'elle voulait apprendre à mieux bricoler!"],
	        ["PNJ","Bonne idée ! Ha oui et tu serais dac qu'on te laisse des flyers et d'en donner aux gens que tu connais?"],
	         ["M","Biensur! bon je vais y aller je vous laisse les clées remettez les dans la boite à clé"],
	        ["PNJ","Ca marche, bonne soirée ! Allez les gentes vous pouvez venir !"]
	        ]

			// [
			// 		["pnj","Coucou, excuse-moi c'est possible de te poser une question là?"],
			// 		["m","Oui, dis-moi! "],
			// 		["pnj","En fait je fais partie d'un collectif qui s'appelle Vélacyraptix... "],
			// 		["m","Ah oui! J'en ai entendu parler. Vous faites des atelier de mécanique en mixité choisie sans hommes cisgenres nan?! "],
			// 		["pnj","Oui c'est ca, on propose des moments pour apprendre à réparer et bricoler des vélos sans homme cisgenres. Le but c'est de limiter l'impact du patriarcat un ptit moment quoi..."],
			// 		["m","C'est cool! C'est quand le prochain? "],
			// 		["pnj","Et ben justement...on en a un ce soir mais on savait pas trop ou le faire... notre plan pour emprunter des outils est tombe a l'eau..Est-ce qu'on pourrait se mettre ici?"],
			// 		["m","Oh... euh oui bien sur! Y'a tout ce qui faut et c'est super comme idée"],
			// 		]

			// try with function
			interactionJour(3,levelAtelier,justifiedFightCounter,totalCoins,totalStars,
				{x:center().x-20,y:MAP_HEIGHT/2-(2*16)}/*player postiion*/,"perso_interaction_3",{x:16*5,y:16*7},dialogInteraction3,{x:16*5,y:16*9},true,0)})
scene("interactionJour4", (jourIdx,totalCoins,totalStars,position) => {
	levelAtelier = add_atelier_map()
		//status
		addStatusBar(jourIdx,totalCoins,totalStars)


		let dialogInteraction4 = [
				["pnj","Hey, j'ai entendu qu'ici tout le monde n'est pas le bienvenu... "],
				["m","T'entends quoi par là? "],
				["pnj","Bah que c'est un peu extrême d'exclure des gars, en plus il parait qu'on se ramasse des claques si on dit des trucs qui vous plaisent pas."],
				["m","Euh okay..."],
				["pnj","Bref faites gaffe à vous..."],
				]

		// try with function
		interactionJour(4,levelAtelier,justifiedFightCounter,totalCoins,totalStars,
			{x:center().x-20,y:MAP_HEIGHT/2-(2*16)}/*player postiion*/,"perso_interaction_4",{x:16*5,y:16*7},dialogInteraction4,{x:16*1.5,y:16*11},true,1)})

	// ADD GAME OVER SCENE
	scene("partyWin", (jourIdx,totalCoins,totalStars) => {
		musicFond.paused = true
		play("audio_fete")
		add_atelier_map()
		add_atelier_items()
		destroyAll("pied_velos_kc")

		//add persos
		let louise = add([
			sprite("perso_dechett_1",{anim:"walk_right"}),
			anchor("center"),
			pos(center().x+1*16,MAP_HEIGHT/2+5*16),// the modified position from before
			area(),
			body({isStatic:true}),
			scale(PERSOSCALE),
			"louise",
		])
		let flinta1 = add([
			sprite("perso_flinta_1",{anim:"walk_right"}),
			anchor("center"),
			pos(center().x-3.5*16,MAP_HEIGHT/2-(2.5*16)),// the modified position from before
			area(),
			body({isStatic:true}),
			scale(PERSOSCALE),
			"flinta1",
		])
		let flinta2 = add([
			sprite("perso_flinta_2",{anim:"walk_right"}),
			anchor("center"),
			pos(center().x-3*16,MAP_HEIGHT/2-2*16),// the modified position from before
			area(),
			body({isStatic:true}),
			scale(PERSOSCALE),
			"flinta2",
		])
		let flinta3bis = add([
			sprite("perso_flinta_3",{anim:"walk_right"}),
			anchor("center"),
			pos(center().x-5*16,MAP_HEIGHT/2+4*16),// the modified position from before
			area(),
			body({isStatic:true}),
			scale(PERSOSCALE),
			"flinta3",
		])
		let allie = add([
		sprite("client_6_petit",{anim:"walk_right"}),
		anchor("center"),
		pos(center().x-6.5*16,MAP_HEIGHT/2+4*16),// the modified position from before
		area(),
		body({isStatic:true}),
		scale(PERSOSCALE),
		"allie"
	])
		// add party mood
		const raveParty = add([
			sprite("atelier_rave",{anim:"idle"}),
			anchor("center"),
			scale(1),
			pos(center().x,MAP_HEIGHT/2),
		])
		// Titre
		const title = add([
			text("BRAVO!\n ", { size: LARGETXTSIZE, font:"joystix" }),
			scale(1),
			anchor("center"),
			pos(center().x,MAP_HEIGHT/2-16)
		])

		// Recommencez le jeu
		add([
			text("(appuie sur espace pour recommencer le jeu)", { size: TXTSIZE }),
					scale(1),anchor("center"),pos(center().x,BOTTOM+5),])

					onKeyPress("space",() => {
							musicFond.paused= true
								    go("start")
								})
	})
// ADD GAME OVER SCENE
scene("Bankrupt", (jourIdx,totalCoins,totalStars) => {
	musicFond.paused = true
	let musicFete = play("audio_fete")
	add_atelier_map()
	// add party mood
	const raveParty = add([
		sprite("atelier_rave",{anim:"idle"}),
		anchor("center"),
		scale(1),
		pos(center().x,MAP_HEIGHT/2),
	])
	// Titre
	const title = add([
		text("GAME OVER!\n ", { size: LARGETXTSIZE, font:"joystix" }),
		scale(1),
		anchor("center"),
		pos(center().x,MAP_HEIGHT/2-16)
	])

	// Recommencez le jeu
	add([
		text("(appuie sur espace pour recommencer le jeu)", { size: TXTSIZE }),
				scale(1),anchor("center"),pos(center().x,BOTTOM+5),])

				onKeyPress("space",() => {
					musicFete.paused = true
							    go("start")
							})
})

scene("Burnout", (jourIdx,totalCoins,totalStars) => {
	musicFond.paused = true
	let musicBurnout = play("audio_burnout")
	add_atelier_map()
	destroyAll("velorouge")
	// Titre
	const title = add([
		text("GAME OVER!\n ", { size: LARGETXTSIZE, font:"joystix" }),
		scale(1),
		anchor("center"),
		pos(center().x,MAP_HEIGHT/2-16)
	])

	// Recommencez le jeu
	add([
				text("(appuie sur espace pour recommencer le jeu)", { size: TXTSIZE }),
				scale(1),anchor("center"),pos(center().x,BOTTOM+5),])

	onKeyPress("space",() => {
						musicBurnout.paused = true
				    go("start")
				})
})

function start() {
		// Start with the "game" scene, with initial parameters
//go("atelier", 5, 85,0/*totalCoins*/,INITIALPOSITION)
//go("interactionJour1",1,totalCoins,totalStars,INITIALPOSITION)
//go("jourFinal",5,100,100,INITIALPOSITION,2)
//go("outside",5,30,30,INITIALPOSITION)
//	go("interactionJour1", (1,0,40,20,INITIALPOSITION))//go("clientDialog",1,75,100/*totalCoins*/,50/*force*/)
 //justifiedFightCounter=4
 //go("Carton_Journalier","client1",1,30,30,10,10,1)
 //go("bonus",2)
//	go("inventaire", 1, 10, 10,INITIALPOSITION,0)
 go("start")
	}
start()
