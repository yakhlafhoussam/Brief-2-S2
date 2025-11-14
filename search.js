let cards = document.querySelectorAll(".cards");
let playmenu = false;
let url = "https://debuggers-games-api.duckdns.org/api/games";
let datas;
let page;
let gamelist = document.querySelector("#list");
let chose;
let loves = JSON.parse(window.localStorage.getItem("savelist")) || [];
let idsearch = 0;
let find = false;
let searchfind = 0;
let searchingfind = 0;
let want;
let wantletter;
let sure = false;
let name; 
let original;
let query;
let match;

function turnon() {
    cards.forEach(card => {
        card.addEventListener("click", (events) => {
            chose = events.target.id;
            window.localStorage.setItem("chose", JSON.stringify(chose));
            window.location.href = "detail.html";
        });
    });
    document.querySelectorAll(".save").forEach(saveone => {
        saveone.addEventListener("click", (event) => {
            idsearch = event.target.id;
            for (let check = 0; check < loves.length; check++) {
                if (loves[check] == idsearch) {
                    loves.splice(check, 1)
                    find = true;
                }
            }
            if (find == true) {
                saveone.setAttribute("src", "img/heart.png");
                window.localStorage.setItem("savelist", JSON.stringify(loves));
                find = false;
            } else {
                loves.push(idsearch);
                window.localStorage.setItem("savelist", JSON.stringify(loves));
                saveone.setAttribute("src", "img/fillheart.png");
            }
        });
    });
}

function displaydata() {
    for (let i = 0; i < datas.results.length; i++) {
    name = datas.results[i].name.toLowerCase();
    original = datas.results[i].name_original.toLowerCase();
    query = want.toLowerCase();

    if (name.includes(query) || original.includes(query)) {
        document.querySelector("#wait").style.display = ("none");
        gamelist.insertAdjacentHTML("beforeend", `
                <div class="mb-5 md:mb-10 border border-title2 md:w-[45%] md:h-full lg:w-[32%] cursor-pointer hover:opacity-75 lg:hover:scale-105 lg:hover:opacity-100 cards">
                    <img id="#${datas.results[i].id}" class="w-[100%] h-[226px] lg:h-[227px] md:h-[181px] showinfo" src="${datas.results[i].background_image}">
                    <div id="plat" class="m-3 flex">
                        
                    </div>
                    <h2 class="text-title2 m-2">${datas.results[i].name}</h2>
                    <div class="m-3 flex">
                        <p class="text-title3 mr-10">Genre:</p>
                        <div id="genre" class="w-4/5 flex flex-wrap">
                            
                        </div>
                    </div>
                    <div class="flex items-center justify-between">
                        <div class="m-3 flex">
                            <p class="text-title3 mr-6">Rating:</p>
                                <div id="stars" class="mr-3 flex items-center">
                                    
                                </div>
                            <p class="text-title4">${datas.results[i].rating}</p>
                        </div>
                        <img id="${datas.results[i].id}" class="w-5 h-5 mr-3 cursor-pointer hover:scale-105 save" src="img/heart.png">
                    </div>
                </div>
            `);
            for ( let y = 0; y < datas.results[i].genres.length; y++) {
                document.querySelector("#genre").insertAdjacentHTML("beforeend", `
                    <li class="text-title4 mr-5">${datas.results[i].genres[y].name}</li>
                    `);
            }
            document.querySelector("#genre").removeAttribute("id");
            for ( let s = 0; s < datas.results[i].rating; s++) {
                document.querySelector("#stars").insertAdjacentHTML("beforeend", `
                    <img class="w-4 h-4 ml-1" src="img/star.png">
                    `);
            }
            document.querySelector("#stars").removeAttribute("id");
            for ( let p = 0; p < datas.results[i].parent_platforms.length; p++) {
                if (datas.results[i].parent_platforms[p].platform.slug == "pc") {
                    document.querySelector("#plat").insertAdjacentHTML("beforeend", `
                        <img class="w-4 mr-2" src="img/window.png">
                    `);
                }
                if (datas.results[i].parent_platforms[p].platform.slug == "linux") {
                    document.querySelector("#plat").insertAdjacentHTML("beforeend", `
                        <img class="w-4 mr-2" src="img/linux-platform.png">
                    `);
                }
                if (datas.results[i].parent_platforms[p].platform.slug == "mac") {
                    document.querySelector("#plat").insertAdjacentHTML("beforeend", `
                        <img class="w-4 mr-2" src="img/happy-mac.png">
                    `);
                }
                if (datas.results[i].parent_platforms[p].platform.slug == "xbox") {
                    document.querySelector("#plat").insertAdjacentHTML("beforeend", `
                        <img class="w-4 mr-2" src="img/xbox-logo.png">
                    `);
                }
                if (datas.results[i].parent_platforms[p].platform.slug == "playstation") {
                    document.querySelector("#plat").insertAdjacentHTML("beforeend", `
                        <img class="w-4 mr-2" src="img/playstation-logotype.png">
                    `);
                }
                if (datas.results[i].parent_platforms[p].platform.slug == "nintendo") {
                    document.querySelector("#plat").insertAdjacentHTML("beforeend", `
                        <img class="w-4 mr-2" src="img/nintendo-switch.png">
                    `);
                }
                if (datas.results[i].parent_platforms[p].platform.slug == "ios") {
                    document.querySelector("#plat").insertAdjacentHTML("beforeend", `
                        <img class="w-4 mr-2" src="img/apple-logo.png">
                    `);
                }
                if (datas.results[i].parent_platforms[p].platform.slug == "android") {
                    document.querySelector("#plat").insertAdjacentHTML("beforeend", `
                        <img class="w-4 mr-2" src="img/android-logo.png">
                    `);
                }
            }
            document.querySelector("#plat").removeAttribute("id");
            for (let check = 0; check < loves.length; check++) {
                if (loves[check] == datas.results[i].id) {
                    document.getElementById(`${datas.results[i].id}`).setAttribute("src", "img/fillheart.png");
                }
            }
            cards = document.querySelectorAll(".showinfo");
            turnon();
        }
    }
    getdata();
}

async function getdata() {
    if (url != null) {
        try {
    const res = await fetch(url);
    datas = await res.json();
    console.log(datas);
    page = datas.next;
    url = page;
    console.log(page);
    displaydata();
  } catch (err) {
    console.error(err);
  }
    }
}

window.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
        want = document.querySelector("#want").value;
        if (want.length > 0) {
            wantletter = want.length;
            url = "https://debuggers-games-api.duckdns.org/api/games";
            gamelist.innerHTML = "";
            document.querySelector("#wait").src = "img/load.gif";
            getdata();
        } else {
            console.log("-_-");
        } 
    }
});

document.querySelectorAll(".search").forEach(btn => {
    btn.onclick = function () {
        want = document.querySelector("#want").value;
        if (want.length > 0) {
            wantletter = want.length;
            url = "https://debuggers-games-api.duckdns.org/api/games";
            gamelist.innerHTML = "";
            document.querySelector("#wait").src = "img/load.gif";
            getdata();
        } else {
            console.log("-_-");
        }
    }
});

document.getElementById("home").onclick = function () {
    window.location.href = "index.html";
}
document.getElementById("homeicon").onclick = function () {
    window.location.href = "index.html";
}
document.getElementById("savelist").onclick = function () {
    window.location.href = "save.html";
}
document.getElementById("about").onclick = function () {
    window.location.href = "about.html";
}


document.getElementById("miniabout").onclick = function () {
    window.location.href = "about.html";
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

cards.forEach(card => {
    card.addEventListener("click", () => {
        window.location.href = "detail.html";
    });
});
