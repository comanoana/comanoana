
function hide(id) {
//document.getElementById(id).style.display= "none";
    var el = document.getElementById(id);
    console.info(id, el);

    if (el){
        el.style.display= "none";
    }
    else{
        console.error("pagina nu exista", id);
    }
} 

function hideAllPages(){
    var pages = document.querySelectorAll(".page");
    for(var i = 0; i < pages.length; i++){
       var page = pages[i];
        var id = pages[i].id
        hide(id);
    } 
}
    
 function showPage(pageId){
    hideAllPages();
    document.getElementById(pageId).style.display="";
}

function initMenu(){
    document.addEventListener("click", function(e){
        var link = e.target;
        if(link.matches("#top-menu-bar a")){
          var id = link.innerHTML.toLowerCase();
          showPage(id);
        }
    })
}
    
initMenu();
showPage("skills");
var skills = [
    "HTML", 
    "CSS", 
    "JS"
];

var skillsli = skills.map(function(skill){
    return "<li>" + skill + "</li>";
});

//todo add"favorite"skill
var ul = document.querySelector("#skills ul");
ul.innerHTML = skillsli.join("");