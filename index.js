let cards = document.querySelectorAll(".cards");

document.getElementById("search").onclick = function () {
    window.location.href = "search.html";
}
document.getElementById("savelist").onclick = function () {
    window.location.href = "save.html";
}
document.getElementById("explore").onclick = function () {
    window.location.href = "explore.html";
}

cards.forEach(card => {
    card.addEventListener("click", () => {
        window.location.href = "detail.html";
    });
});
