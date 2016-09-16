var CONTROLLER = {

  clock: 0,
  speed: 10,
  level: 1,

  init: function() {
    MODEL.init();
    CONTROLLER.gameLoop();
    VIEW.setEventListeners();
  },

  gameLoop: function() {
    setInterval(function() {
      if (CONTROLLER.clock % CONTROLLER.speed === 0) {
        MODEL.moveBlocks();
        if (Math.floor(MODEL.clearedRows / 5) >= CONTROLLER.level) {
          CONTROLLER.increaseSpeed()
        }
      }
      MODEL.checkFullRow();
      CONTROLLER.checkActivePiece();
      VIEW.render(MODEL.board, MODEL.score, CONTROLLER.level);
      CONTROLLER.clock++;
    }, 50)

  },

  checkActivePiece: function() {
    if (!MODEL.hasActivePiece()) {
      MODEL.addPiece();
    }
  },

  increaseSpeed: function() {
    if (CONTROLLER.speed === 1) {
      return
    }
    CONTROLLER.speed--;
    CONTROLLER.level++;
  },


  keyListener: function(keypress) {
    MODEL.keyListener(keypress);
  }


}

$(document).ready(CONTROLLER.init)
