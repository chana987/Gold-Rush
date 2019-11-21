class Renderer {
    renderBoard(matrix) {
        $(".board").empty()
        const source = $("#template-board").html()
        const template = Handlebars.compile(source)
        const newHTML = template({matrix})
        $(".board").append(newHTML)
    }    
}