var B = []
var n = 71

var song
var amp
var vol
var button

function setup(){
    createCanvas(550,550)
    background(0)

    for(var i=0;i<n;i++)
    {
        B.push(new bars(5*i,1,i,5*i,10*i))
    }  
    
    song = loadSound('origin.mp3',loaded)
    amp = new p5.Amplitude()

    button = createButton("play")
    button.mousePressed(togglePlaying)
}

function loaded(){
    console.log('LOADED !')

    song.play()
}

function togglePlaying(){
    if(!song.isPlaying()){
        song.play()
        song.setVolume(1)
        button.html("pause")
    }
    else{
        song.pause()
        button.html("play")
    }
}

var x=0,y=0,t=0,r=0
function draw(){
    background(0)
    
    vol = map(amp.getLevel(),0,1,0,100)
    
    for(var i=0;i<n;i++)
    B[i].move(vol)
}