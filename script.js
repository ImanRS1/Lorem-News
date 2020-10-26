var currentDate = (new Date()).toString().split(' ').splice(1,3).join(' ');
document.getElementById("theDate").innerHTML = currentDate;



var hiddenSlideImages = document.getElementsByClassName("hidden-slide-list-imgs");
var hiddenSlideTexts = document.getElementsByClassName("hidden-slide-list-text");
slideInit();

function slideInit(){
    for(var i = 0; i<hiddenSlideImages.length; i++){
        hiddenSlideImages.item(i).setAttribute("id", "hide-content");
    }
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

        if(slideCounter < 4){
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
            }

    }else{

    }

}
