function MultiplicationTable(number){
    for (i=1;i<10;i++) {
        console.log(i*number);
    }
}

var shape = {
    type:"triangle",
    getType: function () {
        console.log(this.type);
    }
}
class Triangle{
    constructor(a,b,c){
        Object.assign(this.__proto__,{...shape});
        this.getPerimeter = function(){
            return (a + b + c);
        }
    }
}

t = new Triangle(1,2,3);
Triangle.prototype = shape;

console.log(Object.getOwnPropertyNames(t));

Array.prototype.shuffle = function () {
    let currentIndex = this.length,  randomIndex;

    while (currentIndex != 0) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [this[currentIndex], this[randomIndex]] = [
        this[randomIndex], this[currentIndex]];
    }
  
    console.log(this);
}
