const cards = document.querySelectorAll(".imgcards");
console.log(cards);
for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("mouseover", function() {
        setEffect(this);
    });
    cards[i].addEventListener("mouseout", resEffect);
}

function setEffect(el) {
    for (let i = 0; i < cards.length; i++) {
        cards[i].setAttribute("style", "filter: blur(5px);");
    }
    el.removeAttribute("style");
}

function resEffect() {
    for (let i = 0; i < cards.length; i++) {
        cards[i].removeAttribute("style");
    }
}
