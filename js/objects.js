//debuge for mobile
var debug = document.getElementById("debug");

/////////////////////////////////////////////////
// game area setting
var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d"),
    width = canvas.width,
    height = canvas.height,
    mouseX = 0,
    mouseY = 0;

/////////////////////////////////////////////////
// main game varibals
var keys = [],
    state = 0,
    onPlay = false,
    stateIndex = 0,
    score = 0,
    phase = 0,
    level = 0;

////////////////////////////////////////////////
//input constractur
function input (value, index, combo)
{
    this.value = value;
    this.index = index;
    this.combo = combo;
    this.clear = function()
    {
        this.value = null;
        this.index = null;
        this.combo = [];
    }
}

//input objects
var options = [];
    currentInput = new input("???", null, []);
    answer = [];

////////////////////////////////////////////////
//expressions button constractur
function exButton(value, sprite,x,y)
{
    this.onSelf = false;
    this.value = value;
    this.sprite = sprite;
    this.x = x;
    this.y = y;
    this.width = 100;
    this.height = 70;
    this.draw = function()
    {
        ctx.drawImage(this.sprite,this.x, this.y);
    }
    this.addInput = function()
    {
        currentInput.combo.push(this.value);
    }
}

//expressions buttons
var O = new exButton(1, o, 175, 280),
    E = new exButton(2, e, 255, 395),
    A = new exButton(3, a, 395, 500),
    L = new exButton(4, l, 550, 540),
    T = new exButton(5, t, 690, 495),
    F = new exButton(6, f, 810, 405),
    M = new exButton(7, m, 910, 290);

//expression button list    
var expressions = [O,E,A,L,T,F,M];

//////////////////////////////////////////////
var patient = {
  
    life: 100,
    index: 0,
    timer: setInterval(function()
    {
           if(patient.index > 10)
           {
               patient.life -= 20;
               patient.index = 0;
           }
           else
           {
               patient.index++;
           }
    },1000)
};
