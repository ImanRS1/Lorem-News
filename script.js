var currentDate = (new Date()).toString().split(' ').splice(1,3).join(' ');
document.getElementById("theDate").innerHTML = currentDate;



var hiddenSlideImages = document.getElementsByClassName("hidden-slide-list-imgs");
var hiddenSlideTexts = document.getElementsByClassName("hidden-slide-list-text");
var slideContent = document.getElementsByClassName("slide-content");




/* 
slideContent.children[0].removeAttribute("id");
slideContent.children[0].setAttribute("id", "featured-pic-left"); */


slideInit();


function slideInit(){
    for(var i = 0; i<hiddenSlideImages.length; i++){
        //hiddenSlideImages.item(i).removeAttribute("id", "'pic' + 'i'")
        hiddenSlideImages.item(i).setAttribute("id", "hide-content");
    }

    hiddenSlideImages.item(0).setAttribute("id", "featured-pic-left");
    hiddenSlideImages.item(1).setAttribute("id", "featured-pic-middle");
    hiddenSlideImages.item(2).setAttribute("id", "featured-pic-right");
}




/* if(currentRightSlideSrc.includes("images/featuredpic3.jpg")){
    console.log("yes");
} */


var slideCounter = 0;

function plusSlides(i){

    
var currentRightSlideSrc = document.getElementById("featured-pic-right").src;
var currentLeftSlideSrc = document.getElementById("featured-pic-left").src;
var currentMidSlideSrc = document.getElementById("featured-pic-middle").src;

var thisLeftSlide = currentLeftSlideSrc.substr(67,1) - 1;
var thisRightSlide = currentRightSlideSrc.substr(67,1) - 1;
var thisMidSlide = currentMidSlideSrc.substr(67,1);

    //document.getElementById("current-slider-bPic").src="images/featuredpic3.jpg";

    if(i == 1){
    
      if(thisLeftSlide == 6){
            slideInit();
        }else{
            hiddenSlideImages.item(thisLeftSlide).setAttribute("id", "hide-content");
            hiddenSlideImages.item(thisLeftSlide + 1).setAttribute("id", "featured-pic-left");

            if(thisLeftSlide == 5){
                hiddenSlideImages.item(thisLeftSlide - 5).setAttribute("id", "featured-pic-middle");
            }else{
                hiddenSlideImages.item(thisLeftSlide + 2).setAttribute("id", "featured-pic-middle");
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
        if(thisRightSlide==0){
            hiddenSlideImages.item(thisRightSlide + 6).setAttribute("id", "featured-pic-right");
        }else{
            hiddenSlideImages.item(thisRightSlide - 1).setAttribute("id", "featured-pic-right");
        }
        if(thisRightSlide == 1){
            hiddenSlideImages.item(thisRightSlide + 5).setAttribute("id", "featured-pic-middle");
            hiddenSlideImages.item(thisRightSlide + 4).setAttribute("id", "featured-pic-left");
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
