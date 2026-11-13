class Tiempo {
  constructor(posX, posY, imgReloj, ancho, alto) {
    this.posX = posX;
    this.posY = posY;
    this.reloj = imgReloj;
    this.ancho = ancho;
    this.alto = alto;
    this.segundos = 30;        
    this.ultimoSegundo = 0;    
  } 
  
  dibujar() {
    // Si pasó 1 segundo y todavía nos queda tiempo 
    if (millis() - this.ultimoSegundo >= 1000 && this.segundos > 0) {
      this.segundos--;          
      this.ultimoSegundo = millis(); 
    }
    
    push();
   
    imageMode(CENTER);
    image(this.reloj, this.posX, this.posY, this.ancho, this.alto);
    
 
    textSize(24);
    fill(255);
    textAlign(LEFT, CENTER);
    text("Tiempo: " + this.segundos, this.posX + 15, this.posY); 
    pop();
  }
 
  iniciarTiempo() {
    this.ultimoSegundo = millis(); 
  }
 
  reiniciarTiempo() {
    this.segundos = 30;
    this.ultimoSegundo = millis(); 
  }
}

 
