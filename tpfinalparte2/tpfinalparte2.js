//https://youtu.be/C-uY-FuWhsc

let objJuego; //obj principal
let fuenteTitulo;
let fuenteTexto;
let fondoPantallaInicio;
let fondoPantallaCrimen;
let imgFlechaReiniciar;
let imgFlechaDerecha;
let fondoPantallaDerrotaPiedra;
let fondoPantallaHuellas;
let imgHuellas = [];
let lupa;
let imgSherlockTutorial;
let cursorTutorial;
let imgcontadorHuellas;
let fondoCasaJohn; 
let imgCosa = [];
let barraContadora;
let reloj;
let fondoPantallaPerderJuegoCasa;
let fondoPantallaGanar;
let musicaPrincipal;
let sonidoEncontrar;
let sonidoGanar;
let sonidoPerder;
let musicaBusqueda; 

function preload(){
  fuenteTitulo = loadFont('assets/fuente.ttf');
  fuenteTexto = loadFont('assets/fuente1.ttf');
  fondoPantallaInicio = loadImage('assets/fondoinicio.jpg');
  fondoPantallaCrimen = loadImage('assets/escenacrimen.png');
  fondoPantallaPiedra = loadImage('assets/escenapiedra.jpg');
  imgFlechaReiniciar = loadImage ('assets/flechareinicio.png');
  fondoPantallaDerrotaPiedra = loadImage ('assets/pantallapiedraderrota.jpg');
  fondoPantallaHuellas = loadImage ('assets/fondopantallahuellas.jpg');

  for (let i = 0; i < 5; i++){
    imgHuellas.push (loadImage ('assets/huellas0' +i+ '.png'));
  } 

  imgSherlockTutorial = loadImage('assets/sherlockholmeshuellas.png');
  lupa = loadImage('assets/lupa.png');
  cursorTutorial = loadImage('assets/cursorTutorialHuellas.png');
  imgcontadorHuellas = loadImage ('assets/circulocontadorhuellas.png');
  fondoCasaJohn = loadImage ('assets/CasaJohn.jpg');

  for (let i = 0; i < 9; i++){
    imgCosa.push (loadImage ('assets/cosa0' +i+ '.png'));
  } 
  barraContadora = loadImage ('assets/barracontadorcosas.png');
  reloj = loadImage ('assets/cronometro.png');
  fondoPantallaPerderJuegoCasa = loadImage ('assets/fondoperderjuegocasa.jpg');
  fondoPantallaGanar = loadImage ('assets/fondoganarcarcel.jpg');
  imgFlechaDerecha = loadImage ('assets/Flechaderecha.png');
  
  musicaPrincipal = loadSound('assets/musicaprincipal.mp3');
  sonidoEncontrar = loadSound('assets/sonidoencontrar.mp3');
  sonidoGanar = loadSound('assets/sonidoganar.mp3');
  sonidoPerder = loadSound('assets/sonidoperder.mp3');
  musicaBusqueda = loadSound('assets/musicadefondobusqueda.mp3');
}

function setup() {
  createCanvas(800,400);
  objJuego = new Juego(fuenteTitulo, fuenteTexto, 
    fondoPantallaInicio, fondoPantallaCrimen, fondoPantallaPiedra, 
    imgFlechaReiniciar, fondoPantallaDerrotaPiedra, fondoPantallaHuellas, 
    imgHuellas, lupa, imgSherlockTutorial, cursorTutorial, imgcontadorHuellas, 
    fondoCasaJohn, imgCosa, barraContadora, reloj,fondoPantallaPerderJuegoCasa, 
    fondoPantallaGanar, imgFlechaDerecha, musicaPrincipal, sonidoEncontrar, sonidoGanar, sonidoPerder, musicaBusqueda);
}

function draw() {
  background(200);
  objJuego.dibujar();
  console.log("X: " + mouseX + " Y: " + mouseY);
}

function mousePressed(){
  objJuego.click(); //maneja los clicks según la pantalla actual
}
