class Rope{
    constructor(bodyA,bodyB,xOffset,yOffset){
        this.offsetX=xOffset;
        this.offsetY=yOffset;
        var options ={
            bodyA:bodyA,
             bodyB:bodyB,
             pointB:{x:this.offsetX,y:this.offsetY},
        }
        this.rope=Matter.Constraint.create(options);
World.add(world,this.rope);
    }
    display(){
        push()
        var pointA=this.rope.bodyA.position;
        var pointB=this.rope.bodyB.position;
    strokeWeight(4);

        line(pointA.x,pointA.y,pointB.x+this.offsetX,pointB.y+this.offsetY);
        pop();
    }
}