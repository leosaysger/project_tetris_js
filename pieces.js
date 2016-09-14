var PIECES = {
  buildSquare: function(col) {
    if(col > MODEL.WIDTH - 2) { col = MODEL.WIDTH - 2}
    MODEL.board[3][col]  = new Block(3, col)
    MODEL.board[3][col + 1] = new Block(3, col + 1)
    MODEL.board[4][col] = new Block(4, col)
    MODEL.board[4][col + 1] = new Block(4, col + 1)
  }



}