function pantalla1 () {
  let animacion = (frameCount * velocidadImagen) % 1000;
  image(fondoInicio[0], -animacion, 0, 1000, 450);
  image(fondoInicio[0], -animacion +1000, 0, 1000, 450);
  drawingContext.shadowColor = color(0, 0, 0, 150); // Color y transparencia
  drawingContext.shadowBlur = 12;                   // Difuminado sombra
  drawingContext.shadowOffsetX = 5;                  // Despl horizontal
  drawingContext.shadowOffsetY = 5;                  // Despl vertical
  textFont(titulo);
  fill(255);
  textSize(36);
  text('El Misterio Del Valle Boscombe', 150, 200);
  drawingContext.shadowBlur = 0; // que no afecte a lo demas
  drawingContext.shadowOffsetX = 0;
  drawingContext.shadowOffsetY = 0;
  fill (213, 183, 137);
  noStroke();
  rect (280, 300, 200, 60, 15);
  textFont (texto1);
  fill (103, 89, 54);
  textSize(33);
  text('Empezar', 320, 340);
}


function pantalla2 () {
  // Fondo base de la primera imagen
  tint(255, 255);
  image(escenaPantalla2 [0], 0, 0, 800, 450);
  if (textoActual === 1) {
    if (opacidadImagen < 255) {
      opacidadImagen += 5; // Aumenta 5 de opacidad por frame
    }




    tint(255, opacidadImagen); //fade in
    image(escenaPantalla2[1], 0, 0, 800, 450);
  }


  noTint();


  if (textoActual < textoPantalla2.length) {
    dibujarConversacion(textoPantalla2);
  }
}




function pantalla3 () {
  tint(255, 255);
  image(escenaPantalla3 [0], 0, 0, 800, 450);
  if (textoActual >= 1) { //para que luego el texto que sigue sea con la escenaPantalla3[1]
    if (opacidadImagen < 255) {
      opacidadImagen += 5; // Aumenta 5 de opacidad por frame
    }




    tint(255, opacidadImagen); //fade in
    image(escenaPantalla3[1], 0, 0, 800, 450);
  }




  noTint();




  if (textoActual < textoPantalla3.length) {
    dibujarConversacion(textoPantalla3);
  }




  if (textoActual === 2) { // // Cuando llega a la pregunta "¿Qué decides hacer?" (índice 2) aparece Watson
    image(imgWatson, 100, 150, 200, 250);
    dibujarBotonesDecision("Acompañar a Holmes", "Quedarte en Londres");
  }
}
function pantalla4() {
  tint(255, 255);
  image(escenaPantalla4[0], 0, 0, 800, 450);
  if (textoActual >= 3) {
    if (opacidadImagen < 255) {
      opacidadImagen += 5;
    }




    tint(255, opacidadImagen);
    image(escenaPantalla4[1], 0, 0, 800, 450);
  }
  noTint();


  if (textoActual < textoPantalla4.length) {
    dibujarConversacion(textoPantalla4);
  }
  if (textoActual === 4) {
    dibujarBotonesDecision("Visitar a James en prisión", "Investigar la escena del crimen");
  }
}


function pantalla5() {
  if (musicaPrincipal.isPlaying()) {
    musicaPrincipal.stop();
  }
 if (!sonidoPerder.isPlaying()) {
    sonidoPerder.play();
  }

  image(escenaPantalla5, 0, 0, 800, 450);
  if (textoActual < textoPantalla5.length) {
    dibujarConversacion(textoPantalla5);
    botonReiniciar();
  }
}




function pantalla6() {
  tint (255, 255);
  image(escenaPantalla6[0], 0, 0, 800, 450);




  if (textoActual >= 1) {
    if (opacidadImagen < 255) {
      opacidadImagen += 5;
    }
    tint (255, opacidadImagen);
    image (escenaPantalla6 [1], 0, 0, 800, 450);
  }




  if (textoActual >= 3) {
    if (opacidadImagen < 255) {
      opacidadImagen += 5;
    }
    tint (255, opacidadImagen);
    image (escenaPantalla6 [2], 0, 0, 800, 450);
    if (textoActual === 6) {
      image(escenaPantalla6[2], 0, 0, 800, 450);
      dibujarBotonesDecision("La palabra 'rat' ", "La boina gris");
    }
  }




  noTint ();




  if (textoActual < textoPantalla6.length) {
    dibujarConversacion(textoPantalla6);
  }
}




