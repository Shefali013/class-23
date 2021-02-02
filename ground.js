class Ground{
    constructor(x,y,witdh,height){
        var ground_opt = {
            "isStatic": true
          };
          this.body = Bodies.rectangle(x,y,witdh,height,ground_opt);
          this.width = width;
          this.height = height;
          World.add(world, this.body);

    }
 display(){
    rectMode(CENTER);
    fill(255);
    rect(this.body.position.x,this.body.position.y,this.width,this.height);
 }
}