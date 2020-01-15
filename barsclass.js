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
    stroke(220,0,0)
    strokeWeight(2)
    circle(0,0,100)
    angleMode(DEGREES)
    
    stroke(this.R,this.G,this.B)
    rotate(this.angle+=this.speed)
    translate(75,0)
    //rect(-25,0,random(50),5)
    rect(-25,0,vol,5)
    rect(-25,0,vol+random(0,20),5)

    resetMatrix()
    }
}