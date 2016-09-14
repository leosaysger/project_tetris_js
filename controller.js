var CONTROLLER = {

  init: function(){
    MODEL.init();

    if (!MODEL.hasActivePiece()){
      MODEL.addPiece();

    }

    setInterval(function() {

      VIEW.render(MODEL.board);

    }, 1000)
  }

}

$(document).ready(CONTROLLER.init)
