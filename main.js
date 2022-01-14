noseX=0;
noseY=0;
function preload(){
    clown_nose=loadImage("mustache.png");
}
function setup (){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet = ml5.poseNet(video,modelloaded);
    poseNet.on('pose', gotPoses);
}
function draw (){
    image(video ,0,0,300,300);
    fill(255,0,0);
    stroke(255,0,0);
    image(clown_nose,noseX-30,noseY-6,60,40);
}
function take_snapshot(){
    save('myFilterImage.png');
}
function modelloaded(){
    console.log('PoseNet Is Initialised');
}
function gotPoses(results)
{
    if(results.length > 0)
    {
       console.log(results);
       console.log("nose x =" + results[0].pose.nose.x);
       console.log("nose y =" + results[0].pose.nose.y);
       noseX = results[0].pose.nose.x;
       noseY = results[0].pose.nose.y;
    }
    
   
}