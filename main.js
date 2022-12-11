status = "false"
rightwristy ="";
rightwristx ="";
function preload() {
    back = loadImage("ping-pong.jpg");
    ball  = loadImage("ball.png");
}

function setup() {
	canvas = createCanvas(700,400);
    canvas.parent("canvas");
    canvas.center();

    video = createCapture(VIDEO);
	video.size(375,1100);
	video.position(550,330);
	video.parent("game_console");

	poseNet= ml5.poseNet(video , modalloaded);
	poseNet.on("pose" , gotposes);
}
   function	modalloaded(){
	console.log("Modal loaded");
}
function gotposes(results){
    if(results.length > 0){
       rightwristy = results[0].pose.rightWrist.y;
       rightwristX = results[0].pose.rightWrist.y;
       console.log(results);
       console.log("Right wrist y = "+rightwristy+"Right wrist x = "+rightwristx);
    }
    if(rightwristy > 0){
        status = "true";
    }
}
function draw() {
	image(back,0,0,700,400);
    if(status === "true"){
        fill("#ff0000");
        circle(rightwristx , rightwristy , 20);
    }
}
