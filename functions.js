var activePage="skills";
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

function hidePreviousPage(){
  hide(activePage);
}

function showPage(pageId){
    hidePreviousPage();
    document.getElementById(pageId).style.display = "";
    activePage = pageId;
}

function initMenu(){
    document.addEventListener("click", function(e){
        var link = e.target;
        if(link.matches("#top-menu-bar a")){
          var id = link.innerHTML.toLowerCase();
          showPage(id);
          link.classList.add("");
        }
    })
}
    
initMenu();
showPage(activePage);

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