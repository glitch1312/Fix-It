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
loadAseprite("client1", "images/sprite_client1.png", "images/sprite_client1.json")
loadAseprite("talk_BG_tiles", "images/talk_BG_tiles.png", "images/talk_BG_tiles.json")
loadAseprite("Sprite_perso_velo", "images/Sprite_perso_velo.png", "images/Sprite_perso_velo.json")
loadAseprite("scene_dialogue_punch","images/scene_dialogue_punch.png", "images/scene_dialogue_punch.json")
loadAseprite("sprite_old","images/sprite_oldcharacter.png","images/sprite_oldcharacter.json")
loadAseprite("sprite_blondex","images/sprite_smallcharacter.png","images/sprite_smallcharacter.json")
loadAseprite("badass_symbol","images/Sprite_scene_jeu_vie.png","images/Sprite_scene_jeu_vie.json")
loadAseprite("coins_symbol","images/Sprite_scene_jeu_piece.png","images/Sprite_scene_jeu_piece.json")
loadAseprite("contenair","images/Sprite_out_contenair.png","images/Sprite_out_contenair.json")
loadAseprite("velo_sur_pied","images/Sprite_velosurpied.png","images/Sprite_velosurpied.json")
loadAseprite("etabli_fini","images/Sprite_etabli.png","images/Sprite_etabli.json")
loadAseprite("mecanix","images/sprite_maincharacter_petit.png","images/sprite_maincharacter_petit.json")
loadAseprite("mecanix_velo","images/Sprite_maincharacter_velo.png","images/Sprite_maincharacter_velo.json")
loadAseprite("choix_frapper_juste", "images/choix_frapper_juste_8images.png", "images/choix_frapper_juste_8images.json")
loadAseprite("choix_reparer", "images/choix_reparer.png", "images/choix_reparer.json")
// clients
loadAseprite("client_1_petit","images/client_1_petit.png", "images/client_1_petit.json") //punk
loadAseprite("client_2_petit","images/client_2_petit.png", "images/client_2_petit.json")
loadAseprite("client_3_petit","images/client_3_petit.png", "images/client_3_petit.json")
loadAseprite("client_4_petit","images/client_4_petit.png", "images/client_4_petit.json") //old
loadAseprite("client_5_petit","images/client_5_petit.png", "images/client_5_petit.json") //old


loadAseprite("client_7_petit","images/client_7_petit.png","images/client_7_petit.json")
loadAseprite("client_8_petit","images/client_8_petit.png","images/client_8_petit.json")
loadAseprite("client_9_petit","images/client_9_petit.png","images/client_9_petit.json")

loadAseprite("client_11_petit","images/client_11_petit.png","images/client_11_petit.json")
loadAseprite("client_12_petit","images/client_12_petit.png","images/client_12_petit.json")



// SPRITE ATLAS
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
loadSprite("old_en_pied","images/Sprite_client_5_dialogue.png")
loadSprite("blondex_en_pied","images/Sprite_client_4_dialogue.png")
loadSprite("velo_rouge","images/Sprite-velorouge.png")
loadSprite("arbre","images/Sprite_arbre.png")
loadSprite("dechett","images/Sprite_dechett.png")
//clients
loadSprite("client_1_grand", "images/client_1_grand.png") //punk
loadSprite("client_2_grand","images/client_2_grand.png") // brunex en pied
loadSprite("client_3_grand","images/client_3_grand.png")
loadSprite("client_4_grand","images/client_4_grand.png")
loadSprite("client_5_grand","images/client_5_grand.png")

loadSprite("client_7_grand","images/client_7_grand.png")
loadSprite("client_8_grand","images/client_8_grand.png")
loadSprite("client_9_grand","images/client_9_grand.png")

loadSprite("client_11_grand","images/client_11_grand.png")
loadSprite("client_12_grand","images/client_12_grand.png")

// AUDIOS
loadRoot("assets/")
// downloaded from https://mixkit.co/free-sound-effects/game/ under the Mixkit Sound Effects Free License
loadSound("hitSound", "audio/bomb_explosion.wav");
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
loadFont("arcade","assets/fonts/joystix.otf")
loadFont("prstart","assets/fonts/pixel.ttf")
// downloaded at https://www.1001fonts.com/joystix-font.html under the https://www.1001fonts.com/joystix-font.html#license license
loadFont("joystix","assets/fonts/joystix.otf")
// ------INITIALIZATION-------//
// --CONSTANTS-- //
let totalCoins = 0
let totalStars = 0
let percent = 50 // level of clientele
let force = 10
let jourIdx = 1 // game starts at day 1
let clientCounter = 1 // no client interaction at start
let fightCounter = 0
let justifiedFightCounter = 0
let repairCounter = 0
let fightGoalsList = [3]

