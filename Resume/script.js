// Typing Effect
const text = "Joella Teta";
let index = 0;
function typeEffect() {
    if (index < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 150);
    }
}
window.onload = typeEffect;