
function Cell(row, col) {
  this.row = row
  this.col = col
}

function Piece(coords, color) {
  this.cells = cells
  this.color = color
  this.active = active
}

var MODEL = {
  WIDTH: 10,

  HEIGHT: 24,


  init: function() {
    this.board = this.buildBoard();

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
    var col = getRandomColumn();
    MODEL.board[4][col] = new Piece([new Cell(3, col)])
  },

  getRandomColumn: function() {
    return Math.floor(Math.random() * MODEL.WIDTH)
  },

  hasActivePiece: function() {
    for (var row in MODEL.board) {
      for (var piece in MODEL.board[row]) {

        if(MODEL.board[row][piece].active) {
          return true
        }

      }
    }
    return false
  }
}
