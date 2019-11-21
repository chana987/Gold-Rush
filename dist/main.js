const renderer = new Renderer
const goldRush = new GoldRush

Handlebars.registerHelper('if_eq', function(a, b, opts) {
    if (a == b) {
        return opts.fn(this);
    } else {
        return opts.inverse(this);
    }
})

const loadPage = function() {
    goldRush.loadBoard(5)
    renderer.renderBoard(goldRush.matrix)
}
loadPage()