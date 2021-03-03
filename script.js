var currentDate = (new Date()).toString().split(' ').splice(1,3).join(' ');
document.getElementById("theDate").innerHTML = currentDate;


var slideIndex = 0;
slideShow();

function slideShow() {  
  setTimeout(slideShow, 6000);
  var i;
  var slides = document.getElementsByClassName("aImages");
  for(i = 0; i < slides.length; i++){
    slides[i].style.display = "none";
  }
  slideIndex++;
  if(slideIndex > slides.length){
    slideIndex = 1;
  }
 slides[slideIndex-1].style.display = "block";   
}


var slideImagesLeft = document.getElementsByClassName("slide-list-imgs-left");
var slideImagesMiddle = document.getElementsByClassName("slide-list-imgs-middle");
var slideImagesRight = document.getElementsByClassName("slide-list-imgs-right");
var slideText = document.getElementsByClassName("slide-list-text");
var leftIndex = 0;
var middleIndex = 1;
var rightIndex = 2;

leftSlides(leftIndex);
middleSlides(middleIndex);
rightSlides(rightIndex);


function plusSlides(n){
    leftSlides(leftIndex += n);
    middleSlides(middleIndex += n);
    rightSlides(rightIndex += n);
}

startAutoSlide();
function startAutoSlide(){
  setInterval(function(){ plusSlides(1); }, 5000);
  setInterval(function(){ ms1PlusSlide(1); }, 4000);
} 


function leftSlides(n){
    if(n == slideImagesLeft.length){
        leftIndex = 0;
      }
      if(n < 0){
        leftIndex = slideImagesLeft.length - 1;
      }
      for(var i = 0; i < slideImagesLeft.length; i++) {
        slideImagesLeft[i].style.display = "none";
      }
    
      slideImagesLeft[leftIndex].style.display = "block";

}

function middleSlides(n){
    if(n == slideImagesMiddle.length){
        middleIndex = 0;
      }
      if(n < 0){
        middleIndex = slideImagesMiddle.length - 1;
      }
      for(var i = 0; i < slideImagesMiddle.length; i++) {
        slideImagesMiddle[i].style.display = "none";
        slideText[i].style.display = "none";
      }
    
      slideImagesMiddle[middleIndex].style.display = "block";
      slideText[middleIndex].style.display = "block";
      document.getElementById("current-slider-bPic").src = slideImagesMiddle[middleIndex].src;
}

function rightSlides(n){
    if(n == slideImagesRight.length){
        rightIndex = 0;
    }
    if(n < 0){
        rightIndex = slideImagesRight.length - 1;
    }
    for(var i = 0; i < slideImagesRight.length; i++) {
        slideImagesRight[i].style.display = "none";
    }

    slideImagesRight[rightIndex].style.display = "block";
} 


var bnList = document.getElementsByClassName("bn-list");
var nextButton = document.getElementById("breaking-newslist-nextbutton");
var prevButton = document.getElementById("breaking-newslist-prevbutton");

function brNextButton(){
    bnList[0].setAttribute("class", "bnListSlideNext bn-list");
    nextButton.style.opacity = 0;
    prevButton.style.opacity = 1;
}

function brPrevButton(){    
    bnList[0].setAttribute("class", "bnListSlidePrev bn-list");
    prevButton.style.opacity = 0;
    nextButton.style.opacity = 1;
}



var mainsec1Index = 1;
ms1Slides(mainsec1Index);

function ms1PlusSlide(n){
  ms1Slides(mainsec1Index += n);
}
function ms1CurrentSlide(n){
  ms1Slides(mainsec1Index = n);
}
function ms1Slides(n){
  var i;
  var slides = document.getElementsByClassName("ms1SlideObjects");
  if(n > slides.length){
    mainsec1Index = 1;
  }
  if(n < 1){
    mainsec1Index = slides.length;
  }
  for(i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[mainsec1Index - 1].style.display = "block";
}


function showDropDown(){
  var dropDownMenu = document.getElementsByClassName("burgerMenu-dropdown");
  var burgerIcon = document.getElementsByClassName("burgerMenu");
  
  if(dropDownMenu[0].style.display == "block"){
    dropDownMenu[0].style.display = "none";
    burgerIcon[0].innerHTML = "&#9776;";
  }else{
    dropDownMenu[0].style.display = "block";
    burgerIcon[0].innerHTML = "&#10006;";
  }
}

