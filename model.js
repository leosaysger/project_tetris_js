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
    return Math.floor(Math.random() * MODEL.WIDTH)
  },

  hasActivePiece: function() {
    var active = false

    this.eachCell(function(cell) {
      if (cell && cell.active) {
        console.log("active piece")
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
          if (!MODEL.board[i + 1] || MODEL.board[i + 1][j] !== null) {
            MODEL.freezeBlocks();
          }
        }
      }
    }
  },

  freezeBlocks: function() {
    MODEL.eachCell(function(cell) {
      if (cell && cell.active) {
        console.log("freezing")
        cell.active = false;
      }
    });
  },

  moveBlocks: function() {
    var newBoard = MODEL.buildBoard()
    MODEL.checkNextRow();
    MODEL.eachCell(function(cell) {
      if (cell && cell.active && cell.row < 23) {

        newBoard[cell.row + 1][cell.col] = cell;
        cell.row++
      } else if (cell) {
        newBoard[cell.row][cell.col] = cell;
      }
    });
    MODEL.board = newBoard
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
