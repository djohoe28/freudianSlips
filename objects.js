var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d"),
    width = canvas.width,
    height = canvas.height;

function input(value, index) {
    this.value = value;
    this.index = index;
}

var keys = [],
    options = ["aaa", "aab", "bbb"],
    answer = [],
     correntInput = new input(options[0],0);



