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
/* 
var hiddenSlideTexts = document.getElementsByClassName("hidden-slide-list-text");
var slideContent = document.getElementsByClassName("slide-content"); */


/* 
var leftIndex = 0;
var middleIndex = 1;
var middleText = 1;
var rightIndex = 2;

slideInit();

function slideInit(){
    for(var i = 0; i<slideImagesMiddle.length; i++){
        slideImagesLeft[i].style.display = "none";
        slideImagesMiddle[i].style.display = "none";
        slideImagesRight[i].style.display = "none";
        slideText[i].style.display ="none";
    }

    slideImagesLeft[0].style.display = "block";
    slideImagesMiddle[1].style.display = "block";
    slideImagesRight[2].style.display = "block";
    slideText[1].style.display = "block";

    leftIndex = 0;
    middleIndex = 1;
    middleText = 1;
    rightIndex = 2;
}


function plusSlides(i){
  
    if(i == 1){
        leftIndex++;
        middleIndex++;
        middleText++;
        rightIndex++;

        if(rightIndex == 7){
            console.log("nuuu");
            rightIndex = 1;
        }
        
        slideChanger(i, leftIndex, middleIndex, middleText, rightIndex);
    }
    else if(i == -1){
        leftIndex--;
        middleIndex--;
        middleText--;
        rightIndex--;

        slideChanger(i, leftIndex, middleIndex, middleText, rightIndex);
    }

}


function slideChanger(i, lI, mI, mT, rI){
    if(i == 1){
        var currentlI = lI - 1;
        var currentmI = mI - 1;
        var currentmT = mT - 1;
        var currentrI = rI - 1;

        slideImagesLeft[currentlI].style.display = "none";
        slideImagesMiddle[currentmI].style.display = "none";        
        slideImagesRight[currentrI].style.display = "none";
        slideText[currentmT].style.display ="none";
    }else{
        var currentlI = lI + 1;
        var currentmI = mI + 1;
        var currentmT = mT + 1;
        var currentrI = rI + 1;

        slideImagesLeft[currentlI].style.display = "none";
        slideImagesMiddle[currentmI].style.display = "none";
        slideImagesRight[currentrI].style.display = "none";
        slideText[currentmT].style.display ="none";
    }

    slideImagesLeft[lI].style.display = "block";
    slideImagesMiddle[mI].style.display = "block";
    slideImagesRight[rI].style.display = "block";
    slideText[mT].style.display = "block";
}
 */




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



/* startAutoSlide();
var myVar;

function startAutoSlide(){
  myVar = setInterval(function(){ plusSlides(1); }, 9000);
} */
/* 
var bSlideIndex = 1;
bShowSlides(bSlideIndex);

function plusSlides(n){
  bShowSlides(bSlideIndex += n);
}
function currentSlide(n){
  bShowSlides(bSlideIndex = n);
}
function bShowSlides(n){
  var i;
  var slides = hiddenSlideImages;
  if(n > slides.length){
    bSlideIndex = 1;
  }
  if(n < 1){
    bSlideIndex = slides.length;
  }
  for(i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[bSlideIndex - 1].style.display = "block";
  document.getElementById("case-Background-Image").src = slides[bSlideIndex - 1].getElementsByTagName('img')[0].src;
} */



