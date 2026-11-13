class Cosas {
  constructor(posX, posY, miImagenCosa, ancho, alto) {
    this.posX = posX;
    this.posY = posY;
    this.imgCosa = miImagenCosa;
    this.visible = true;
    this.ancho = ancho;
    this.alto = alto;
  }

  dibujar() {
    if (this.visible) {
      push();
      imageMode(CENTER);
      image(this.imgCosa, this.posX, this.posY, this.ancho, this.alto);
      pop();
    }
  }

  desaparecer() {
    this.visible = false; 
  }
}
