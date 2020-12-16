class Box extends BaseClass{
    constructor(x, y) {
     super(x,y,50,50);
     
      this.visibility=25
      
      World.add(world, this.body);
    }
    display(){
    
console.log(this.body.speed);
      if(this.body.speed < 3){
        super.display();
      }
      else{
        World.remove(world,this.body);
        push();
        this.Visiblity-this.Visiblity-5;
      tint(255,this.Visiblity);
      pop();
      }
    }
  };
  