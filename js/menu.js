document.addEventListener('DOMContentLoaded', function(){

    const loadfn = () => {
        const navEl = document.querySelector("nav").style;
        window.addEventListener("scroll",(e)=>{
            if (window.scrollY > 10){
                navEl.backgroundColor = "#fff6c2b4";
            }else{
                navEl.backgroundColor = "#fff6c2"; 
            }
        })
    }

    loadfn()
    
    const carritoEl = document.getElementsByClassName("fa-cart-shopping")[0]
    const asideEl = document.getElementsByTagName("aside")[0]
    const crossEl = document.getElementsByClassName("fa-xmark")[0]
    let flechaEl = document.getElementById("flecha-derecha")

    const desplegar = () => {
        asideEl.style.display = "flex"
        if (flechaEl != null){
            flechaEl.style.display = "none"
        }
    }

    const ocultar = () => {
        asideEl.style.display = "none"
        if (flechaEl != null){
            flechaEl.style.display = "block"
        }
    }

    carritoEl.addEventListener("click",desplegar)
    crossEl.addEventListener("click",ocultar)

})