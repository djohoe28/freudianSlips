var int = setInterval(function(){ 
    update();
    draw();
},1000/30);

function update() {
    switch(state){
        case 0: options = [new input("I", 0, "133"), new input("Cats", 1, "34"), new input("Jonathan", 2, "2147")]; break;
        case 1: options = [new input(" love", 0, "133"), new input(" are", 1, "34"), new input("'s", 2, "2147")]; break;
        case 2: options = [new input(" cookies", 0, "133"), new input(" awesome", 1, "34"), new input(" mom", 2, "727")]; break;
        case 3: var stop = false; while(!stop){ getScore(); stop = true;}; break;
    }
}
function draw() {
        ctx.clearRect(0,0,width,height);
        ctx.font = "18px Ariel";
        ctx.fillStyle = "#000";
        ctx.fillText(mouseX + "," + mouseY,30 ,30);
 
        for(i=0;i<expressions.length;i++){
            expressions[i].draw();
        }
}


document.addEventListener("keyup", function(e) {
    if(e.keyCode === 38) { //Up
        if(currentInput.index > 0) {
            currentInput.index -= 1;
        }
        else {
            currentInput.index = options.length - 1;
        }
    }
    if(e.keyCode === 40) { //Down
        if(currentInput.index < options.length - 1) {
            currentInput.index++;
        }
        else {
            currentInput.index = 0;
        }
    }
    if(e.keyCode === 32) { //Space
        currentInput.value = options[currentInput.index];
        answer.push(new input(currentInput.value, currentInput.index));
        state++;
        console.log(currentInput.index);
    }
});

document.addEventListener("mousemove", function(e){
    
    var mousePos = getMousePos(canvas, e);
    mouseX = mousePos.x;
    mouseY = mousePos.y;
    
}, false);

