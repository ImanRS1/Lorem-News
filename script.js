var currentDate = (new Date()).toString().split(' ').splice(1,3).join(' ');
document.getElementById("theDate").innerHTML = currentDate;



var hiddenSlideImages = document.getElementsByClassName("hidden-slide-list-imgs");
var hiddenSlideTexts = document.getElementsByClassName("hidden-slide-list-text");
var slideContent = document.getElementsByClassName("slide-content");




slideInit();


function slideInit(){
    for(var i = 0; i<hiddenSlideImages.length; i++){
        hiddenSlideImages.item(i).setAttribute("id", "hide-content");
        hiddenSlideTexts.item(i).setAttribute("id", "hide-content");
    }

    hiddenSlideImages.item(0).setAttribute("id", "featured-pic-left");
    hiddenSlideImages.item(1).setAttribute("id", "featured-pic-middle");
    hiddenSlideTexts.item(1).setAttribute("id", "featured-text-middle");
    hiddenSlideImages.item(2).setAttribute("id", "featured-pic-right");
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
        }else if(thisRightSlide == 6){
            hiddenSlideImages.item(thisRightSlide - 2).setAttribute("id", "featured-pic-middle"); 
            hiddenSlideImages.item(thisRightSlide - 3).setAttribute("id", "featured-pic-left");
        }else if(thisRightSlide == 5 || thisRightSlide == 4){
            hiddenSlideImages.item(thisRightSlide - 2).setAttribute("id", "featured-pic-middle"); 
            hiddenSlideImages.item(thisRightSlide - 3).setAttribute("id", "featured-pic-left");
        }else if(thisRightSlide == 3){
            slideInit();
        }      
        else{
        hiddenSlideImages.item(thisRightSlide - 2).setAttribute("id", "featured-pic-middle");
        hiddenSlideImages.item(thisRightSlide + 4).setAttribute("id", "featured-pic-left");
        }        
    }

    document.getElementById("current-slider-bPic").src = document.getElementById("featured-pic-middle").src;

}
