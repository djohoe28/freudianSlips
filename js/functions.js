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
    var prevScore = score;
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
        case 0: score = 20; break;
        case options.length - 1: score = 0; break;
        default: score = 10; break;
    }
    if(prevScore !== score) {
        patient.life += score;
    }
    phase++;
    prevScore = score;
};

////////////////////////////////////////////////
// when pushing spacebar
function UpdateAnswer()
{  
    for(i=0;i<options.length;i++)
    { 
            if(options[i].combo.join()===currentInput.combo.join())
            { 
                currentInput.value = options[i].value;
                break;
            }
            else
            {
                currentInput.value  = "???";   
            }
    }
    
    answer.push(
    new input (currentInput.value, currentInput.index, currentInput.combo)         
    );
    
    currentInput.clear();
};

/////////////////////////////////////////////////
//options update
function phase0 ()
{
    switch(phase)
    {
        case 0: switch(state)
        {
            case 0: options = [new input("I", 0, [3,2,2]), new input("Cats", 1, [2,3,5]), new input("Jonathan", 2, [1,4,3,3,4])]; break;
            case 1: options = [new input(" love", 0, [1,3,6]), new input(" are", 1, [4,3]), new input("'s", 2, [5,5])]; break;
            case 2: options = [new input(" cookies", 0, [2,1,2,2]), new input(" awesome", 1, [1,6,5,6]), new input(" mom", 2, [6,1,6])]; break;
            case 3: options = []; getScore(); state = 0; break;
        } break;
    }
}
///////////////////////////////////////////////
// bold the most cloesed answer
function realTimeUpdate(i)
{  
    
        for(j=0;j<options[i].combo.length; j++)
        {
            if(currentInput.combo[j]!=undefined)
            {
                if(options[i].combo[j]===currentInput.combo[j])
                {
                    //console.log("TWOO!");
                    return true;
                    break;
                }
                else
                    {
                        return false;
                    }
            }

        }// /**/
        return false;
    //}
}
