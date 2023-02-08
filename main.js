resultadoGlobal = [];
img = " ";
modelo = " ";
function preload(){
   img = loadImage("dog_cat.jpg");
}
function setup(){
    cnv = createCanvas(600, 400);
    cnv.center();
    objetoDetectado = ml5.objectDetector('cocossd', modeloCarregado);
    document.getElementById("status").innerHTML = "Detectando Objeto...";
}
function modeloCarregado(){
    console.log("Modelo Carregado");
    modelo = true;
    objetoDetectado.detect(img, pegarResultado);
}
function pegarResultado(erro, resultado){
    if(erro){
        console.log(erro);
    }
    else{
        console.log(resultado);
        resultadoGlobal = resultado;
    }
}
function draw(){
    image(img, 0, 0, 600, 400);
    if(modelo){
        for(var i = 0; i < resultadoGlobal.length; i++){
            fill("#000000");
            textSize(25);
            porcentagem = floor(resultadoGlobal[i].confidence * 100)
            text(resultadoGlobal[i].label + " " + porcentagem + "%", resultadoGlobal[i].x, resultadoGlobal[i].y+20);
            stroke("#000000");
            noFill()
            rect(resultadoGlobal[i].x, resultadoGlobal[i].y, resultadoGlobal[i].width, resultadoGlobal[i].height);
        }
    }
}
    // cachorro
    // fill("#000000");
    // textSize(25);
    // text("Cachorro" , 40, 50);
    // stroke("#000000");
    // noFill()
    // rect(20, 10, 450, 360);

    // //gato
    // fill("#000000");
    // textSize(25);
    // text("Gato" , 470, 50);
    // stroke("#000000");
    // noFill()
    // rect(280, 30, 250, 350);