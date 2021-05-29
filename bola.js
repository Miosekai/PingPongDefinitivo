class bola {

constructor(x,y){       
  //diametro,velocidad,r,g,b, x y para la bola
    this.x = x;
    this.y = y;
    this.diametro = 40;

    this.velocidad = 0;
	    
    this.r =(Math.random()*255);
    this.g =(Math.random()*255);
    this.b =(Math.random()*255);

}

pintar (){

    fill(this.r,this.g,this.b);
    circle(this.x, this.y, this.diametro );

}


mover (){

  this.x+= this.velocidad;
  this.y+= this.velocidad;


}

 left(){   // izquierda
    return this.x-this.diametro /2;
  }
 right(){ // derecha
    return this.x+this.diametro /2;
  }
 up(){   // arriba
    return this.y-this.diametro /2;
  }
 down(){  // abajo
    return this.y+this.diametro /2;
  }
  
  
// gets y set

    getX() {
        
        return this.x;
    
    }
    
     getY() {
    
        return this.y;
    
    }
    
     setX ( x) {
        
        this.x = x;
    
    }

     getDiam() {
    
        return this.diametro;
    
    }

}