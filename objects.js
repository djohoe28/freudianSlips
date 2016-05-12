var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d"),
    width = canvas.width,
    height = canvas.height;

var keys = [],
    state = 0;
    score = "none";


function input (value, index, combo) {
    this.value = value;
    this.index = index;
    this.combo = combo;
}

var options = [];
    currentInput = new input(null, -1, -1);
    answer = [];


function exButton(value, sprite,x,y){
    this.onSelf = false;
    this.value = value;
    this.sprite = sprite;
    this.x = x;
    this.y = y;
    
    this.draw = function(){
        ctx.drawImage(this.sprite,this.x, this.y);
    }
    this.addInput = function(){
            currentInput.combo += this.value;
    }
}
function getPHeight(num){
    return -0.00172266*num*num + 2.205*num - 165.6;
}
var O = new exButton("2", o, 160, 250),
    E = new exButton("3", e, width*(0.5/7+(1*5/42)), getPHeight(width*(1/7+(1*5/42)))),
    A = new exButton("1", a, width*(0.5/7+(2*5/42)), getPHeight(width*(1/7+(2*5/42)))),
    L = new exButton("5", l, width*(0.5/7+(3*5/42)), getPHeight(width*(1/7+(3*5/42)))),
    T = new exButton("4", t, width*(0.5/7+(4*5/42)), getPHeight(width*(1/7+(4*5/42)))),
    F = new exButton("7", f, width*(0.5/7+(5*5/42)), getPHeight(width*(1/7+(5*5/42)))),
    M = new exButton("6", m, width*(0.5/7+(6*5/42)), 250);
    

var expressions = [O,E,A,L,T,F,M];

