Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

camera=document.getElementById("camera");
Webcam.attach("#camera");

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="capture_image" src="'+data_uri+'">'
    })
}

console.log("ml5.version:", ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/LR6_SNUwo/model.json',ModelLoaded);
function ModelLoaded(){
    console.log("model is initialized")
}

function speak(){
synth=window.speechSynthesis;
speak_data="my prediction is"+prediction;
utterthis= new SpeechSynthesisUtterance(speak_data1+speak_data2);
synth.speak(utterthis);
}
