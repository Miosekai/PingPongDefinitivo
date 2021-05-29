class barra {

    constructor(x,y,ancho,alto,velocidad){    // para la barra
        
        
        this.x = x;
        this.y = y;
        this.ancho = ancho;
        this.alto = alto;
        
        this.velocidad=0;
        
        this.r =(Math.random()*255);
        this.g =(Math.random()*255);
        this.b =(Math.random()*255);
    }
   
   
    pintar (){     

        fill(this.r,this.g,this.b);
        rect(this.x-this.ancho/2,this.y-this.alto/2,this.ancho,this.alto);
    
    }


  mover(){

    this.y += this.velocidad;

  }
 
   izquierda(){
			  
    return this.x-this.ancho/2;
    
  }
    
  
   derecha(){
      
    return this.x+this.ancho/2;
    
  }
  
  
  
  arriba(){
      
    return this.y-this.alto/2;
    
  }
  abajo(){
      
    return this.y+this.alto/2;
    
  }





}