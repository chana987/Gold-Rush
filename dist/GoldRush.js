// const Matrix = require('./Matrix')

class GoldRush extends Matrix {
    constructor() {
        super()
        this.matrix = []
        this.player1 = {
            id: 1, 
            rowNum: 0, 
            colNum: 0, 
            directions: {
                87: 'up',
                83: 'down',
                65: 'left',
                68: 'right'
            },
            score: 0
        }
        this.player2 = {
            id: 2, 
            rowNum: 0, 
            colNum: 0, 
            directions: {
                73: 'up',
                75: 'down',
                74: 'left',
                76: 'right'
            },
            score: 0
        }
    }
    makeRandomCoins(size) {
        for (let i = 0; i < Math.round(Math.random() * 20) + 10; i++) {
            this.alter(Math.round(Math.random() * size), Math.round(Math.random() * size), 'c')
        }
    }
    loadBoard(size) {
        for (let i = 0; i < size; i++) {
            let row = []
            for (let j = 0; j < size; j++) {
                row.push('.')
            }
            this.matrix.push(row)
        }
        this.makeRandomCoins(size - 1)
        this.player2.rowNum = size - 1
        this.player2.colNum = size - 1
        this.alter(0, 0, 1)
        this.alter(size - 1, size - 1, 2)
    }

    getDirection(key, rowNum, colNum) {
        if (key === 'up') {
            rowNum -= rowNum
        } else if (key === 'down') {
            rowNum += rowNum
        } else if (key === 'left') {
            colNum -= colNum
        } else if (key === 'right') {
            colNum += colNum
        }
    }
    updateBoard(rowNum, colNum, player) {
        if (rowNum < 0 || rowNum >= this.matrix.length || colNum < 0 || colNum >= this.matrix[0].length || this.matrix[rowNum][colNum] == '1' || this.matrix[rowNum][colNum] == '2' || this.matrix[rowNum][colNum] === 'w') {
            return
        }
        if (this.matrix[rowNum][colNum] === 'c') {
            player.score += 10
        }
        this.alter(oldPlace[0], oldPlace[1], '.')
        this.alter(rowNum, colNum, player.id)
        player.rowNum = rowNum
        player.colNum = colNum
    }
    movePlayer(key) {
        let rowNum
        let colNum
        if (this.player1.directions[key]) {
            rowNum = this.player1.rowNum
            colNum = this.player1.colNum
            this.getDirection(this.player1.directions[key], rowNum, colNum)
            this.updateBoard(rowNum, colNum, this.player1)
        } else if (this.player2.directions[key]) {
            rowNum = this.player2.rowNum
            colNum = this.player2.colNum
            this.getDirection(this.player2.directions[key], rowNum, colNum)
            this.updateBoard(rowNum, colNum, this.player2)
        } else { return }   
    }
}

// let rush = new GoldRush()
// rush.loadBoard(5)
// rush.movePlayer(74)
// rush.movePlayer(73)
// rush.print()
// console.log(rush.player2)