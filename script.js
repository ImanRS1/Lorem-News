var currentDate = (new Date()).toString().split(' ').splice(1,3).join(' ');
document.getElementById("theDate").innerHTML = currentDate;



var featuredSlideObjects = document.getElementsByClassName("featured-slide-objects");
var hiddenSlideObjects = document.getElementById("hidden-slide-list");

console.log(featuredSlideObjects);

function plusSlides(i){

    document.getElementById("current-slider-bPic").src="images/featuredpic1.jpg";

    if(i == 1){


    }else{

    }
    console.log(i);
    for(var i = 0; i < featuredSlideObjects.length; i++){
        console.log(featuredSlideObjects[i]);
    }
}
