function preload(){

}

function setup(){
    canvas = createCanvas(500, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(500, 500);
    video.hide();
}

function draw(){
image(video, 0, 0, 500, 500);
}

function take_snapshot(){
    save('myFilterImage.png');
}

function gotPoses(){
if(results.length > 0){
console.log(results);
console.log("mustache x = " + results[0].pose.nose.x);
console.log("mustache y = " + results[0].pose.nose.y)
}
}