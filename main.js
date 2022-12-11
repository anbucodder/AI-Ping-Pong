function preload() {
    back = loadImage("ping-pong.jpg");
}

function setup() {
	canvas = createCanvas(900,500);
    canvas.center();
}

function draw() {
	image(back,0,0,900,500);
}