const BOTTOM = 3/4*256
const TXTSIZE = 8
const LARGETXTSIZE = 24
const PERSOSCALE = 1.4
const INITIALPOSITION = {x:center().x,y:center().y}//position in atelier at start, and at any return from other scenes

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
				[ "mecanix_en_pied", "Hello!.. "],
				[ "mecanix_en_pied", "Qu'est-ce qui se passe avec ton vélo?" ],
				[ "client_1_grand", "Mmmh... je pourrais plutôt parler à un homme.." ],
				[ "mecanix_en_pied", "..." ],
			],
			//repair scene
			outilsSprite:	["Sprite-tool-wrench","Sprite_clepedale"],
			outilsGoals:	[1,1],
			bombsSprite:	["Sprite_cliket","sprite_clee6pans","Sprite_marteau","sprite_tournevis","Sprite_demontepneu","sprite_demontechaine","sprite_clefmonte","Sprite_fouet","Sprite_clef","sprite_pince",],

			//health values
			isSexist: true,
			clienteleValue: 15,
			forceValue:20,
			// coinsValue = sum(outilsGoals)

	},
	"client2":{
			spriteName:"client_2_petit",
			bigSpriteName:"client_2_grand",
			dialogs:[
				[ "client_2_grand", "Salut!" ],
				[ "mecanix_en_pied", "Hello!\n Je vois que ta roue est voilée"],
				[ "client_2_grand", "Nan je pense pas que c'est ça, je peux t'expliquer ce que c'est..." ],
				[ "mecanix_en_pied", "C'est sur que ta roue est voilée. Elle touche le frein de façon irregulière." ],
				[ "client_2_grand", "Nan mais je t'explique je pense pas que tu saches ce que c'est, c'est plutôt ..."]
			],
			//repair scene
			outilsSprite:["Sprite-tool-wrench","sprite_clefmonte","Sprite_demontepneu"],
			outilsGoals:	[1,1,1],
			bombsSprite:	["Sprite_cliket","sprite_clee6pans","Sprite_marteau","sprite_tournevis","sprite_demontechaine","Sprite_fouet","Sprite_clef","sprite_pince",],
			isSexist: true,
			clienteleValue: 25,
			forceValue:30,

	},
	"client3":{
			spriteName:"client_3_petit",
			bigSpriteName:"client_3_grand",
			dialogs:[
				[ "mecanix_en_pied", "Bonjour, dites-moi tout!" ],
				[ "client_3_grand", "J'ai un problème avec mon vélo"],
				[ "mecanix_en_pied", "Je peux vous répondre" ],
				[ "client_3_grand", "Je veux changer les plaquettes" ],
				[ "mecanix_en_pied", "D'accord!"]
			],
			//repair scene
			outilsSprite:["sprite_tournevis","sprite_pince"],
			outilsGoals:	[1,1],
			bombsSprite:	["Sprite_cliket","sprite_clee6pans","Sprite_marteau","Sprite_demontepneu","sprite_demontechaine","sprite_clefmonte","Sprite_fouet","Sprite_clef",],
			isSexist: false,
			clienteleValue: 40,
			forceValue:30,

	},
	"client4":{
			spriteName:"client_4_petit",
			bigSpriteName:"client_4_grand",
			dialogs:[
				[ "mecanix_en_pied", "Salut, qu'est-ce qui se passe?" ],
				[ "client_4_grand", "Je cherche le patron, j'ai un problème avec mon vélo"],
				[ "mecanix_en_pied", "Je peux vous répondre,dites-moi tout! " ],
				[ "client_4_grand", "Ah, vous êtes mécanicien.ne.x?" ],
				[ "mecanix_en_pied", "oui"],
				[ "client_4_grand", "C'est surprenant! Bravo!" ],
			],
			//repair scene
			outilsSprite:["Sprite_marteau"],
			outilsGoals:	[3],
			bombsSprite:	["Sprite_cliket","Sprite-tool-wrench","sprite_clee6pans","Sprite_demontepneu","sprite_demontechaine","sprite_clefmonte","Sprite_fouet","Sprite_clef",],
			isSexist: true,
			clienteleValue: 25,
			forceValue:10,
	},
	"client5":{
			spriteName:"client_5_petit",
			bigSpriteName:"client_5_grand",
			dialogs:[
				[ "mecanix_en_pied", "Salut, qu'est-ce qui se passe?" ],
				[ "client_5_grand", "Je cherche le patron, j'ai un problème avec mon vélo"],
				[ "mecanix_en_pied", "Je peux vous répondre,dites-moi tout! " ],
				[ "client_5_grand", "Ah, vous êtes mécanicien.ne.x?" ],
				[ "mecanix_en_pied", "oui"],
				[ "client_5_grand", "C'est surprenant! Bravo!" ],
			],
			//repair scene
			outilsSprite:["Sprite_marteau"],
			outilsGoals:	[3],
			bombsSprite:	["Sprite_cliket","Sprite-tool-wrench","sprite_clee6pans","Sprite_demontepneu","sprite_demontechaine","sprite_clefmonte","Sprite_fouet","Sprite_clef",],
			isSexist: true,
			clienteleValue: 25,
			forceValue:10,
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
			clienteleValue: 25,
			forceValue:10,
	},
	"client8":{
			spriteName:"client_8_petit",
			bigSpriteName:"client_8_grand",
			dialogs:[
				[ "mecanix_en_pied", "Bonjour" ],
				[ "client_8_grand", "J'aurais besoin d'un petit service, vous pourriez faire ca?"],
				[ "mecanix_en_pied", "Oui, bien sûr" ],
				[ "client_8_grand", "Parfait" ],
			],
			//repair scene
			outilsSprite:["sprite_demontechaine","sprite_tournevis"],
			outilsGoals:	[2,2],
			bombsSprite:	["Sprite_cliket","Sprite_marteau","Sprite-tool-wrench","sprite_clee6pans","Sprite_demontepneu","sprite_clefmonte","Sprite_fouet","Sprite_clef",],
			isSexist: false,
			clienteleValue: 25,
			forceValue:10,
	},
	"client9":{
			spriteName:"client_9_petit",
			bigSpriteName:"client_9_grand",
			dialogs:[
				[ "mecanix_en_pied", "Bonjour" ],
				[ "client_9_grand", "J'aurais besoin d'un petit service, vous pourriez faire ca?"],
				[ "mecanix_en_pied", "Oui, bien sûr" ],
				[ "client_9_grand", "Parfait" ],
			],
			//repair scene
			outilsSprite:["sprite_demontechaine","sprite_tournevis"],
			outilsGoals:	[2,2],
			bombsSprite:	["Sprite_cliket","Sprite_marteau","Sprite-tool-wrench","sprite_clee6pans","Sprite_demontepneu","sprite_clefmonte","Sprite_fouet","Sprite_clef",],
			isSexist: false,
			clienteleValue: 25,
			forceValue:10,
	},
	"client11":{
			spriteName:"client_11_petit",
			bigSpriteName:"client_11_grand",
			dialogs:[
				[ "mecanix_en_pied", "Bonjour" ],
				[ "client_11_grand", "J'aurais besoin d'un petit service, vous pourriez faire ca?"],
				[ "mecanix_en_pied", "Oui, bien sûr" ],
				[ "client_11_grand", "Parfait" ],
			],
			//repair scene
			outilsSprite:["sprite_demontechaine","sprite_tournevis"],
			outilsGoals:	[2,2],
			bombsSprite:	["Sprite_cliket","Sprite_marteau","Sprite-tool-wrench","sprite_clee6pans","Sprite_demontepneu","sprite_clefmonte","Sprite_fouet","Sprite_clef",],
			isSexist: false,
			clienteleValue: 25,
			forceValue:10,
	},
	"client12":{
			spriteName:"client_12_petit",
			bigSpriteName:"client_12_grand",
			dialogs:[
				[ "mecanix_en_pied", "Bonjour" ],
				[ "client_12_grand", "J'aurais besoin d'un petit service, vous pourriez faire ca?"],
				[ "mecanix_en_pied", "Oui, bien sûr" ],
				[ "client_12_grand", "Parfait" ],
			],
			//repair scene
			outilsSprite:["sprite_demontechaine","sprite_tournevis"],
			outilsGoals:	[2,2],
			bombsSprite:	["Sprite_cliket","Sprite_marteau","Sprite-tool-wrench","sprite_clee6pans","Sprite_demontepneu","sprite_clefmonte","Sprite_fouet","Sprite_clef",],
			isSexist: false,
			clienteleValue: 25,
			forceValue:10,
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

function percentColoring(percent,clientBar,clientBarWidth){

	if (percent>0 && percent<=30){
		//below 50% critical situation
		//clientBar.rect = (percent,5)
		clientBar.width = percent*clientBarWidth/100
		clientBar.color = MYPURPLE

	}else if (percent>31 && percent<=75){
		clientBar.width = percent*clientBarWidth/100
		clientBar.color = MYPINK
	} else  { (percent>75 )
		clientBar.width = percent*clientBarWidth/100
		clientBar.color = MYYELLOW
	}
}
// Status bar
function addStatusBar(jourIdx, percent,totalCoins,force){

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

		// CLIENTELE BAR
		// const clientTxt = add([
		// 	text("CLIENTS ", {size:TXTSIZE}),
		// 	pos(center().x+15, 17),
		// ])

		// const clientHolder = add([
  	// rect(62, 7),
  	// pos(center().x+48, 25.5),
		// outline(1,MYPURPLE),
		// color(1,1,1,0)
		// ])


		// const clientBarWidth = (percent%100)*60/100
		// const clength = 62
		// const clientBar = add([
  	// rect(clientBarWidth, 5),
  	// pos(center().x+49, 35),
		// color(MYYELLOW)
		// ])

		// BADASS BAR
		// const badassTxt = add([
		// 	text("FORCE ", {size:TXTSIZE}),
		// 	pos(center().x+15, 28),
		// ])

		// const badassHolder = add([
  	// rect(62, 7),
  	// pos(center().x+48, 32),
		// outline(1,MYPURPLE),
		// color(1,1,1,0)
		// ])
		// const badassBarWidth =  force*60/100
		//
		// const badassBar = add([
  	// rect(badassBarWidth, 5),
  	// pos(center().x+49, 27),
		// color(MYYELLOW)
		// ])



		// update the success bar
		//clientBar.onUpdate(()=> percentColoring(percent,clientBar,clength))
		//badassBar.onUpdate(()=> percentColoring(force,badassBar,clength))

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

function add_minigame_map(spriteCouleurFond){
	const MAP_WIDTH = 256;
	const MAP_HEIGHT = 256;
	addLevel([
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
		"GhVhHhhHhhhhhVhL",
		"GJJJJJJJJJJJJJJL",
		"GJJJJJJJJJJJJJJL",
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
				sprite("scene_jeu_coinHG"),
				area(),
				body({isStatic:true}),
			],
			"b": () => [
				sprite("scene_jeu_bordhaut"),
				area(),
				body({isStatic:true}),
			],
			"N": () => [
				sprite("scene_jeu_coinHD"),
				area(),
				body({isStatic:true}),
			],
			"G": () => [
				sprite("scene_jeu_bordgauche"),
				area(),
				body({isStatic:true}),
			],
			"L": () => [
				sprite("scene_jeu_borddroite"),
				area(),
				body({isStatic:true}),
			],
			"-": () => [
				sprite(spriteCouleurFond),
				outline(40, 40),
			],
			"Q": () => [
				sprite("scene_jeu_coinBG"),
				area(),
				body({isStatic:true}),
			],
			"v": () => [
				sprite("scene_jeu_bordbas"),
				area(),
				body({isStatic:true}),

			],
			"P": () => [
				sprite("scene_jeu_coinBD"),
				area(),
				body({isStatic:true}),

			],
			"J": () => [
				sprite("scene_jeu_fond_bas"),
			],
			"H": () => [
				sprite("scene_jeu_fond_horizon"),
			],
			"h": () => [
				sprite("scene_jeu_fond_horizon_smile"),

			],
			"V": () => [
				sprite("scene_jeu_fond_horizon_velo"),
				area(),
				body({isStatic:true}),
				"veloStop"
			]
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

	// ------ Boucle de Gameplay ------- //
	// ------ Start --------------------------------------------------- //
	scene("start", (jourIdx,percent,totalCoins,force) => {
		add_bordure_map()
		// Titre
		const title = add([
			text("Fix it !", { size: LARGETXTSIZE, font:"arcade" ,width:MAP_WIDTH-64}),
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
			go("atelier", jourIdx,percent,totalCoins,force,INITIALPOSITION)
		})
	})

	// ------ Boucle de Gameplay ------- //
	// ------ Dialogue avec le client --------------------------------------------------- //
	scene("clientDialog", (clientKey,jourIdx,percent,totalCoins,force) => {

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

		addStatusBar(jourIdx,percent,totalCoins,force)

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
		//let initDialog =  dialogs[levelIdx-1].length
		//console.log(levelIdx)
		//levelDialog = dialogs[levelIdx-1]

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
				go("choix",clientKey, jourIdx,percent,totalCoins,force)
			}
			updateDialog()
		})

		// Update the on screen sprite & text
		function updateDialog() {
			const [ char, dialog ] = levelDialog[curDialog]
			// Use a new sprite component to replace the old one
			avatar.use(sprite(char))
			// Update the dialog text
			// mettre le texte lettre apres lettre
			txt.text = dialog
}
		//firt call to initialize on enter
	 updateDialog()

})
function add_atelier_map(){
	// MAP
	const MAP_WIDTH = 256;
	const MAP_HEIGHT = 256;
	const atelierMAP =
	addLevel([
		"KbbbbbbbbbbbbbbN",
		"GMMMMMMMMMMMMMML",
		"GmmmmmmmmmmmmmmL",
		"GZoooooooooooooL",
		"G--oot---------L",
		"G--tt-OOOOOO---L",
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
		const table = add([
			sprite("etabli_fini",{anim:"idle"}),
			scale(1),
			anchor("center"),
			pos(center().x,center().y-10),
			area(),
			body({isStatic:true})
		])
		//mur du murFond
		const murFond = add([
			sprite("atelier_mur_fond"),
			anchor("center"),
			pos(center().x,56)
		])
		//velos
		const velo= add([
			sprite("velo_rouge"),
			scale(1),
			anchor("center"),
			pos(center().x,5*16),
			area(),
			body({isStatic:true})
		])
	add([
			sprite("velo_rouge"),
			scale(1),
			anchor("center"),
			pos(center().x+6*16,7.75*16),
			area(),
		body({isStatic:true})
		])
		add([
				sprite("velo_rouge"),
				scale(1),
				anchor("center"),
				pos(center().x+6*16,8.5*16),
				area(),
			body({isStatic:true})
			])
		add([
				sprite("velo_rouge"),
				scale(1),
				anchor("center"),
				pos(center().x+6*16,9.25*16),
				area(),
				body({isStatic:true})
			])
		const velo_sur_pied = add([
			sprite("velo_sur_pied",{anim:"idle"}),
			scale(1),
			anchor("center"),
			pos(center().x-(6*16),8*16),
			area(),
					body({isStatic:true})
		])
		add([
			sprite("velo_sur_pied",{anim:"idle"}),
			scale(1),
			anchor("center"),
			pos(center().x+4*16,MAP_HEIGHT-2*16),
			area(),
			body({isStatic:true})
		])

}
	// ------ Boucle de Gameplay ----  //
	// ------ Scene d'ouverture ----------------------------------------------- //
scene("atelier", (jourIdx,percent,totalCoins,force, saved_position)=> {
let music = play("fond")
console.log("scene atelier")
console.log("jour is "+jourIdx+" clientele is "+percent+" Force is :"+force)
	add_atelier_map()
			//status
			addStatusBar(jourIdx,percent,totalCoins,force)
			// add the mecanix// Add player game object
			let default_position = saved_position
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
				scale(PERSOSCALE)
			])

			// animate the player
			//player.play("walk_right")
			const SPEED = 100;
			player_movement(player,SPEED)


			// CLIENTS LINE IN ATELIER
			let SHIFT_CLIENTLINE = {x:-20,y:Math.random([-5,5])}
			let FIRST_CLIENTLINE = {x:center().x-20, y:center().y+30}

			// FUNCTION TO LOOP ON CLIENT SPRITES
			function addClientInLine(clientkey,index,tag){

				const clientLine = add([
					sprite(clientkey.spriteName,{anim:"walk_right"}),
					// center() returns the center point vec2(width() / 2, height() / 2)
					anchor("center"),
					//console.log(saved_position),
					pos(FIRST_CLIENTLINE.x+index*SHIFT_CLIENTLINE.x,FIRST_CLIENTLINE.y+index*SHIFT_CLIENTLINE.y),//the default position is in front of the workshop
					area({ shape: new Polygon([vec2(-colBox,-colBox+14),vec2(-colBox,0), vec2(colBox,0),vec2(colBox,-colBox+14)]) }),
					body(),
					// pas de isStatic
					scale(PERSOSCALE),
					"client", //necessary tag for collision
					tag//tag to recognize the client
				])

			}

			// CREATE THE CLIENT LINE from a JSON
			// show 5 clients at a time
			// ADD ERROR
			let lLength = 0
			for (let i = 0; i < 5; i++) {
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
						go("clientDialog",Object.keys(clientsList)[i], jourIdx, percent,totalCoins,force)
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

			player.onCollide("outsideDoorDroite", () => {
				play("porte")
				let BORDERNOCOLLISION = 96; // this is the distance from the center to the border without colliding to left door

				let modified_pos = ({x:center().x-BORDERNOCOLLISION,y:player.pos.y})//keep the height and modify the x, leaving on the right means arriving on left side

				//play("portal")
				// If there's a next level, origin() to the same scene but load the next level
				music.paused = true
				go("outside", jourIdx, percent,totalCoins,force, modified_pos )
			})

			player.onCollide("etabli", () => {
				let saved_position = player.pos
				music.paused = true
				// This collision shows the state of the inventory.
				go("inventaire", jourIdx, percent,totalCoins, force,saved_position)
			})
			player.onCollide("affiche", () => {
				let textBox = add([
				sprite("dialogbox"),//, width: width() - 230
				anchor("center"),
				pos(center().x,BOTTOM),
				"afficheMessage"
			])
			let txt = add([
				text("Complète ton inventaire pour\n un TURFU RADIEUX!", { size:  TXTSIZE }),//, width: width() - 230
				anchor("center"),
				pos(center().x,BOTTOM),
				color(MYPURPLE),
				"afficheMessage"
			])
		})
onKeyPress(()=>{destroyAll("afficheMessage")})

		})

		// ---- Monde exterieur -----//
	scene("outside", (jourIdx, percent,totalCoins,force,position)=>{
			let music = play("exte")
			// at start of the outside scene the contenair is closed
			let ouvertTag=false

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
		const contenairSprite = add([
			sprite("contenair",{anim:"idle_close"}),
			// center() returns the center point vec2(width() / 2, height() / 2)
			anchor("center"),
			pos(center().x+4*16-8,56),// the modified position from before
			area(),
			body({isStatic:true}),
			"contenair",
		])

		add([
			sprite("arbre"),
			// center() returns the center point vec2(width() / 2, height() / 2)
			anchor("center"),
			pos(34,64),// the modified position from before
			area(),
			body({isStatic:true}),

		])
		 add([
			sprite("arbre"),
			// center() returns the center point vec2(width() / 2, height() / 2)
			anchor("center"),
			pos(34,192),// the modified position from before
			area(),
			body({isStatic:true}),

		])
		add([
		 sprite("arbre"),
		 // center() returns the center point vec2(width() / 2, height() / 2)
		 anchor("center"),
		 pos(50,192),// the modified position from before
		 area(),
		 body({isStatic:true}),

	 ])
		add([
			sprite("arbre"),
			// center() returns the center point vec2(width() / 2, height() / 2)
			anchor("center"),
			pos(224,144),// the modified position from before
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

		//Collision
		player.onCollide("atelierDoorGauche", () => {
			play("porte")
			let BORDERNOCOLLISION = 96; // this is the distance from the center to the border without colliding to left door
			let modified_pos = ({x:center().x+BORDERNOCOLLISION,y:player.pos.y})//keep the height and modify the x, leaving on the right means arriving on left side
			// If there's a next level, origin() to the same scene but load the next level
			music.paused=true
			go("atelier", jourIdx, percent, totalCoins,force,modified_pos)
		})
		// add status bar
		addStatusBar(jourIdx,percent,totalCoins,force)

	// if any key is pressed then the message are destroyed
	const destroyMess = onKeyPress( () => {destroyAll("message")})
	//Collision

	player.onCollide("contenair", () => {
		destroyMess.paused = true
			const txtWidth = 150;
		console.log("In the conteanir collision")
	 if(force > 35){
		 let textBox = add([
			 sprite("dialogbox"),//, width: width() - 230
			 anchor("center"),
			 pos(center().x,BOTTOM),
			 "message"
		 ])


		 if (ouvertTag==false){
		let txt =  add([
			 text("Oh tu as trouvé un nouvel outil!...", { size:  TXTSIZE,  width: txtWidth }),//, width: width() - 230
			 anchor("center"),
			 pos(center().x,BOTTOM),
			 color(MYPURPLE),
			  "message"
		 ])
		 // change the sprite
		 contenairSprite.play("opening")
		// fint the next UNAVAILABLE TOOLS
		onKeyPress("enter",()=>{
		for (const key of Object.keys(inventory)) {
				// AVAILABLE TOOLS
				if (inventory[key].state == "unavailable"){
					let textBox = add([
					sprite("dialogbox"),//, width: width() - 230
					anchor("center"),
					pos(center().x,BOTTOM),
					"message"
				])
				let txt = add([
					text("Tu as maintenant dans ton inventaire:\n"+key, { size:  TXTSIZE,  width: txtWidth }),//, width: width() - 230
					anchor("center"),
					pos(center().x,BOTTOM),
					color(MYPURPLE),
					"message"
				])
				inventory[key].state ="owned"
				break
				}
			}
			contenairSprite.play("idles_open")
		 destroyMess.paused = false
		 ouvertTag = true
	 })
	 }else{
		 add([
 			 text("Il n'y a plus rien dans ce contenair", { size:  TXTSIZE,  width: txtWidth }),//, width: width() - 230
 			 anchor("center"),
 			 pos(center().x,BOTTOM),
 			 color(MYPURPLE),
 			  "message"
 		 ])
		 destroyMess.paused = false
	 }


 }else{
	 destroyMess.paused = false
	 let textBox = add([
		 sprite("dialogbox"),//, width: width() - 230
		 anchor("center"),
		 pos(center().x,BOTTOM),
		 "message"
	 ])
	 add([
		 text("Tu n'as pas assez de force pour\n t'aventurer dans cette déchetterie", { size:  TXTSIZE,  width: txtWidth }),//, width: width() - 230
		 anchor("center"),
		 pos(center().x,BOTTOM),
		 color(MYPURPLE),
			"message"
	 ])
 }
	 })

 })


	// ------ Boucle de Gameplay ----  //
	// ------ Scene d'inventaire' ----------------------------------------------- //
	scene("inventaire", (jourIdx,percent,totalCoins,force,saved_position)=> {

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
			text("( appuie sur esc pour retour à l'atelier) ", {font: "prstart", size:TXTSIZE}),
			anchor("center"),
			pos(center().x, BOTTOM-(2*16)),
		])

		// add STATUS bar
		addStatusBar(jourIdx,percent,totalCoins,force)

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
		onKeyPress("enter", () => {
			console.log(inventory)
			go("inventaire", jourIdx, percent,totalCoins, force,saved_position)
		})

		// leave the inventory for the workshop
		// the saved_position needs to be tweeked to avoid colliding again with the inventory
		let shiftX = 0 //coming from the bottom of the etabli
		if (saved_position.x<center().x){
			 shiftX = -8 //coming from left shifting on left
		}else{
			 shiftX = +8  //coming from right shifting on right
		}
		let mod_saved_position = saved_position.add(vec2(shiftX,+8)) // backward half a tile to avoid coliding again

		// LEAVE SCENE
		onKeyPress("escape", () => {
			go("atelier", jourIdx,percent,totalCoins,force,mod_saved_position)})

	})

	// ------ Boucle de Gameplay ----  //
	// ------ Option ----------------------------------------------- //
	scene("choix", (clientKey,jourIdx,percent,totalCoins,force) => {

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
		addStatusBar(jourIdx,percent,totalCoins,force)
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
				pos(vec2(center().x,center().y+0.1*(MAP_HEIGHT/2))),
				area({ cursor: "pointer", }),
				scale(1),
				anchor("center"),
			])

		const FightBtn = add([
					text("Frappez!",{font:"joystix",size:TXTSIZE+6}),
					pos(vec2(center().x,center().y+0.3*(MAP_HEIGHT/2))),
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
			pos(center().x-64,center().y+0.1*(MAP_HEIGHT/2)-tinyShift)

		])
		//option Réparez
		onKeyPress("up", () => {
					//move arrow
					arrow.pos.y = center().y+0.1*(MAP_HEIGHT/2)-tinyShift
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
				arrow.pos.y = center().y+0.3*(MAP_HEIGHT/2)-tinyShift
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
				repairCounter++
				add([
				sprite("choix_reparer",{anim:"move"}),
				scale(1),
				anchor("center"),
				pos(center().x,center().y-25),
				lifespan(1.6),
			  ])
				wait(1.6, () => {add([
					text("Superbe reparation!"),
					anchor("center"),
					pos(center().x,center().y-15),
				])})
			 // if you repair you get money
			 totalCoins = totalCoins + 10
				break;

				case 1: // Reparation mauvaix choix
				repairCounter++
				add([
				sprite("choix_reparer",{anim:"move"}),
				scale(1),
				anchor("center"),
				pos(center().x,center().y-25),
				lifespan(1.6),
			  ])
				wait(1.6, () => {add([
					text("Ca me fatigue!"),
					anchor("center"),
					pos(center().x,center().y-15),
				])})

		 // if you hit you get experience
		 totalCoins = totalCoins + 10
			 break;

			 case 2: // Fight bon choix
			 fightCounter++
			 justifiedFightCounter++
			// animation
			add([
			sprite("choix_frapper_juste",{anim:"hit"}),
			scale(1),
			anchor("center"),
			pos(center().x,center().y-25),
			lifespan(1.6),
		  ])
			wait(1.6, () => {add([
				text("Dans ta geule!"),
				anchor("center"),
				pos(center().x,center().y-15),
			])})
			// if you fight  you get experience
			totalStars = totalStars + 10
			break;

			case 3: // Fight mauvais choix
			fightCounter++
			add([
			sprite("choix_frapper_juste",{anim:"hit"}),
			scale(1),
			anchor("center"),
			pos(center().x,center().y-25),
			lifespan(1.6),
			])
			wait(1.6, () => {add([
				text("Oups"),
				anchor("center"),
				pos(center().x,center().y-15),
			])})

	 // if you hit you get experience
	 totalStars = totalStars + 10
		 break;
			}

	 }else{
		 //  Choice and correspondant anim have been done next client or end of day carton
		 // delete previous client
		 delete clientsList[clientKey]

		 if (clientCounter == 6){

			 go("Carton_Journalier",jourIdx,percent,totalCoins,force, 10,10,1)

		 }else{
			 // increase client counter
			 clientCounter ++

			 go("atelier", jourIdx,percent,totalCoins,force,INITIALPOSITION)
		 }
	 }
			 })

		 }) // click replace by keyboard

	// ------ Boucle de Gameplay ----  //
	// ------ Fight and Baddass_win----------------------------- //
