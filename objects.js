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
var O = new exButton("1", o, 175, 280),
    E = new exButton("2", e, 260, 400),
    A = new exButton("3", a, width*(0.5/7+(2*5/42)), getPHeight(width*(1/7+(2*5/42)))),
    L = new exButton("4", l, width*(0.5/7+(3*5/42)), getPHeight(width*(1/7+(3*5/42)))),
    T = new exButton("5", t, 690, 495),
    F = new exButton("6", f, 800, 400),
    M = new exButton("7", m, 910, 290);
    

var expressions = [O,E,A,L,T,F,M];

