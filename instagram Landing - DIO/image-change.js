let imagem = document.getElementById("content-img")
let srcs = ['img/mockup-media-0.png','img/mockup-media-1.png' ,'img/mockup-media-2.png', 'img/mockup-media-3.png' ]
let i = 1;
function mudar(){
    if(i < srcs.length) {
        imagem.src = srcs[i];
        i++;
    }else{
        i = 0;
    }
}
window.setInterval(mudar, 6000);