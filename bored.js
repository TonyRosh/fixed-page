var fart = new Audio();
fart.src = "Fart_BW.16093.wav";
function PlaySound() {
    fart.play();
}

document.getElementsByClassName("button").addEventListener("click", function() {
    PlaySound();});