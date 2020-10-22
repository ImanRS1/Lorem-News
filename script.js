var currentDate = (new Date()).toString().split(' ').splice(1,3).join(' ');
document.getElementById("theDate").innerHTML = currentDate;



var featuredSlideObjects = document.getElementsByClassName("featured-slide-objects");
console.log(featuredSlideObjects);

function plusSlides(i){
    console.log("test");
    for(var i = 0; i < featuredSlideObjects.length; i++){
        console.log(featuredSlideObjects[i]);
    }
}