// 	scene("Fight", (clientKey,jourIdx, percent,totalCoins,force) => {
// 		// MAP POUR LE MINI-GAME
// 		add_bordure_map()
//
// 		addStatusBar(jourIdx,percent,totalCoins,force)
// 		let isIncreaseTrue = false
// 		let already_hit = 2
// 		// client face
// 		const avatar = add([
// 			sprite(clientsList[clientKey].bigSpriteName),// retrieve the big sprite corresponding to the client
// 			scale(1),
// 			anchor("center"),
// 			pos(center().x, BOTTOM/2+3)
// 		])
//
// 		// Text
// 		const txt = add([
// 			text("(appuie sur espace pour frapper)", { size: TXTSIZE, width: MAP_WIDTH/2 }),
// 			scale(1),
// 			anchor("center"),
// 			pos(center().x,BOTTOM)
// 		])
//
//
// 		// hit
// 		const enterSpace = onKeyPress("enter", () => {
// 			// UPDATE
// 			// the fight is done
// 			// force increase fetching BEFORE LEVEL INCREASE
// 			//forcePercentIncrease = forceValues[levelIdx-1]
// 			forcePercentIncrease = clientsList[clientKey].forceValue
// 			//clientelePercentIncrease = -clienteleValues[levelIdx-1]
// 			clientelePercentIncrease = -clientsList[clientKey].clienteleValue
// 			// LEVEL update
// 			if(clientsList[clientKey].isSexist==true)
// 			{
// 				jourIdx = jourIdx + 1 //the level is incremented only if the client was indeed sexist
// 				isIncreaseTrue = true
// 			}
//
//
// 			// you need to wait for the end of the animation
// 			wait(0, () => {
// 				// BEFORE GOING TO THE CARTON DESTROY THE CLIENT IN LINE
// 				delete clientsList[clientKey]
//
// 				go("Carton_Journalier",jourIdx,percent,totalCoins,force, forcePercentIncrease,clientelePercentIncrease,isIncreaseTrue)
//
// 			})
// 		})
// 		enterSpace.paused = true
//
// 		const hitSpace = onKeyPress("space", () => {
//
// 			if (already_hit>=0){
// 				// animation
// 				add([
// 					sprite("scene_dialogue_punch","hit"),
// 					//loop(false),
// 					//addExplosion(),
// 					scale(1),
// 					anchor("center"),
// 					pos(center().x, MAP_HEIGHT/2)
// 				])
// 				// sound
// 				play("hitSound")
// 				wait(0.2, () => {play("ouinouin")})
//
// 					if (already_hit==0){
// 						// Text
// 						const byebyeText = add([
// 							text("Bye bye!", { size: LARGETXTSIZE}),
// 							scale(1),
// 							anchor("center"),
// 							pos(center().x,BOTTOM-30),
// 							color(MYBLUE)
// 						])
// 						txt.text = "(appuie sur enter pour continuer)"
// 						hitSpace.paused = true
// 						enterSpace.paused = false
// 					}
// 				already_hit = already_hit-1
// 				console.log(already_hit)
//
// 			}else{
//
//
// 	}}
// )
// 	})
	scene("Carton_Journalier", (jourIdx,percent,totalCoins,force, forcePercentIncrease,clientelePercentIncrease,isIncreaseTrue) => {
		add_bordure_map()
		play("carton")

		// JOUR
		const jourText =
			add([
			text("Tu as fini le jour "+(jourIdx), { size: TXTSIZE }),
			scale(1),
			anchor("center"),
			pos(center().x,MAP_HEIGHT/4),
		])

		const bilanTxt = add([
			text("Bilan du jour\n -------------\n 10 CLIENTS \n"+repairCounter+" reparations\n"+fightCounter+" claques\n ______________", {font: "prstart", size:TXTSIZE}),
			pos(center().x-50,  center().y-80),
		])

		let coinsAnim = add([
			text("$ : ", {font: "prstart", size:TXTSIZE}),
			pos(center().x-50,  center().y-20),
		])
		let starsAnim = add([
			text("* : ", {font: "prstart", size:TXTSIZE}),
			pos(center().x-50,  center().y-10),
		])
		// compare the obtained statistics (fights and repairs) with the ideal situation
		function compareStats(justifiedFightCounter){
			console.log("In the compareStats function");
			if(justifiedFightCounter == fightGoalsList[jourIdx-1]){
				caseNumber = 0
			}
			if(justifiedFightCounter == fightGoalsList[jourIdx-1]+1 || justifiedFightCounter == fightGoalsList[jourIdx-1]-1){
				caseNumber = 1
			}
			if(justifiedFightCounter == fightGoalsList[jourIdx-1]+2){
				caseNumber = 3
			}
			if(justifiedFightCounter == fightGoalsList[jourIdx-1]-2){
				caseNumber = 2
			}
			if(justifiedFightCounter > fightGoalsList[jourIdx-1]+2){
				caseNumber = 5
			}
			if(justifiedFightCounter < fightGoalsList[jourIdx-1]-2){
				caseNumber = 4
			}
			return caseNumber
		}
		// based on the comparison of stats produce the right follow-up
		function bilanJournalier(caseNumber){
			console.log("The case number is"+caseNumber);

			// end of the day
			clientCounter = 1 // reset clientCounter for the next day
			repairCounter = 0
			fightCounter = 0
			justifiedFightCounter = 0
			jourIdx++ // next day

			switch(caseNumber){
			// BONUS
			case 0 :
			// message
				add([text("Wouahhh quel superbe travail tu fais!",
				{ size: TXTSIZE, font:"arcade"}),scale(1),anchor("center"),pos(center().x,BOTTOM-5)])
			// instruction
				 add([
						text("(appuie sur enter pour retourner à l'atelier)", { size: TXTSIZE }),
						scale(1),anchor("center"),pos(center().x,BOTTOM+5),])
			break;
			// BASIC
			case 1 :
			add([text("Tu as fait du bon travail.",
				{ size: TXTSIZE, font:"arcade"}),scale(1),anchor("center"),pos(center().x,BOTTOM-5)])
			// instruction
				add([
							text("(appuie sur enter pour retourner à l'atelier)", { size: TXTSIZE }),
							scale(1),anchor("center"),pos(center().x,BOTTOM+5),])
				break;
			case 2 :
			// BASIC with Burnout WARNING:
			add([text("Tu as fait du bon travail,\n mais attention tu t'epuises...",
				{ size: TXTSIZE, font:"arcade"}),scale(1),anchor("center"),pos(center().x,BOTTOM-5)])
				// instruction
					 add([
							text("(appuie sur enter pour retourner à l'atelier)", { size: TXTSIZE }),
							scale(1),anchor("center"),pos(center().x,BOTTOM+5),])
break;
			case 3 :
			// BASIC with Bankfrupt WARNING:
				add([text("Tu as fait du bon travail,\n mais attention tu n'as pas gagne beaucoup d'argent...",
					{ size: TXTSIZE, font:"arcade"}),scale(1),anchor("center"),pos(center().x,BOTTOM-5)])
					// instruction
						 add([
								text("(appuie sur enter pour retourner à l'atelier)", { size: TXTSIZE }),
								scale(1),anchor("center"),pos(center().x,BOTTOM+5),])
break;
			case 4 :
			// GAMEOVER BURNOUT
			add([text("Tu es plein d'argent \n mais completement epuise...\n tu es en burnout..",
				{ size: TXTSIZE, font:"arcade"}),scale(1),anchor("center"),pos(center().x,BOTTOM-5)])
			wait(2,()=>go("Burnout"))
break;
			case 5 :
			// GAMEOVER BANKRUPT
			add([text("Tu t'es bien amuse!\n mais tu es en faillite...",
				{ size: TXTSIZE, font:"arcade"}),scale(1),anchor("center"),pos(center().x,BOTTOM-5)])
		  wait(4,()=>go("Burnout"))
			break;
		}
}

		// coins animation
		let pauseCoins = false;
		let pauseStars = false;
 		let updateInterval = 0.15;
 		let coinsAnimValue = 0;
		let starsAnimValue = 0;
 		let timeFromLastUpdate = 0;

// source https://docs.replit.com/tutorials/kaboom/game-of-life-kaboom
		let statusUpdate = onUpdate(() => {
			if (pauseCoins == true && pauseStars == true){
			// compare day status with goal and based on this go to different paths
			bilanJournalier(compareStats(fightCounter))
				return;}
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
			}
			})




		onKeyPress("enter", () => {
			// go back to clients with the new percentage of clientele
			// FORCE update
			console.log("force percent increase is :"+forcePercentIncrease)
			console.log("clientele percent increase is :"+clientelePercentIncrease)
			force = force + forcePercentIncrease
			percent = (percent + clientelePercentIncrease)%100
			console.log("fight suceeded")
			console.log("jour is "+jourIdx+" clientele is "+percent+" Force is :"+force)

			// CLIENTELE update
			go("atelier", jourIdx,percent,totalCoins,force,INITIALPOSITION)
		})
	})


	function addScoreBar(){

		const scoreBoxHeight = 40
		const scoreBoxWidth = 100
		const scoreBoxmargins = 10

		const scoreBox = add([
			anchor("topleft"),
			pos(20, 5),
			rect(scoreBoxWidth,scoreBoxHeight),
			outline(3),
			area(),
			color(0, 0, 255),
		])
		const scoreCount = add([
			text("Coins: "+score,{size:TXTSIZE}),
			anchor("topleft"),
			pos(20+scoreBoxmargins, 5+scoreBoxmargins),
			color(255,255,255),
			{ update() { this.text = "level: "+jourIdx+"\n"+"Coins: "+ score }},
		])

	}
	// ------ Boucle de Gameplay ----  //
	// ------ Repair ----------------------------- //
	// scene("Repair",(clientKey,levelIdx,percent,totalCoins,force,life) =>{
	// 	let music = play("minijeu")
	// 	// MAP POUR LE MINI-GAME
	// 	add_minigame_map("scene_jeu_fondjaune")
	// 	// INITIALIZATION mini-game
	// 	// score is the coins in the mini-game
	// 	let score = 0
	//
	// 	let isIncreaseTrue = false
	// 	// get the list corresponding to the level
	// 	//let outils = list_outils[levelIdx-1]
	// 	const outils = clientsList[clientKey].outilsSprite
	// 	// Get the tools goal corresponding to reparation type, i.e. level
	// 	//const toolsGoal = toolsGoalList[levelIdx-1]
	// 	const toolsGoal = clientsList[clientKey].outilsGoals
	// 	// Tools to get
	// 	let shiftinitial = 25
	// 	let shift = shiftinitial
	// 	let nTools = outils.length
	//
	//
	// 	// GAME STATUS (COINS AND LIFE)
	//
	//
	// 			const sBoxmargins = 25
	// 			const statusBarHeight = MAP_HEIGHT-35
	//
	//
	// 			// COINS
	// 			const coinsLabel = add([
	// 				text("$ ", {font: "prstart", size:TXTSIZE+4}),
	// 				pos(center().x-(MAP_WIDTH/2)+sBoxmargins,statusBarHeight),
	// 			])
	// 			const scoreTexte = add([
	// 				text(score, {font: "prstart", size:TXTSIZE+4}),
	// 				pos(center().x-(MAP_WIDTH/2)+sBoxmargins+6,statusBarHeight),
	// 			])
	//
	//
	// 			// LIFE
	// 			const lifeTxt = add([
	// 				text("life ", {font: "prstart", size:TXTSIZE+4}),
	// 				pos(center().x+45,statusBarHeight),
	// 			])
	// 			for (let i = 1; i <= life; i++) {
	// 			 	add([
	// 				sprite("badass_symbol"),
	// 				scale(1),
	// 				pos(center().x+45+15*i,statusBarHeight),
	// 			])
	// 		}
	//
	//
	//
	//
	// 	// TOOLS GOAL BOX
	// 	const tBoxHeight = 25
	// 	const tBoxWidth = 28
	// 	const tBoxmargins = 5
	// 	const tBoxPos = center().x-(MAP_WIDTH/2)+22
	//
	// 	const toolsBox = add([
	// 		pos(tBoxPos, 100),
	// 		rect(tBoxWidth, tBoxHeight*(nTools+1),{radius:2}),
	// 		outline(1,MYPURPLE),
	// 		area(),
	// 	])
	// 	function addGoalOnLeft(item){
	// 		add([
	// 			text(" X"+item,{size:TXTSIZE}),
	// 			anchor("center"),
	// 			rotate(0),
	// 			pos(tBoxPos+20, 100+shift),
	// 			scale(1),
	// 			area(),
	// 			color(MYBLUE)
	// 		])
	// 		shift = shift + 25
	// 	}
	// 	shift = shiftinitial
	//
	// 	toolsGoal.forEach(addGoalOnLeft)
	//
	// 	// add each tools that is in the list of the right tools
	// 	function addSpriteOnLeft(item){
	// 		add([
	// 			sprite(item),
	// 			anchor("center"),
	// 			rotate(0),
	// 			pos(tBoxPos+10, 100+shift),
	// 			scale(1),
	// 			area(),
	// 		])
	// 		shift = shift + 25
	// 	}
	// 	shift = shiftinitial
	// 	outils.forEach(addSpriteOnLeft)
	//
	// 	// MINI-GAME
	// 	const dirs = {
	// 		"left": LEFT,
	// 		"right": RIGHT,
	// 		"up": UP,
	// 		"down": DOWN,
	// 	}
	// 	const SPEED_MIN = speedMin_List[levelIdx-1]
	// 	const SPEED_MAX = SPEED_MIN+40
	// 	// source : from kaboom.js
	// 	// add the player game object
	// 	const player = add([
	// 		sprite("mecanix",{anim:"walk_right"}),
	// 		anchor("center"),
	// 		pos(center().x,BOTTOM-5),
	// 		scale(1),
	// 		area({ scale: 0.5 }),
	// 		body(),
	// 	])
	//
	// 	// MOVE PLAYER
	// 	onKeyDown("right", () => {
	// 		player.move(SPEED_MAX, 0)
	// 	})
	// 	onKeyDown("left", () => {
	// 		player.move(-SPEED_MAX, 0)
	// 	})
	//
	// 	// MOVE TOOLS the outils_all every frame, destroy it if far outside of screen
	// 	onUpdate("outils_all", (outils_all) => {
	// 		// list_outils
	// 		outils_all.move(0, outils_all.speed)
	// 		if (outils_all.pos.y > BOTTOM) {
	// 			destroy(outils_all)
	// 		}
	// 	})
	//
	// 	// game over if player collide with wrong tools
	// 	player.onCollide("bomb", (bomb) => {
	// 		score = 0 // if you lose you take no coins with you back in the main game
	// 		life -= 1
	// 		console.log("life is "+life)
	// 		if (life>0){
	// 		go("lose",clientKey,levelIdx,percent,totalCoins,force,life)
	// 	}else{
	// 		go("tripleLose",clientKey,levelIdx,percent,totalCoins,force,life)
	// 	}
	// 	})
	//
	// 	// repair coins score counter
	// 	// addScoreBar()
	//
	// 	// hit counter
	// 	const toolsHit = Array(nTools).fill(0)
	// 	// increment score if player gets a right tool and keep counter
	// 	player.onCollide("outil", (outil) => {
	// 		//addKaboom(player.pos)
	// 		//Coins flying animation
	// 		function winCoins(score) {
	// 			for (let i = 1; i <= score; i++) {	add([
	// 				sprite("coins_symbol",{anim:"blink"}),
	// 				scale(1),
	// 				area(),
	// 				pos(player.pos),
	// 				anchor("center"),
	// 				outline(4),
	// 				move(UP, 200),
	// 				//	cleanup(),
	// 				// strings here means a tag
	// 				"badassPoint",
	// 			])
	// 		}
	// 	}
	//
	// 	// Update mini-game score
	// 	score += 5
	// 	//update scoreBox
	// 	scoreTexte.text = score
	// 	// win coins
	// 	winCoins(score)
	// 	destroy(outil)
	// 	// add sound burp()
	// 	//shake(12)
	//
	// 	// increment toolHit counter accordingly to the tool hit
	// 	let index = outils.indexOf(outil.name)
	// 	toolsHit[index] += 1
	//
	// 	//Compare situation and goal
	// 	if (toolsHit.length === toolsGoal.length && toolsHit.every((value, index) => value === toolsGoal[index])){
	// 		// you win the mini game
	// 		totalCoins += score, //you add the gain of the mini-game to your totalCoins
	// 		winCoins(score)
	// 		destroyAll("outils_all")
	// 		wait(0.4, () => {
	// 			percentIncrease = +clienteleValues[levelIdx-1]
	// 			if(isSexist[levelIdx-1]==false)
	// 			{
	// 				levelIdx = levelIdx + 1 //the level is incremented only if the client was not sexist and the repair done
	// 				isIncreaseTrue = true
	// 			}
	// 			// destroy client
	// 			delete clientsList[clientKey]
	// 			music.paused = true
	// 			go("RepairSucceeded", levelIdx,percent,totalCoins,force,score,isIncreaseTrue,percentIncrease)})
	// 		}
	// 		// if you get too many of one tool you lose
	// 		if(toolsHit[index] > toolsGoal[index]){
	// 			score = 0 // if you lose you take no coins with you back in the main game
	// 			life -= 1
	// 			if (life>0){
	// 				music.paused = true
	// 			go("lose",clientKey,levelIdx,percent,totalCoins,force,life)
	// 		}else{
	// 			music.paused = true
	// 			go("tripleLose",clientKey,levelIdx,percent,totalCoins,force,life)
	// 		}
	// 		}
	// 	})
	// 	// delay the tools' falling
	// 	wait(1, () => {
	//
	// 		// do this every 0.3 seconds
	// 		loop(0.7, () => {
	// 			//let bombs = list_bombs[levelIdx-1]
	// 			let bombs = clientsList[clientKey].bombsSprite
	// 			// spawn from top side of the screen
	// 			const x = rand(center().x-(MAP_WIDTH/2)+48,center().x+(MAP_WIDTH/2)-48)
	// 			// spawn from a random y position
	// 			const y = 0 + 14//rand(0, height())
	// 			// get a random speed
	// 			const speed = rand(SPEED_MIN, SPEED_MAX)
	// 			// 50% percent chance is bomb
	// 			const isBomb = chance(0.5)
	// 			//smth to do here to select which one are bomb or not
	// 			const spriteName = isBomb ? choose(bombs) : choose(outils)
	//
	// 			add([
	// 				sprite(spriteName),
	// 				pos(x, y),
	// 				area({ scale: 0.8 }),
	// 				rotate(rand(-15,15)),
	// 				scale(0.8),
	// 				anchor("center"),
	// 				"outils_all", //add tag outils_all to any tools
	// 				spriteName,//add tag as spritename
	// 				// can I add a property to keep track of which tool
	// 				isBomb ? "bomb" : "outil",
	// 				//isBomb ? "bomb" : "outil",
	// 				{ speed: speed , name : spriteName}
	// 			])
	// 		})
	// 	})
	// })


