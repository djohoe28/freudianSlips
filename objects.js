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

var O = new exButton("1", o, 175, 280),
    E = new exButton("2", e, 255, 395),
    A = new exButton("3", a, 395, 500),
    L = new exButton("4", l, 550, 540),
    T = new exButton("5", t, 690, 495),
    F = new exButton("6", f, 810, 405),
    M = new exButton("7", m, 910, 290);
    

var expressions = [O,E,A,L,T,F,M];

console.log("xA = " + A.x + ", yA = " + A.y);
console.log("xL = " + L.x + ", yL = " + L.y);