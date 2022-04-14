var dice1 = Math.floor(Math.random()*6);
var dice2 = Math.floor(Math.random()*6);
var diceImg = ["dice.png", "dice (1).png", "dice (2).png", "dice (3).png", "dice (4).png", "dice (5).png"];
var diceNum = [1,2,3,4,5,6];
var imgSrc1 = "images/" + diceImg[dice1];
var imgSrc2 = "images/" + diceImg[dice2];
document.querySelectorAll("img")[0].setAttribute("src",imgSrc1);
document.querySelectorAll("img")[1].setAttribute("src",imgSrc2);
var num1 = diceNum[dice1];
var num2 = diceNum[dice2];
var sum = num1 + num2;

if(sum <= 7){
    document.querySelector("p").innerHTML = "Congratulations! You Won.";
}

else{
    document.querySelector("p").innerHTML = "Oh ou! Better luck next time.";   
}



