// Trabajo practico final, parte 1: Aventura Gráfica Interactiva Web 
// Alumnas: Valentina Meyer y Ornella Rapisarda 
//https://youtu.be/x6O9WoPKG3Q
let fondoInicio = []; 
let fondoFinal17;
let titulo;
let texto1;
let velocidadImagen = 1;
let escenaPantalla2 = []; 
let pantalla = 1;
let minTexto; // arranca en 0, el comienzo del substring
let maxTexto; // las letras se van incrementando por cada frame, hasta llegar al ultimo substring 
let textoActual; // seleciona el texto a mostrar
let opacidadImagen = 0; //para transparencia 
let escenaPantalla3 = [];
let imgWatson;
let imgFlechaReiniciar;
let imgSherlockHolmes;
let escenaPantalla4 = [];
let escenaPantalla5;
let escenaPantalla6 = [];
let escenaPantalla7;
let escenaPantalla8 = [];
let escenaPantalla9 = [];
let escenaPantalla10;
let escenaPantalla11;
let escenaPantalla12;
let escenaPantalla13;
let escenaPantalla14 = []; 
let escenaPantalla15;
let escenaPantalla16 = [];
let escenaPantalla18;
let globoPensamientoHolmes = [];
let imgHuellas;
let imgLupa;
let imgGloboPensamientoJames;
let fondoPantalla10Actual; //guarda que fondo se esta mostrando ahora
let fondoPantalla10Nuevo; //imagen que se muestra al hacer click
let festejoSherlock = [];
let festejoWatson = [];
let contador = 0;
let indice = 0;
let yCreditos;
let musicaPrincipal;
let sonidoEncontrar;
let yaSonoEncontrar = false;
let sonidoGanar;
let yaSonoGanar = false;
let sonidoPerder;
let yaSonoPerder = false;


function preload(){
  
fondoInicio.push(loadImage('assets/fondoinicio0.jpg'));
titulo = loadFont('assets/fuente.ttf');
texto1 = loadFont('assets/fuente1.ttf');
 for (let i = 0; i < 2; i++){
  escenaPantalla2.push (loadImage ( 'assets/escenacrimen0' +i+ '.png')); 
 }
for (let i= 0; i <2; i++){
escenaPantalla3.push (loadImage ('assets/pantalla3fondo0' +i+ '.jpg'));
}
imgWatson = loadImage('assets/watson00.png');
for (let i= 0; i <2; i++){
escenaPantalla4.push (loadImage ('assets/pantalla4fondo0' +i+ '.jpg'));
}
escenaPantalla5 = loadImage('assets/pantalla5fondo00.jpg');
imgFlechaReiniciar = loadImage('assets/flechareinicio.png');


for (let i = 0; i < 3; i++) {
 escenaPantalla6.push (loadImage ( 'assets/pantalla6fondo0' +i+ '.jpg'));
}
escenaPantalla7 = loadImage('assets/pantalla7fondo00.jpg');


for (let i = 0; i < 2; i++){
escenaPantalla8.push (loadImage ('assets/pantalla8fondo0' +i+ '.jpg'));
}
imgSherlockHolmes= loadImage ('assets/sherlockholmes00.png');




for (let i = 0; i < 2; i++){
escenaPantalla9.push (loadImage('assets/pantalla9fondo0' +i+ '.jpg'));
}
imgGloboPensamientoJames = loadImage('assets/globopensamientojames.png');




escenaPantalla10 = loadImage ('assets/pantalla10fondo00.jpg');
fondoPantalla10Nuevo = loadImage ('assets/pantalla10fondo01.jpg');




imgHuellas = loadImage ('assets/huellas.png');
imgLupa = loadImage ('assets/lupa.png');




escenaPantalla11 = loadImage('assets/pantalla11fondo00.jpg');




escenaPantalla12 = loadImage('assets/pantalla12fondo00.jpg');
for (let i = 0; i < 5; i++){
globoPensamientoHolmes.push (loadImage('assets/globopensamiento0' +i+ '.png'));
}
escenaPantalla13 = loadImage('assets/pantalla13fondo00.jpg');


for (let i = 0; i < 4; i++){ // 
escenaPantalla14.push (loadImage('assets/pantalla14fondo0' +i+ '.jpg'));
}
escenaPantalla15 = loadImage('assets/pantalla15fondo00.jpg');


for (let i = 0; i < 2; i++){
 escenaPantalla16.push (loadImage ('assets/pantalla16fondo0' +i+ '.jpg')); 
}
fondoFinal17 = loadImage ('assets/pantalla17fondo00.jpg');
for (let i= 0; i < 4; i++){
 festejoSherlock.push (loadImage ('assets/SherlockFesteja0' +i+ '.png'));
}
for (let i=0; i < 4; i++){
 festejoWatson.push (loadImage('assets/WatsonFesteja0' +i+ '.png'));
}


escenaPantalla18 = loadImage('assets/pantalla18fondo00.jpg');

musicaPrincipal = loadSound('assets/musicaprincipal.mp3');
sonidoEncontrar = loadSound('assets/sonidoencontrarhuellas.mp3');
sonidoGanar = loadSound('assets/sonidoganar.mp3');
sonidoPerder = loadSound('assets/sonidoperder.mp3');

}




