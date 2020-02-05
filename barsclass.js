class bars{
    constructor(start,speed,R,G,B)
    {
        this.angle = start
        this.speed = speed
        this.R=R
        this.G=G
        this.B=B
    }

    move(vol){
        applyMatrix(1,0,0,1,width/2,height/2)

        noFill()
        strokeWeight(2)
        angleMode(DEGREES)
        
        rotate(this.angle+=this.speed)
        translate(75,0)
        
        stroke(255)
        rect(-25,0,vol/2,5)
        
        stroke(this.R,this.G,this.B)
        rect(-25,0,vol+random(0,20),5)
    
        resetMatrix()
    }
}