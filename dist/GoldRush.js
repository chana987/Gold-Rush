// const Matrix = require('./Matrix')

class GoldRush extends Matrix {
    constructor() {
        super()
        this.matrix = []
        this.coinCount
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
    makeRandomWalls(size) {
        for (let i = 0; i < Math.round(Math.random() * size) + (size * 2); i++) {
            this.alter(Math.round(Math.random() * size), Math.round(Math.random() * size), 'w')
        }
    }
    makeRandomCoins(size) {
        for (let i = 0; i < Math.round(Math.random() * (size * 4)) + (size * 2); i++) {
            this.alter(Math.round(Math.random() * size), Math.round(Math.random() * size), 'c')
        }
    }
    loadBoard(size) {
        this.matrix = []
        for (let i = 0; i < size; i++) {
            let row = []
            for (let j = 0; j < size; j++) {
                row.push('.')
            }
            this.matrix.push(row)
        }
        this.makeRandomWalls(size - 1)
        this.makeRandomCoins(size - 1)
        this.player2.rowNum = size - 1
        this.player2.colNum = size - 1
        this.alter(0, 0, 1)
        this.alter(size - 1, size - 1, 2)
    } 

    updateBoard(key, player) {
        let newRowNum
        let newColNum
        if (player.directions[key] === 'up') {
            newRowNum = player.rowNum -1
            newColNum = player.colNum
        } else if (player.directions[key] === 'down') {
            newRowNum = player.rowNum + 1
            newColNum = player.colNum
        } else if (player.directions[key] === 'left') {
            newRowNum = player.rowNum
            newColNum = player.colNum - 1
        } else if (player.directions[key] === 'right') {
            newRowNum = player.rowNum 
            newColNum = player.colNum + 1
        }
        if (newRowNum < 0 || newRowNum >= this.matrix.length || newColNum < 0 || newColNum >= this.matrix[0].length || this.matrix[newRowNum][newColNum] == '1' || this.matrix[newRowNum][newColNum] == '2' || this.matrix[newRowNum][newColNum] === 'w') {
            return
        }
        if (this.matrix[newRowNum][newColNum] === 'c') {
            player.score += 10
        }
        this.alter(player.rowNum, player.colNum, '.')
        this.alter(newRowNum, newColNum, player.id)
        player.rowNum = newRowNum
        player.colNum = newColNum
    }
    movePlayer(key) {
        if (this.player1.directions[key]) {
            this.updateBoard(key, this.player1)
        } else if (this.player2.directions[key]) {
            this.updateBoard(key, this.player2)
        } else { return }   
    }
}

// let rush = new GoldRush()
// rush.loadBoard(5)
// rush.movePlayer(74)
// rush.movePlayer(73)
// rush.print()
// console.log(rush.player2)