class Renderer {
    renderBoard(matrix) {
        $(".board").empty()
        const source = $("#template-board").html()
        const template = Handlebars.compile(source)
        const newHTML = template({matrix})
        $(".board").append(newHTML)
    }    
    renderScores(player1, player2) {
        $(".score1").html(player1.score)
        $(".score2").html(player2.score)
    }
}