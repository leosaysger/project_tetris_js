var CONTROLLER = {

  init: function() {
    MODEL.init();
    CONTROLLER.gameLoop();
  },

  gameLoop: function() {
    setInterval(function() {
      MODEL.moveBlocks();
      CONTROLLER.checkActivePiece();
      VIEW.render(MODEL.board);
    }, 1000)

  },

  checkActivePiece: function() {
    if (!MODEL.hasActivePiece()) {
      MODEL.addPiece();
    }

  }

}

$(document).ready(CONTROLLER.init)
