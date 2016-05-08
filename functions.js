function getScore(){
    var answerValue = 0;
    for(i=0; i<answer.length; i++){
        answerValue += answer[i].index;
    };
    console.log(answerValue);

    if(answer[0].index===answer[1].index && answer[1].index===answer[2].index){
        answerValue = 0;
    };
    
    switch(answerValue){
        case 0: case 6: score = "perfect!"; break;
        case 1: case 2: case 4: score = "good enough"; break;
        case 3: score = "well... you'r suck"; break;
    }

}