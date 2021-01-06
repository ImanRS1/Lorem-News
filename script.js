var currentDate = (new Date()).toString().split(' ').splice(1,3).join(' ');
document.getElementById("theDate").innerHTML = currentDate;


var slideIndex = 0;
slideShow();

function slideShow() {  
  setTimeout(slideShow, 6000);
  var i;
  var slides = document.getElementsByClassName("addImages");
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