const PaintCan = function(litres){
    this.litres = litres;
};

PaintCan.prototype.emptyCan = function(){
    this.litres = 0
};

PaintCan.prototype.subtractLitres = function(){
    this.litres -= 1;
};


module.exports = PaintCan;