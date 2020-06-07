
const header = document.getElementById("header");
const menuBar = document.getElementById("menu-bar");
const iluminacion = document.getElementsByClassName("iluminacion");
window.addEventListener("scroll", function () {
    let offset = window.pageYOffset;
    let windowWidth = window.innerWidth;
    this.console.log(offset);
    if (windowWidth >= 670) {
        if (offset >= 100) {
            header.className="down";
            menuBar.className="down";
        } else {
            header.className="up";
            menuBar.className="up";
        }
    }else{
        header.className="phone";
        menuBar.className="phone";
    }
})
window.addEventListener("resize", function () {
    let windowWidth = window.innerWidth;
    let offset = window.pageYOffset;
    if(windowWidth < 670){
        header.className="phone";
        menuBar.className="phone";
    }else{
        if(offset >= 100){
            header.className="down";
            menuBar.className="down";
        }else{
            header.className="up";
            menuBar.className="up";
        }
    }
})
window.addEventListener("load", function(){
    let offset = window.pageYOffset;
    let windowWidth = window.innerWidth;
    if(windowWidth < 670){
        header.className="phone";
        menuBar.className="phone";
    }else{
        if(offset >= 100){
            header.className="down";
            menuBar.className="down";
        }else{
            header.className="up";
            menuBar.className="up";
        }
    }
});