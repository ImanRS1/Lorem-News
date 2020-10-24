var currentDate = (new Date()).toString().split(' ').splice(1,3).join(' ');
document.getElementById("theDate").innerHTML = currentDate;



var featuredSlideObjects = document.getElementsByClassName("featured-slide-objects");
var hiddenSlideObjects = document.getElementById("hidden-slide-list");

var slideCounter = 0;

function plusSlides(i){

    document.getElementById("current-slider-bPic").src="images/featuredpic3.jpg";

    if(i == 1){


        
        


        
        if(slideCounter < 6){       
            slideCounter++;            
        }else{
            slideCounter = 0;
        }


    }else{

    }
   /*      switch(slideCounter){
            case 0:
                for(var x = 0; x<2; x++){
                    featuredSlideObjects[x].children[0].src = featuredSlideObjects[x+1].children[0].src
                }
                featuredSlideObjects[2].children[0].src = hiddenSlideObjects.children[0].src;
            case 1:

        }

        for(var x = 0; x < 7; x++){
            if(x > 1){
                 featuredSlideObjects[x].children[0].src= hiddenSlideObjects.children[x-2].src;
            }
            if(x > 2){
                hiddenSlideObjects.children[x-3].src = hiddenSlideObjects.children[x-1].src;
            }else{
                featuredSlideObjects[x].children[0].src = featuredSlideObjects[x+1].children[0].src;
            }
        }

    }else{

    } */

    for(var i = 0; i < featuredSlideObjects.length; i++){
    }
}
