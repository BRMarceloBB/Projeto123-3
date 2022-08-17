diference = 0;

pulsoEsquerdoX = 0;
pulsoDireitoX = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(550, 550);
    canvas.position(560, 150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    background('#ABCDEF');
    fill('#FEDCBA');
    stroke('#000000');
    text('Marcelo', 50, 400);
    textSize(diference);
    document.getElementById("status").innerHTML = 'A largura e a altura são'+diference+"px.";
}

function modelLoaded() {
    console.log("POSENET FOI INICIALIZADO");
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        pulsoEsquerdoX = results[0].pose.leftWrist.x;
        pulsoDireitoX = results[0].pose.rightWrist.x;
        console.log(pulsoDireitoX, pulsoEsquerdoX);
        diference = floor(pulsoEsquerdoX - pulsoDireitoX);
    }
}