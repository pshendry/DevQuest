window.addEventListener('load',function() {
  var Q = Quintus({
    development: true,
    //audioPath: "assets/audio/",
    imagePath: "assets/images/",
    dataPath: "assets/data/"
  })
  .include("Sprites, Scenes, Input, TMX, Anim, 2D, Touch, UI, Audio")
  .setup("quintusContainer")
  .controls()
  .touch()
  .enableSound();

  Q.gravityX = 0;
  Q.gravityY = 0;
  
  initAnimations(Q);
  initComponents(Q);
  initSprites(Q);
  initScenes(Q);

  Q.loadTMX(
    'stage1.tmx, tiles.png, play_button.png, title.png, ' +
    'ui/health_bar.png, ' +
    'sprites/sushi.png, ' +
    'sprites/potion.png, ' +
    'sprites/coffee.png, ' +
    'sprites/coder.png, ' +
    'sprites/tester.png, ' +
    'sprites/manager.png, sprites/manager.json, ' +
    'sprites/bug.png, ' +
    'sprites/customer.png, ' +
    'sprites/salesperson.png, ' +
    'sprites/stress_ball.png',
    function() {
      Q.compileSheets("sprites/manager.png", "sprites/manager.json");

      // Start the show
      Q.stageScene("mainMenu");

      // Turn on default keyboard controls
      Q.input.keyboardControls();
  });
});

