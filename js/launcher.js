class launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }

        this.bodyA = bodyA
        this.pointB = pointB
        this.launcher = Constraint.create(options);
        World.add(world, this.launcher);
    
    //this.sling1 = loadImage("sprites/sling1.png");
    //this.sling2 = loadImage("sprites/sling2.png");
    //this.sling3 = loadImage("sprites/sling3.png");
    
    
    
    }

    attach(body){
    this.launcher.bodyA = body

    }

    fly(){
        this.launcher.bodyA = null;
    }

    display(){
        
        //image(this.sling1, 200, 20);
       // image(this.sling2, 175, 20);
        //image(this.sling3, 155, 20)
        
        if(this.launcher.bodyA){
            var pointA = this.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            stroke(75,50,32)
            line(pointA.x, pointA.y, pointB.x, pointB.y)
            
        
        }


    }
    
}
