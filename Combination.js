var gameState = 1,
    add = 0,
    database,
    gpa = 0,
    gpb = 0,
    gpc = 0,
    minus = 0,
    writeup = 0;

var one = 0;
var two = 0;
one = 1
two = 2
one = one+two

function setup(){
    createCanvas(500,500)
    database = firebase.database();
    form1 = new Form1();
    form2 = new Form2();
    form3 = new Form3();
    form4 = new Form4();
    form5 = new Form5();
}

function draw(){
    if (gameState === 1){
        form1.display();
        form2.hide();
        form5.hide();
        form3.hide();
        form4.hide();
    }
    if(gameState === 2){
        form2.display();
        form2.show();
        form5.hide();
        form3.hide();
        form4.hide();
    }
    if(gameState === 5){
        form5.display();
        form5.show();
        form2.hide();
        form3.hide();
        form4.hide();
    }
    if (gameState === 3){
        form3.display();
        form3.show();
        form2.hide();
        form5.hide();
        form4.hide();
    }
    if (gameState === 4){
        form4.display();
        form4.show();
        form5.hide();
        form2.hide();
        form3.hide();
    }
    console.log(add)
}
function adda(){
    add = add+gpa
}