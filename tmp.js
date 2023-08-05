function interactionJour1(jourIdx,justifiedFightCounter,totalCoins,totalStars,playerPosition/*{x:,y:}*/,persoSprite,target1/*{x:,y:}*/,dialogInteractionList,target2){

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
			agent({ speed: 80, allowDiagonals: true }),
		],1,1)

		let aller = onKeyPress("enter",() => {
			perso.setTarget(vec2(
				target1.x,//Math.floor((center().x+45) / TILE_WIDTH) * TILE_WIDTH + TILE_WIDTH / 2,
				target1.y//Math.floor((center().y-65)  / TILE_HEIGHT) * TILE_HEIGHT + TILE_HEIGHT / 2,
			))
		})
		// let retour = onKeyPress("enter",() => { perso.setTarget(vec2(
		// 		16*0,//Math.floor((center().x+45) / TILE_WIDTH) * TILE_WIDTH + TILE_WIDTH / 2,
		// 		16*12//Math.floor((center().y-65)  / TILE_HEIGHT) * TILE_HEIGHT + TILE_HEIGHT / 2,
		// 	))})
		// retour.paused

	//once the aller is done
let firstTarget= 	perso.onTargetReached(()=>{

let dialogInteraction1 = dialogInteractionList
			aller.paused =true

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
		if (curDialog==0){
			// dialog finished, options to choose
			dialogAction.paused = true
			firstTarget.paused=true
			play("audio_reussite")
			destroy(textBox)
			destroy(txt)
			onKeyPress("enter",() => {
				dialogAction.paused = true
				firstTarget.paused=true
				perso.flipX=true
				let retour = perso.setTarget(vec2(
					target2.x,//Math.floor((center().x+45) / TILE_WIDTH) * TILE_WIDTH + TILE_WIDTH / 2,
					target2.y//Math.floor((center().y-65)  / TILE_HEIGHT) * TILE_HEIGHT + TILE_HEIGHT / 2,
				))
				console.log("Before the fade\n le jour "+jourIdx+"\n le justifiedFightCounter "+justifiedFightCounter+"\n la thune c'est "+totalCoins+"\n les stars "+totalStars)
				perso.onTargetReached(()=>{
					dialogAction.paused =true
					let fadeOut = add([
						pos(center().x, center().y-30),
						anchor("center"),
						color(BLACK),
    				rect(256, 256),
    				area(),
						fadeIn(1),
						opacity(1),
					])
					//to the next day
					let newjourIdx = resetDayVariables(totalCoins,totalStars)
					// door is open now
					outdoorKey = true
					console.log("apres le reset\n le jour"+newjourIdx+"\n le justifiedFightCounter "+justifiedFightCounter+"\n la thune c'est "+totalCoins+"\n les stars "+totalStars)
				wait(1,()=>go("atelier",newjourIdx,totalCoins,totalStars,INITIALPOSITION))
			})
			}
		)
	}else{
		updateDialog()
	}
	})
})
	})
