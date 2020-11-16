
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
