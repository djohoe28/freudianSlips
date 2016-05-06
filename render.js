
var int = setInterval(function(){ 
    update();
    draw();
    
},1000/30);

function update() {
    
}
function draw() {
    

}


document.addEventListener("keyup", function(e) {
    if(e.keyCode === 38) { //Up
        if(input.index > 0) {
            correntInput.index--;
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
        answer.push(new input(correntInput.value,correntInput.index));
        console.log(answer[answer.length -1]);
    }
});