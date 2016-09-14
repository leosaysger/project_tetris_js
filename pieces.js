var PIECES = {
  buildSquare: function(col) {
    if (col > MODEL.WIDTH - 2) {
      col = MODEL.WIDTH - 2
    }
    MODEL.board[3][col] = new Block(3, col)
    MODEL.board[3][col + 1] = new Block(3, col + 1)
    MODEL.board[4][col] = new Block(4, col)
    MODEL.board[4][col + 1] = new Block(4, col + 1)
  },

  buildLine: function(col) {
    MODEL.board[1][col] = new Block(1, col);
    MODEL.board[2][col] = new Block(2, col);
    MODEL.board[3][col] = new Block(3, col);
    MODEL.board[4][col] = new Block(4, col);
  },

  buildT: function(col) {
    if (col > MODEL.WIDTH - 3) {
      col = MODEL.WIDTH - 3
    }
    MODEL.board[3][col+2] = new Block(3, col+2);
    MODEL.board[3][col] = new Block(3, col);
    MODEL.board[3][col+1] = new Block(3, col+1);
    MODEL.board[4][col+1] = new Block(4, col+1);
  },

  buildL: function(col) {
    if (col > MODEL.WIDTH - 2) {
      col = MODEL.WIDTH - 2
    }
    MODEL.board[2][col] = new Block(2, col);
    MODEL.board[3][col] = new Block(3, col);
    MODEL.board[4][col] = new Block(4, col);
    MODEL.board[4][col+1] = new Block(4, col+1);
  },

  buildJ: function(col) {
    if (col > MODEL.WIDTH - 2) {
      col = MODEL.WIDTH - 2
    }
    MODEL.board[2][col+1] = new Block(2, col+1);
    MODEL.board[3][col+1] = new Block(3, col+1);
    MODEL.board[4][col+1] = new Block(4, col+1);
    MODEL.board[4][col] = new Block(4, col);
  },

  buildS: function(col) {
    if (col > MODEL.WIDTH - 3) {
      col = MODEL.WIDTH - 3
    }
    MODEL.board[4][col] = new Block(4, col);
    MODEL.board[4][col+1] = new Block(4, col+1);
    MODEL.board[3][col+1] = new Block(3, col+1);
    MODEL.board[3][col+2] = new Block(3, col+2);
  },

  buildZ: function(col) {
    if (col > MODEL.WIDTH - 3) {
      col = MODEL.WIDTH - 3
    }
    MODEL.board[3][col] = new Block(3, col);
    MODEL.board[3][col+1] = new Block(3, col+1);
    MODEL.board[4][col+1] = new Block(4, col+1);
    MODEL.board[4][col+2] = new Block(4, col+2);
  },

  RandomPiece: function(col) {

    var shapes =(["buildSquare", "buildZ", "buildS", "buildL", "buildJ", "buildLine", "buildT"]);
    var randNum = Math.floor(Math.random()*shapes.length);
    PIECES[shapes[randNum]](col);
  }


}