// scene("lose",(clientKey,jourIdx,percent,totalCoins,force,life)=>{
// 	// MAP
// 	add_minigame_map("scene_jeu_fondjaune")
// 	const txt = add([
// 		text("Ce n'est pas le bon outil!\n tu as perdu!\n Essaie encore!", { size: TXTSIZE+5 }),
// 		scale(1),
// 		anchor("center"),
// 		pos(center().x,MAP_HEIGHT/2),
// 		color(MYPURPLE)
// 	])
// 	onKeyPress("enter", () => {
// 		// go back to game with new life
//
// 		go("Carton_Journalier",clientKey, jourIdx, percent,totalCoins,force,life)})
// 	})
// scene("tripleLose",(clientKey,jourIdx,percent,totalCoins,force,life)=>{
// 	add_minigame_map("scene_jeu_fondjaune")
//
// 		const txt = add([
// 			text("Tu as encore perdu...\nil est temps de retourner à l'atelier", { size: TXTSIZE+5 }),
// 			scale(1),
// 			anchor("center"),
// 			pos(center().x,MAP_HEIGHT/2),
// 			color(MYPURPLE)
// 		])
// 		onKeyPress("enter", () => {
// 			// destroy client
// 			delete clientsList[clientKey]
// 			// go back to game with new life
// 			go("atelier",clientKey, jourIdx, percent,totalCoins,force,INITIALPOSITION)})
// 		})
	// scene("RepairSucceeded", (carton_jercent,totalCoins,force,score,isIncreaseTrue,percentIncrease) => {
	// 	play("carton")
	// 	add_bordure_map()
	// 	// STATUS COMMUNICATION
	// 	// COINS
	// 	const generalMessage = add([
	// 			text("En réussisant cette réparation tu as gagné "+score+"$", { size: TXTSIZE }),
	// 			scale(1),
	// 			anchor("center"),
	// 			pos(center().x,BOTTOM-20),
	// 		])
	// 	// LEVEL
	// 	if (isIncreaseTrue==true){
	// 		add([
	// 		text("Tu es monté d'un niveau! Bravo! ", { size: TXTSIZE }),
	// 		scale(1),
	// 		anchor("center"),
	// 		pos(center().x,MAP_HEIGHT/4),
	// 	])
	// 	}else{
	// 	add([
	// 	text("Tu n'as pas changé de niveau...dommage ", { size: TXTSIZE }),
	// 	scale(1),
	// 	anchor("center"),
	// 	pos(center().x,MAP_HEIGHT/4),
	// ])
	// }
	//
	// 	// CLIENTELE BAR
	// 	const clientTxt = add([
	// 		text("CLIENTS", {size:TXTSIZE}),
	// 		pos(center().x-50, center().y),
	// 	])
	//
	// 	const clientHolder = add([
  // 	rect(62, 7),
  // 	pos(center().x-20, center().y),
	// 	outline(1,MYPURPLE),
	// 	color(1,1,1,0)
	// 	])
	// 	const clientBarWidthInit = 62
	// 	const clientBarWidth = (percent*clientBarWidthInit/100)
	// 	const clientBar = add([
  // 	rect(clientBarWidth, 5),
  // 	pos(center().x-19, center().y+1),
	// 	color(MYYELLOW)
	// 	])
	// 	//recolor based on percentage
	// 	percentColoring(percent,clientBar,clientBarWidth)
	// 	// increase of bar Width
	// 	const widthIncrease = (percentIncrease*clientBarWidthInit/100)
	//
	//  	wait(0.3, () => {
  //   tween(clientBar.width,clientBar.width+widthIncrease, 1, (p) => clientBar.width =p)
	// 	wait(1.2, () => {percentColoring(percent+percentIncrease,clientBar,clientBar.width+widthIncrease)})
	// 	})
	// 	// instruction
	// 	const instructions = add([
	// 			text("(appuie sur enter pour retourner à l'atelier)", { size: TXTSIZE }),
	// 			scale(1),
	// 			anchor("center"),
	// 			pos(center().x,BOTTOM),
	// 		])
	// 	onKeyPress("enter", () => {
	// 		// go back to clients with the new percentage of clientele
	// 		percent = (percent + percentIncrease)%100
	//
	// 		go("atelier", carton_jercent,totalCoins,force,{x:center().x,y:center().y})
	// 	})
	// })

// ADD GAME OVER SCENE
scene("Bankrupt", (jourIdx,percent,totalCoins,force) => {
	add_bordure_map()
	// Titre
	const title = add([
		text("GAME OVER!\n ", { size: LARGETXTSIZE, font:"arcade" }),
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

scene("Burnout", (jourIdx,percent,totalCoins,force) => {
	add_atelier_map()
	// Titre
	const title = add([
		text("GAME OVER!\n ", { size: LARGETXTSIZE, font:"arcade" }),
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



	///SOURCE
	function start() {
		// Start with the "game" scene, with initial parameters
	//	go("atelier", 1, 85,0/*totalCoins*/,50,INITIALPOSITION)
  go("start",jourIdx,percent,totalCoins,force/*force*/,INITIALPOSITION)
	//go("clientDialog",1,75,100/*totalCoins*/,50/*force*/)

	}
	start()
