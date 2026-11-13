class Juego {
  constructor(fuenteTit, fuenteTex, fondoInicio, fondoCrimen, fondoPiedra, imgReiniciar, fondoPiedraDerrota, 
  fondoHuellas, imgArregloHuellas, imgLupa, imgSherlock, imgCursorTutorial, imgContadorDeHuellas, fondoCasa, imgArregloCosas, 
  barraContadoraDeCosas, cronometro, fondoPerderJuegoCasa, fondoGanarCarcel, imgParaCreditos, musicaPrinci, sonidoEncontrarHuellasyCosas, 
  sonidoVictoria, sonidoDerrota, musicaSuspenso) {
  
  this.fuenteTitulo = fuenteTit;
  this.fuenteTexto = fuenteTex;
  this.fondoPantallaInicio = fondoInicio;
  this.fondoPantallaCrimen = fondoCrimen;
  this.fondoPantallaPiedra = fondoPiedra;
  this.imgFlechaReiniciar = imgReiniciar;
  this.fondoPantallaDerrotaPiedra = fondoPiedraDerrota;
  this.fondoPantallaHuellas = fondoHuellas;
  this.imgHuellas = imgArregloHuellas;
  this.lupaImg = imgLupa;
  this.imgSherlockTutorial = imgSherlock;
  this.cursorTutorial = imgCursorTutorial;
  this.imgcontadorHuellas = imgContadorDeHuellas;
  this.fondoCasaJohn = fondoCasa;
  this.imgCosa = imgArregloCosas;  
  this.barraContadora = barraContadoraDeCosas;
  this.reloj = cronometro;
  this.fondoPantallaPerderJuegoCasa = fondoPerderJuegoCasa;
  this.fondoPantallaGanar = fondoGanarCarcel;
  this.imgFlechaDerecha = imgParaCreditos;
  this.yCreditos = 450;
    
    this.pantalla = 1;
    this.velocidadFondo = 1; // para fondo parallax inicio
    this.opacidadImagen = 0;
    this.huellas = [];
    this.lupa;
    this.cosas = [];
    this.reloj;
    this.textoIntro = [
      "Un hombre fue asesinado en el valle de Boscombe", 
      "y su hijo, James McCarthy, es el principal sospechoso.",
      "Sin embargo las huellas parecen apuntar hacia otra persona.",
      "James, hijo de la víctima afirmó que su padre conocía a John Turner.",
      "¿Qué decidís investigar?"
    ];
    this.minTexto = 0; 
    this.maxTexto = 0; 
    this.textoActual = 0; 
    this.opacidadImagen = 0; 
    this.textoPiedra = [
      "Holmes cree que la piedra pudo haber sido el arma para matar a McCarthy.",
      "Sin embargo, esta pista no alcanza para señalar al responsable del crimen", 
      "El caso sigue sin resolverse…"
    ];
    this.textoTerminado = false;
    this.mostrarTutorialHuellas = true;
    this.crearHuellas();
    this.crearLupa();
    this.crearCosas();
    this.contadorHuellasEncontradas = 0;
    this.textoCasa = [
      "Con las huellas encontradas, llegaste a la casa de John.", 
      "¡¡¡Ayuda a Holmes a encontrar pistas que lo incriminen!!!"
    ];
    this.crearReloj();
    this.contadorCosasEncontradas = 0;
    this.boina;
    this.perchero;
    this.mapa;
    this.cuadroJohn;
    this.cuadroMcCarthy;
    this.botas;
    this.textoPerderJuegoCasa = 
    ["John llega a casa y al descubrir a Holmes y Watson los ataca" , 
    "El caso sigue sin resolverse..."];
    this.textoGanarJuego = 
   ["Lograste encontrar las pistas necesarias para culpar a John" ,
    "¡¡¡Sherlock Y Watson festejan de la alegria!!!"];
    
    this.musicaPrincipal = musicaPrinci;
    this.sonidoEncontrar = sonidoEncontrarHuellasyCosas;
    this.sonidoGanar = sonidoVictoria;
    this.sonidoPerder = sonidoDerrota;
    this.musicaBusqueda = musicaSuspenso;
  }  

  dibujar() { 
    if (this.pantalla === 1) {
      this.dibujarPantallaInicio();
    } else if (this.pantalla === 2) {
      this.dibujarPantallaCrimen();
    } else if (this.pantalla === 3) {
      this.dibujarPantallaPiedra(); 
    } else if (this.pantalla === 4) {
      this.dibujarPantallaHuellas();
    } else if (this.pantalla === 5){
      this.dibujarPantallaCasa(); 
    } else if (this.pantalla === 6){
      this.ganarJuego();
    } else if (this.pantalla === 7){
      this.dibujarPantallaCreditos();
    } else if (this.pantalla === 8){
      this.perderJuegoCasa();
    }
  } 
  
   click() { 
    if (this.pantalla === 1) {
      if (mouseX > 280 && mouseX < 480 && mouseY > 300 && mouseY < 360) {
        this.pantalla = 2; 
        this.textoActual = 0;
        this.maxTexto = 0;
        
        // Reproducir la música recién cuando se hace clic en Empezar
        if (!this.musicaPrincipal.isPlaying()) {
          this.musicaPrincipal.loop();
        }
      }
    }
    else if (this.pantalla === 2) {
      if (this.textoActual < this.textoIntro.length) {
        let frase = this.textoIntro[this.textoActual];
        if (this.maxTexto < frase.length) {
          this.maxTexto = frase.length;
        } else {
          this.textoActual++; 
          this.maxTexto = 0;
        }
      } 
      else {
        // Opción La piedra
        if (mouseX > 100 && mouseX < 360 && mouseY > 300 && mouseY < 350) {
          this.pantalla = 3; 
          this.textoActual = 0;
          this.maxTexto = 0;
          this.textoTerminado = false;
        if (this.musicaPrincipal.isPlaying()) {
         this.musicaPrincipal.stop(); 
 }
        }
        // Opción Las huellas
        else if (mouseX > 440 && mouseX < 700 && mouseY > 300 && mouseY < 350) {
          this.pantalla = 4; 

         if (this.musicaPrincipal.isPlaying()) {
            this.musicaPrincipal.pause();
          }
         if(!this.musicaBusqueda.isPlaying()){
          this.musicaBusqueda.play(); 
         }
        }
      }
    }
    
    else if (this.pantalla === 3) {
      if (!this.textoTerminado) {
        if (this.maxTexto < this.textoPiedra[this.textoActual].length) {
          this.maxTexto = this.textoPiedra[this.textoActual].length;
        } else {
          this.textoActual++;
          this.maxTexto = 0;
  
          if (this.textoActual >= this.textoPiedra.length) {
            this.textoTerminado = true; 
            if(!this.sonidoPerder.isPlaying()){
              this.sonidoPerder.play();
            }
          }
        }
      } 
      else {
        if (mouseX > 360 && mouseX < 440 && mouseY > 280 && mouseY < 350) {
          this.reiniciarJuego();
        }
      }
    }
    else if (this.pantalla === 4) {
      if (this.mostrarTutorialHuellas) {
        if (mouseX > 300 && mouseX < 500 && mouseY > 320 && mouseY < 370) {
          this.mostrarTutorialHuellas = false; 
        }
      } else {
        for (let i = 0; i < this.huellas.length; i++) {
          let h = this.huellas[i];
          let distancia = dist(this.lupa.posXLupa, this.lupa.posYLupa, h.posX, h.posY);
          if (distancia < 25 && h.visible) {
            h.desaparecer();
            this.contadorHuellasEncontradas++;
            if (this.contadorHuellasEncontradas === 5) {
              this.pantalla = 5; 
              this.textoActual = 0;
              this.maxTexto = 0;
              this.textoTerminado = false;
              
              if(!this.sonidoEncontrar.isPlaying()){
            this.sonidoEncontrar.play();
            }
          }
          }
        }
      }
    }
    else if (this.pantalla === 5) {
      if (!this.textoTerminado) {
        if (this.maxTexto < this.textoCasa[this.textoActual].length) {
          this.maxTexto = this.textoCasa[this.textoActual].length;
        } else {
          this.textoActual++;
          this.maxTexto = 0;

          if (this.textoActual >= this.textoCasa.length) {
            this.textoTerminado = true; 
            this.reloj.iniciarTiempo(); 
          }
        }
      } else {
        for (let i = 0; i < this.cigarrillos.length; i++) {
          let c = this.cigarrillos[i];
          if (dist(this.lupa.posXLupa, this.lupa.posYLupa, c.posX, c.posY) < 25 && c.visible) {
            c.desaparecer();
            this.contadorCosasEncontradas++;
          }
        }
       
        let cosasIndividuales = [this.boina, this.perchero, this.mapa, this.cuadroJohn, this.cuadroMcCarthy, this.botas];
        
        for (let i = 0; i < cosasIndividuales.length; i++) {
          let ci = cosasIndividuales[i];
          if (dist(this.lupa.posXLupa, this.lupa.posYLupa, ci.posX, ci.posY) < 25 && ci.visible) {
            ci.desaparecer();
            this.contadorCosasEncontradas++;
          }
        }
       
        if (this.contadorCosasEncontradas === 9) {
          this.pantalla = 6; 
          this.textoActual = 0;
          this.maxTexto = 0;
          this.textoTerminado = false;
          
          
          if (!this.sonidoGanar.isPlaying()) {
            this.sonidoGanar.play();
          }
        }
      }
    }
    else if (this.pantalla === 6) {
      let frase = this.textoGanarJuego[this.textoActual];
      
      if (this.maxTexto < frase.length) {
        this.maxTexto = frase.length;
      } else {
        if (this.textoActual < this.textoGanarJuego.length - 1) {
          this.textoActual++;
          this.maxTexto = 0;
        } else {
          if (mouseX > 360 && mouseX < 440 && mouseY > 280 && mouseY < 350) {
            this.pantalla = 7;
            this.textoActual = 0;
            this.maxTexto = 0;
            
            if(this.musicaBusqueda.isPlaying()){
            this.musicaBusqueda.stop();
            }
            if(!this.musicaPrincipal.isPlaying()){
            this.musicaPrincipal.play();
            }
        }
      }
    }
   }
    else if (this.pantalla === 7) {
      if (this.yCreditos <= 15) {
        if (mouseX > 360 && mouseX < 440 && mouseY > 320 && mouseY < 390) {
          this.reiniciarJuego();
        }
      }
    }
    else if (this.pantalla === 8) {
      let frase = this.textoPerderJuegoCasa[this.textoActual];
      
      if (this.maxTexto < frase.length) {
        this.maxTexto = frase.length;
      } else {
        if (this.textoActual < this.textoPerderJuegoCasa.length - 1) {
          this.textoActual++;
          this.maxTexto = 0;
          if(this.musicaBusqueda.isPlaying()){
            this.musicaBusqueda.stop();
            }
            if(!this.sonidoPerder.isPlaying()){
            this.sonidoPerder.play();
            }
        } else {
          if (mouseX > 360 && mouseX < 440 && mouseY > 280 && mouseY < 350) {
            this.reiniciarJuego();
          }
        }
      }
    }
  }
  
  dibujarPantallaInicio() {
   let animacion = (frameCount * this.velocidadFondo) % 1000;
    image(fondoPantallaInicio, -animacion, 0, 1000, 400);
    image(fondoPantallaInicio, -animacion + 1000, 0, 1000, 400);
  
    drawingContext.shadowColor = color(0, 0, 0, 150); 
    drawingContext.shadowBlur = 12;                   
    drawingContext.shadowOffsetX = 5;                
    drawingContext.shadowOffsetY = 5;                 
  
    textFont(fuenteTitulo);
    fill(255);
    textSize(36);
    textAlign(LEFT);
    text('El Misterio Del Valle Boscombe', 170, 200);
  
    drawingContext.shadowBlur = 0; 
    drawingContext.shadowOffsetX = 0;
    drawingContext.shadowOffsetY = 0;
  
    fill(213, 183, 137);
    noStroke();
    rect(280, 300, 200, 60, 15);
    textFont(fuenteTexto);
    fill(103, 89, 54);
    textSize(33);
    textAlign(LEFT);
    text('Empezar', 322, 340);
  } 
  
  dibujarPantallaCrimen() {
    image(fondoPantallaCrimen, 0, 0, 800, 400);
    if (this.textoActual < this.textoIntro.length) {
      this.dibujarConversacion(this.textoIntro);
    } 
    if (this.textoActual >= this.textoIntro.length) {
      this.dibujarBotonesDecision("La piedra", "Las huellas");
    }
  }

  dibujarPantallaPiedra() {
    if (!this.textoTerminado) {
      image(fondoPantallaPiedra, 0, 0, 800, 400);
      this.dibujarConversacion(this.textoPiedra);
    } else {
      this.perderJuego();
    }
  }
  
  dibujarPantallaHuellas() {
    if (this.mostrarTutorialHuellas) {
      background(30, 30, 30); 

      push();
      textFont(fuenteTexto);
      fill(255);
      textSize(22);
      textAlign(CENTER);
      text("Ayuda a Holmes haciendo clic sobre las huellas ocultas en el bosque", 400, 50);
      pop();

      push();
      fill(50, 50, 50);
      stroke(200, 180, 140);
      strokeWeight(2);
      rect(150, 80, 500, 220, 10);
      
      image(fondoPantallaHuellas, 160, 90, 480, 200);
      image(imgSherlockTutorial, 132, 250, 100, 150);
      image(cursorTutorial, 470, 220, 50, 50);
      
      imageMode(CENTER);
      image(imgHuellas[0], 320, 189, 20, 20);
      image(imgHuellas[1], 405, 125, 20, 20);
      image(imgHuellas[2], 480, 226, 20, 20);
      pop();

      push();
      fill(213, 183, 137);
      noStroke();
      rect(300, 320, 200, 50, 12);
      
      textFont(fuenteTexto);
      fill(103, 89, 54);
      textSize(24);
      textAlign(CENTER, CENTER);
      text("Empezar", 400, 340);
      pop();
    } else {
      image(fondoPantallaHuellas, 0, 0, 800, 400);
      image(imgcontadorHuellas, 620, 325, 80, 80);
      
      for (let i = 0; i < this.huellas.length; i++) {
        this.huellas[i].dibujar();
      }
      
      this.lupa.dibujar();
      this.lupa.mover();
      
      push(); 
      textFont(fuenteTexto);
      fill(255);
      textSize(24);
      text(this.contadorHuellasEncontradas + "/5", 690, 346);
      pop();
    }
  }
  
  
  dibujarPantallaCasa() {
    if (!this.textoTerminado) {
       image(this.fondoCasaJohn, 0, 0, 800, 400); 
       this.dibujarConversacion(this.textoCasa);
    } else {
       image(this.fondoCasaJohn, 0, 0, 800, 400); 

       image(this.barraContadora, 240, 280, 350, 200);

       for (let i = 0; i < this.cigarrillos.length; i++) {
         this.cigarrillos[i].dibujar();
       }

       this.boina.dibujar();
       this.perchero.dibujar();
       this.mapa.dibujar();
       this.cuadroJohn.dibujar();
       this.cuadroMcCarthy.dibujar();
       this.botas.dibujar();

       this.lupa.mover();
       this.lupa.dibujar();

       
       push();
       textFont(this.fuenteTexto);
       fill(255);
       textSize(24);
       text(this.contadorCosasEncontradas + "/9", 600, 370); 
       pop();

       
       this.reloj.dibujar(); 

        if (this.reloj.segundos <= 0) {
      this.pantalla = 8;
      this.textoActual = 0;
      this.maxTexto = 0;
    }
    }
  }
  
  dibujarConversacion(arregloTexto) {
    this.dibujarCajaConversacion(arregloTexto);
  
    textFont(fuenteTexto);
    textSize(20);
    fill(255);
  
    let frase = arregloTexto[this.textoActual]; //guarda la oracion
  
    if (this.maxTexto < frase.length) {
      this.maxTexto++;
    }
    text(frase.substring(this.minTexto, this.maxTexto), 220, 45, 350);
  }
  
  dibujarCajaConversacion(arregloTexto) {
    if (this.textoActual < arregloTexto.length) {
      push();
      noStroke();
      fill(20, 20, 20, 200);
      rect(200, 20, 400, 70, 15);
      pop();
    }
  }
  
  dibujarBotonesDecision(botonIzq, botonDer) {
    push();
    textFont(fuenteTexto);
    textSize(20);
    textAlign(CENTER);
  
    // Botón izquierdo
    fill(20, 20, 20, 220);
    stroke(53, 67, 59, 137);
    strokeWeight(2);
    rect(100, 300, 260, 50, 12);
    noStroke();
    fill(255);
    text(botonIzq, 230, 330);
  
    // Botón derecho
    fill(20, 20, 20, 220);
    stroke(53, 67, 59, 137);
    strokeWeight(2);
    rect(440, 300, 260, 50, 12);
    noStroke();
    fill(255);
    text(botonDer, 570, 330);
    pop();
  }
  
  crearHuellas() {
    this.huellas = [];
    let posXhuellas = [44, 276, 531, 580, 705];
    let posYhuellas = [213, 213, 260, 362, 191];

    for (let i = 0; i < 5; i++) {
      this.huellas[i] = new Huellas(posXhuellas[i], posYhuellas[i], imgHuellas[i]);
    }
  }
    
  crearLupa() {
    this.lupa = new Lupa(lupa);
  }
  
  crearCosas() {
    this.cigarrillos = [];
    let posXcigarrillos = [548, 263, 627];
    let posYcigarrillos = [263, 134, 308];
    for (let i = 0; i < 3; i++) {
      this.cigarrillos[i] = new Cosas(posXcigarrillos[i], posYcigarrillos[i], imgCosa[i + 6], 25, 25);
    }
 
    this.boina = new Cosas(483, 311, imgCosa[0], 30, 30);
    this.perchero = new Cosas(420, 170, imgCosa[1], 90, 90);
    this.mapa = new Cosas(740, 137, imgCosa[2], 25, 25);
    this.cuadroJohn = new Cosas(624, 165, imgCosa[3], 40, 40);
    this.cuadroMcCarthy = new Cosas(337, 270, imgCosa[4], 25, 30);
    this.botas = new Cosas(200, 300, imgCosa[5], 40, 40);
  }
  
  crearReloj() {
  this.reloj = new Tiempo(650, 79, reloj, 40, 40); 
  }
  
  ganarJuego() {
     push();
    image(this.fondoPantallaGanar, 0, 0, 800, 400);
    pop();
    
      push();
    drawingContext.shadowColor = color(0, 0, 0, 150); 
    drawingContext.shadowBlur = 12;                   
    drawingContext.shadowOffsetX = 5;                
    drawingContext.shadowOffsetY = 5;                 
    
    textFont(fuenteTitulo);
    fill(2, 222, 77);
    textSize(30);
    textAlign(CENTER);
    text("HAS GANADO", 400, 200);
  
    drawingContext.shadowBlur = 0; 
    drawingContext.shadowOffsetX = 0;
    drawingContext.shadowOffsetY = 0;
    pop();
    
    this.dibujarConversacion(this.textoGanarJuego);
    
    // Boton para ir a creditos
      noFill();
    stroke(0);
    strokeWeight(3);
    rect(360, 280, 80, 70, 15);
    noStroke();
    image(imgFlechaDerecha, 375, 290, 50, 50);
  }
   
  perderJuego() {
    push();
    image(fondoPantallaDerrotaPiedra, 0, 0, 800, 400);
    pop();
    
    drawingContext.shadowColor = color(0, 0, 0, 150); 
    drawingContext.shadowBlur = 12;                   
    drawingContext.shadowOffsetX = 5;                
    drawingContext.shadowOffsetY = 5;                 
    
    textFont(fuenteTitulo);
    fill(180, 30, 30);
    textSize(30);
    textAlign(CENTER);
    text("HAS PERDIDO", 400, 80);
  
    drawingContext.shadowBlur = 0; 
    drawingContext.shadowOffsetX = 0;
    drawingContext.shadowOffsetY = 0;
  
    //botón de reinicio
    noFill();
    stroke(0);
    strokeWeight(3);
    rect(360, 280, 80, 70, 15);
    noStroke();
    image(imgFlechaReiniciar, 375, 290, 50, 50);
  }
   
 perderJuegoCasa(){
    push();
    image(this.fondoPantallaPerderJuegoCasa, 0, 0, 800, 400);
    pop();
    
    push();
    drawingContext.shadowColor = color(0, 0, 0, 150); 
    drawingContext.shadowBlur = 12;                   
    drawingContext.shadowOffsetX = 5;                
    drawingContext.shadowOffsetY = 5;                 
    
    textFont(fuenteTitulo);
    fill(180, 30, 30);
    textSize(30);
    textAlign(CENTER);
    text("HAS PERDIDO", 400, 150);
  
    drawingContext.shadowBlur = 0; 
    drawingContext.shadowOffsetX = 0;
    drawingContext.shadowOffsetY = 0;
    pop();
    
    this.dibujarConversacion(this.textoPerderJuegoCasa);

    
    noFill();
    stroke(0);
    strokeWeight(3);
    rect(360, 280, 80, 70, 15);
    noStroke();
    image(imgFlechaReiniciar, 375, 290, 50, 50);
  }
  
  dibujarPantallaCreditos() {
    push();
    image(this.fondoPantallaInicio, 0, 0, 800, 400);
    pop();
    
    push();
    drawingContext.shadowColor = color(0, 0, 0, 150); 
    drawingContext.shadowBlur = 12;
    drawingContext.shadowOffsetX = 5;                  
    drawingContext.shadowOffsetY = 5;  
   
    fill(255);
    textAlign(CENTER, CENTER);
   
    textFont(fuenteTitulo);
    textSize(30);
    text('Trabajo realizado por:', width / 2, this.yCreditos);
   
    textFont(fuenteTexto);
    textSize(26);
    text("Valentina Meyer - 125634/1", width / 2, this.yCreditos + 60);
    text("Ornella Rapisarda - 125668/2", width / 2, this.yCreditos + 90);
    text("FDA", width / 2, this.yCreditos + 140);
    text("PMIW - 2026", width / 2, this.yCreditos + 180);
    text("Profesor: Matias Jauregui Lorda", width / 2, this.yCreditos + 240);
    text("Comisión 2", width / 2, this.yCreditos + 280);
    pop();

    if (this.yCreditos > 15) {
      this.yCreditos -= 1; // velocidad
    } else {
      this.yCreditos = 15;
      
     push();
      noFill();
      stroke(0);
      strokeWeight(3);
      rect(360, 320, 80, 70, 15); 
      noStroke();
      image(imgFlechaReiniciar, 375, 330, 50, 50);
      pop();
    }
  }
  
 reiniciarJuego() {
    this.pantalla = 1;
    this.textoActual = 0;
    this.maxTexto = 0;
    this.textoTerminado = false; 
    this.opacidadImagen = 0;
    this.contadorHuellasEncontradas = 0; 
    this.contadorCosasEncontradas = 0;  
    this.crearHuellas();                
    this.crearCosas();
    this.crearReloj();
    this.crearLupa();
    this.reloj.reiniciarTiempo();     
    this.yCreditos = 450;
    if (this.musicaPrincipal.isPlaying()) { 
    this.musicaPrincipal.stop(); }
    if (this.musicaBusqueda.isPlaying()) { 
    this.musicaBusqueda.stop(); }
    if (this.sonidoGanar && this.sonidoGanar.isPlaying()) { 
    this.sonidoGanar.stop(); }
    if (this.sonidoPerder && this.sonidoPerder.isPlaying()) { 
    this.sonidoPerder.stop(); }
  }
}