/* 

function slideStarter(){
    setInterval(function(){ plusSlides(1); }, 6000);
}

function plusSlides(i){
    
    var currentRightSlideSrc = document.getElementById("featured-pic-right").src;
    var currentLeftSlideSrc = document.getElementById("featured-pic-left").src;

    var thisLeftSlide = currentLeftSlideSrc.substr(67,1) - 1;
    var thisRightSlide = currentRightSlideSrc.substr(67,1) - 1;



    if(i == 1){
    
      if(thisLeftSlide == 6){
            slideInit();
        }else{
            hiddenSlideImages.item(thisLeftSlide).setAttribute("id", "hide-content");
            hiddenSlideImages.item(thisLeftSlide + 1).setAttribute("id", "featured-pic-left");
            hiddenSlideTexts.item(thisLeftSlide).setAttribute("id", "hide-content");
            hiddenSlideTexts.item(thisLeftSlide + 1).setAttribute("id", "featured-text-left");

            if(thisLeftSlide == 5){
                hiddenSlideImages.item(thisLeftSlide - 5).setAttribute("id", "featured-pic-middle");
                hiddenSlideTexts.item(thisLeftSlide - 5).setAttribute("id", "featured-text-middle");
            }else{
                hiddenSlideImages.item(thisLeftSlide + 2).setAttribute("id", "featured-pic-middle");
                hiddenSlideTexts.item(thisLeftSlide + 2).setAttribute("id", "featured-text-middle");
            }
            if(thisRightSlide == 6){
                hiddenSlideImages.item(thisRightSlide - 6).setAttribute("id", "featured-pic-right");
          
            }else if(thisRightSlide == 0){
                hiddenSlideImages.item(thisRightSlide + 1).setAttribute("id", "featured-pic-right");
            }     
        else{
            hiddenSlideImages.item(thisLeftSlide + 3).setAttribute("id", "featured-pic-right");
        }
    }


    }else{
        console.log(thisRightSlide);

        hiddenSlideImages.item(thisRightSlide).setAttribute("id", "hide-content");
        hiddenSlideTexts.item(thisRightSlide).setAttribute("id", "hide-content");
        if(thisRightSlide==0){
            hiddenSlideImages.item(thisRightSlide + 6).setAttribute("id", "featured-pic-right");
            hiddenSlideTexts.item(thisRightSlide + 6).setAttribute("id", "featured-text-right");
        }else{
            hiddenSlideImages.item(thisRightSlide - 1).setAttribute("id", "featured-pic-right");
            hiddenSlideTexts.item(thisRightSlide - 1).setAttribute("id", "featured-text-right");
        }
        if(thisRightSlide == 1){
            hiddenSlideImages.item(thisRightSlide + 5).setAttribute("id", "featured-pic-middle");
            hiddenSlideImages.item(thisRightSlide + 4).setAttribute("id", "featured-pic-left");
            hiddenSlideTexts.item(thisRightSlide + 5).setAttribute("id", "featured-text-middle");
            hiddenSlideTexts.item(thisRightSlide + 4).setAttribute("id", "featured-text-left");
        }
        else if(thisRightSlide == 0){
            hiddenSlideImages.item(thisRightSlide + 5).setAttribute("id", "featured-pic-middle");
            hiddenSlideImages.item(thisRightSlide + 4).setAttribute("id", "featured-pic-left");
            hiddenSlideTexts.item(thisRightSlide + 5).setAttribute("id", "featured-text-middle");
            hiddenSlideTexts.item(thisRightSlide + 4).setAttribute("id", "featured-text-left");
        }else if(thisRightSlide == 6){
            hiddenSlideImages.item(thisRightSlide - 2).setAttribute("id", "featured-pic-middle"); 
            hiddenSlideImages.item(thisRightSlide - 3).setAttribute("id", "featured-pic-left");
            hiddenSlideTexts.item(thisRightSlide - 2).setAttribute("id", "featured-text-middle"); 
            hiddenSlideTexts.item(thisRightSlide - 3).setAttribute("id", "featured-text-left");
        }else if(thisRightSlide == 5 || thisRightSlide == 4){
            hiddenSlideImages.item(thisRightSlide - 2).setAttribute("id", "featured-pic-middle"); 
            hiddenSlideImages.item(thisRightSlide - 3).setAttribute("id", "featured-pic-left");
            hiddenSlideTexts.item(thisRightSlide - 2).setAttribute("id", "featured-text-middle"); 
            hiddenSlideTexts.item(thisRightSlide - 3).setAttribute("id", "featured-text-left");
        }else if(thisRightSlide == 3){
            slideInit();
        }      
        else{
        hiddenSlideImages.item(thisRightSlide - 2).setAttribute("id", "featured-pic-middle");
        hiddenSlideImages.item(thisRightSlide + 4).setAttribute("id", "featured-pic-left");
        hiddenSlideTexts.item(thisRightSlide - 2).setAttribute("id", "featured-text-middle");
        hiddenSlideTexts.item(thisRightSlide + 4).setAttribute("id", "featured-text-left");
        }        
    }

    document.getElementById("current-slider-bPic").src = document.getElementById("featured-pic-middle").src;

} */



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