function setup() {
createCanvas(800,450);
background(0);
textWrap (WORD); 
minTexto = 0; 
maxTexto = 0; 
textoActual = 0; 
fondoPantalla10Actual = escenaPantalla10;

}




function draw() {
 console.log("X: " + mouseX + " Y: " + mouseY);
  
  if (pantalla === 1) {
    pantalla1();
  } else if (pantalla === 2) {
    pantalla2();
  } else if (pantalla === 3) {
    pantalla3();
  } else if (pantalla === 4) { 
    pantalla4();
  } else if (pantalla === 5) {
    pantalla5();
  }
  else if (pantalla === 6) {
   pantalla6 (); 
  }
  else if (pantalla === 7) {
   pantalla7(); 
  }
  else if (pantalla === 8) {
   pantalla8(); 
  }
    else if (pantalla === 9) {
   pantalla9(); 
  }
    else if (pantalla === 10) {
   pantalla10(); 
  }
  else if (pantalla === 11){
   pantalla11();
  }
  else if (pantalla === 12){
  pantalla12();
  }
  else if (pantalla === 13){
  pantalla13();
  }
  else if (pantalla === 14) { 
   pantalla14 (); 
  }
   else if(pantalla === 15){
   pantalla15();
  }
  else if (pantalla === 16) {
   pantalla16(); 
  }
  else if (pantalla === 17){
   pantalla17(); 
  }
  else if (pantalla === 18){
   pantalla18 (); 
  }
  else if (pantalla === 19) {
   pantalla19 (); 
  }
} 


