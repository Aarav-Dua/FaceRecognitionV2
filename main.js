Webcam.set({
    height:380,
    width:680,
    image_format:'png',
    png_quality: 100
});

camera = document.getElementById("camera");

Webcam.attach("#camera");
console.log("camera");

function take_snapshot(){
    Webcam.snap(function(data_uri){

document.getElementById("result").innerHTML = '<img src="'+data_uri+'" id="captured_image">';

    })
}

console.log("ml5version=", ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/-_wvioSFx/model.json", modelLoaded);

function modelLoaded(){

console.log("model is loaded and minecraft")
 
}

function check() {
    Img = document.getElementById("captured_image");
    classifier.classify(Img, getResult)


}

function getResult(error, results){
if(error){
    console.error(error);
}
else{
    console.log(results);
    document.getElementById("result_object_name").innerHTML = results[0].label;
    document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
}

}