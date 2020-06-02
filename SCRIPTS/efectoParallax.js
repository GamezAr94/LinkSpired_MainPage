const brackeysChild = document.getElementById("brackeys").childNodes;
const header = document.getElementsByTagName("header");
const h1 = document.getElementsByTagName("h1");
const logoFooter = document.getElementsByClassName("logoFooter");
const icono = document.getElementsByClassName("icono");
const parallax = document.getElementById("parallax").childNodes;
const menu_bar = document.getElementById("menu-bar");
const iluminacion = document.getElementById("iluminacion");

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
    this.console.log(window.innerWidth);
    if(window.innerWidth > 670){
        if(offset>=100){
            this.console.log(brackeysChild[1]);
                header[0].style.height = 90 + "px";
                h1[0].style.fontSize = 50 + "px";
                h1[0].style.width = 285 + "px";
                h1[0].style.height = 90 + "px";
                h1[0].style.marginBottom = 20 + "px";
        
                brackeysChild[1].style.fontSize = 50 + "px";
                brackeysChild[3].style.fontSize = 50 + "px";
                brackeysChild[1].style.right= 145 + "px";
                brackeysChild[3].style.left=  145 + "px";
                brackeysChild[1].style.top= -20 + "px";
                brackeysChild[3].style.top=  -20 + "px";
                logoFooter[0].style.opacity = 0;
                logoFooter[0].style.marginTop = -35 + "px";
                icono[0].style.width = 46.5 + "px";
                icono[0].style.height = 80 + "%";
                icono[0].style.marginBottom = 10 + "px";
                menu_bar.style.marginTop = 0 + "px";
                iluminacion.style.transform = "scale(.7)";
                iluminacion.style.marginLeft = -23+"px";
                iluminacion.style.marginTop = -44+"px";
            }
            else{
                iluminacion.style.transform = "scale(1)";
                iluminacion.style.marginLeft = -32+"px";
                iluminacion.style.marginTop = -28+"px";
                menu_bar.style.marginTop = 40 + "px";
                icono[0].style.marginBottom = 2 + "px";
                icono[0].style.height = 100 + "%";
                icono[0].style.width = 63 + "px";
                h1[0].style.marginBottom = 0 + "px";
                h1[0].style.fontSize = 70 + "px";
                h1[0].style.width = 405 + "px";
                
                brackeysChild[1].style.top= 0 + "px";
                brackeysChild[3].style.top= 0 + "px";
                brackeysChild[1].style.fontSize = 70 + "px";
                brackeysChild[3].style.fontSize = 70 + "px";
                brackeysChild[1].style.right= 206 + "px";
                brackeysChild[3].style.left= 206 + "px";
                logoFooter[0].style.opacity = 1;
                logoFooter[0].style.marginTop = 0 + "px";
                header[0].style.height = 180 + "px";
        
                iluminacion.style.transition = "transform 1s";
                menu_bar.style.transition = "all 1s";
                icono[0].style.transition = "all 1s";
                logoFooter[0].style.transition = "all 1s";
                brackeysChild[1].style.transition = "all 1s";
                brackeysChild[3].style.transition = "all 1s";
                header[0].style.transition = "all 1s";
                h1[0].style.transition = "all 1s";
            }
        
    }
})