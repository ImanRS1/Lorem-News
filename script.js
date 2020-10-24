var currentDate = (new Date()).toString().split(' ').splice(1,3).join(' ');
document.getElementById("theDate").innerHTML = currentDate;



var featuredSlideObjects = document.getElementsByClassName("featured-slide-objects");
var hiddenSlideObjects = document.getElementById("hidden-slide-list");


function plusSlides(i){

    document.getElementById("current-slider-bPic").src="images/featuredpic3.jpg";

    if(i == 1){
        for(var x = 0; x<featuredSlideObjects.length; x++){
        /*     console.log(x);
           console.log(featuredSlideObjects[x].children[x]);
             */

             if(x == 2){
                 console.log("den är 2");
             }else{

                featuredSlideObjects[x].children[0].src = featuredSlideObjects[x+1].children[0].src;
             }
        }

    }else{

    }
   /*  console.log(i);
    console.log(featuredSlideObjects[0].children[0]);
    console.log(featuredSlideObjects[0].children[1]); */
    for(var i = 0; i < featuredSlideObjects.length; i++){
    }
}
