var game = setInterval(function(){ 
    update();
    draw();
},1000/30);

////////////////////////////////////
function update() 
{
        switch(phase)
        {
            case 0: phase0(); break;
            case 1: /*phase1();*/ break;
        }
    
        for(i=0;i<options.length;i++)
        {
            if(currentInput.combo.join()===options[i].combo.join())
            { 
                currentInput.index = options[i].index;
                UpdateAnswer();
                state++;
            }
        }
}
//////////////////////////////////////////////////

function draw() 
{
        ///canvas draw set
        ctx.clearRect(0,0,width,height);
        ctx.font = "18px Ariel";
        ctx.fillStyle = "#000";
    
        //////////////////////////////////////////
        //debuggin
        ctx.fillText(mouseX + "," + mouseY,30 ,30);
    
        //////////////////////////////////////////
        //draw life
        ctx.fillText("patient status: " + patient.life, 10, height - 10);
    
        //////////////////////////////////////////
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
           if(realTimeUpdate(i))
           {  //debugger;
               ctx.font = "32px Ariel Bold";
           }
           else
           {
               ctx.font = "18px Ariel";
           }
           /*if(options[i] !== undefined)
           {*/
            ctx.fillText(options[i].value, 450 + whiteSpace, 215);
            ctx.fillText(options[i].combo, 450 + whiteSpace2, 315);
           //}
            whiteSpace += 100;
           whiteSpace2 += 100;
        }
    
        ///////////////////////////////////////////
        //draw answer
        if(state!==3){
            whiteSpace = 0;
            for(i=0;i<answer.length;i++)
            {
                ctx.fillText(answer[i].value, 450 + whiteSpace, 50);
                whiteSpace += answer[i].value.length * 10;
            }
        }else{
            ctx.fillText(score,250,50);
        }
    
        ////////////////////////////////////////////      
}

//////////////////////////////////////////////////
//keyboard events
document.addEventListener("keyup", function(e) 
{
    if(e.keyCode === 32) 
    { //Space
        currentInput.clear();
        phase = 0;
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
canvas.addEventListener("click",function()
{ 
        for(i=0;i<expressions.length;i++)
        {
            if(onSelfCheck(expressions[i]))
            {
                expressions[i].addInput();
            }
        }
});
