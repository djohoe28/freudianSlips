//mouse position update
function getMousePos(canvas, e) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
}};
////////////////////////////////////////////////
//collision Check with mouse
function onSelfCheck(object)
{ 
   if(mouseX < object.x + object.width
      && object.x < mouseX 
      && mouseY < object.y + object.height 
      && object.y < mouseY)
   { 
       return true;
   }
    else
   {
       return false;
   }
};
///////////////////////////////////////////////
//final update score
function getScore()
{
    var mistakes = 0;
    
    for(i=0; i<answer.length; i++)
    {
        if(answer[i-1]!== undefined)
        {
            if(answer[i-1].index!==answer[i].index)
            {
                mistakes++;
        }
    }
}
    switch(mistakes)
    {
        case 0: score = "perfect!"; break;
        case options.length - 1: score = "well... you'r suck"; break;
        default: score = "good enough"; break;
    }

};
////////////////////////////////////////////////
// when pushing spacebar
function UpdateAnswer()
{    
    for(i=0;i<options.length;i++)
    {
        if(options[i].combo===currentInput.combo)
        {
            currentInput.value = options[i].value;
        }
    }
    
    answer.push(
    new input (currentInput.value,currentInput.index,currentInput.combo)         
    );
    
    for(i=0;i<answer.length;i++)
    {
        console.log(answer[i].value);
    }
    
    currentInput.clear();
};