function pantalla7() {
  image(escenaPantalla7, 0, 0, 800, 450);
  if (textoActual < textoPantalla7.length) {
    dibujarConversacion(textoPantalla7);
  }
  if (textoActual === 4) {
    dibujarBotonesDecision("Las huellas", "La piedra");
  }
}
function pantalla8() {
  tint(255, 255);


  if (textoActual >= 3) {
    image(escenaPantalla8[0], 0, 0, 800, 450);
  } else if (textoActual >= 1) {
    image(escenaPantalla8[1], 0, 0, 800, 450);
  } else {
    image(escenaPantalla8[0], 0, 0, 800, 450);
  }


  if (textoActual >= 3) {
    if (opacidadImagen < 255) {
      opacidadImagen += 5;
    }
    tint(255, opacidadImagen);
    image(imgSherlockHolmes, 160, 120, 200, 300);
  }
  noTint();
  if (textoActual < textoPantalla8.length) {
    dibujarConversacion(textoPantalla8);
  }
  if (textoActual === 4) {
    dibujarBotonesDecision("Buscar vinculos de Ballarat", "No darle importancia");
  }
}
function pantalla9(){
tint(255, 255);
image(escenaPantalla9[0], 0, 0, 800, 450);




if (textoActual >= 1) {
  if (opacidadImagen < 255) {
    opacidadImagen += 5;
  }
  tint(255, opacidadImagen);
  image(imgGloboPensamientoJames,320, 130, 180, 120);
}


if (textoActual >= 2) {
  noTint();
  image(escenaPantalla9[1], 0, 0, 800, 450);
}




noTint();




if (textoActual < textoPantalla9.length) {
  dibujarConversacion(textoPantalla9);
}
if (textoActual === 3) {
  dibujarBotonesDecision("Seguir las huellas","Ignorar la pista");
}
}




function pantalla10() {
  
  image(fondoPantalla10Actual, 0, 0, 800, 450);
  if (fondoPantalla10Actual === escenaPantalla10) {
    image(imgHuellas, 400, 200, 400, 400);
    push();
    imageMode(CENTER);
    image(imgLupa, mouseX, mouseY, 100, 100);
    pop();
  } else if (fondoPantalla10Actual === fondoPantalla10Nuevo) {
    if (textoActual < textoPantalla10.length) {
      dibujarConversacion(textoPantalla10);
    }
  }
  if (textoActual === 4) {
    dibujarBotonesDecision("El asesino conocia la zona", "Las huellas no son suficientes");
  }
}




function pantalla11(){
image(escenaPantalla11, 0, 0, 800, 450);
  if (textoActual < textoPantalla11.length) {
  dibujarConversacion(textoPantalla11);
}
if (textoActual === 3) {
  dibujarBotonesDecision("Acusar a James","Buscar más pistas");
}
}




function pantalla12(){

 image(escenaPantalla12, 0, 0, 800, 450);

if (textoActual >= 1) {
    image(globoPensamientoHolmes[0], 360, 105, 180, 120);
  }
  if (textoActual >= 2) {
    image(globoPensamientoHolmes[1], 220, 105, 180, 120);
  }
  if (textoActual >= 3) {
    image(globoPensamientoHolmes[2], 220, 200, 180, 120);
  }
  if (textoActual >= 4) {
    image(globoPensamientoHolmes[3], 400, 200, 180, 120);
  }
  if (textoActual >= 5) {
    image(globoPensamientoHolmes[4], 400, 290, 180, 120);
  }


  if (textoActual < textoPantalla12.length) {
    dibujarConversacion(textoPantalla12);
  }
  
  if (textoActual === 6) {
    dibujarBotonesDecision("Un desconocido de la región", "John Turner");
  }
}


function pantalla13(){
image(escenaPantalla13, 0, 0, 800, 450);
  if (textoActual < textoPantalla13.length) {
  dibujarConversacion(textoPantalla13);
}
if (textoActual === 2) {
  dibujarBotonesDecision("Aceptar la teoría de Lestrade","Buscar más pistas");
}
}
  
function dibujarConversacion(arregloTexto) {
  dibujarCajaConversacion(arregloTexto);
  textFont(texto1);
  textSize(20);
  fill(255);
  let frase = arregloTexto[textoActual]; //Se guarda la oración en la variable frase
  if (maxTexto < frase.length) {
    maxTexto++;
  }
  
  text(frase.substring(minTexto, maxTexto), 220, 45, 350);
}


function pantalla14(){ 
   image(escenaPantalla14[0], 0, 0, 800, 450);


  if (textoActual >= 1) {
    image(escenaPantalla14[1], 0, 0, 800, 450);
  }


  if (textoActual >= 4) {
    image(escenaPantalla14[2], 0, 0, 800, 450);
  }


  if (textoActual >= 6) {
    image(escenaPantalla14[3], 0, 0, 800, 450);
  }


    if (textoActual === 7) {
    dibujarBotonesDecision(" Guardarla para salvar a James", "Contarle a la policia");
    }
if (textoActual < textoPantalla14.length) {
    dibujarConversacion(textoPantalla14);
}
}
function pantalla15(){
image(escenaPantalla15, 0, 0, 800, 450);
if (textoActual < textoPantalla15.length) {
    dibujarConversacion(textoPantalla15);
  }
}


