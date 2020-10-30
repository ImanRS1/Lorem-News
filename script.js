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

/* console.log(currentRightSlideSrc.substr(67,1));
console.log(currentMidSlideSrc.substr(67,1));
console.log(currentLeftSlideSrc.substr(67,1)); */

    //document.getElementById("current-slider-bPic").src="images/featuredpic3.jpg";

    if(i == 1){
        
      var thisLeftSlide = currentLeftSlideSrc.substr(67,1) - 1;
      var thisRightSlide = currentRightSlideSrc.substr(67,1) - 1;
      var thisMidSlide = currentMidSlideSrc.substr(67,1);

      console.log(thisMidSlide);
      

      //document.getElementById("current-slider-bPic").src = "images/featuredpic" + thisMidSlide + ".jpg";


      
      
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

    document.getElementById("current-slider-bPic").src = document.getElementById("featured-pic-middle").src;
    //document.getElementById("current-slider-bPic").src = "images/featuredpic" + thisMidSlide + ".jpg";







       /*  if(slideCounter < 4){
            hiddenSlideImages.item(slideCounter).removeAttribute("id", "featured-pic-left");
            hiddenSlideImages.item(slideCounter).setAttribute("id", "hide-content");
            //den fjärde bilden slyssas ut till hidden


            hiddenSlideImages.item(slideCounter+1).removeAttribute("id", "featured-pic-middle");
            hiddenSlideImages.item(slideCounter+1).setAttribute("id", "featured-pic-left");
            //den femte bilden får plats vänster

            hiddenSlideImages.item(slideCounter+2).removeAttribute("id", "featured-pic-right");
            hiddenSlideImages.item(slideCounter+2).setAttribute("id", "featured-pic-middle");
            //den sjätte bilden får plats mitten

            hiddenSlideImages.item(slideCounter+3).removeAttribute("id", "hide-content");
            hiddenSlideImages.item(slideCounter+3).setAttribute("id", "featured-pic-right");
            //den sjunde bilden slyssas in från hidden

            console.log(slideCounter);
            slideCounter++;

            }else if(slideCounter==4){
                hiddenSlideImages.item(slideCounter).removeAttribute("id", "featured-pic-left");
                hiddenSlideImages.item(slideCounter).setAttribute("id", "hide-content");

                hiddenSlideImages.item(slideCounter+1).removeAttribute("id", "featured-pic-middle");
                hiddenSlideImages.item(slideCounter+1).setAttribute("id", "featured-pic-left");

                hiddenSlideImages.item(slideCounter+2).removeAttribute("id", "featured-pic-right");
                hiddenSlideImages.item(slideCounter+2).setAttribute("id", "featured-pic-middle");

                hiddenSlideImages.item(slideCounter-4).removeAttribute("id", "hide-content");
                hiddenSlideImages.item(slideCounter-4).setAttribute("id", "featured-pic-right");

                slideCounter++;

            }else if(slideCounter==5){
                hiddenSlideImages.item(slideCounter).removeAttribute("id", "featured-pic-left");
                hiddenSlideImages.item(slideCounter).setAttribute("id", "hide-content");

                hiddenSlideImages.item(slideCounter+1).removeAttribute("id", "featured-pic-middle");
                hiddenSlideImages.item(slideCounter+1).setAttribute("id", "featured-pic-left");

                hiddenSlideImages.item(slideCounter-5).removeAttribute("id", "featured-pic-right");
                hiddenSlideImages.item(slideCounter-5).setAttribute("id", "featured-pic-middle");

                hiddenSlideImages.item(slideCounter-4).removeAttribute("id", "hide-content");
                hiddenSlideImages.item(slideCounter-4).setAttribute("id", "featured-pic-right");

                slideCounter++;

            }else if(slideCounter==6){
                slideInit();
                slideCounter = 0;
            } */

    }else{
        if(slideCounter < 1){
            /* hiddenSlideImages.item(slideCounter).removeAttribute("id", "featured-pic-left");
            hiddenSlideImages.item(slideCounter).setAttribute("id", "featured-pic-middle");


            hiddenSlideImages.item(slideCounter+1).removeAttribute("id", "featured-pic-middle");
            hiddenSlideImages.item(slideCounter+1).setAttribute("id", "featured-pic-right");

            hiddenSlideImages.item(slideCounter+2).removeAttribute("id", "featured-pic-right");
            hiddenSlideImages.item(slideCounter+2).setAttribute("id", "hide-content");

            hiddenSlideImages.item(slideCounter+6).removeAttribute("id", "hide-content");
            hiddenSlideImages.item(slideCounter+6).setAttribute("id", "featured-pic-left");

            console.log(slideCounter);
            slideCounter++;
            }
        else if(slideCounter == 1){
            hiddenSlideImages.item(slideCounter).removeAttribute("id", "featured-pic-right");
            hiddenSlideImages.item(slideCounter).setAttribute("id", "hide-content");

            hiddenSlideImages.item(slideCounter-1).removeAttribute("id", "featured-pic-middle");
            hiddenSlideImages.item(slideCounter-1).setAttribute("id", "featured-pic-right");

            hiddenSlideImages.item(slideCounter+5).removeAttribute("id", "featured-pic-left");
            hiddenSlideImages.item(slideCounter+5).setAttribute("id", "featured-pic-middle");

            hiddenSlideImages.item(slideCounter+4).removeAttribute("id", "hide-content");
            hiddenSlideImages.item(slideCounter+4).setAttribute("id", "featured-pic-left");
            slideCounter++;
        }

        else if(slideCounter > 1){
            hiddenSlideImages.item(slideCounter-2).removeAttribute("id", "featured-pic-right");
            hiddenSlideImages.item(slideCounter-2).setAttribute("id", "hide-content");

            hiddenSlideImages.item(slideCounter+4).removeAttribute("id", "featured-pic-middle");
            hiddenSlideImages.item(slideCounter+4).setAttribute("id", "featured-pic-right");

            hiddenSlideImages.item(slideCounter+3).removeAttribute("id", "featured-pic-left");
            hiddenSlideImages.item(slideCounter+3).setAttribute("id", "featured-pic-middle");

            hiddenSlideImages.item(slideCounter+2).removeAttribute("id", "hide-content");
            hiddenSlideImages.item(slideCounter+2).setAttribute("id", "featured-pic-left");
            slideCounter++;
            console.log(slideCounter);
        }

        else if(slideCounter > 2){
            hiddenSlideImages.item(slideCounter-2).removeAttribute("id", "featured-pic-right");
            hiddenSlideImages.item(slideCounter-2).setAttribute("id", "hide-content");

            hiddenSlideImages.item(slideCounter+4).removeAttribute("id", "featured-pic-middle");
            hiddenSlideImages.item(slideCounter+4).setAttribute("id", "featured-pic-right");

            hiddenSlideImages.item(slideCounter+3).removeAttribute("id", "featured-pic-left");
            hiddenSlideImages.item(slideCounter+3).setAttribute("id", "featured-pic-middle");

            hiddenSlideImages.item(slideCounter+2).removeAttribute("id", "hide-content");
            hiddenSlideImages.item(slideCounter+2).setAttribute("id", "featured-pic-left");
            slideCounter++;
            console.log(slideCounter);

        } */

/* 
    } */

}

    }
}
