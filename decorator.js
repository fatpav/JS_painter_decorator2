const Decorator = function(stock){
    this.stock = []
}


Decorator.prototype.getCans = function(paintcan){
    this.stock.push(paintcan)

};

// Decorator.prototype.totalLitresOfPaint = function(paintcan){
//     let total;
//     for (let paint in paintcan){
//         total += paint.litres
//     }
// }

module.exports = Decorator;