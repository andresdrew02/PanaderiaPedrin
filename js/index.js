document.addEventListener('DOMContentLoaded',function(){
    const cruceta = document.getElementById("cruceta")
    
    cruceta.addEventListener('click', ()=>console.log(document.getElementsByClassName("carta")[0].style.display="none"))

    //carrousel
    let imagen_mostrada = 0;
    const arr_rutas = ["url('./img/fondo.jpg')","url('./img/fondo2.webp')","url('./img/fondo3.jpg')","url('./img/fondo4.webp')"]
    const rightArrowEl = document.getElementById("flecha-derecha")
    const leftArrowEl = document.getElementById("flecha-izquierda")
    const imagenEl = document.getElementsByClassName("imagen")[0].style

    leftArrowEl.addEventListener("click",function(){
        if (imagen_mostrada == 0){
            console.log("ultima imagen")
            imagen_mostrada = arr_rutas.length
        }
        imagen_mostrada--
        imagenEl.backgroundImage = arr_rutas[imagen_mostrada]
    })
    
    rightArrowEl.addEventListener("click",function(){
        if (imagen_mostrada == arr_rutas.length-1){
            console.log("primera imagen")
            imagen_mostrada = 0
        }else{
            imagen_mostrada++
        }
        console.log(imagen_mostrada)
        imagenEl.backgroundImage = arr_rutas[imagen_mostrada]
    })

})