var PIECES = {
  buildSquare: function(col) {
    if (col > MODEL.WIDTH - 2) {
      col = MODEL.WIDTH - 2
    }
    MODEL.board[3][col] = new Block(3, col, "yellow")
    MODEL.board[3][col + 1] = new Block(3, col + 1, "yellow")
    MODEL.board[4][col] = new Block(4, col, "yellow")
    MODEL.board[4][col + 1] = new Block(4, col + 1, "yellow")
    MODEL.currentPiece = "square"
  },

  buildLine: function(col) {
    MODEL.board[1][col] = new Block(1, col, "#00e5ee");
    MODEL.board[2][col] = new Block(2, col, "#00e5ee");
    MODEL.board[3][col] = new Block(3, col, "#00e5ee");
    MODEL.board[4][col] = new Block(4, col, "#00e5ee");
    MODEL.currentPiece = "line"
  },

  buildT: function(col) {
    if (col > MODEL.WIDTH - 3) {
      col = MODEL.WIDTH - 3
    }
    MODEL.board[3][col + 2] = new Block(3, col + 2, "purple");
    MODEL.board[3][col] = new Block(3, col, "purple");
    MODEL.board[3][col + 1] = new Block(3, col + 1, "purple");
    MODEL.board[4][col + 1] = new Block(4, col + 1, "purple");
    MODEL.currentPiece = "t"
  },

  buildL: function(col) {
    if (col > MODEL.WIDTH - 2) {
      col = MODEL.WIDTH - 2
    }
    MODEL.board[2][col] = new Block(2, col, "blue");
    MODEL.board[3][col] = new Block(3, col, "blue");
    MODEL.board[4][col] = new Block(4, col, "blue");
    MODEL.board[4][col + 1] = new Block(4, col + 1, "blue");
    MODEL.currentPiece = "l"
  },

  buildJ: function(col) {
    if (col > MODEL.WIDTH - 2) {
      col = MODEL.WIDTH - 2
    }
    MODEL.board[2][col + 1] = new Block(2, col + 1, "orange");
    MODEL.board[3][col + 1] = new Block(3, col + 1, "orange");
    MODEL.board[4][col + 1] = new Block(4, col + 1, "orange");
    MODEL.board[4][col] = new Block(4, col, "orange");
    MODEL.currentPiece = "j"
  },

  buildS: function(col) {
    if (col > MODEL.WIDTH - 3) {
      col = MODEL.WIDTH - 3
    }
    MODEL.board[4][col] = new Block(4, col, "green");
    MODEL.board[4][col + 1] = new Block(4, col + 1, "green");
    MODEL.board[3][col + 1] = new Block(3, col + 1, "green");
    MODEL.board[3][col + 2] = new Block(3, col + 2, "green");
    MODEL.currentPiece = "s"
  },

  buildZ: function(col) {
    if (col > MODEL.WIDTH - 3) {
      col = MODEL.WIDTH - 3
    }
    MODEL.board[3][col] = new Block(3, col, "magenta");
    MODEL.board[3][col + 1] = new Block(3, col + 1, "magenta");
    MODEL.board[4][col + 1] = new Block(4, col + 1, "magenta");
    MODEL.board[4][col + 2] = new Block(4, col + 2, "magenta");
    MODEL.currentPiece = "z"
  },


  RandomPiece: function(col) {

    var shapes = (["buildSquare", "buildZ", "buildS", "buildL", "buildJ", "buildLine", "buildT"]);
    var randNum = Math.floor(Math.random() * shapes.length);
    PIECES[shapes[randNum]](col);
    // PIECES["buildL"](col);
  },

  gatherActivePieces: function() {
    var pieces = []
    MODEL.eachCell(function(cell) {
      if (cell && cell.active) {
        pieces.push(cell)
      }
    });
    return pieces
  },


  rotateLine: function() {
    var pieces = PIECES.gatherActivePieces()

    for (var i in pieces) {
      pieces[i].rotState++;
        if (pieces[i].rotState === 2) {
          pieces[i].rotState = 0
        }
    }

    switch (pieces[0].rotState) {
      // flat to standing
      case 0:
        pieces[0].row -= 2
        pieces[0].col += 2
        pieces[1].row -= 1
        pieces[1].col += 1
        pieces[3].row += 1
        pieces[3].col -= 1
        break;
      // standing to flat
      case 1:
        pieces[0].row += 2
        pieces[0].col -= 2
        pieces[1].row += 1
        pieces[1].col -= 1
        pieces[3].row -= 1
        pieces[3].col += 1
        break;
    }
  },

  rotateL: function() {
    var pieces = PIECES.gatherActivePieces()

    for (var i in pieces) {
      pieces[i].rotState++;
        if (pieces[i].rotState === 4) {
          pieces[i].rotState = 0
        }
    }

    switch (pieces[0].rotState) {
      // flat to standing
      case 0:
        pieces[0].row += 2
        pieces[1].row += 1
        pieces[1].col += 1
        pieces[3].row -= 1
        pieces[3].col -= 1
        break;
      // standing to flat
      case 1:
        pieces[0].row += 1
        pieces[0].col += 1
        pieces[2].row -= 1
        pieces[2].col -= 1
        pieces[3].col -= 2
        break;

      case 2:
        pieces[0].row -= 1
        pieces[0].col += 1
        pieces[2].row += 1
        pieces[2].col -= 1
        pieces[3].row -= 2
        break;

      case 3:
        pieces[0].col += 2
        pieces[1].row += 1
        pieces[1].col += 1
        pieces[3].row -= 1
        pieces[3].col -= 1
        break;
    }
  },
  rotateJ: function() {
    var pieces = PIECES.gatherActivePieces()

    for (var i in pieces) {
      pieces[i].rotState++;
        if (pieces[i].rotState === 2) {
          pieces[i].rotState = 0
        }
    }

    switch (pieces[0].rotState) {
      // flat to standing
      case 0:
        pieces[0].row -= 2
        pieces[0].col += 2
        pieces[1].row -= 1
        pieces[1].col += 1
        pieces[3].row += 1
        pieces[3].col -= 1
        break;
      // standing to flat
      case 1:
        pieces[0].row += 2
        pieces[0].col -= 2
        pieces[1].row += 1
        pieces[1].col -= 1
        pieces[3].row -= 1
        pieces[3].col += 1
        break;
    }
  },

}
