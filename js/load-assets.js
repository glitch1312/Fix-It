export { init };

function init(){
  /* All sprites have been created specifically for this game by Le Grand Seum under the ...License */
  /*----------------------------
       DECO AND BACKGROUNDS
  -----------------------------*/

  loadRoot("assets/")
  // SPRITE WITH ANIMATION
  // From Aseprite software, with animations described in the json file
  const aseprite_deco_bg_list = [
  	"talk_BG_tiles",
    "scene_dialogue_punch",
    "choix_frapper_v2",
    "choix_reparer",
    "atelier_rave",
    "exte_banc_perso",
    "exte_arbre_anime",
    "start_fond",
    "nuit_Z",
    "mecanix_chat",
    "bonus_chips",
    "bonus_boites",
    "atelier_etabli_biblio",
    "inventaire_deco",
    "atelier_faillite",
    "atelier_burnout",
    "atelier_etabli_flyer",
    "atelier_velo_sur_pied_kc",
    "croquettes",
    "atelier_mur_fond",
    "atelier_tasse_cafe",
    "velo_sur_pied",
    "etabli_fini",
    "choix_frapper_juste",
    "dialogboxEnter",
    "demontepneu",
    "atelier_gateau"
    ]
  aseprite_deco_bg_list.forEach(a => {
		loadAseprite(a, "images/${a}.png","images/${a}.json");
	});


  // SPRITE ATLAS
  // Leshy SpriteSheet Tool https://www.leshylabs.com/apps/sstool/ to create the sprite atlas
  const spriteatlas_deco_bg_list = [
    "scene_repairfix",
    "scene_repair",
    "scene_inventaire",
    "sprite_outils",
    "tiles_outside",
    "tiles",
    "sorties"
  ]
  spriteatlas_deco_bg_list.forEach(a => {
    loadSpriteAtlas("images/${a}.png","images/${a}.json");
  });

  // SPRITES WITHOUT ANIMATION
  const sprite_deco_bg_list = [
    "atelier_tabouret_livre",
    "atelier_livre_ouvert",
    "exte_arbre",
    "choix_bulle",
    "atelier_velo_bleu",
    "atelier_poster_grand",
    "atelier_bibliotheque",
    "atelier_cover",
    "atelier_point_info",
    "atelier_armoire_kc",
    "atelier_clee",
    "atelier_poster",
    "atelier_poster2_grand",
    "carton_bilan",
    "carton_bulle",
    "dechett",
    "dialogbox",
    "exte_banc",
    "exte_scudo",
    "inventaire_velo_sur_pied_vide",
    "tile_exte_chemin_fin_horizontal",
    "tile_exte_chemin_fin_verticall",
    "tile_jonction",
    "velo_rouge",
    "velo_sur_pied_vide",
    "wrench",
  ]
  sprite_deco_bg_list.forEach(a => {
    loadSprite(a,"images/${a}.png");
  });

  /*----------------------------
        CHARACTERS
  -----------------------------*/
  for (var i = 1; i <=24; i++) {
    // Sprite for small clients characters in the workshop with animation described in the json file
  	loadAseprite("client_"+i+"_petit","images/client_"+i+"_petit.png", "images/client_"+i+"_petit.json")
    // Sprite for full-length clients characters in dialog scene
    loadSprite("client_"+i+"_grand", "images/client_"+i+"_grand.png")
  }

  // Other characters
    const aseprite_characters = [
      "exte_maki",
      "exte_sirius",
      "interaction_allie",
      "mecanix_velo",
      "perso_dechett_1",
      "perso_flinta_1",
      "perso_flinta_2",
      "perso_flinta_3",
      "perso_flinta_4",
      "perso_interaction_1",
      "perso_interaction_2",
      "perso_interaction_3",
      "perso_interaction_4",
      "Sprite_perso_velo",
    ]
  aseprite_characters.forEach(a => {
    loadAseprite(a, "images/${a}.png","images/${a}.json");
  });

  /*----------------------------
            PLAYER
  -----------------------------*/
  loadSprite("mecanix_en_pied","images/Sprite_maincharacter_enpied.png")
  loadSprite("mecanix","images/sprite_maincharacter_petit.png", {
  	// The image contains 9 frames layed out horizontally, slice it into individual frames
  	sliceX: 12,
  	// 4 animations
  	anims: {
  		"walk_right": {
  			// Starts from frame 0, ends at frame 3
  			from: 0,
  			to: 3,
  			// Frame per second
  			speed: 5,
  			loop: true,
  		},
  		"idle": {
  			from: 4,
  			to: 4,
  			speed: 5,
  			loop: true,
  		},
  		"down": {
  			from: 6,
  			to: 8,
  			speed: 5,
  			loop: true,
  		},
  		"up": {
  			from: 9,
  			to: 11,
  			speed: 5,
  			loop: true,
  		},

  	},
  })
}


/*----------------------------
          AUDIOS
-----------------------------*/

// downloaded from https://mixkit.co/free-sound-effects/game/ under the Mixkit Sound Effects Free License
// downloaded from https://mixkit.co/free-sound-effects/game/
//https://lasonotheque.org

  const sounds_list = [
    "audio_burnout",
    "audio_fete",
    "audio_piece",
    "audio_reussite",
    "action_juste",
    "audio_reparer",
    "carton",
    "carton2",
    "choix_faux",
    "exte",
    "extraBonus",
    "fond",
    "frappez",
    "minijeu",
    "page_debut",
    "pagetourne",
    "hitSound",
    "hitInRepair",
    "ouinouin",
    "unlock",
    "porte",
    "selector",
    "repair_sucess",
    "retro_click",
  ]
  sounds_list.forEach(a => {
    loadSound(a,"audio/${a}.mp3");
  });


  /*----------------------------
            FONTS
  -----------------------------*/
  //https:www.1001fonts.com/pixel-millennium-font.html
  //license Pixel Millennium is licensed under the Creative Commons Attribution-NonCommercial-NoDerivs License (CC BY-NC-ND)
  loadFont("prstart","assets/fonts/pixel.ttf")
  // downloaded at https://www.1001fonts.com/joystix-font.html under the https://www.1001fonts.com/joystix-font.html#license license
  loadFont("joystix","assets/fonts/joystix.otf")
