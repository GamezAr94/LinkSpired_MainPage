var esMenu = true;
function onClickMenu(){
    var menu_bar_Child = document.getElementById("menu-bar").childNodes;
    menu_bar_Child[1].classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
    if(esMenu){
       menu_bar_Child[1].id="nada";
       esMenu = false;
    }else{
        menu_bar_Child[1].id="menu";
        esMenu = true;
    }
}