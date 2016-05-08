
var int = setInterval(function(){ 
    update();
    draw();
    
},1000/30);

function update() {
    switch(state){
        case 0: options = ["I","Cats","Johnatan"]; break;
        case 1: options = [" love"," are","'s"]; break;
        case 2: options = [" cookies"," awesome!"," mom"]; break;
        case 3: var stop = false; if(!stop){ getScore(); stop = true;}; break;
    }
}
function draw() {
        ctx.clearRect(0,0,width,height);
        ctx.font = "18px Ariel";
        ctx.fillStyle = "#000";
    
        if(state<3){
            var Yspace = 0;
    
        for(i=0; i<options.length; i++){
            if(correntInput.index===i){
                ctx.save();
                ctx.fillStyle = "red";
                ctx.fillText(options[i], 50, 50 + Yspace);
                ctx.restore();
            }else{
                ctx.fillText(options[i], 50, 50 + Yspace);
            }
            whiteSpace += options[i].length * 18;
            Yspace += 20;
        }
    
         var whiteSpace = 0;
         for(i=0; i<answer.length; i++){
                ctx.fillText(answer[i].value, 350 + whiteSpace,350);
                whiteSpace += answer[i].value.length * 18;
            }
        
        }else{
            ctx.fillText(score, width/2 - score.length * 10, height/2 - score.length * 10);
        }
        
}


document.addEventListener("keyup", function(e) {
    if(e.keyCode === 38) { //Up
        if(correntInput.index > 0) {
            correntInput.index -= 1;
        }
        else {
            correntInput.index = options.length - 1;
        }
    }
    if(e.keyCode === 40) { //Down
        if(correntInput.index < options.length - 1) {
            correntInput.index++;
        }
        else {
            correntInput.index = 0;
        }
    }
    if(e.keyCode === 32) { //Space
        correntInput.value = options[correntInput.index];
        answer.push(new input(correntInput.value, correntInput.index));
        state++;
        console.log(correntInput.index);
    }
});