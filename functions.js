function getScore(){
    var mistakes = 0;
    for(i=0; i<answer.length; i++){
        if(answer[i-1]!== undefined){
            if(answer[i-1].index!==answer[i].index){
                mistakes++;
                console.log(mistakes);
            }
        }
    };
    
    switch(mistakes){
        case 0: score = "perfect!"; break;
        case options.length - 1: score = "well... you'r suck"; break;
        default: score = "good enough"; break;
    }


}