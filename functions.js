function getMousePos(canvas, e) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
}};

function onSelfCheck(object){
   if
   (mouseX < object.maxX + 250 && object.minX - 250 < mouseX && mouseY < object.maxY + 250 && object.minY - 250 < mouseY)
   {
            object.status = 0.5;
   }
    else
   {
            object.status = 0;
   }
   if(mouseX < object.maxX && object.minX < mouseX && mouseY < object.maxY && object.minY < mouseY){ 
        object.status = 1;
   }
   };

function getScore(){
    var mistakes = 0;
    for(i=0; i<answer.length; i++){
        if(answer[i-1]!== undefined){
            if(answer[i-1].index!==answer[i].index){
                mistakes++;
            }
        }
    };
    
    switch(mistakes){
        case 0: score = "perfect!"; break;
        case options.length - 1: score = "well... you'r suck"; break;
        default: score = "good enough"; break;
    }

}

