function preload() {
    back = loadImage("ping-pong.jpg")
}

function setup() {
	canvas = createCanvas(1000,600);
    canvas.center();
}

function draw() {
	image(back,0,0,1000,600)
}
