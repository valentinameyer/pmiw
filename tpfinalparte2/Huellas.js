class Huellas{
  constructor(posX,posY,miImagenHuella){
    this.posX = posX;
    this.posY = posY;
    this.imgHuellas = miImagenHuella; //la imagen q tiene que mostrar
    this.visible = true;
    this.tamanio = 30;
   }


dibujar(){
if (this.visible){
 push();
 imageMode(CENTER);
 image(this.imgHuellas, this.posX, this.posY, this.tamanio, this.tamanio);
 pop();
}

}

desaparecer(){
this.visible = false;
}
}
