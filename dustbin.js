class Dustbin extends BaseClass {
  constructor() {
    
    var options =  {
      isStatic: true,

    }
    super(200,640,100);
    this.body = Bodies.rectangle(200,600,400,options)
    World.add(world,this.body);
    
   
    this.image = loadImage("images/dustbingreen.png")
   
   
  }
 
  
  }

