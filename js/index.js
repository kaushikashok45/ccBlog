var current="blog";
var no;
/*function fullScreenNav(number){
    no=number;
    console.log("here"+no);
    if(number===0){
        document.getElementById("menuDiv").setAttribute("onclick","fullScreenNav(1)");
        document.getElementById("menu").src="../res/images/close.svg";
        document.getElementById("phoneNav").classList.add("flex");
        document.getElementById("phoneNav").classList.add("flex-col");
        document.getElementById("phoneNav").classList.add("relative");
        document.getElementById("phoneNav").classList.add("top-0");
        document.getElementById("phoneNav").classList.add("right-0");
        document.getElementById("phoneNav").classList.add("bottom-0");
        document.getElementById("phoneNav").classList.add("left-0");
        document.getElementById("phoneNav").classList.add("absolute");
        document.getElementById("phoneNav").classList.add("bg-green-100");
        document.getElementById("header").classList.add("z-20");
        showMenu();
    }
    else if(number===1){
        performAnimation(document.getElementById("phoneNav"),"fadeOutLeft");
        document.getElementById("phoneNav").addEventListener('animationend', () => {
            document.getElementById("phoneNav").classList.add("hidden");
        });
        document.getElementById("menu").src="../res/images/menu.svg";
        document.getElementById("menuDiv").setAttribute("onclick","fullScreenNav(0)");
        document.getElementById("phoneNav").classList.remove("flex");
        document.getElementById("phoneNav").classList.remove("flex-col");
        document.getElementById("phoneNav").classList.remove("fixed");
        document.getElementById("phoneNav").classList.remove("top-0");
        document.getElementById("phoneNav").classList.remove("right-0");
        document.getElementById("phoneNav").classList.remove("bottom-0");
        document.getElementById("phoneNav").classList.remove("left-0");
        document.getElementById("phoneNav").classList.remove("absolute");
        document.getElementById("header").classList.remove("z-20");
        document.getElementById("phoneNav").classList.remove("bg-green-100");
    }
}

function performAnimation(element,animation){
    element.classList.add("animate__"+animation);
    element.addEventListener('animationend', () => {
        element.classList.remove("animate__"+animation);
    });
}

function showMenu(){
    document.getElementById("phoneNav").classList.remove("hidden");
    performAnimation(document.getElementById("phoneNav"),"fadeInLeft");
     document.getElementById("phonenav").classList.add("ease-in");
     document.getElementById("phoneNav").classList.add("duration-300");

}*/

var imgSrc;


function fullScreenNav(){
        document.getElementById("phoneNav").classList.toggle("invisible");
        document.getElementById("phoneNav").classList.toggle("visible");
        document.getElementById("phoneNav").classList.toggle("h-[90vh]");
        document.getElementById("phoneNav").classList.toggle("w-full");
        imgSrc=document.getElementById("menu");
        if(imgSrc.value=="&#10005;"){
            imgSrc.innerHTML="&#8801;";
            imgSrc.value="&#8801;";
            $("#articles").fadeIn();
            imgSrc.setAttribute("aria-expanded", "true");
        }
        else{
            imgSrc.innerHTML="&#10005;";
            imgSrc.value="&#10005;";
            $("#articles").fadeOut();
            imgSrc.setAttribute("aria-expanded", "false");
        }
    }