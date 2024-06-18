var randomNumber=Math.random()*6+1;
randomNumber=Math.floor(randomNumber);
var randomImage ="dice"+randomNumber+".png";
var randomImagePath="./Images/"+randomImage;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImagePath);

var randomNumber2=Math.random()*6+1;
randomNumber2=Math.floor(randomNumber2);
var randomImage2 ="dice"+randomNumber2+".png";
var randomImagePath2="./Images/"+randomImage2;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImagePath2);

if(randomNumber > randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 Wins!";
}

else if(randomNumber < randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 Wins";
}

else {
    document.querySelector("h1").innerHTML="Draw !!";
}