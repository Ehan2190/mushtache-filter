noseX=0;
noseY=0;

function preload()
{
mushtache = loadImage('https://i.postimg.cc/W4BKgTJQ/moustache-png-17165.png')
}
function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    video= createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x-17;
        noseY = results[0].pose.nose.y;
        console.log(" nosex = " + noseX);
        console.log(" nosey = " + noseY);
    }
}

function modelLoaded()
{
    console.log('PoseNet Is Initialized');
}

function draw()
{
image(video, 0, 0, 300, 300);
fill(255,0,0);
stroke(255,0,0);
image(mushtache, noseX, noseY,40, 30);
}

function take_snapshot()
{
    save('mushtachefilter.png');
}