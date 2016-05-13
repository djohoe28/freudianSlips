var game = setInterval(function(){ 
    update();
    draw();
},1000/30);
////////////////////////////////////

function update() 
{
    switch(state)
    {
        case 0: options = [new input("I", 0, "322"), new input("Cats", 1, "235"), new input("Jonathan", 2, "14334")]; break;
        case 1: options = [new input(" love", 0, "436"), new input(" are", 1, "34"), new input("'s", 2, "55")]; break;
        case 2: options = [new input(" cookies", 0, "2122"), new input(" awesome", 1, "1617"), new input(" mom", 2, "616")]; break;
        case 3: getScore(); break;
    }
    
    for(i=0;i<options.length;i++)
    {
        if(currentInput.combo===options[i].combo)
        {
            
        }

    }
    
}
////////////////////////////////////

function draw() 
{
        ///canvas draw set
        ctx.clearRect(0,0,width,height);
        ctx.font = "18px Ariel";
        ctx.fillStyle = "#000";
        //////////////////////////////////////////
        //debuggin
        ctx.fillText(mouseX + "," + mouseY,30 ,30);
        button.draw();
        ///////////////////////////////////////////
        //draw expressions
        for(i=0;i<expressions.length;i++)
        {
            ctx.fillText(expressions[i].value,
                         expressions[i].x + 35,
                         expressions[i].y - 20);
            
            expressions[i].draw();
        }
        ///////////////////////////////////////////
        //draw options
        var whiteSpace = 0,
            whiteSpace2 = 0;

        for(i=0;i<options.length;i++)
        {
           ctx.fillText(options[i].value, 450 + whiteSpace, 215);
           ctx.fillText(options[i].combo, 450 + whiteSpace2, 315);
           whiteSpace += 100;
           whiteSpace2 += 100;
        }
        ///////////////////////////////////////////
        //draw answer
        whiteSpace = 0;
        for(i=0;i<answer.length;i++)
        {
            ctx.fillText(answer[i].value, 450 + whiteSpace, 50);
            whiteSpace += answer[i].value.length * 10;
        }
}

//////////////////////////////////////////////////
//keyboard events
document.addEventListener("keyup", function(e) 
{
    if(e.keyCode === 32) 
    { //Space
        currentInput.clear();
    }
});

////////////////////////////////////////////////////
//mouse events

//mouse move
canvas.addEventListener("mousemove", function(e)
{
// update mouse varibals
var mousePos = getMousePos(canvas, e);
    mouseX = mousePos.x;
    mouseY = mousePos.y;
    
}, false);

//mouse click
canvas.addEventListener("click",function(){
    if(onSelfCheck(button))
    {
        UpdateAnswer();
        state++;   
    }
    else
    {
        for(i=0;i<expressions.length;i++)
        {
            if(onSelfCheck(expressions[i]))
            {
                expressions[i].addInput();
                var debage = document.getElementById("debage");
                debage.innerHTML = currentInput.combo;
            }
        }
    }
});

//tap
$('canvas').on('tap',function()
{ 
    if(onSelfCheck(button))
    {
        UpdateAnswer();
        state++;   
    }
    else
    {
        // update mouse varibals
        var mousePos = getMousePos(canvas, e);
            mouseX = mousePos.x;
            mouseY = mousePos.y;

        //update currentInput 
        for(i=0;i<expressions.length;i++)
        {
            if(onSelfCheck(expressions[i]))
            {
                expressions[i].addInput();
                var debage = document.getElementById("debage");
                debage.innerHTML = currentInput.combo;
            }
        }
    }
});