function pantalla16 (){
   if (musicaPrincipal.isPlaying()) {
    musicaPrincipal.stop();
  }
  if (!sonidoPerder.isPlaying()) {
    sonidoPerder.play();
  }

  image (escenaPantalla16 [0], 0, 0, 800, 450); 
 
 if(textoActual >= 3) {
   image(escenaPantalla16 [1], 0, 0, 800, 450);
    botonReiniciar();
 }
if (textoActual < textoPantalla16.length) {
    dibujarConversacion(textoPantalla16);
}
}
function pantalla17(){
 

  if (!yaSonoGanar) {
    sonidoGanar.play();
    yaSonoGanar = true;
  }  

  image(fondoFinal17, 0, 0, 800, 450);

  if (textoActual >= 2) {
    animarFestejos(festejoSherlock, 250, 75, 180, 380, 16);
    animarFestejos(festejoWatson, 450, 65, 180, 400, 16);
  }

  if (textoActual < textoPantalla17.length) {
    dibujarConversacion(textoPantalla17);
  }
}


function pantalla18(){
if (musicaPrincipal.isPlaying()) {
    musicaPrincipal.stop();
  }
  if (!sonidoPerder.isPlaying()) {
    sonidoPerder.play();
  }

 image(escenaPantalla18,0,0,800,450);
 if (textoActual < textoPantalla18.length) {
    dibujarConversacion(textoPantalla18);
    botonReiniciar();
  }
}
function pantalla19 (){
  push();
 image(fondoInicio [0], 0, 0, 800, 450); 
 
  drawingContext.shadowColor = color(0, 0, 0, 150); 
  drawingContext.shadowBlur = 12;
  drawingContext.shadowOffsetX = 5;                  
  drawingContext.shadowOffsetY = 5;  
 
 fill (255)
 textAlign (CENTER, CENTER);
 
 textFont(titulo);
  textSize(30);
  text('Trabajo realizado por:', width/2, yCreditos);
 
 textFont (texto1);
 textSize (26);
  text("Valentina Meyer - 125634/1", width / 2, yCreditos + 60);
  text("Ornella Rapisarda - 125668/2", width / 2, yCreditos + 90);
  text("FDA", width / 2, yCreditos + 140);
  text("PMIW - 2026", width / 2, yCreditos + 180);
  text("Profesor: Matias Jauregui Lorda", width / 2, yCreditos + 240);
  text("Comisión 2", width / 2, yCreditos + 280);
  
    yCreditos -= 1;
  if (yCreditos < 20) {
    yCreditos = 20;
    botonReiniciar();
  }
  pop();
}
  
function dibujarConversacion(arregloTexto) {
  dibujarCajaConversacion(arregloTexto);
  textFont(texto1);
  textSize(20);
  fill(255);
  let frase = arregloTexto[textoActual]; //Se guarda la oración en la variable frase
  if (maxTexto < frase.length) {
    maxTexto++;
  }




  text(frase.substring(minTexto, maxTexto), 220, 45, 350);
}




function dibujarCajaConversacion(arregloTexto) {
  if (textoActual < arregloTexto.length) {
    push();
    noStroke();
    fill(20, 20, 20, 200);
    rect(200, 20, 400, 70, 15);
    pop();
  }
}




function dibujarBotonesDecision(botonIzq, botonDer) {
  push();
  textFont(texto1);
  textSize(20);
  textAlign(CENTER);




  //botón izquierdo
  fill(20, 20, 20, 220);
  stroke(53, 67, 59, 137);
  strokeWeight(2);
  rect(100, 350, 260, 60, 12);
  noStroke();
  fill(255);
  text(botonIzq, 220, 385);




  //botón derecho
  fill(20, 20, 20, 220);
  stroke(53, 67, 59, 137);
  strokeWeight(2);
  rect(440, 350, 260, 60, 12);
  noStroke();
  fill(255);
  text(botonDer, 570, 385);
  pop();
}


function mouseEnBoton(x, y, ancho, alto) { //calcula si el mouse hizo clic adentro de los botones
  if (mouseX > x && mouseX < x + ancho && mouseY > y && mouseY < y + alto) {
    return true;
  } else {
    return false;
  }
}


function animarFestejos (frames, x, y, w, h, velocidad){
  contador++; // Suma 1 en cada frame
  
  if (contador >= velocidad) {
    indice = (indice + 1) % frames.length; //avanza de frame
    contador = 0;
  }
  
  image(frames[indice], x, y, w, h);
}


function botonReiniciar() {
  noFill();
  stroke(0);
  strokeWeight(3);
  rect(360, 325, 80, 80, 15);
  noStroke();
  image(imgFlechaReiniciar, 375, 340, 50, 50);
}

function reiniciarAventuraGrafica() {
  pantalla = 1;
  textoActual = 0;
  maxTexto = 0;
  opacidadImagen = 0;
  fondoPantalla10Actual = escenaPantalla10;
  contador = 0;
  indice = 0;
  yaSonoEncontrar = false;
  sonidoPerder.stop();
  yaSonoPerder = false;
  
  yaSonoGanar = false;
  }
