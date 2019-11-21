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

    findWhichPlayer(key, oldPlace, newPlace) {
        let player
        if (this.player1.directions[key]) {
            player = this.player1    
        } else if (this.player2.directions[key]) {
            player = this.player2
        }
        oldPlace.push(player.rowNum, player.colNum)
        this.getDirection(player.directions[key], oldPlace, newPlace)
        return player
    }
    getDirection(key, oldPlace, newPlace) {
        if (key === 'up') {
            newPlace.push(oldPlace[0] - 1, oldPlace[1])
        } else if (key === 'down') {
            newPlace.push(oldPlace[0] + 1, oldPlace[1])
        } else if (key === 'left') {
            newPlace.push(oldPlace[0], oldPlace[1] - 1)
        } else if (key === 'right') {
            newPlace.push(oldPlace[0], oldPlace[1] + 1)
        }
    }
    updateBoard(oldPlace, newPlace, player) {
        let square = this.matrix[newPlace[0]][newPlace[1]]
        if (square && square !== 'w') {
            if (square === 'c') {
                player.score += 10
            }
            this.alter(oldPlace[0], oldPlace[1], '.')
            this.alter(newPlace[0], newPlace[1], player.id)
            player.rowNum = newPlace[0]
            player.colNum = newPlace[1]
        }
    }
    movePlayer(key) {
        let oldPlace = []
        let newPlace = []
        let player = this.findWhichPlayer(key, oldPlace, newPlace)
        this.updateBoard(oldPlace, newPlace, player)
    }
}

// let rush = new GoldRush()
// rush.loadBoard(5)
// rush.movePlayer(74)
// rush.movePlayer(73)
// rush.print()
// console.log(rush.player2)