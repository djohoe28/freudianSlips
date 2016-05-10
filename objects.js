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

var A = new exButton("1", a, 0*width/7, 0*height / 4),
    O = new exButton("2", o, 6*width/7, 0*height / 4),
    E = new exButton("3", e, 1*width/7, 1*height / 4),
    T = new exButton("4", t, 5*width/7, 1*height / 4),
    L = new exButton("5", l, 2*width/7, 2*height / 4),
    M = new exButton("6", m, 4*width/7, 2*height / 4),
    F = new exButton("7", f, 3*width/7, 3*height / 4);

var expressions = [A,O,E,T,L,M,F];

