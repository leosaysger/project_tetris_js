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
    MODEL.board[4][col] = new Block(4, col)
    currentPiece = "single";
  },

  getRandomColumn: function() {
    console.log("new block")
    return Math.floor(Math.random() * MODEL.WIDTH)
  },

  hasActivePiece: function() {
    this.eachCell(function(cell) {
      if (cell && cell.active) {
        return true;
      } else {
        return false;
      }

    });
  },

  checkNextRow: function() {
    for (var i = MODEL.HEIGHT; i >= 0; i--) {
      for (var j = MODEL.WIDTH; j >= 0; j--) {
        if (MODEL.board[i][j].active) {
          if (MODEL.board[i + 1][j] !== null) {
            MODEL.freezeBlocks();
          }
        }
      }
    }
  },

  freezeBlocks: function() {
    eachCell(function(cell) {
      if (cell && cell.active) {
        cell.active = false;
      }
    });
  },

  moveBlocks: function() {
    MODEL.eachCell(function(cell) {
      if (cell && cell.active && cell.row < 23) {
        var row = cell.row;
        var col = cell.col;
        cell.row++;
        MODEL.board[row][col] = null
        MODEL.board[cell.row][col] = cell;
      }
    });
  },

  eachCell: function(func) {
    var cells = []
    for (var row in MODEL.board) {
      for (var block in MODEL.board[row]) {
        func(MODEL.board[row][block])
      }
    }
  }

}
