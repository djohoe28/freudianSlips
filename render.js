var int = setInterval(function(){ 
    update();
    draw();
    
},1000/30);

function update() {
    
}
function draw() {
    
    var textWidth = 0;
    ctx.clearRect(0,0,width,height);
    
    for(i=0;i<options.length;i++){
        ctx.fillText(options[i] + " ",100 + textWidth,100);
        textWidth += 10;
    }
    
    textWidth = 0;
    
    for(i = 0; i < currentInput.length; i++) {
        ctx.fillText(currentInput[i] + " ", width/2 + textWidth, height/2);
        textWidth += 10;
    }
}


document.addEventListener("keyUp", function(e){
   
    currentInput.push(e.keyCode);
    
});
