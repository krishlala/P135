function setup() {
  canvas = createCanvas(600, 500);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
}

function draw() {
  image(video, 0, 0, 600, 500);
}

function start() {
  objectDetector = ml5.objectDetector('cocossd', modelLoaded);
  document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded() {
console.log("Model Loaded");
  status = true;
}