function mousePressed () {
 if (pantalla === 1) {
    if (mouseX > 280 && mouseX < 480 && mouseY > 300 && mouseY < 360) {
      pantalla = 2;
      textoActual = 0; 
      maxTexto = 0;
    
  if (musicaPrincipal && !musicaPrincipal.isPlaying()) {
        musicaPrincipal.loop(); 
      }
    }




  } else if (pantalla === 2) {
    if (maxTexto < textoPantalla2[textoActual].length) {
      maxTexto = textoPantalla2[textoActual].length; 
      if (textoActual === 1) opacidadImagen = 255;
    } else {
      textoActual++; 
      maxTexto = 0;
      opacidadImagen = 0;




      if (textoActual >= textoPantalla2.length) {
        pantalla = 3;
        textoActual = 0;
        opacidadImagen = 0;
      }
    }


  } else if (pantalla === 3) {
    if (textoActual < 2) { 
      if (maxTexto < textoPantalla3[textoActual].length) {
        maxTexto = textoPantalla3[textoActual].length;
        if (textoActual >= 1) opacidadImagen = 255;
      } else {
        textoActual++;
        maxTexto = 0;
      }
    } else if (textoActual === 2) {
      // Opción Izq acompañar a Holmes
     if (mouseEnBoton(100, 350, 260, 60)){
        pantalla = 4;
        textoActual = 0;
        maxTexto = 0;
        opacidadImagen = 0;
      }


      // Opción Der quedarte en Londres
      if (mouseEnBoton(440, 350, 260, 60)) {
        pantalla = 5; 
        textoActual = 0;
        maxTexto = 0;
        opacidadImagen = 0;
      }
    }


  } else if (pantalla === 4) { 
    if (textoActual < 4) {
      if (maxTexto < textoPantalla4[textoActual].length) {
        maxTexto = textoPantalla4[textoActual].length;
        if (textoActual >= 1) opacidadImagen = 255;
      } else {
        textoActual++;
        maxTexto = 0;
      }
    } else if (textoActual === 4) {
      // Clic en Opción Izquierda
      if (mouseEnBoton(100, 350, 260, 60)) {
        pantalla = 6;
        textoActual = 0;
        maxTexto = 0;
        opacidadImagen = 0;
      }








      // Clic en Opción Derecha
     if (mouseEnBoton(440, 350, 260, 60)) {
        pantalla = 7;
        textoActual = 0;
        maxTexto = 0;
        opacidadImagen = 0;
      }
    }
  } 
  else if (pantalla === 5) {
    
    if (textoActual < textoPantalla5.length - 1) {
      if (maxTexto < textoPantalla5[textoActual].length) {
        maxTexto = textoPantalla5[textoActual].length;
      } else {
        textoActual++;
        maxTexto = 0;
      }
    } 
   
    else {
      if (mouseX > 360 && mouseX < 440 && mouseY > 325 && mouseY < 405) {  // Si ya está en el último texto permite reiniciar el programa
       reiniciarAventuraGrafica();
      }
    }
  }
  
 else if (pantalla === 6) {
    if (textoActual < textoPantalla6.length - 1) {
      if (maxTexto < textoPantalla6[textoActual].length) {
        maxTexto = textoPantalla6[textoActual].length;
        if (textoActual >= 1) opacidadImagen = 255;
      } else {
        textoActual++;
        maxTexto = 0;
      }
    } else if (textoActual === 6) {
       if (mouseEnBoton(100, 350, 260, 60)) {
        pantalla = 8;
        textoActual = 0;
        maxTexto = 0;
        opacidadImagen = 0;
      }
     if (mouseEnBoton(440, 350, 260, 60)) {
        pantalla = 9;
        textoActual = 0;
        maxTexto = 0;
        opacidadImagen = 0;
      }
    }


  } 
  else if (pantalla === 7) {
    if (textoActual < textoPantalla7.length - 1) {
      if (maxTexto < textoPantalla7[textoActual].length) {
        maxTexto = textoPantalla7[textoActual].length;
      } else {
        textoActual++;
        maxTexto = 0;
      }
    } else if (textoActual === 4) {
      if (mouseEnBoton(100, 350, 260, 60)) {
        pantalla = 10;
        textoActual = 0;
        maxTexto = 0;
        opacidadImagen = 0;
      }
      if (mouseEnBoton(440, 350, 260, 60)) {
        pantalla = 11;
        textoActual = 0;
        maxTexto = 0;
        opacidadImagen = 0;
      }
    }
  }
 else if (pantalla === 8) {
    if (textoActual < textoPantalla8.length - 1) {
      if (maxTexto < textoPantalla8[textoActual].length) {
        maxTexto = textoPantalla8[textoActual].length;
      } else {
        textoActual++;
        maxTexto = 0;
      }
    } else if (textoActual === 4) {
     if (mouseEnBoton(100, 350, 260, 60)) {
        pantalla = 12;
        textoActual = 0;
        maxTexto = 0;
        opacidadImagen = 0;
      }
      if (mouseEnBoton(440, 350, 260, 60)) {
        pantalla = 13;
        textoActual = 0;
        maxTexto = 0;
        opacidadImagen = 0;
      }
    }
  }
 
 else if (pantalla === 9) {
    if (textoActual < textoPantalla9.length - 1) {
      if (maxTexto < textoPantalla9[textoActual].length) {
        maxTexto = textoPantalla9[textoActual].length;
      } else {
        textoActual++;
        maxTexto = 0;
      }
    } else if (textoActual === 3) { 
    if (mouseEnBoton(100, 350, 260, 60)) {
        pantalla = 10;
        textoActual = 0;
        maxTexto = 0;
        opacidadImagen = 0;
      }
     if (mouseEnBoton(440, 350, 260, 60)) {
        pantalla = 13;
        textoActual = 0;
        maxTexto = 0;
        opacidadImagen = 0;
      }
    }
  }


else if (pantalla === 10) {
    if (fondoPantalla10Actual === escenaPantalla10) {
      let distanciaHuellas = dist(mouseX, mouseY, 589, 397);
      if (distanciaHuellas < 100) {
        if (!yaSonoEncontrar) {
    sonidoEncontrar.play();
    yaSonoEncontrar = true;
      }  
        fondoPantalla10Actual = fondoPantalla10Nuevo; 
        textoActual = 0;
        maxTexto = 0;    
      }
    }
    else {
      if (textoActual < textoPantalla10.length - 1) {
        if (maxTexto < textoPantalla10[textoActual].length) {
          maxTexto = textoPantalla10[textoActual].length;
        } else {
          textoActual++; 
          maxTexto = 0; 
        }
      } 
     else if (textoActual === textoPantalla10.length - 1) {
        if (mouseEnBoton(100, 350, 260, 60)) {
          pantalla = 12;
          textoActual = 0;
          maxTexto = 0;
          opacidadImagen = 0;
        }
      if (mouseEnBoton(440, 350, 260, 60)) {
          pantalla = 13;
          textoActual = 0;
          maxTexto = 0;
          opacidadImagen = 0;
        }
      }
    }
}
 else if (pantalla === 11) {
    if (textoActual < textoPantalla11.length - 1) {
      if (maxTexto < textoPantalla11[textoActual].length) {
        maxTexto = textoPantalla11[textoActual].length;
      } else {
        textoActual++;
        maxTexto = 0;
      }
    } else if (textoActual === 3) {
      if (mouseEnBoton(100, 350, 260, 60)) {
        pantalla = 13;
        textoActual = 0;
        maxTexto = 0;
        opacidadImagen = 0;
      }
      if (mouseEnBoton(440, 350, 260, 60)) {
        pantalla = 12;
        textoActual = 0;
        maxTexto = 0;
        opacidadImagen = 0;
      }
    }
  }
   else if (pantalla === 12) {
    if (textoActual < textoPantalla12.length - 1) {
      if (maxTexto < textoPantalla12[textoActual].length) {
        maxTexto = textoPantalla12[textoActual].length;
      } else {
        textoActual++;
        maxTexto = 0;
      }
    } else if (textoActual === 6) {
      if (mouseEnBoton(100, 350, 260, 60)) {
        pantalla = 15;
        textoActual = 0;
        maxTexto = 0;
        opacidadImagen = 0;
      }
      if (mouseEnBoton(440, 350, 260, 60)) {
        pantalla = 14;
        textoActual = 0;
        maxTexto = 0;
        opacidadImagen = 0;
      }
    }
  }
   else if (pantalla === 13) {
    if (textoActual < textoPantalla13.length - 1) {
      if (maxTexto < textoPantalla13[textoActual].length) {
        maxTexto = textoPantalla13[textoActual].length;
      } else {
        textoActual++;
        maxTexto = 0;
      }
    } else if (textoActual === 2) {
      if (mouseEnBoton(100, 350, 260, 60)) {
        pantalla = 5;
        textoActual = 0;
        maxTexto = 0;
        opacidadImagen = 0;
      }
      if (mouseEnBoton(440, 350, 260, 60)) {
        pantalla = 12;
        textoActual = 0;
        maxTexto = 0;
        opacidadImagen = 0;
      }
    }
  }
  else if (pantalla === 14){ 
        if (textoActual < textoPantalla14.length - 1) {
      if (maxTexto < textoPantalla14[textoActual].length) {
        maxTexto = textoPantalla14[textoActual].length;
      } else {
        textoActual++;
        maxTexto = 0;
      }
    } else if (textoActual === 7) {
      if (mouseEnBoton(100, 350, 260, 60)) {
        pantalla = 16;
        textoActual = 0;
        maxTexto = 0;
        opacidadImagen = 0;
      }
      if (mouseEnBoton(440, 350, 260, 60)) {
        pantalla = 17;
        textoActual = 0;
        maxTexto = 0;
        opacidadImagen = 0;
      }
    }
  }
    else if (pantalla === 15) {
     if (textoActual < textoPantalla15.length - 1) {
      if (maxTexto < textoPantalla15[textoActual].length) {
        maxTexto = textoPantalla15[textoActual].length;
      } else {
        textoActual++;
        maxTexto = 0;
      }
    } 
   
    else if (textoActual === textoPantalla15.length - 1) {
      pantalla = 18;
      textoActual = 0;
      maxTexto = 0;
      opacidadImagen = 0;
    }
  }
  else if (pantalla === 16) {
    if (textoActual < textoPantalla16.length - 1) {
      if (maxTexto < textoPantalla16[textoActual].length) {
        maxTexto = textoPantalla16[textoActual].length;
      } else {
        textoActual++;
        maxTexto = 0;
      }
    } 
    else {
      if (mouseX > 360 && mouseX < 440 && mouseY > 325 && mouseY < 405) {  
       reiniciarAventuraGrafica();
      }
    }
  }
  else if (pantalla === 17) {
    textoActual++;
     if (textoActual >= textoPantalla17.length) {
      pantalla = 19;
      yCreditos = height;
    }
  }
    else if (pantalla === 18) {
    if (textoActual < textoPantalla18.length - 1) {
      if (maxTexto < textoPantalla18[textoActual].length) {
        maxTexto = textoPantalla18[textoActual].length;
      } else {
        textoActual++;
        maxTexto = 0;
      }
    } 
   
    else {
      if (mouseX > 360 && mouseX < 440 && mouseY > 325 && mouseY < 405) {  
        reiniciarAventuraGrafica();
      }
    }
  }

  else if (pantalla === 19) {
      if (mouseX > 360 && mouseX < 440 && mouseY > 325 && mouseY < 405) {  
        musicaPrincipal.stop();
        reiniciarAventuraGrafica();
      }
    }
}
