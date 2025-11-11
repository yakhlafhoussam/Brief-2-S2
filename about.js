let playmenu = false;

document.getElementById("home").onclick = function () {
    window.location.href = "index.html";
}
document.getElementById("homeicon").onclick = function () {
    window.location.href = "index.html";
}
document.getElementById("savelist").onclick = function () {
    window.location.href = "save.html";
}
document.getElementById("search").onclick = function () {
    window.location.href = "search.html";
}


document.getElementById("minisearch").onclick = function () {
    window.location.href = "search.html";
}
document.getElementById("minihome").onclick = function () {
    window.location.href = "index.html";
}
document.getElementById("minisavelist").onclick = function () {
    window.location.href = "save.html";
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