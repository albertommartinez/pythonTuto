
const º = (arg) => {
    // DOMContentLoader
    if (typeof arg === 'function') {
        document.addEventListener('DOMContentLoaded', arg);
    }

    // Selector de CSS
    let elements;
    if (typeof arg === 'string') {
        elements = document.querySelectorAll(arg);
    }    

    // Elemento HTML suelto
    if (arg instanceof HTMLElement) {
        elements = [arg];
    }

    try {
    elements.css = (...args) => {
        const [property, value] = args;
        const isString = typeof property === 'string';

        elements.forEach(el => {
            if (isString) el.style[property] = value;
            else {//Hay que mejorar comprobacion
                const entriesCSS = Object.entries(property);
                entriesCSS.forEach(([property, value]) => {
                    el.style[property] = value;
                });
            }
        });
        return elements;
    }
    }catch (erCss) {} //Error al construir vector de elementos del DOM

    //Escuchador de eventos
    try {
    elements.on = (event, callback) => {
        elements.forEach(el => {
            el.addEventListener(event, callback);
        });
        return elements;
    }
    }catch (erOn) {} //Error al instanciar el escuchador de eventos

    try {
    //Recorrer elementos
    elements.each = (fn) => {
        elements.forEach((el, index) => {
            fn(index, el)
        })
        return elements;
    }
    }catch (erEach) {} //Error recorriendo el DOM

    try {
    //Efecto Fade In
    elements.fadeIn = (duration = 1000) => {
        elements.forEach((el, index) => {
            const animation = el.animate([
                { opacity: 0 },
                { opacity: 1 }
            ], {
                duration   
            })
            animation.onfinish = () => el.style.opacity = 1
        })
        return elements;
    }
    }catch (erfad) {}
    
    try {
    //Crea dinamicamente elemento HTML
    mkHtml = (eleHtml, contenido, destino) => {
        let element = document.createElement(eleHtml);
        let content = document.createTextNode(contenido);
        element.appendChild(content);
        let newElementHtml = document.getElementById(destino);
        document.body.insertBefore(element, newElementHtml);
        return elements;
    }
    } catch (erhtml) {}

    try { 
    //Introduce <img> dinamicamente
    inImg = (imagen, id) => {
        let img = document.createElement('img');
        img.src = imagen;
        img.id = id;
        document.body.appendChild(img);
        return elements;          
    }
    }catch (erinimg) {}


    try {
    //Introduce <img> dinamicamente con una clase
    inImg = (imagen, id, clase) => {
        let img = document.createElement('img');
        img.src = imagen;
        img.id = id;
        img.className = clase;
        document.body.appendChild(img);
        return elements;
    }
    }catch (erinimgcl) {}

    try {
    //Cargar imagen a <img> dinamicamente
    loadImg = (img, idImg) => {
        document.getElementById(idImg).src = img;
    }
    }catch (erLimg) {}

//manejo JSON
    try {
    //Obtener cadena registro json 
    getStrReg = (varJson, registro) => {
        return JSON.stringify(varJson[registro]);
    }
    }catch (erGetJs) {}
    
    try {
    //Cadena de objeto json entero
    fullJson = (varJson) => {
        //obj = varJson.toString();
        var x = "";
        for(var i in varJson) {
            x += JSON.stringify(varJson[i]);
        }
        return x; 
    }
    }catch (erStrJsFull) {}


    try {
    //Zoom a una imagen (valor nZoom 1 imagen tal cual)
    imgZoom = (ele,nZoom) => {  
        º(ele)
            {
                //º(ele).css('border', '2px solid #0ff')
                º(ele).css('transition', 'all .6s ease-in-out');
                º(ele).css('scale', nZoom);
            }
        return elements;
    }
}catch (erZImg) {}
    




    
    


    return elements;
}  


