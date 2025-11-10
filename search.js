let cards = document.querySelectorAll(".cards");

document.getElementById("home").onclick = function () {
    window.location.href = "index.html";
}
document.getElementById("homeicon").onclick = function () {
    window.location.href = "index.html";
}
document.getElementById("savelist").onclick = function () {
    window.location.href = "save.html";
}

cards.forEach(card => {
    card.addEventListener("click", () => {
        window.location.href = "detail.html";
    });
});
