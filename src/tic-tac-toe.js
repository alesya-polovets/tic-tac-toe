class TicTacToe {
    constructor() {
        this.playerSymbol = 'x';
        this.gameGrid = [
            [null,null,null],
            [null,null,null],
            [null,null,null]
        ];
    }

    getCurrentPlayerSymbol() {
        return this.playerSymbol;
    }

    nextTurn(rowIndex, colIndex) {
        if (this.gameGrid[rowIndex][colIndex] === null) {
            this.gameGrid[rowIndex][colIndex] = this.playerSymbol;

            if (this.playerSymbol == 'o'){
                this.playerSymbol = 'x';
            } else {
                this.playerSymbol = 'o';
            }
        }
        return this;
    }

    isFinished() {
        if (this.getWinner() || this.noMoreTurns()) return true;
        else return false;
    }

    getWinner() {
        let i = 0;
        for (let i = 0; i < 3; i++){
            if (this.gameGrid[0][i] === this.gameGrid[1][i] && 
                this.gameGrid[0][i] === this.gameGrid[2][i]) {
                return this.gameGrid[0][i];
            } 

            if (this.gameGrid[i][0] === this.gameGrid[i][1] && 
                this.gameGrid[i][0] === this.gameGrid[i][2]) {
                return this.gameGrid[i][0];
            }
        }

        if (this.gameGrid[0][0] === this.gameGrid[1][1] && this.gameGrid[0][0] === this.gameGrid[2][2]) {
            return this.gameGrid[0][0];
        }

        if (this.gameGrid[2][0] === this.gameGrid[1][1] && this.gameGrid[2][0] === this.gameGrid[0][2]) {
            return this.gameGrid[2][0];
        }
        return null;
    }

    noMoreTurns() {
        for (let i = 0; i < 3; i++){
            for (let j = 0; j < 3; j++){
                if (this.gameGrid[j][i] === null) {return false;}
            }
        }
        return true;
    }

    isDraw() {
        if(this.noMoreTurns() && !this.getWinner()){
             return true;
        } else {
            return false;
        }
    }

    getFieldValue(rowIndex, colIndex) {
        return this.gameGrid[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;