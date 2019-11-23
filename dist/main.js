const renderer = new Renderer
const goldRush = new GoldRush

let size 

Handlebars.registerHelper('if_eq', function(a, b, opts) {
    if (a == b) {
        return opts.fn(this);
    } else {
        return opts.inverse(this);
    }
})

const loadPage = function(size) {
    goldRush.loadBoard(size)
    $(".winning-score").html(goldRush.winningScore)
    renderer.renderBoard(goldRush.matrix)
}

$(".new-game").on("click", function() {
    size = $("#size").val()
    loadPage(size)
})

$(document).keydown(function(event) {
    goldRush.movePlayer(event.which)
    renderer.renderBoard(goldRush.matrix)
    renderer.renderScores(goldRush.player1, goldRush.player2)
    let winner
    if (goldRush.player1.winner) {
        winner = 1
    } else if (goldRush.player2.winner) {
        winner = 2
    }
    if (winner) {
        let playAgain = confirm(`Player ${winner} wins! Want to play again?`)
        if (playAgain) {
            goldRush.resetGame(size)
            $(".winning-score").html(goldRush.winningScore)
            renderer.renderBoard(goldRush.matrix)
        }
    }
})

loadPage(5)