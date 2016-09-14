function Block(row, col, active) {
  this.row = row
  this.col = col
  this.active = active || true
}


var MODEL = {
  WIDTH: 10,

  HEIGHT: 24,

  init: function() {
    this.board = this.buildBoard();
    this.currentPiece = null;
  },

  buildBoard: function() {
    var board = [];
    for (var i = 0; i < MODEL.HEIGHT; i++) {
      board.push([])
      for (var j = 0; j < MODEL.WIDTH; j++) {
        board[i].push(null);
      }
    }
    return board
  },

  addPiece: function() {
    var col = this.getRandomColumn();

    PIECES.buildSquare(col);
    //MODEL.board[4][col] = new Block(4, col)
    currentPiece = "single";
  },

  getRandomColumn: function() {
    return Math.floor(Math.random() * MODEL.WIDTH)
  },

  hasActivePiece: function() {
    var active = false

    this.eachCell(function(cell) {
      if (cell && cell.active) {
        active = true;
      }
    })
    return active
  },

  checkNextRow: function() {
    for (var i = MODEL.HEIGHT - 1; i >= 0; i--) {
      for (var j = MODEL.WIDTH - 1; j >= 0; j--) {

        var cell = MODEL.board[i][j]

        if (cell && cell.active) {
          if (!MODEL.board[i + 1] || (MODEL.board[i + 1][j] && !MODEL.board[i + 1][j].active) ) {
            MODEL.freezeBlocks();
          }
        }
      }
    }
  },

  freezeBlocks: function() {
    MODEL.eachCell(function(cell) {
      if (cell && cell.active) {
        cell.active = false;
      }
    });
  },

  addBlankRow: function() {
    var arr = []
    for(var i = 0; i < MODEL.WIDTH; i++) {
      arr.push(null);
    }
    MODEL.board.unshift(arr);
  },

  checkFullRow: function() {
    var board = MODEL.board;
    for (var i = 0; i < board.length; i++) {
      if (board[i].every(function(element){ return !!element;})) {
          board.splice(i, 1);
          MODEL.addBlankRow();
      };
    }
  },

  canMove: function(changeCol) {
    if(changeCol === 0) { return true }
    var freeSpace = true
    MODEL.eachCell(function(cell, row, col) {
      if (cell && cell.active) {
        if(MODEL.board[row][col + changeCol] && !MODEL.board[row][col + changeCol].active) {
          freeSpace = false
        }
      }
    });

    return freeSpace
  },

  moveBlocks: function(direction) {
    var direction = direction || "down"
    var newBoard = MODEL.buildBoard()
    var changeRow = 0;
    var changeCol = 0;

    if (direction === "down") { changeRow = 1 }
    else if (direction === "left") { changeCol = -1 }
    else if (direction === "right") { changeCol = 1 }

    MODEL.checkNextRow();

    if(!MODEL.canMove(changeCol)) { return }

    MODEL.eachCell(function(cell, row, col) {
      if (cell && cell.active) {


        newBoard[row + changeRow][col + changeCol] = cell;
        cell.row = row + changeRow;
        cell.col = col + changeCol;
      } else if (cell) {
        newBoard[row][col] = cell;
        cell.row = row;
        cell.col = col;
      }
    });
    MODEL.board = newBoard
  },

  rotate: function() {
// rotate the active blocks
  },

  keyListener: function(keypress) {
    switch (keypress) {
      case 37: // left
        MODEL.moveBlocks("left");
        break;

      case 38: // up
        MODEL.rotate();
        break;

      case 39: // right
        MODEL.moveBlocks("right");
        break;

      case 40: // down
        MODEL.moveBlocks("down");
        break;
      case 32: //space
        // MODEL.instantDown();
        // break
      default:
        return; // exit this handler for other keys
    }
  },

  eachCell: function(func) {
    var cells = []
    for (var row in MODEL.board) {
      for (var block in MODEL.board[row]) {
        func(MODEL.board[row][block], parseInt(row), parseInt(block))
      }
    }
  }

}
