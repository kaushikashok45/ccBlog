var current=0;

function renderAbout(){

        current="about";
        var contentWrapper=document.getElementById("articles");
        var aboutHtml="<div id=\"aboutWrapper\" class=\"flex flex-col-reverse items-center justify-center w-full p-7 animate__animated\"><div id=\"about\" class=\"w-full p-3 md:w-3/4 md:p-7  dark:border-none bg-white dark:bg-slate-800 rounded-md\"><h2 class=\"font-bold text-center dark:text-white\">About me</h2><div id=\"ashokPhoto\" class=\"w-[156px] h-[156px] my-5 mx-auto\"><img class=\"w-full h-full rounded-full\" src=\"../res/images/ashokPhoto.jpg\"></img></div><p id=\"aboutContent\" class=\"dark:text-slate-400\">I am Ashok Kaushik, 19BCS059 a final year CSE student from Kumaraguru College of technology and this blog is a part of my assignment work for the final year course Cloud Computing.This website was built using HTML5,CSS3,Javascript and TailwindCSS.</p></div>";
        contentWrapper.innerHTML=aboutHtml; 
}

function renderPage(page){
    if(page==0){
        document.getElementById("aboutnav").classList.remove("active-nav");
        document.getElementById("blogsnav").classList.add("active-nav");
        document.getElementById("phoneaboutnav").classList.remove("active-nav");
        document.getElementById("phoneblogsnav").classList.add("active-nav");
        current=0;
        articleWriter();
    }
    else if(page==1){
        document.getElementById("aboutnav").classList.add("active-nav");
        document.getElementById("blogsnav").classList.remove("active-nav");
        document.getElementById("phoneaboutnav").classList.add("active-nav");
        document.getElementById("phoneblogsnav").classList.remove("active-nav");
        current=1;
        renderAbout();
    }
    else if(page==2){
        fullScreenNav();
        document.getElementById("aboutnav").classList.remove("active-nav");
        document.getElementById("blogsnav").classList.add("active-nav");
        document.getElementById("phoneaboutnav").classList.remove("active-nav");
        document.getElementById("phoneblogsnav").classList.add("active-nav");
        current=0;
        articleWriter();
    }
    else if(page==3){
        fullScreenNav();
        document.getElementById("aboutnav").classList.add("active-nav");
        document.getElementById("blogsnav").classList.remove("active-nav");
        document.getElementById("phoneaboutnav").classList.add("active-nav");
        document.getElementById("phoneblogsnav").classList.remove("active-nav");
        current=1;
        renderAbout();
    }
}

window.onload=function(){
    renderPage(current);
};