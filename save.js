let cards = document.querySelectorAll(".cards");
let playmenu = false;


document.getElementById("home").onclick = function () {
    window.location.href = "index.html";
}
document.getElementById("homeicon").onclick = function () {
    window.location.href = "index.html";
}
document.getElementById("search").onclick = function () {
    window.location.href = "search.html";
}
document.getElementById("about").onclick = function () {
    window.location.href = "about.html";
}

document.getElementById("minisearch").onclick = function () {
    window.location.href = "search.html";
}
document.getElementById("minihome").onclick = function () {
    window.location.href = "index.html";
}
document.getElementById("miniabout").onclick = function () {
    window.location.href = "about.html";
}
document.getElementById("menu").onclick = function () {
    if ( playmenu == false) {
        gsap.set("#bigmenu", { display: "flex", opacity: 0, });
        gsap.to("#bigmenu", {
            opacity: 1,
            duration: 1,
            height: "128px",
        });
        playmenu = true;
    } else {
        gsap.to("#bigmenu", {
            opacity: 0,
            duration: 1,
            height: "0px",
            onComplete: () => gsap.set("#bigmenu", { display: "none" })
        });
        playmenu = false;
    }
}

cards.forEach(card => {
    card.addEventListener("click", () => {
        window.location.href = "detail.html";
    });
});