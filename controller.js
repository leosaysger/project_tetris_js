var CONTROLLER = {

  init: function() {
    MODEL.init();
    CONTROLLER.gameLoop();
    VIEW.setEventListeners();
  },

  gameLoop: function() {
    setInterval(function() {
      MODEL.moveBlocks();
      MODEL.checkFullRow();
      CONTROLLER.checkActivePiece();
      VIEW.render(MODEL.board);
    }, 500)

  },

  checkActivePiece: function() {
    if (!MODEL.hasActivePiece()) {
      MODEL.addPiece();
    }

  },


  keyListener: function(keypress) {
    MODEL.keyListener(keypress);
  }


}

$(document).ready(CONTROLLER.init)
