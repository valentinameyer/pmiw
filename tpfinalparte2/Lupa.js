class Lupa{
  constructor(miImagenLupa){
   this.lupa = miImagenLupa;
   this.tamanio = 70;
   this.posXLupa = 0;
   this.posYLupa = 0;
  }

dibujar(){
push();
imageMode(CENTER);
image(this.lupa, this.posXLupa, this.posYLupa, this.tamanio, this.tamanio);
pop();
}

mover(){
 this.posXLupa = mouseX;
 this.posYLupa = mouseY;
}
}
