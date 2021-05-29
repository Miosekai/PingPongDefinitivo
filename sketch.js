
let Pelota; 
let barrita;
let RaqIzq;
let RaqDer;
let puntosIzq 
let puntosDer 

function setup() {
  createCanvas(800, 800);

	Pelota = new bola(400,300);       // bola 
		Pelota.velocidad = 3; 


    puntosIzq = 0;
	  puntosDer = 0;
		
		RaqIzq = new barra(20, height/2, 30,200);          // barra izquierda,forma
		RaqDer = new barra(width-20, height/2, 30,200);    // barra derecha,forma

}

function draw() {
  background(10,10,10);

  textSize(40); // tamaño de letra del puntaje
  textAlign(CENTER);
 
  text(puntosDer, width/2+30, 30);  // posicion de texto
  text(puntosIzq, width/2-30, 30); 
  
  Pelota.mover(); 
  Pelota.pintar(); 
  RaqIzq.mover();
  RaqIzq.pintar();
  RaqDer.mover();
  RaqDer.pintar();


  // Condicionales del If para barras y pelota

  if (RaqIzq.abajo() > height) {
    RaqIzq.y = height-RaqIzq.alto/2;
     }

  if (RaqIzq.arriba() < 0) {
       RaqIzq.y = RaqIzq.alto/2;
     }
       
  if (RaqDer.abajo() > height) {
       RaqDer.y = height-RaqDer.alto/2;
     }

  if (RaqDer.arriba() < 0) {
       RaqDer.y = RaqDer.alto/2;
     }
  
  if ( Pelota.left() < RaqIzq.derecha() && Pelota.y > RaqIzq.arriba() && Pelota.y < RaqIzq.abajo()){
       Pelota.velocidad = -Pelota.velocidad;
       }
  
  if ( Pelota.right() > RaqDer.izquierda() && Pelota.y > RaqDer.arriba() && Pelota.y < RaqDer.abajo()) {
         Pelota.velocidad = -Pelota.velocidad;
       }
       
  if (Pelota.right() > width) {
    Pelota.velocidad = -Pelota.velocidad;
         }
  
  if (Pelota.left() < 0) {
    Pelota.velocidad = -Pelota.velocidad;
         }
     
  if (Pelota.right() > width) {
    puntosIzq = puntosIzq + 1;
       Pelota.velocidad = -Pelota.velocidad;
     }
  if (Pelota.left() < 0) {
    puntosDer = puntosDer + 1;
    Pelota.velocidad = -Pelota.velocidad;
     }
  
  if (Pelota.right() > width) {
    puntosIzq = puntosIzq + 1;
       Pelota.x = width/2;
       Pelota.y = height/2;
     }
     if (Pelota.left() < 0) {
       puntosDer = puntosDer + 1;
       Pelota.x = width/2;
       Pelota.y = height/2;
     }



     // movimiento de teclas
     movimiento();

            }
    		
          function movimiento() {                 
		 
            if(keyIsDown(UP_ARROW)){
              RaqDer.velocidad=-3;
               }
               if(keyIsDown(DOWN_ARROW)){
                 RaqDer.velocidad=3;
               }
               if(keyIsDown(65) || keyIsDown(97)){
                 RaqIzq.velocidad=-3;
               }
               if(keyIsDown(90) || keyIsDown(122)){
                 RaqIzq.velocidad=3;
               }

              }
        

              // condicionales de teclas y velocidad
              function keyReleased() {
           
                if(keyCode == UP_ARROW){
                  RaqDer.velocidad=0;
                   }
                   if(keyCode == DOWN_ARROW){
                     RaqDer.velocidad=0;
                   }
                   if(key == 'a'){
                     RaqIzq.velocidad=0;
                   }
                   if(key == 'z'){
                     RaqIzq.velocidad=0;
                   }
  
                  }
  
  
  
  
  
        	









