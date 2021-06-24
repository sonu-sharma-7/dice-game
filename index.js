

var randomNumber1 = Math.floor(Math.random()*6)+1 ; // 1-6

var randomImages1= "images/dice" + randomNumber1 + ".png"; // will store random images from 1-6

var image1= document.querySelectorAll("img")[2];

image1.setAttribute("src",randomImages1);

var randomNumber2 = Math.floor(Math.random()*6)+1 ; // 1-6

var randomImages2= "images/dice" + randomNumber2 + ".png"; // will store random images from 1-6

var image2= document.querySelectorAll("img")[1];

image2.setAttribute("src",randomImages2); 

if(randomNumber1>randomNumber2){

      document.querySelector("h1").innerHTML="Player1 wins 😀"
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player2 wins 🥳"
}
else{
    document.querySelector("h1").innerHTML="Draw 🤡"
}