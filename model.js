var MODEL = {

  board: [[],[]],

  init: function() {
    this.buildBoard(height, width);

  },

  buildBoard: function(height, width) {
    for (var i = 0; i < width; i++) {
      MODEL.board.push([])
      for (var j = 0; j < height; j++) {
        MODEL.board[i].push(null);
      }
    }
  },

}
