
const parallax = document.getElementById("parallax").childNodes;

window.addEventListener("scroll",function (){
    let offset = window.pageYOffset;
    parallax[1].style.marginTop = offset*-.75+"px";//primer elemento
    parallax[3].style.marginTop = offset*-.4+"px";//cachito del lado derecho
    parallax[5].style.marginTop = offset*-.4+"px";//elemento largo despues del primero
    parallax[7].style.marginTop = offset*-.1+"px";//elemento grande abajo del elemento de hasta arriba
    parallax[9].style.marginTop = offset*-.01+"px";
    //document.getElementById("parallax").style.marginTop = offset*-.61+"px";
    parallax[11].style.marginTop = offset*-.1+"px";
    parallax[13].style.marginTop = offset*.12+"px";//elemento en la punta
    parallax[15].style.marginTop = offset*-.75+"px";//elemento fliped
    parallax[17].style.marginTop = offset*-.05+"px";
    parallax[19].style.marginTop = offset*-.65+"px";//divisor
    //this.console.log(window.innerWidth);
})