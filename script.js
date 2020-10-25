var currentDate = (new Date()).toString().split(' ').splice(1,3).join(' ');
document.getElementById("theDate").innerHTML = currentDate;



var hiddenSlideImages = document.getElementsByClassName("hidden-slide-list-imgs");
var hiddenSlideTexts = document.getElementsByClassName("hidden-slide-list-text");
slideInit();

function slideInit(){
    hiddenSlideImages.item(0).removeAttribute("id", "hide-content");
    hiddenSlideTexts.item(0).removeAttribute("id", "hide-content");
    hiddenSlideImages.item(1).removeAttribute("id", "hide-content");
    hiddenSlideTexts.item(1).removeAttribute("id", "hide-content");
    hiddenSlideImages.item(2).removeAttribute("id", "hide-content");
    hiddenSlideTexts.item(2).removeAttribute("id", "hide-content");

    hiddenSlideImages.item(0).setAttribute("id", "featured-pic-left");
    hiddenSlideTexts.item(0).setAttribute("id", "featured-text-left");
    hiddenSlideImages.item(1).setAttribute("id", "featured-pic-middle");
    hiddenSlideTexts.item(1).setAttribute("id", "featured-text-middle");
    hiddenSlideImages.item(2).setAttribute("id", "featured-pic-right");
    hiddenSlideTexts.item(2).setAttribute("id", "featured-text-right");
}



var slideCounter = 0;

function plusSlides(i){

    document.getElementById("current-slider-bPic").src="images/featuredpic3.jpg";

    if(i == 1){
        hiddenSlideImages.item(slideCounter).removeAttribute("id", "featured-pic-left");
        hiddenSlideImages.item(slideCounter).setAttribute("id", "hide-content");

        hiddenSlideImages.item(slideCounter+1).removeAttribute("id", "featured-pic-middle");
        hiddenSlideImages.item(slideCounter+1).setAttribute("id", "featured-pic-left");

        hiddenSlideImages.item(slideCounter+2).removeAttribute("id", "featured-pic-right");
        hiddenSlideImages.item(slideCounter+2).setAttribute("id", "featured-pic-middle");

        hiddenSlideImages.item(slideCounter+3).removeAttribute("id", "hide-content");
        hiddenSlideImages.item(slideCounter+3).setAttribute("id", "featured-pic-right");

        console.log(slideCounter);
        


        
        



        if(slideCounter < 4){       
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

}
