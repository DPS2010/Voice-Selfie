var SpeechRecognition = window.webkitSpeechRecognition
var Recognition = new SpeechRecognition()
function start () {
    document.getElementById("textbox").innerHTML = ""
    Recognition.start()
}
Recognition.onresult = function (event) {
    console.log(event)
    output = event.results[0][0].transcript
 document.getElementById("textbox").innerHTML = output
 if (output == "take my selfie") {

speak()
 }

}
function speak () {
    Synthesis = window.speechSynthesis
    data = "Taking Your Selfie in 5 seconds"
    utter =  new SpeechSynthesisUtterance(data)
    Synthesis.speak(utter)
    Webcam.attach("#camera")
    setTimeout(
        function () {
            takeSnapshot()
            download()
        }, 5000
    )
}
Webcam.set ({
    width:360,
    height:250,
    image_format:"jpeg",
    jpeg_quality:90
});
function takeSnapshot () {
Webcam.snap(
    function (pic) {
        document.getElementById("snapshot").innerHTML = `<img id="img" src=${pic}> ` 
    }
)
}
function download () {
     link = document.getElementById("id")
     selfie = document.getElementById("img").src 
     link.href = selfie
     link.click()
}