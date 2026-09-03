   
  let ANCHO_CANVAS = 800;
  let ALTO_CANVAS = 600;
  let VELOCIDAD_BASE_ESCENARIO = 1; // velocidad de la capa base del fondo (bosque)
  
  //FONDO PARALLAX
  let fondo = []; // [0] bosque, [1] enemigo, [2] pájaro, [3] elemento decorativo
  
  //decorImagenes[0] es el enemigo, y su posición/tamaño/velocidad están en decorXBase[0], decorY[0], decorAncho[0], decorAlto[0] y decorVelocidad[0]. 
  let decorImagenes = []; // se arma en setup(), una vez cargado fondo[]. 
  let decorXBase = [820, 860, 900];
  let decorY = [430, 118, 350];
  let decorAncho = [60, 70, 90];
  let decorAlto = [60, 70, 90];
  let decorVelocidad = [2, 3, 1.5];
  
  let escenaDetenida = false;  // se activa cuando la casa termina de entrar: el fondo deja de moverse
  let tiempoCongelado = 0;     // valor de "tiempo" en el que queda congelado el fondo
  
  //CASA Y LOGO
  let casa, logo;
  let casaY = 218;              
  let margenDerechoCasa = 40;   // separación entre el borde derecho del canvas y la casa
  let casaXBase = 900;          // punto de referencia "fuera de pantalla" desde donde arranca a entrar la casa
  let casaXDestino;             // se calcula en setup() para que la casa entre completa en pantalla
  let casaXActual = casaXBase;
  let casaAnclada = false;      // una vez que llega a su lugar, se queda fija ahí
  
  let logoX, logoY;             // se calculan en setup() para quedar centrados según logo.width/height
  let puertaCasaX, puertaCasaY; // punto de "entrada" de la casa, se calcula en setup()
  
  //SPRITES DEL PERSONAJE LINK
  let personajeD = [];          // animación "caminar hacia la derecha" (9 frames: link00 a link08)
  let personajeDiagonal = [];   // animación "caminar hacia el fondo en diagonal" (3 frames: link010 a link012)
  
  //MÁQUINA DE ESTADOS DEL PERSONAJE
  let ESTADO_CAMINAR_DERECHA = 0;
  let ESTADO_CAMINAR_DIAGONAL = 1;
  let ESTADO_LOGO = 2;
  
  let estadoActual = ESTADO_CAMINAR_DERECHA; // el personaje arranca caminando directamente
  
  // índice de frame actual de cada animación (cada una lleva su propio contador)
  let frameDerecha = 0;
  let frameDiagonal = 0;
  
  // velocidad de animación de cada estado en milisegundos entre frame y frame
  let velocidadDerecha = 80;
  let velocidadDiagonal = 150;
  
  // velocidad de caminata hacia la derecha en píxeles por segundo
  let velocidadMovimientoDerecha = 240;
  
  // cuánto tarda en ms la caminata en diagonal hasta llegar a la puerta
  let DURACION_DIAGONAL = 2000;
  
  // posiciones en x que controlan la espera frente a la casa
  let UMBRAL_ESPERA;   // acá el personaje se detiene si la casa todavía no está anclada
  let UMBRAL_ENTRADA;  // recién a partir de acá (con la casa ya anclada) entra a la casa
  
  let marcaEnElTiempo = 0;     // controla cuándo toca avanzar de frame en la animación 
  let tiempoInicioEstado = 0;  // controla cuánto tiempo lleva el personaje en el estado actual
  let tiempoInicioEscena = 0;  // marca el "instante 0" de la escena; se resetea en reiniciarAnimacion()
  
  let posXInicial = 50;
  let posYInicial = 400;
  let posXPersonaje = posXInicial;
  let posYPersonaje = posYInicial;
  
  // punto donde el personaje deja de caminar derecho y arranca la diagonal hacia la casa
  let inicioDiagonalX = 0;
  let inicioDiagonalY = 0;
  
  
  function preload() {
  for (let i = 0; i < 4; i++) {
    fondo[i] = loadImage('assets/fondo0' + i + '.png');
  }
  
  for (let i = 0; i < 9; i++) {
    personajeD.push(loadImage('assets/link0' + i + '.png'));
  }
  
  for (let i = 10; i <= 12; i++) {
    personajeDiagonal.push(loadImage('assets/link0' + i + '.png'));
  }
  
  casa = loadImage('assets/casa.png');
  logo = loadImage('assets/logo.png');
  }
  
  
  function setup() {
  createCanvas(ANCHO_CANVAS, ALTO_CANVAS);
  
  casa.resize(casa.width / 1.5, casa.height / 1.5);
  logo.resize(logo.width / 1.5, logo.height / 1.5);
  
  //array de imágenes decorativas
  decorImagenes = [fondo[1], fondo[2], fondo[3]]; // enemigo, pájaro, elemento decorativo naranja
  
  // la posición final de la casa se calcula según su ancho real
  casaXDestino = ANCHO_CANVAS - casa.width - margenDerechoCasa;
  
  // el personaje espera un poco antes de la casa y, ya con el fondo frenado, camina un poco más hasta la puerta antes de entrar
   UMBRAL_ESPERA = casaXDestino - 150;
  if (UMBRAL_ESPERA < posXInicial + 50) {
    UMBRAL_ESPERA = posXInicial + 50;
  }
  
  UMBRAL_ENTRADA = casaXDestino - 40;
  if (UMBRAL_ENTRADA < UMBRAL_ESPERA + 30) {
    UMBRAL_ENTRADA = UMBRAL_ESPERA + 30;
  }
  
  // punto de "entrada" del personaje a la casa más o menos en el medio de la puerta
  puertaCasaX = casaXDestino + casa.width * 0.5;
  puertaCasaY = casaY + casa.height * 0.75;
  
  // el logo se centra en pantalla usando su tamaño real
  logoX = (ANCHO_CANVAS - logo.width) / 2;
  logoY = (ALTO_CANVAS - logo.height) / 4;
  
  tiempoInicioEstado = millis();
  marcaEnElTiempo = millis();
  tiempoInicioEscena = millis();
  }
  
  
  function draw() {
  background(0);
  
  // el bosque se congela en cuanto la casa termina de entrar
   let tiempoFondo;
  if (escenaDetenida) {
    tiempoFondo = tiempoCongelado;
  } else {
    tiempoFondo = (millis() / 10) % 1000;
  }
  
  
  let tiempoDecor = (millis() - tiempoInicioEscena) / 10; // los elementos decorativos siguen su propio ciclo siempre (nunca se congelan) y sin repetirse: 
   //al no tener el "% 1000" que sí tiene tiempoFondo, su valor nunca vuelve a 0
  
  dibujarFondoInfinito(fondo[0], VELOCIDAD_BASE_ESCENARIO, tiempoFondo); // capa base del bosque
  
  for (let i = 0; i < decorImagenes.length; i++) {
    dibujarElementoParallax(decorImagenes[i], decorXBase[i], decorY[i], decorAncho[i], decorAlto[i], decorVelocidad[i], tiempoDecor);
  }
  
  actualizarYDibujarCasa(tiempoFondo);
  
  actualizarEscena();
  }
  
  
  
  //FUNCIONES PROPIAS DEL SISTEMA DE ANIMACIÓN
   
   // Actualiza y devuelve el índice de frame de una animación según el tiempo transcurrido. El arrayFrames son las 9 imagenes del personaje
  function actualizarFrame(arrayFrames, frameActual, velocidad) {
  if (millis() - marcaEnElTiempo > velocidad) {
    marcaEnElTiempo = millis();
    frameActual = (frameActual + 1) % arrayFrames.length; // al llegar al final, vuelve a 0
  }
  return frameActual; 
  }
  
  // Dibuja el frame actual de una animación en (x,y), con una escala (1 = tamaño normal, <1 = más chico). Sirve para personajeD o personajeDiagonal.
  function dibujarPersonaje(arrayFrames, frame, x, y, escala = 1) {
  let img = arrayFrames[frame];
  image(img, x, y, img.width * escala, img.height * escala);
  }
  
  // Dibuja una capa de fondo en loop/bucle infinito (dos copias pegadas para que no se note el corte)
  function dibujarFondoInfinito(img, velocidad, tiempoBase) {
  let despl = (tiempoBase * velocidad) % 1000;
  image(img, -despl, 0, 1000, ALTO_CANVAS);
  image(img, -despl + 1000, 0, 1000, ALTO_CANVAS);
  }
  
  // Dibuja un elemento decorativo (del fondo) que se desplaza en parallax a su propia velocidad
  function dibujarElementoParallax(img, xBase, y, w, h, velocidad, tiempoBase) {
  let x = xBase - tiempoBase * velocidad;
  image(img, x, y, w, h);
  }
  
  // Hace que la casa entre en escena a la misma velocidad que la capa base del fondo. Cuando la casa termina de entrar, se queda en su lugar 
  //y congela el resto del escenario.
  function actualizarYDibujarCasa(tiempoFondoActual) {
  if (!casaAnclada) { 
    let tiempoPropio = (millis() - tiempoInicioEscena) / 10; 
    casaXActual = casaXBase - tiempoPropio * VELOCIDAD_BASE_ESCENARIO;
  
    if (casaXActual <= casaXDestino) {
      casaXActual = casaXDestino;
      casaAnclada = true;
      escenaDetenida = true;  // la casa ya está completa en pantalla: se frena el escenario
      tiempoCongelado = tiempoFondoActual;
    }
  }
  image(casa, casaXActual, casaY, casa.width, casa.height);
  }
  
  // Dibuja el logo con un fade-in: va apareciendo gradualmente entre tiempoInicio y tiempoInicio + duracion
  function dibujarConFade(img, x, y, w, h, tiempoInicio, duracion) {
  let progreso = (millis() - tiempoInicio) / duracion;
  
  
  if (progreso < 0) {
    progreso = 0;
  }
  if (progreso > 1) {
    progreso = 1;
  }
  
  
  let alpha = 0 + 255  * progreso; 
  
  tint(255, alpha);
  image(img, x, y, w, h);
  noTint();
  }
  
  // Máquina de estados de Link
  function actualizarEscena() {
  switch (estadoActual) {
  
    case ESTADO_CAMINAR_DERECHA: { //el personaje link camina hacia la derecha y espera a la casa
      frameDerecha = actualizarFrame(personajeD, frameDerecha, velocidadDerecha);
  
      // 1) camina hasta UMBRAL_ESPERA; si la casa todavía no ancló, se queda ahí
      //    "marcando el paso" (la animación sigue, pero no avanza más)
      // 2) apenas la casa ancla y el fondo se frena, retoma la marcha un poco más,
      //    hasta UMBRAL_ENTRADA, y recién ahí entra a la casa
      let puedeAvanzar = (posXPersonaje < UMBRAL_ESPERA) ||
                         (casaAnclada && posXPersonaje < UMBRAL_ENTRADA);
      if (puedeAvanzar) {
        posXPersonaje += velocidadMovimientoDerecha /60; 
      }
  
      dibujarPersonaje(personajeD, frameDerecha, posXPersonaje, posYPersonaje);
  
      if (casaAnclada && posXPersonaje >= UMBRAL_ENTRADA) {
        inicioDiagonalX = posXPersonaje;
        inicioDiagonalY = posYPersonaje;
        cambiarEstado(ESTADO_CAMINAR_DIAGONAL);
      }
      break;
    }
  
    case ESTADO_CAMINAR_DIAGONAL: { //el personaje link camina en diagonal hacia la puerta de la casa
      frameDiagonal = actualizarFrame(personajeDiagonal, frameDiagonal, velocidadDiagonal);
  
      let progreso = (millis() - tiempoInicioEstado) / DURACION_DIAGONAL; 
      
        
        if (progreso < 0) {
          progreso = 0;
        }
        if (progreso > 1) {
          progreso = 1;
        }
      
        
        posXPersonaje = inicioDiagonalX + (puertaCasaX - inicioDiagonalX) * progreso;
        posYPersonaje = inicioDiagonalY + (puertaCasaY - inicioDiagonalY) * progreso;
        let escala = 1 + (0.35 - 1) * progreso; //efecto de alejarse hacia el fondo
  
      dibujarPersonaje(personajeDiagonal, frameDiagonal, posXPersonaje, posYPersonaje, escala);
  
      if (progreso >= 1) { 
        cambiarEstado(ESTADO_LOGO); // ya entró a la casa
      }
      break;
    }
  
    case ESTADO_LOGO: { //aparece el logo con una animación de fade in
      dibujarConFade(logo, logoX, logoY, logo.width, logo.height, tiempoInicioEstado, 1000);
      break;
    }
  }
  }
  
  // función de cambio de estado: reinicia el cronómetro propio de cada transición
  function cambiarEstado(nuevoEstado) {
  estadoActual = nuevoEstado;
  tiempoInicioEstado = millis();
  marcaEnElTiempo = millis();
  }
  
  
  function reiniciarAnimacion(estadoInicial) {
  estadoActual = estadoInicial;
  frameDerecha = 0;
  frameDiagonal = 0;
  posXPersonaje = posXInicial;
  posYPersonaje = posYInicial;
  casaXActual = casaXBase;
  casaAnclada = false;
  escenaDetenida = false;
  tiempoCongelado = 0;
  tiempoInicioEstado = millis();
  marcaEnElTiempo = millis();
  tiempoInicioEscena = millis();
  }
  
  
  function keyPressed() {
  if (key === 'r' || key === 'R') {
    reiniciarAnimacion(ESTADO_CAMINAR_DERECHA); // si presiono la tecla "R" se reinicia toda la animación
  }
  }
