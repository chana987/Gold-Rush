const renderer = new Renderer
const goldRush = new GoldRush

Handlebars.registerHelper('if_eq', function(a, b, opts) {
    if (a == b) {
        return opts.fn(this);
    } else {
        return opts.inverse(this);
    }
})

const loadPage = function(size) {
    goldRush.loadBoard(size)
    renderer.renderBoard(goldRush.matrix)
}

$(".new-game").on("click", function() {
    let size = $("#size").val()
    loadPage(size)
})

$(document).keydown(function(event) {
    goldRush.movePlayer(event.which)
    renderer.renderBoard(goldRush.matrix)
    renderer.renderScores(goldRush.player1, goldRush.player2)
})

loadPage(10)