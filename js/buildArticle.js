
function articleWriter(){   
     var json=articlesMetaData;
     var fr=new FileReader();
     var html="<div id=\"blogsOverview\" class=\"flex flex-col-reverse items-center justify-center w-full p-7 animate__animated \">";
     for(let i = 0; i < json.length; i++) {
        let obj = json[i];
        console.log(obj);
        var filePath="../articles/"+obj.articleFile; 
        var content=readFile(filePath);
        html=html+"<article id=article"+obj.id+" class=\"article mb-4 w-full max-h-[256px] h-[256px] p-3 md:w-3/4 md:h-[156px] md:max-h-[156px] md:p-7 bg-white dark:border-none dark:bg-slate-800  mini-line-clamp md:line-clamp rounded-md inline minimizeArticle\"><header class=\"flex items-stretch\"><div class=\"text-left\"><h2 class=\"font-bold md:whitespace-nowrap dark:text-white\">"+obj.title+"</h2><h4 class=\"text-grey dark:text-slate-400 text-left md:text-left font-thin\">"+obj.readTime+" min.read</h4></div><div id=\"article"+obj.id+"ctr\" class=\"ml-auto text-right md:text-right hover:cursor-pointer\" onClick=\"expandArticle('article"+obj.id+"')\"><h1 id=\"article"+obj.id+"sign\" class=\"font-bold text-grey dark:text-white will-change-transform duration-[450ms]\">+</h1></div></header><div class=\"h-full inline dark:text-slate-400\""+content+"</div></article>";
     }
     html=html+"</div>";
     document.getElementById("articles").innerHTML=html;

}

function readFile(file){
    var result;
    $.ajax({
        url: file,
        async: false,
        success: function (data){
            result = data;
        }
    });
    var converter = new showdown.Converter();
    var article=converter.makeHtml(result);
    console.log(article);
    return article;
}

function expandArticle(articleid){
    console.log(articleid);
    var article=document.getElementById(articleid);
    
    article.classList.remove("max-h-[256px]");
    article.classList.remove("h-[256px]");
    article.classList.remove("md:h-[156px]");
    article.classList.remove("md:max-h-[156px]");
    article.classList.remove("md:line-clamp");
    article.classList.remove("mini-line-clamp");
    article.classList.remove("inline");
    article.classList.add("h-fit");
    article.classList.toggle("minimizeArticle");
    article.classList.toggle("expandArticle");
    var articleController=document.getElementById(articleid+"ctr");
    document.getElementById(articleid+"sign").classList.add("tilter");
    articleController.setAttribute("onclick","minimizeArticle('"+articleid+"')");
}

function minimizeArticle(articleid){
    var article=document.getElementById(articleid);
    article.classList.add("max-h-[256px]");
    article.classList.add("h-[256px]");
    article.classList.add("md:h-[156px]");
    article.classList.add("md:max-h-[156px]");
    article.classList.add("md:line-clamp");
    article.classList.add("mini-line-clamp");
    article.classList.add("inline");
    article.classList.remove("h-fit");
    article.classList.toggle("minimizeArticle");
    article.classList.toggle("expandArticle");
    var articleController=document.getElementById(articleid+"ctr");
    document.getElementById(articleid+"sign").classList.remove("tilter");
    articleController.setAttribute("onclick","expandArticle('"+articleid+"')");
}