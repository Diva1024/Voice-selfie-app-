var SpeechRecognition= window.webkitSpeechRecognition;
var r = new SpeechRecognition();
function start(){
    document.getElementById("textbox").innerHTML="";
    r.start();
}
r.onresult= function run(event){
    console.log (event);
    var Content= event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=Content;
    console.log(Content);
if(Content=="take my selfie"){
    console.log("taking selfie");
    speak();
}
}
function speak(){
    var synth= window.speechSynthesis;
    speakData= "taking your selfie in 5 seconds";
    var speakThis= new SpeechSynthesisUtterance(speakData);
    synth.speak(speakThis);
Webcam.attach(camera);
setTimeout(function(){
take_snapshot();
save();
},5000);
}
Webcam.set({
    width:350,
    height:250,
    image_format: 'png',
    png_quality:100
});
camera= document.getElementById("camera");
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="selfie_image" src="'+data_uri+'">';
    });
}
function save(){
    link=document.getElementById("link");
    image=document.getElementById("selfie_image").src;
    link.href=image;
    link.click();
}