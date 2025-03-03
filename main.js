import * as loadAssets from './js/load-assets.js';
//import {INITIALCLIENTSLIST} from './js/clients-list-manager.js';
import {textList,dialogboxList, collisionList, dialogsList, bonusList, references } from './js/text-list-manager.js';
import {CLIENTSLISTECOMPLETEFR,CLIENTSLISTECOMPLETEEN} from './js/clients-list-manager.js';

kaboom({
	background: [ 0,0,0 ],
	scale: 3,
	font: "prstart",
})



// ------INITIALIZATION-------//
// --CONSTANTS-- //
//audio
let musicFond = play("page_debut", {
    volume: 0.8,
    loop: true
})
musicFond.paused = true
	let lang = "FR"
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
	let croquettesFlag= true
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
	let clientsList
	if (lang =="FR") {
	  let clientsList = CLIENTSLISTECOMPLETEFR;
	  console.log(clientsList);
	} else {
	  let clientsList = CLIENTSLISTECOMPLETEEN;
	  console.log(clientsList);
	}
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

// INVENTORY
// state can be : unavailable,available, owned
let inventory = {
	"Clé":	{
		spriteName : "atelier_clee",
		state: "available",
		cost: "10",
	},
	"Stand pour vélo #1":	{
		spriteName : "inventaire_velo_sur_pied_vide",
		state: "available",
		cost: "30",
	},
	"Stand pour vélo #2":	{
		spriteName : "inventaire_velo_sur_pied_vide",
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
	"Dérive-chaine":	{
		spriteName : "sprite_demontechaine",
		state: "available",
		cost: "25",
	},
}

function initModules() {
    // This is necessary as those modules require kaboom to be initialized (global variables)
    loadAssets.init();
}

initModules();

// ------ Boucle de Gameplay ------- //
// ------ Start --------------------------------------------------- //
scene("start",() => {
	//audio
	let musicFond = play("page_debut", {
		volume: 0.8,
		loop: true
	})
	musicFond.paused = true


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

		// LANGUAGE SELECTION
		let languageFlag = true // french by default
		// Buttons language
		const FrenchBtn = add([
				text("Français",{font:"prstart",size:TXTSIZE+6}),
				pos(vec2(center().x,MAP_HEIGHT/2-0.3*(MAP_HEIGHT/2))),
				area({ cursor: "pointer", }),
				scale(1),
				anchor("center"),
				color(MYLIGHTBLUE)

			])
		const EnglishBtn = add([
					text("English",{font:"prstart",size:TXTSIZE+5}),
					pos(vec2(center().x,MAP_HEIGHT/2-0.1*(MAP_HEIGHT/2))),
					area({ cursor: "pointer", }),
					scale(1),
					anchor("center"),
					color(MYLIGHTBLUE)
				])
		const tinyShift = 8
		const arrow = add([
					text(">",{size:TXTSIZE+6}),
					pos(center().x-34,MAP_HEIGHT/2-0.3*(MAP_HEIGHT/2)-tinyShift),
					color(MYLIGHTBLUE)
				])
		// 	coloring
		arrow.onUpdate(() => coloring(arrow))
		FrenchBtn.onUpdate(() => coloring(FrenchBtn))
		onKeyPress("up", () => {
					languageFlag = true // up is the franch language
					//move arrow
					arrow.pos.y = MAP_HEIGHT/2-0.3*(MAP_HEIGHT/2)-tinyShift
					// putting the other button color back to default_position
					EnglishBtn.onUpdate(() => {
						EnglishBtn.color =MYLIGHTBLUE
					})
					//coloring
					FrenchBtn.onUpdate(() => coloring(FrenchBtn))
					//repairFlag
					// repairFlag = true
			})
		onKeyPress("down", () => {
					languageFlag = false // down is the english language
					// arrow coloring
					arrow.onUpdate(() => coloring(arrow))
					// moving the arrow
					arrow.pos.y = MAP_HEIGHT/2-0.1*(MAP_HEIGHT/2)-tinyShift
					// puttint the other button color back to default_position
					FrenchBtn.onUpdate(() => {FrenchBtn.color = MYLIGHTBLUE	})
					//  Coloring button
					EnglishBtn.onUpdate(() => coloring(EnglishBtn))
					// //repairFlag for choice
					// repairFlag = false
				})
		// lancer le jeu
		let launchGame =
			onKeyPress("enter", () => {
				console.log(clientsList);
				musicFond.paused=false
				go("atelier", jourIdx,totalCoins,totalStars,INITIALPOSITION,clientCounter,inventory)
			})
		launchGame.paused = true
		let selectLanguage = onKeyPress("enter",()=>{
			destroy(FrenchBtn),
			destroy(EnglishBtn),
			destroy(arrow)
			if (languageFlag==true) {
				lang = "FR"
				clientsList = CLIENTSLISTECOMPLETEFR;

			}else {
				lang = "EN"
				clientsList = CLIENTSLISTECOMPLETEEN;

			}
			// But
			const but = add([
				text(textList[lang].soustitre,
				{ size: TXTSIZE+2, font:"prstart" , width:MAP_WIDTH-64}),
				scale(1),
				anchor("center"),
				pos(center().x+5,MAP_HEIGHT/2-0.2*(MAP_HEIGHT/2)),
			color(MYLIGHTBLUE)
			])
			// Instructions
			const instructions = add([
				text(textList[lang].instructions, { size: TXTSIZE+2,align:"center", font:"prstart",width:TXTWIDTH+50}),
				scale(1),
				anchor("center"),
				pos(center().x,MAP_HEIGHT/2+5.7*16),
				color(MYDARKBLUE)
			])
			selectLanguage.paused = true
			launchGame.paused = false
		})

		// END LANGUAGE SELECTION
		// INVENTORY
		// state can be : unavailable,available, owned
		inventory = {
			"Clé":	{
				spriteName : "atelier_clee",
				state: "available",
				cost: "10",
			},
			"Stand pour vélo #1":	{
				spriteName : "inventaire_velo_sur_pied_vide",
				state: "available",
				cost: "30",
			},
			"Stand pour vélo #2":	{
				spriteName : "inventaire_velo_sur_pied_vide",
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
			"Dérive-chaine":	{
				spriteName : "sprite_demontechaine",
				state: "available",
				cost: "25",
			},
		}


})



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
				text(textBonus,{ size: TXTSIZE, width:TXTWIDTH, font:"prstart"}),
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
	//console.log("In the addTextOnDialogBox function");
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
function addTextOnDialogBoxEnter(msg){
	//console.log("In the addTextOnDialogBox function");
let textBox = add([
	sprite("dialogboxEnter",{anim:"idle"}),//, width: width() - 230
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
		color(MYBLUE),
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
	perso.play("walk_right",{speed:5})
	const player = add([
		sprite(mecanixSprite,{anim:"idle"}),
		anchor("center"),
		pos(playerPosition.x,playerPosition.y),
		area({ shape: new Polygon([vec2(-colBox,-colBox+14),vec2(-colBox,0), vec2(colBox,0),vec2(colBox,-colBox+14)]) }),
		body(),
		scale(PERSOSCALE)
	])
	player.play("walk_right",{speed:5})
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
		sprite("dialogboxEnter",{anim:"idle"}),//, width: width() - 230
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
							flinta1.play("walk_right",{speed:5})

						const flinta2 = levelAtelier.spawn([
								sprite("perso_flinta_2",{anim:"walk_right"}),
								anchor("center"),
								pos(MAP_WIDTH/2-6*16,MAP_HEIGHT/2+3.5*16),//the default position is in front of the workshop
								area({ shape: new Polygon([vec2(-colBox,-colBox+14),vec2(-colBox,0), vec2(colBox,0),vec2(colBox,-colBox+14)]) }),
								body(),
								scale(PERSOSCALE),
								agent({ speed: 80, allowDiagonals: true }),],1,1)
									flinta2.play("walk_right",{speed:5})
								const flinta3 = levelAtelier.spawn([
									sprite("perso_flinta_3",{anim:"walk_right"}),
									anchor("center"),
										pos(MAP_WIDTH/2-7*16,MAP_HEIGHT/2+2*16),//the default position is in front of the workshop
									area({ shape: new Polygon([vec2(-colBox,-colBox+14),vec2(-colBox,0), vec2(colBox,0),vec2(colBox,-colBox+14)]) }),
									body(),
									scale(PERSOSCALE),
									agent({ speed: 80, allowDiagonals: true }),],1,1)
									flinta3.play("walk_right",{speed:5})

									const flinta4 = levelAtelier.spawn([
										sprite("perso_flinta_4",{anim:"walk_right"}),
										anchor("center"),
										pos(MAP_WIDTH/2-7*16,MAP_HEIGHT/2+4*16),//the default position is in front of the workshop
										area({ shape: new Polygon([vec2(-colBox,-colBox+14),vec2(-colBox,0), vec2(colBox,0),vec2(colBox,-colBox+14)]) }),
										body(),
										scale(PERSOSCALE),
										agent({ speed: 80, allowDiagonals: true }),],1,1)
										flinta4.play("walk_right",{speed:5})
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
							if(jourIdx==2){
								waitTime = 1
							}else{
								waitTime = 0.3}
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
			text(textList[lang].jour+jourIdx+"/5", {font: "prstart", size:TXTSIZE}),
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
			sprite("dialogboxEnter"),//, width: width() - 230
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
function coloring2(object){
	// time constant with multiplcation for faster effect
	const t = time()*1
	if (Math.floor(t)%2==0){
		//initial color
		object.color = MYBLUE
	}else{
		//final color
		object.color = rgb(0, 0, 0)
	}
}
function launchDialog(interactionDialog){
			// add dialog box
			let textBox = add([
			sprite("dialogboxEnter"),//, width: width() - 230
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
		 "G--=------u----L",
		 "G-----=--=---uuL",
		 "G---=----------L",
		 "G--------------L",
		 "G----------u---L",
		 "G--------------L",
		 "G--------------L",
		 "G--------------L",
		 "G---u----------L",
		 "G--------------L",
		 "G-----=-----=--L",
		 "G---=-----u---=L",
		 "G-----u----=-u-L",
		 "G----==--------L",
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
			"u": () => [
				sprite("tile_inventaire_mur"),
				outline(40, 40),
			],
			"=": () => [
				sprite("tile_inventaire_mur2"),
				outline(40, 40),
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
		area({ shape: new Polygon([vec2(-36,-19),vec2(-36,0), vec2(-5,0),vec2(-5,-19)]) }),
		body({isStatic:true}),
		"flyers"
	])
	}
	//bibliotheque
	const bibliotheque = add([
		sprite("atelier_etabli_biblio",{anim:"idle"}),
		scale(1),
		anchor("center"),
		area(),
		pos(center().x-1,MAP_HEIGHT/2+16),

	])
	const biblio = add([
	sprite("atelier_tabouret_livre"),
	scale(1),
	anchor("center"),
	pos(center().x-11*8,MAP_HEIGHT/2+8.5*12),
	area({ shape: new Polygon([vec2(-5,-5),vec2(-5,5), vec2(5,5),vec2(5,-5)])}),
	body({isStatic:true}),
		"bibliotheque"
	])

	// // atelier_point_info
	// const point_info = add([
	// 	sprite("atelier_point_info"),
	// 	scale(1),
	// 	anchor("center"),
	// 	area(),
	// 	body({isStatic:true}),
	// 	"bibliotheque",
	// 	pos(center().x-11*8,MAP_HEIGHT/2+8*12),
	// ])
	// atelier_cafe
	const cafe = add([
		sprite("atelier_tasse_cafe",{anim:"idle"}),
		scale(1),
		anchor("center"),
		area({ shape: new Polygon([vec2(5,0),vec2(5,10), vec2(-5,10),vec2(-5,0)]) }),
		pos(center().x-8,MAP_HEIGHT/2-1),
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
		sprite("atelier_velo_bleu"),
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
	let colBox = 16
	// add velo sur pied items, on day 5 we have the broken version
	if(veloTag==true){
		const velo_sur_pied_1 = add([
			sprite("velo_sur_pied",{anim:"idle"}),
			scale(1),
			anchor("center"),
			pos(center().x-(6*16),8*16),
			area({shape: new Polygon([vec2(-colBox,-colBox),vec2(-colBox,colBox), vec2(0,colBox),vec2(0,-colBox)])}),
			body({isStatic:true}),
			"pied_velos"
		])
		const velo_sur_pied_2 = add([
			sprite("velo_sur_pied",{anim:"idle"}),
			scale(1),
			anchor("center"),
			pos(center().x+2*16,MAP_HEIGHT-2*16),
			area({shape: new Polygon([vec2(-colBox,-colBox),vec2(-colBox,colBox), vec2(0,colBox),vec2(0,-colBox)])}),
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
			sprite("bonus_boites",{anim:"shine"}),
			//pos(center().x-(6.5*16),MAP_HEIGHT/2+(5.5*16)),
			pos(center().x-(1.4*16),MAP_HEIGHT/2-(5.2*16)),
			scale(0.8),
			area(),
			body({isStatic:true}),

		])
	}
	}
function add_atelier_collisions(player,totalCoins,totalStars){
	// add collision// add velo sur provided Collision
	if (veloTag==true && helpDechetFlag == false){
			player.onCollide("pied_velos",()=>{
			let textBox = add([
			sprite("dialogbox"),//, width: width() - 230
			anchor("center"),
			pos(center().x,BOTTOM),
		])
		let txt = add([
			text(textList[lang].dechett1, { size:  TXTSIZE,width:TXTWIDTH }),//, width: width() - 230
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

					let poster2 = add([
					sprite("atelier_poster2_grand"),//, width: width() - 230
					// 	"Complète ton inventaire pour\n un TURFU RADIEUX!", { size:  TXTSIZE }),//, width: width() - 230
					anchor("center"),
					pos(center().x,MAP_HEIGHT/2-10),
					"afficheMessage2"])
					let distributeInstruction = add([
						text(textList[lang].getflyer, {font: "prstart", size:TXTSIZE, width:TXTWIDTH}),
						anchor("center"),
						color(MYPURPLE),
						pos(center().x+16, MAP_HEIGHT/2+4.5*16),
						"distributeInstruction"
						])
					let coloringOnUpdate = onUpdate(()=>{coloring2(distributeInstruction)})
					onKeyPress("space",()=>{
						coloringOnUpdate.paused = true
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

		}

	// collision
	if (jourIdx==5 && helpDechetFlag == false ){
	affichageOnCollision(player,"armoireKc",collisionList[lang].text2)
	affichageOnCollision(player,"pied_velos_kc",collisionList[lang].text3)
	}
	//
	if (jourIdx==1){
	affichageOnCollision(player,"velorouge4",collisionList[lang].text4)
	affichageOnCollision(player,"velorouge1",collisionList[lang].text5)


	player.onCollide("cafe",()=>{
	let textBox = add([
	sprite("dialogbox"),//, width: width() - 230
	anchor("center"),
	pos(center().x,BOTTOM),
])
let txt = add([
	text(textList[lang].firstday, { size:  TXTSIZE,width:TXTWIDTH }),//, width: width() - 230
	anchor("center"),
	pos(center().x,BOTTOM),
	color(MYBLUE),
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
		if (jourIdx!=5){go("inventaire", jourIdx, totalCoins, totalStars,saved_position,clientCounter)}
	})

	//	enterInventaire.paused = false

//bibliothque content

let titleList = references[lang].titleList
let authorList = references[lang].authorList
let coverTextList= references[lang].coverTextList
	player.onCollide("bibliotheque", () => {
		interrupt=true

				let i  = 0
				let spacing =0

				let cover = add([
					sprite("atelier_livre_ouvert"),//, width: width() - 230
					anchor("center"),
					pos(center().x,MAP_HEIGHT/2-10),
					"cover"
				])
				let coverTitle = add([
					text(titleList[i], { size:  MEDIUMTXTSIZE-4,width:TXTWIDTH -16}),//, width: width() - 230
					anchor("center"),
					pos(center().x,MAP_HEIGHT/2-10*8),
					color(MYPURPLE),
					"cover"
				])
				let coverAuthor = add([
					text(authorList[i], { size:  TXTSIZE,width: TXTWIDTH-16,align:"right" }),//, width: width() - 230
					anchor("left"),
					pos(center().x-9*8,MAP_HEIGHT/2-7*8),
					color(MYBLUE),
					"cover"
				])
				let coverText = add([
					text(coverTextList[i], { size:  TXTSIZE,width:TXTWIDTH-16}),//, width: width() - 230
					anchor("center"),
					pos(center().x,MAP_HEIGHT/2+10),
					color(MYPURPLE),
					"cover"
				])


					let length = coverTextList.length
				let pageTourneRight = onKeyPress("right",()=>{
					if (i==3){
						coverTitle.pos.y =	MAP_HEIGHT/2-10*8 +15
						coverAuthor.pos.y =	MAP_HEIGHT/2-7*8 +35
						coverText.pos.y =	MAP_HEIGHT/2+10 +15
					}else{
						coverTitle.pos.y =	MAP_HEIGHT/2-10*8
						coverAuthor.pos.y =	MAP_HEIGHT/2-7*8
						coverText.pos.y =	MAP_HEIGHT/2+10
					}
					play("pagetourne")
					i = (i+1)%length
					coverText.text = coverTextList[i]
					coverTitle.text = titleList[i]
					coverAuthor.text = authorList[i]})
					let pageTourneLeft = onKeyPress("left",()=>{
					if (i==5){
						coverTitle.pos.y =	MAP_HEIGHT/2-10*8 +15
						coverAuthor.pos.y =	MAP_HEIGHT/2-7*8 +35
						coverText.pos.y =	MAP_HEIGHT/2+10 +15
					}else{
						coverTitle.pos.y =	MAP_HEIGHT/2-10*8
						coverAuthor.pos.y =	MAP_HEIGHT/2-7*8
						coverText.pos.y =	MAP_HEIGHT/2+10
					}
						play("pagetourne")
					i =((i-1)+length)%length
					coverText.text = coverTextList[i]
					coverTitle.text = titleList[i]
					coverAuthor.text = authorList[i]})
			//	onKeyPress("enter",()=>{destroyAll("cover")})
				onKeyPress("escape",()=>{
					interrupt = false
					pageTourneLeft.paused = true
					pageTourneRight.paused = true
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
		let mecanixOffset = 0
		if (croquettesGivenFlag == true ){
			mecanixSprite = "mecanix_chat"
			mecanixOffset = 15
		}

		const player = add([
			sprite(mecanixSprite),
			// center() returns the center point vec2(width() / 2, height() / 2)
			anchor("center"),
			//console.log(saved_position),
			pos(saved_position.x,saved_position.y),//the default position is in front of the workshop
			area({shape: new Polygon([vec2(-colBox,-colBox+14),vec2(-colBox,0), vec2(colBox,0),vec2(colBox,-colBox+14)])}),
			body(),
			// scalePerso
			scale(PERSOSCALE),
			"player"
			])
		player.play("idle")
		// animate the player
		//player.play("walk_right")
		//player.flipX = true
		const SPEED = 60;
		//player_movement(player,SPEED)
		// movement
		let offsetX = 1
		let offsetXUp = 0
		let offsetY = 1
		let offsetXDown = 0
		//if with cat the offset has to be different
		if (croquettesGivenFlag == true ){
		offsetX = 8
		offsetY = 0
		offsetXUp = 6
		offsetXDown = 6
	}

		onUpdate(() => {
			if (isKeyDown("left") && interrupt == false) {
				player.move(-SPEED, 0)
				player.flipX = true
				// .play() will reset to the first frame of the anim, so we want to make sure it only runs when the current animation is not "run"
				if (player.curAnim() !== "walk_right") {
					player.play("walk_right")
				}
				player.area.offset.x = -offsetX
				player.area.offset.y = 0
			}
		})
		onUpdate(() => {
			if (isKeyDown("right") && interrupt == false) {
				player.move(SPEED, 0)
				player.flipX = false
				if (player.curAnim() !== "walk_right") {
					player.play("walk_right")
				}
				player.area.offset.x = offsetX
				player.area.offset.y = 0
			}
		})
		onUpdate(() => {
			if (isKeyDown("down") && interrupt == false) {
				player.move(0, SPEED)
				player.flipX = false
				if (player.curAnim() !== "down") {
					player.play("down")
				}
							player.area.offset.x = offsetXUp
							player.area.offset.y = -offsetY
			}
		})
		onUpdate(() => {
			if (isKeyDown("up") && interrupt == false) {

				player.move(0, -SPEED)
				player.flipX = false
				if (player.curAnim() !== "up") {
					player.play("up")
				}
				player.area.offset.x = offsetXDown
				player.area.offset.y = offsetY
			 }
		})

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
						sprite(clientkey.spriteName,{anim:"idle"}),
						// center() returns the center point vec2(width() / 2, height() / 2)
						anchor("center"),
						//console.log(saved_position),
						pos(FIRST_CLIENTLINE.x+index*SHIFT_CLIENTLINE.x,FIRST_CLIENTLINE.y+index*SHIFT_CLIENTLINE.y),//the default position is in front of the workshop
						area({ shape: new Polygon([vec2(-colBox,-colBox+18),vec2(-colBox,0), vec2(colBox,0),vec2(colBox,-colBox+18)]) }),
						body(),
						// pas de isStatic
						scale(PERSOSCALE),
						"client", //necessary tag for collision
						tag,
					])
					clientLine.play("walk_right",{ speed: 5 })
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

					}
				}
				// message to guide

						if (showClients==false & jourIdx == 2 ){
							addTextOnDialogBoxEnter(dialogboxList[lang].text1)
						}


				//if there isn't any client yet, its because the PJ has to do smth
				if (showClients==false & jourIdx != 1 ){
					affichageOnCollision(player,"clientEntrance",collisionList[lang].text6)//player,colObjTag,colMsg
					if (flyersTaken == true){
						affichageOnCollision(player,"clientEntrance",collisionList[lang].text7)//player,colObjTag,colMsg
					}
				}
				let flagWarning = false
				// PORTAL from atelier to other scenes
				if (outdoorKey == true){
				player.onCollide("outsideDoorDroite", () => {
					play("porte")
					let BORDERNOCOLLISION = 96; // this is the distance from the center to the border without colliding to left door
					let modified_pos = ({x:center().x-BORDERNOCOLLISION,y:player.pos.y})//keep the height and modify the x, leaving on the right means arriving on left side
					//play("portal")
					// If there's a next level, origin() to the same scene but load the next level
					musicFond.paused = true
					// jour des flyers helpDechetFlag	if (outdoorKey == false){
						if (flyersTaken ==false & jourIdx ==4 && flagWarning == false){
									player.onCollide("outsideDoorDroite", () => {
							//console.log("In the addTextOnDialogBox function");
						let textBox = add([
							sprite("dialogboxEnter",{anim:"idle"}),//, width: width() - 230
							anchor("center"),
							pos(center().x,BOTTOM),
						])
						let txt = add([
							text(textList[lang].hint1, { size:  TXTSIZE,width:TXTWIDTH }),//, width: width() - 230
							anchor("center"),
							pos(center().x,BOTTOM),
							color(MYPURPLE),
						])
						onKeyPress("enter",()=>{
							destroy(txt),
							destroy(textBox)})
							flagWarning= true
						})
					}else{
					go("outside", jourIdx, totalCoins,totalStars, modified_pos )
				}
				})
				}
				// explanation message for the closed door
				if (outdoorKey == false){
					affichageOnCollision(player,"outsideDoorDroite",collisionList[lang].text1)
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
	area({ shape: new Polygon([vec2(-5,7),vec2(-5,-6), vec2(5,-6),vec2(5,7)]) }),			body({isStatic:true}),
			scale(PERSOSCALE),
			"louise",
		])
		louise.play("walk_right",{speed:5})

		let flinta1 = add([
			sprite("perso_flinta_1",{anim:"walk_right"}),
			anchor("center"),
			pos(center().x-3*16,MAP_HEIGHT/2-(3*16)),// the modified position from before
	area({ shape: new Polygon([vec2(-5,7),vec2(-5,-6), vec2(5,-6),vec2(5,7)]) }),
				body({isStatic:true}),
			scale(PERSOSCALE),
			"flinta1",
		])
		flinta1.play("walk_right",{speed:5})

		let flinta2 = add([
			sprite("perso_flinta_2",{anim:"walk_right"}),
			anchor("center"),
			pos(center().x-5*16,MAP_HEIGHT/2-2*16),// the modified position from before
	area({ shape: new Polygon([vec2(-5,7),vec2(-5,-6), vec2(5,-6),vec2(5,7)]) }),			body({isStatic:true}),
			scale(PERSOSCALE),
			"flinta2",
		])
		flinta2.play("walk_right",{speed:5})

		let flinta3bis = levelAtelier.spawn([
			sprite("perso_flinta_3",{anim:"walk_right"}),
			anchor("center"),
			pos(MAP_WIDTH/2-3*16,MAP_HEIGHT/2+4*16),// the modified position from before
		  //pos(MAP_WIDTH/2+3*16,MAP_HEIGHT/2-2*8),// the modified position from before
	area({ shape: new Polygon([vec2(-5,7),vec2(-5,-6), vec2(5,-6),vec2(5,7)]) }),
			body({isStatic:true}),
			scale(PERSOSCALE),
			agent({ speed: 80, allowDiagonals: true }),
			"flinta3",
		])
		flinta3bis.play("walk_right",{speed:5})

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
			player.play("walk_right",{speed:5})

			//player.flipX = true
			// movement
			let offsetX = 1
			let offsetXUp = 0
			let offsetY = 1
			let offsetXDown = 0
			if (croquettesGivenFlag == true ){
			offsetX = 8
			offsetY = 0
			offsetXUp = 6
			offsetXDown = 6
		}
			const SPEED = 50;
			onUpdate(() => {
				if (isKeyDown("left") && interrupt == false) {
					player.move(-SPEED, 0)
					player.flipX = true
					// .play() will reset to the first frame of the anim, so we want to make sure it only runs when the current animation is not "run"
					if (player.curAnim() !== "walk_right") {
						player.play("walk_right")
					}
					player.area.offset.x = -offsetX
					player.area.offset.y = 0
				}
			})
			onUpdate(() => {
				if (isKeyDown("right") && interrupt == false) {
					player.move(SPEED, 0)
					player.flipX = false
					if (player.curAnim() !== "walk_right") {
						player.play("walk_right")
					}
					player.area.offset.x = offsetX
					player.area.offset.y = 0
				}
			})
			onUpdate(() => {
				if (isKeyDown("down") && interrupt == false) {
					player.move(0, SPEED)
					player.flipX = false
					if (player.curAnim() !== "down") {
						player.play("down")
					}
								player.area.offset.x = offsetXUp
								player.area.offset.y = -offsetY
				}
			})
			onUpdate(() => {
				if (isKeyDown("up") && interrupt == false) {

					player.move(0, -SPEED)
					player.flipX = false
					if (player.curAnim() !== "up") {
						player.play("up")
					}
					player.area.offset.x = offsetXDown
					player.area.offset.y = offsetY
				 }
			})
			// COLLISIONS
			add_atelier_collisions(player,totalCoins,totalStars)
			destroyAll("trouvailles")
		//ADD INTERACTION WITH PERSO
		player.onCollide("louise", () => {
			if(finalInt0==false){

				addTextOnDialogBox(dialogboxList[lang].text2),
				wait(1.4,()=>{
					destroyAll("pied_velos_kc")
					const velo_sur_pied_1 = add([
						sprite("velo_sur_pied",{anim:"idle"}),
						scale(1),
						anchor("center"),
						pos(center().x-(6*16),8*16),
						area({shape: new Polygon([vec2(-16,-16),vec2(-16,16), vec2(0,16),vec2(0,-16)])}),

						body({isStatic:true}),
						"pied_velos"
					])
					const velo_sur_pied_2 = add([
						sprite("velo_sur_pied",{anim:"idle"}),
						scale(1),
						anchor("center"),
						pos(center().x+2*16,MAP_HEIGHT-2*16),
						area({shape: new Polygon([vec2(-16,-16),vec2(-16,16), vec2(0,16),vec2(0,-16)])}),

						body({isStatic:true}),
						"pied_velos"
					])
				})

				finalInt0=true
			}else{
				addTextOnDialogBox(dialogboxList[lang].text3)
			}
		})
		player.onCollide("flinta1", () => {
 			if(finalInt1	==false){
				addTextOnDialogBox(dialogboxList[lang].text4)
 				wait(1.4,()=>{destroyAll("armoireKc")}),
 				finalInt1=true
 			}else{
 				addTextOnDialogBox(dialogboxList[lang].text5)
 			}
 		})
		player.onCollide("flinta2", () => {
			if(finalInt2==false){
				addTextOnDialogBox(dialogboxList[lang].text6)
				if (deriveChaineGained==false){
				play("audio_reussite") //indicate that an object has been gained
					wait(1,()=>{add([
					sprite("sprite_demontechaine"),
					scale(1),
					area(),
					pos(player.pos),
					anchor("center"),
					outline(4),
					move(UP,100),
				])})
				// now the object is owned in the INVENTORY
				inventory["Dérive-chaine"].state ="owned"
			}
			finalInt2=true
			}else{
				addTextOnDialogBox(dialogboxList[lang].text7)
			}
		})
		player.onCollide("flinta3", () => {
 			if(finalInt3==false){
				addTextOnDialogBox(dialogboxList[lang].text8)
 				finalInt3=true
				wait(1,()=>{
					let gateau = add([
					sprite("atelier_gateau",{anim:"idle"}),
					anchor("center"),
					pos(center().x-8,MAP_HEIGHT/2-1),
				])
				//flinta3bis.setTarget(vec2(8*16,7*16))



					flinta3bis.setTarget(vec2(11*16,10.5*16))})
 			}else{
 				addTextOnDialogBox(dialogboxList[lang].text9)
 			}
 		})
		//player.onCollideEnd("flinta3",()=>{flinta3.setTarget(vec2(center().x-2.5*16,MAP_HEIGHT/2+2*16))})
		flinta3bis.onTargetReached(()=>{
				let allie = add([
				sprite("interaction_allie",{anim:"walk_right"}),
				anchor("center"),
				pos(center().x-6.5*16,MAP_HEIGHT/2+4*16),// the modified position from before
				area({ shape: new Polygon([vec2(-5,7),vec2(-5,-6), vec2(5,-6),vec2(5,7)]) }),
				body({isStatic:true}),
				scale(PERSOSCALE),
				"allie"
			])

			player.onCollide("allie", () => {
					addTextOnDialogBox(dialogboxList[lang].text10)
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

		let levelDialog = clientsList[clientKey].dialogs

		let textBox = add([
			sprite("dialogboxEnter",{anim:"idle"}),//, width: width() - 230
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
				 "GFcqqqqoqWffaVFd",
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

					"o": () => [
						sprite("tile_jonction"),
						area(),

					],
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
		// dialogsList[lang].dialogChips
		let dialogChips = [
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
		let arbre2 = add([
			sprite("exte_arbre"),
			// center() returns the center point vec2(width() / 2, height() / 2)
			anchor("center"),
			pos(center().x-16*2.5,MAP_HEIGHT/2+2*16),// the modified position from before
			area({ shape: new Polygon([vec2(-17,17),vec2(-17,-10), vec2(10,-10),vec2(10,17)]) }),
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

		let arbre3 = add([
			sprite("exte_arbre_anime",{anim:"shine"}),
			// center() returns the center point vec2(width() / 2, height() / 2)
			anchor("center"),
			pos(center().x-16*4.5,MAP_HEIGHT/2+1*16),// the modified position from before
			area({ shape: new Polygon([vec2(-colBox,25),vec2(-colBox,-15), vec2(17,-15),vec2(17,25)]) }),
			body({isStatic:true}),
		])
		let arbre4 = add([
			sprite("exte_arbre"),
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

		// collision avec le perso exte
		player.onCollide("perso_exte",()=>{
			if(chipsFlag == true){
				interrupt = true
				justDialog(dialogChips)
				chipsGivenFlag = true
				chipsFlag=false
			}else {
				addTextOnDialogBox(dialogboxList[lang].text11)
			}
		})
		// collision avec le chat
		player.onCollide("chatMaki",()=>{
			if(croquettesFlag == true){
				interrupt = true
				let textBox = add([
					sprite("dialogbox"),//, width: width() - 230
					anchor("center"),
					pos(center().x,BOTTOM),
				])
				let txt = add([
					text(textList[lang].chat1, { size:  TXTSIZE,width:TXTWIDTH }),//, width: width() - 230
					anchor("center"),
					pos(center().x,BOTTOM),
					color(MYPURPLE),
				])
				onKeyPress("enter",()=>{
					interrupt = false
					destroy(txt),
					destroy(textBox)})

				player.sprite = "mecanix_chat"
				croquettesGivenFlag = true
				croquettesFlag = false
			}else {
				addTextOnDialogBox("Miaowww...")

			}
		})
		// collision avec le chat
		player.onCollide("chien",()=>{
				addTextOnDialogBox(dialogboxList[lang].text12)
		})
		// animate the player
		//player.play("roule")
		const speed = 60;
		//player_movement(player,SPEED)
		// movement
		onUpdate(() => {
		if (isKeyDown("left") && interrupt == false) {
			player.move(-speed, 0)
			player.flipX = true
			if  (player.curAnim() !== "roule") {
				player.play("roule")
			}
		}})
		onUpdate(() => {
		if (isKeyDown("right")&& interrupt == false) {
			player.move(speed, 0)
			player.flipX = false
			if  (player.curAnim() !== "roule") {
				player.play("roule")
			}
		}})
		onUpdate(() => {
		if (isKeyDown("up")&& interrupt == false) {
			player.move(0, -speed)
			if  (player.curAnim() !== "up") {
				player.play("up")
			}
			player.flipX = true
		}})
		onUpdate(() => {
		if (isKeyDown("down")&& interrupt == false) {
			player.move(0, speed)
			player.flipX = false
			if  (player.curAnim() !== "down") {
				player.play("down")
			}
		}})

	// add status bar
		addStatusBar(jourIdx,totalCoins,totalStars)
		// DECHETERRIE DIALOG
		let dechettDialog1 = dialogsList[lang].dechettDialog1
		//  [
		// 	["PNJ","Hé toi! Qu'est-ce que tu fais là?"],
		// 	["M","Hé salut! C'est quoi cet endroit?"],
		// 	["PNJ","C'est la déchetterie, tu connais pas? T'es pas d'ici?"],
		// 	["M","Non, je viens de commencer de taffer à l'atelier de vélo pas loin d'ici."],
		// 	["PNJ", "Ha ouais et ça va? Je connaissais la personne d'avant, iel était sympa mais je crois que c'était pas toujours évident avec les clientexs."],
		// 	["M", "Ha ouais je vois...Je me fais pas mal expliquer mon taf par des types c'est un peu chiant."],
		// 	["PNJ","Je comprends, ça m'arrive ici aussi des fois. Ha aujourd'hui quelqu'un a amené des stands pour vélo en bon état, tu veux les prendre?"],
		// 	["M", "Grave! Merci. Bon j'y retourne... à bientôt!"]
		// 	]
		let dechettDialog2 = dialogsList[lang].dechettDialog2
		// let dechettDialog2 = [
		// 		["PNJ","Hé toi, te revoilà!"],
		// 		["M","Hé salut! Comment tu vas ?"],
		// 		["PNJ","Pas mal, c'est une journée tranquille. Et toi?"],
		// 		["M","Un peu fatiguée du taf, mais y'a des personnes sympas qui sont passées hier c'était cool!"],
		// 		["PNJ", "Avec le temps t'auras probablement plus de copainexs que de relouexs!"],
		// 		["M", "Ouais t'as raison. Aussi je passais par la parce que j'ai des flyers pour la manif contre les violences policieres."],
		// 		["PNJ","Oh merci, j'en ai entendu parler mais j'ai pas les détails."],
		// 		["M", "Bah y'a tout écrit dessus,tiens!"],
		// 		["PNJ","Top, je vais les faire tourner c'est important."],
		// 		]
		// Atelier vandaliser
		let dechettDialog3 = dialogsList[lang].dechettDialog3
		// let dechettDialog3 = [
		// 		["PNJ","Hé encore toi!"],
		// 		["M","Coucou..."],
		// 		["PNJ","Ça va? Tu fais une tête bizarre..."],
		// 		["M","Nan c'est nul.. Y'a des gens qui ont cassé des trucs au magasin, j'ai l'impression qu'iels sont pas fan de l'esprit queer du truc."],
		// 		["PNJ", "Oh merde...Allez je viens avec toi on va réparer tout ca!"],
		// 		["M", "Oui je venais justement te demander si tu voulais bien me filer un coup de main."],
		// 		["PNJ","Grave! On sait tout réparer de toute facon nan?! Hihi"],
		// 		["M", "Oh cool, ca me fait plaisir d'entendre ca. On se retrouve là-bas?"],
		// 		["PNJ","Oui, je ferme la déchett et j'arrive. A toute!"],
		// 		]


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
					text(textList[lang].dechett2, { size:  TXTSIZE,  width: txtWidth }),//, width: width() - 230
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
			// add deco oncluding plante verre and note
			let deco = add([
				 sprite("inventaire_deco",{anim:"idle"}),//, width: width() - 230
				 anchor("center"),
				 pos(center().x,11.5*8),
			 ])

		// add INSTRUCTIONS sur le fond
		const return_instruction = add([
			text(textList[lang].retourInstruction, {font: "prstart", size:TXTSIZE, width:TXTWIDTH}),
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
			posX = center().x-(MAP_WIDTH/2)+(((i)%column)*shiftX)+54
			posY = 54+(Math.floor(i/column)*shiftY)
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

				positionList.push(Array(posX,posY))
				achatList.push(key+":\n"+"Tu as déjà cet objet!")
			}
			i++
		}
		const length = achatList.length

		// create the selector
		const selector = add([
			rect(24,34),
			anchor("center"),
			color(1,1,1),
			opacity(0.05),
			pos(center().x-4.5*16-1,54)
		])
		// create the achat texte
		const achatTexte = add([
			text(textList[lang].initInventaire,{size:TXTSIZE}),
			pos(center().x-(MAP_WIDTH/8),BOTTOM-(MAP_WIDTH/15))
		])
		//move the selector and modify the achat texte
		let selectorIndex = 0
		onKeyPress("right", () => {
			selectorIndex= (selectorIndex+1)%length
			// use position where a tool has been saved and put it in position list
			selector.pos.x =positionList[selectorIndex][0]
			selector.pos.y =positionList[selectorIndex][1]-5
			// use achat texte list
			achatTexte.text = achatList[selectorIndex]
			play("selector")
	})
	onKeyPress("left", () => {
		console.log(selectorIndex);
		selectorIndex = (selectorIndex-1+length)%length
		// use position where a tool has been saved and put it in position list
		selector.pos.x =positionList[selectorIndex][0]
		selector.pos.y =positionList[selectorIndex][1]-5
		// use achat texte list
		achatTexte.text = achatList[selectorIndex]
		play("selector")
})

onKeyPress("up", () => {
	console.log(selectorIndex);
	selectorIndex = (selectorIndex+4+length)%length
	// use position where a tool has been saved and put it in position list
	selector.pos.x =positionList[selectorIndex][0]
	selector.pos.y =positionList[selectorIndex][1]-5
	// use achat texte list
	achatTexte.text = achatList[selectorIndex]
	play("selector")
})
onKeyPress("down", () => {
	console.log(selectorIndex);
	selectorIndex = (selectorIndex-4+length)%length
	// use position where a tool has been saved and put it in position list
	selector.pos.x =positionList[selectorIndex][0]
	selector.pos.y =positionList[selectorIndex][1]-5
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
			text(textlist[lang].actionJuste,{size:MEDIUMTXTSIZE,width:TXTWIDTH}),
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
		add([text(textList[lang].choixfaux,{size:MEDIUMTXTSIZE,width:TXTWIDTH}),
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
		text(textList[lang].actionJuste2,{size:MEDIUMTXTSIZE,width:TXTWIDTH}),
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
	//wait(0.3,()=>play("extraBonus"))
	wait(0.8,()=>play("hitSound"))
	//wait(1.1,()=>play("extraBonus"))
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
		text(textList[lang].choixfaux2,{size:MEDIUMTXTSIZE,width:TXTWIDTH}),
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
				text(textList[lang].choiceR,{font:"joystix",size:TXTSIZE+6}),
				pos(vec2(center().x,MAP_HEIGHT/2+0.3*(MAP_HEIGHT/2))),
				area({ cursor: "pointer", }),
				scale(1),
				anchor("center"),
			])
		const FightBtn = add([
					text(textList[lang].choiceF,{font:"joystix",size:TXTSIZE+6}),
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
					text(textList[lang].actionJuste,{size:MEDIUMTXTSIZE,width:TXTWIDTH}),
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
				add([text(textList[lang].choixfaux,{size:MEDIUMTXTSIZE,width:TXTWIDTH}),
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
				text(textList[lang].actionJuste2,{size:MEDIUMTXTSIZE,width:TXTWIDTH}),
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
				text(textList[lang].choixfaux2,{size:MEDIUMTXTSIZE,width:TXTWIDTH}),
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

			switch(jourIdx){
			// BONUS
			case 1 :
			// add text, sprite and update inventory
			addBonus(bonusList[lang].bonus1,"demontepneu","Démonte-pneu")
			onKeyPress("enter", () => {	goInteraction(jourIdx,totalCoins,totalStars) })
			break;

			case 2 :
			// add text, sprite and update inventory
			addBonus(bonusList[lang].bonus2,"croquettes","Croquettes")
			croquettesFlag = true //flag to modify the collision with the cat
			onKeyPress("enter", () => {	goInteraction(jourIdx,totalCoins,totalStars) })
			break;

			case 3:
			// add text, sprite and update inventory
			addBonus(bonusList[lang].bonus3,"bonus_chips","Chips")
			chipsFlag = true //flag to modify the collision with the pers exte
			onKeyPress("enter", () => {
							goInteraction(jourIdx,totalCoins,totalStars)
					 })
			break;
			case 4:
			addBonus(bonusList[lang].bonus4,"bonus_boites","Boîte à outils")
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
			pos(center().x,MAP_HEIGHT/2-50),
			"textBox"
		])
		// JOUR
		const bilanTxt = add([
			text(textList[lang].bilan+"\n--------------\n"+repairCounter+" "+textList[lang].repair+"\n"+fightCounter+" "+textList[lang].claques+"\n--------------\n"+textList[lang].totalClients, {font: "prstart", size:TXTSIZEBILAN}),color(MYPURPLE),
			pos(center().x-70, MAP_HEIGHT/4-20),
			"bilan"
		])
		let coinsAnim = add([
			text("$ : 0", {font: "prstart", size:TXTSIZEBILAN}),color(MYPURPLE),
			pos(center().x+45,  (MAP_HEIGHT/4)),
			"bilan"
		])
		let starsAnim = add([
			text("* : 0", {font: "prstart", size:TXTSIZEBILAN}),color(MYPURPLE),
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
			const BOTTOMTEXT = BOTTOM-24
			const MEDIUMTXTSIZE = 10
			// FOND BILAN
			 let bulleFond = add([
				sprite("carton_bulle"),//, width: width() - 230
				anchor("center"),
				scale(1),
				pos(center().x-10,BOTTOM-15),
			])
			switch(caseNumber){

			// BONUS
			case 0 :

				let bravo = add([text(textList[lang].reussi,
				{ size: MEDIUMTXTSIZE, width:TXTWIDTH,font:"prstart"}),color(MYBLUE),scale(1),anchor("center"),pos(center().x+3,BOTTOMTEXT)])
				// object gained
				onKeyPress("enter",()=>{go("bonus",jourIdx,totalCoins,totalStars)})

			break;
			// BASIC
			case 1 :
			add([text(textList[lang].presquereussi,
				{ size: MEDIUMTXTSIZE,width:TXTWIDTH, font:"prstart"}),color(MYBLUE),scale(1),anchor("center"),pos(center().x+3,BOTTOMTEXT)])
			// instruction

							onKeyPress("enter", () => {
								if(jourIdx==1){go("interactionJour1", jourIdx, totalCoins,totalStars,INITIALPOSITION)}
								if(jourIdx==2){go("interactionJour2", jourIdx, totalCoins,totalStars,INITIALPOSITION)}
								if(jourIdx==3){go("interactionJour3", jourIdx, totalCoins,totalStars,INITIALPOSITION)}
								if(jourIdx==4){go("interactionJour4", jourIdx, totalCoins,totalStars,INITIALPOSITION)}
							})
				break;
			case 2 :
			// BASIC with Burnout WARNING:=
			add([text(textList[lang].warning,
				{ size: MEDIUMTXTSIZE,width:TXTWIDTH, font:"prstart"}),color(MYBLUE),scale(1),anchor("center"),pos(center().x+3,BOTTOMTEXT)])
				// instruction

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
				add([text(textList[lang].warningBankrupt,
					{ size: MEDIUMTXTSIZE, width:TXTWIDTH,font:"prstart"}),color(MYBLUE),scale(1),anchor("center"),pos(center().x+3,BOTTOMTEXT)])
					// instruction

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
			add([text(textList[lang].burnout,
				{ size: MEDIUMTXTSIZE,width:TXTWIDTH, font:"prstart"}),scale(1),color(MYBLUE),anchor("center"),pos(center().x+3,BOTTOMTEXT)])
			wait(4.5,()=>go("Burnout"))
break;
			case 5 :
			// GAMEOVER BANKRUPT
			add([text(textList[lang].bankrupt,
				{ size: MEDIUMTXTSIZE, font:"prstart", width:TXTWIDTH}),scale(1),anchor("center"),color(MYBLUE),pos(center().x+3,BOTTOMTEXT)])
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
			let levelAtelier = add_atelier_map()

			//status
			addStatusBar(jourIdx,totalCoins,totalStars)
			let dialogInteraction1 = dialogsList[lang].dialogInteraction1

			// try with function
			interactionJour(1,levelAtelier,justifiedFightCounter,totalCoins,totalStars,
				{x:center().x-1.8*16,y:MAP_HEIGHT/2-(2*16)},"perso_interaction_1",{x:16*5,y:16*7},dialogInteraction1,{x:16*1.5,y:16*11},false,1)

			})
	scene("interactionJour2", (jourIdx,totalCoins,totalStars,position) => {
		//function instead of commander
		let levelAtelier = add_atelier_map()
		//status
		addStatusBar(jourIdx,totalCoins,totalStars)
		let dialogInteraction2 = dialogsList[lang].dialogInteraction2


		// try with function
		interactionJour(jourIdx,levelAtelier,justifiedFightCounter,totalCoins,totalStars,
			{x:center().x-40,y:MAP_HEIGHT/2-(2*16)},"perso_interaction_2",{x:16*4,y:16*7},dialogInteraction2,{x:16*2,y:16*5},true,1)
		})
	scene("interactionJour3", (jourIdx,totalCoins,totalStars,position) => {
		let levelAtelier = add_atelier_map()
			//status
			addStatusBar(jourIdx,totalCoins,totalStars)
			let dialogInteraction3 = dialogsList[lang].dialogInteraction3



			// try with function
			interactionJour(3,levelAtelier,justifiedFightCounter,totalCoins,totalStars,
				{x:center().x-20,y:MAP_HEIGHT/2-(2*16)}/*player postiion*/,"perso_interaction_3",{x:16*5,y:16*7},dialogInteraction3,{x:16*5,y:16*9},true,0)})
scene("interactionJour4", (jourIdx,totalCoins,totalStars,position) => {
	let levelAtelier = add_atelier_map()
		//status
		addStatusBar(jourIdx,totalCoins,totalStars)
    let dialogInteraction4 = dialogsList[lang].dialogInteraction4

		// try with function
		interactionJour(4,levelAtelier,justifiedFightCounter,totalCoins,totalStars,
			{x:center().x-20,y:MAP_HEIGHT/2-(2*16)}/*player postiion*/,"perso_interaction_4",{x:16*5,y:16*7},dialogInteraction4,{x:16*1.5,y:16*11},true,1)})

	// ADD GAME OVER SCENE
	scene("partyWin", (jourIdx,totalCoins,totalStars) => {
		musicFond.paused = true
		let audiofete = play("audio_fete")
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
			text(textList[lang].bravo, { size: LARGETXTSIZE, font:"joystix" }),
			scale(1),
			anchor("center"),
			pos(center().x+5,MAP_HEIGHT/2-16)
		])
		const bravoContent = add([
			text(textList[lang].bravocontent, { size: MEDIUMTXTSIZE-4,width: TXTWIDTH+5, font:"prstart" }),
			scale(1),
			anchor("center"),
			pos(center().x+10,MAP_HEIGHT/2+50),
		])

		// Recommencez le jeu
		add([
			text(textList[lang].restart,{ size: TXTSIZE }),
					scale(1),anchor("center"),pos(center().x,BOTTOM+23),])

					onKeyPress("space",() => {
							audiofete.paused= true

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
		sprite("atelier_faillite",{anim:"idle"}),
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
	const bankruptContent = add([
		text(textList[lang].bankruptcontent, { size: MEDIUMTXTSIZE-4,width: TXTWIDTH+5, font:"prstart" }),
		scale(1),
		anchor("center"),
		pos(center().x+10,MAP_HEIGHT/2+50),

	])


	// Recommencez le jeu
	add([
		text(textList[lang].restart, { size: TXTSIZE }),
				scale(1),anchor("center"),pos(center().x,BOTTOM+23),])

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
	const burnoutFond = add([
		sprite("atelier_burnout",{anim:"idle"}),
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
	const burnoutContent = add([
		text(textList[lang].burnoutcontent, { size: MEDIUMTXTSIZE-4,width: TXTWIDTH+5, font:"prstart" }),
		scale(1),
		anchor("center"),
		pos(center().x+3,MAP_HEIGHT/2+50),
	])
	// Recommencez le jeu
	add([
				text(textList[lang].restart, { size: TXTSIZE }),
				scale(1),anchor("center"),pos(center().x,BOTTOM+23),])

	onKeyPress("space",() => {
						musicBurnout.paused = true
				    go("start")
				})
})
scene("test",()=>{
	/////////



	// Loading a multi-frame sprite
	loadSprite("dino", "/images/sprite_maincharacter_petit.png", {
		// The image contains 9 frames layed out horizontally, slice it into individual frames
		sliceX: 12,
		// 4 animations
		anims: {
			"idle": {
				// Starts from frame 0, ends at frame 3
				from: 0,
				to: 3,
				// Frame per second
				speed: 5,
				loop: true,
			},
			"run": {
				from: 0,
				to: 3,
				speed: 5,
				loop: true,
			},
			// This animation only has 1 frame
			"jump": 8,
		},
	})

	const SPEED = 60



	// Add our player character
	const player = add([
		sprite("dino"),
		pos(center()),
		anchor("center"),
		area(),
		body(),
	])

	// .play is provided by sprite() component, it starts playing the specified animation (the animation information of "idle" is defined above in loadSprite)
	player.play("idle")


	// Switch to "idle" or "run" animation when player hits ground
	player.onGround(() => {
		if (!isKeyDown("left") && !isKeyDown("right")) {
			player.play("idle")
		} else {
			player.play("run")
		}
	})

	player.onAnimEnd((anim) => {
		if (anim === "idle") {
			// You can also register an event that runs when certain anim ends
		}
	})
	onKeyDown("left", () => {
		player.move(-SPEED, 0)
		player.flipX = true
		// .play() will reset to the first frame of the anim, so we want to make sure it only runs when the current animation is not "run"
		if (player.isGrounded() && player.curAnim() !== "run") {
			player.play("run")
		}
	})

	onKeyDown("right", () => {
		player.move(SPEED, 0)
		player.flipX = false
		if (player.isGrounded() && player.curAnim() !== "run") {
			player.play("run")
		}
	})




	/////////

})
// THE ENDPOINT
function start() {
// Start with the "game" scene, with initial parameters
//go("atelier", 3, 85,0/*totalCoins*/,INITIALPOSITION)
//go("interactionJour3",3,totalCoins,totalStars,INITIALPOSITION)
//go("jourFinal",5,100,100,INITIALPOSITION,2)
//go("outside",5,30,30,INITIALPOSITION)
//go("interactionJour3", (2,0,40,20,INITIALPOSITION))//go("clientDialog",1,75,100/*totalCoins*/,50/*force*/)
//justifiedFightCounter=4
//go("Carton_Journalier","client1",1,50,30,10,10,1)
//go("Burnout")
//	go("inventaire", 1, 10, 10,INITIALPOSITION,0)
go("start")
	}
start()
