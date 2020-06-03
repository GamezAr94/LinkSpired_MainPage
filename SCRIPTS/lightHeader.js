
const header = document.getElementById("header");
const iluminacion = document.getElementsByClassName("iluminacion");
window.addEventListener("scroll", function () {
    let offset = window.pageYOffset;
    let windowWidth = window.innerWidth;
    this.console.log(offset);
    if (windowWidth >= 670) {
        if (offset >= 100) {
            header.className="down";
        } else {
            header.className="up";
        }
    }else{
        header.className="phone";
    }
})
window.addEventListener("resize", function () {
    let windowWidth = window.innerWidth;
    let offset = window.pageYOffset;
    if(windowWidth < 670){
        header.className="phone";
    }else{
        if(offset >= 100){
            header.className="down";
        }else{
            header.className="up";
        }
    }
})
window.addEventListener("load", function(){
    let offset = window.pageYOffset;
    let windowWidth = window.innerWidth;
    if(windowWidth < 670){
        header.className="phone";
    }else{
        if(offset >= 100){
            header.className="down";
        }else{
            header.className="up";
        }
    }
});