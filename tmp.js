let dialogInteraction1 = [
  ["pnj","Hé salut"],
["m","Salut! désolée c'est fini pour aujourd'hui, il faut revenir demain..."],
["pnj","oui, oui je venais pas pour réparer mon vélo..."],
["m","heu ok, tu viens pour quoi alors?"],
[" pnj","heu... ha oui! haha pardon. je viens te filer la clée que j'ai oublié de rendre quand j'ai arrêté de bosser ici. je suis un peu tête en l'air des fois."],
["m","ah! merci"],
["pnj","de rien, allé à la proch ciao ciao! heu, la sortie c'est par là hein."]
]
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
curDialog = (curDialog + 1) % dialogInteraction1.length
if (curDialog==0){
  // dialog finished, options to choose
  dialogAction.paused = true
  destroy(textBox)
  destroy(txt)
      // flog of the dialog is modified is open now
      return true;
  }else{
updateDialog()
})

})
}
