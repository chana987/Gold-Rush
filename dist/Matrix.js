class Matrix {
    constructor(rowNum, colNum) {
        this.rowNum = rowNum
        this.colNum = colNum
        this.matrix = this.generateMatrix(this.rowNum, this.colNum)
    }
    generateMatrix(rowNum, colNum) {
        let matrix = []
        let counter = 1
        for (let r = 0; r < rowNum; r++) {
            matrix.push([])
            for (let c = 0; c < colNum; c++) {
                matrix[r].push(counter++)
            }
        }
        return matrix
    }
    get(rowNum, colNum) {
        return this.matrix[rowNum][colNum]
    }
    print() {
        for (let r of this.matrix) {
            let line = ''
            for (let c of r) {
                line += c + '\t'
            }
            console.log(line)
        }
    }
    getRow(rowNum) {
        let line = []
        for (let c of this.matrix[rowNum]) {
            line.push(c)
        }
        return line
    }
    getColumn(colNum) {
        let line = []
        for (let r of this.matrix) {
            line.push(r[colNum])
        }
        return line
    }
    alter(rowNum, colNum, newValue) {
        this.matrix[rowNum][colNum] = newValue
    }
    findCoordinate(value) {
        let colNum
        let rowNum
        for (let r in this.matrix) {
            for (let c in this.matrix[r]) {
                if (this.matrix[r][c] === value) {
                    colNum = Number(c)
                    rowNum = Number(r)
                }
            }
        }
        return {x: colNum, y: rowNum}
    }
}

