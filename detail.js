let cards = [];
let playmenu = false;
let url = `https://debuggers-games-api.duckdns.org/api/games`;
let datas;
let gamelist = document.querySelector("#list");
let chose = JSON.parse(window.localStorage.getItem("chose"));
let idsearch = 0;
let loves = JSON.parse(window.localStorage.getItem("savelist")) || [];
let find = false;
let gamefind = false;

function turnon() {
    document.querySelector("#wait").style.display = "none";
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
    for (let i = 0; i < 20; i++) {
        if (`#${datas.results[i].id}` == chose) {
            gamelist.insertAdjacentHTML("beforeend", `
                <div class="w-1/1 flex items-center justify-between">
                <h1 class="text-title1 font-bold text-lg md:text-2xl lg:text-4xl">${datas.results[i].name}</h1>
                <img id="${datas.results[i].id}" class="w-5 h-5 md:w-8 md:h-8 mr-3 cursor-pointer hover:scale-105 save" src="img/heart.png">
            </div>
            <div class="border border-dashed border-title2">
                <img src="${datas.results[i].background_image}">
            </div>
            <div id="plat" class="w-1/1 flex justify-around">
                
            </div>
            <div class="w-1/1 flex ">
                <p class="w-36 md:w-44 lg:w-52 mr-4 text-title3 md:text-xl lg:text-2xl">Genre:</p>
                <div id="genre" class="flex flex-wrap w-52 md:w-60 lg:w-[900px]">
                    
                </div>
            </div>
            <div class="w-1/1 flex">
                <p class="w-36 md:w-44 lg:w-52 text-title3 md:text-xl lg:text-2xl">Rating:</p>
                    <div id="stars" class="mr-3 flex items-center ml-5">
                        
                    </div>
                <p class="text-title4 md:text-xl lg:text-2xl">${datas.results[i].rating}</p>
            </div>
            <div class="w-1/1 flex">
                <p class="w-36 md:w-44 lg:w-52 text-title3 md:text-xl lg:text-2xl">Release Date:</p>
                <div class="flex flex-wrap ml-6">
                    <p class="text-title4 md:text-xl lg:text-2xl">${datas.results[i].released}</p>
                </div>
            </div>
            <div class="w-1/1 flex">
                <p class="w-36 md:w-44 lg:w-52 mr-4 text-title3 md:text-xl lg:text-2xl">Developers:</p>
                <div id="dev" class="flex flex-wrap w-52 md:w-60 lg:w-[900px]">
                    
                </div>
            </div>
            <div class="w-1/1 flex">
                <p class="w-36 md:w-44 lg:w-52 mr-4 text-title3 md:text-xl lg:text-2xl">Publishers:</p>
                <div id="publi" class="flex flex-wrap w-52 md:w-60 lg:w-[900px]">
                    
                </div>
            </div>
            <div class="w-1/1 flex">
                <p class="w-36 md:w-44 lg:w-52 text-title3 md:text-xl lg:text-2xl">ESRB Rating:</p>
                <div class="flex flex-wrap ml-6">
                    <p class="text-title4 md:text-xl lg:text-2xl">${datas.results[i].esrb_rating.name}</p>
                </div>
            </div>
            <div class="w-1/1 flex">
                <p class="w-36 md:w-44 lg:w-52 text-title3 md:text-xl lg:text-2xl">Average Playtime:</p>
                <div class="flex flex-wrap ml-6">
                    <p class="text-title4 md:text-xl lg:text-2xl">${datas.results[i].playtime} hours</p>
                </div>
            </div>
            <div class="w-1/1 flex">
                <p class="w-36 md:w-44 lg:w-52 text-title3 md:text-xl lg:text-2xl">Achievements:</p>
                <div class="flex flex-wrap ml-6">
                    <p class="text-title4 md:text-xl lg:text-2xl">${datas.results[i].achievements_count}</p>
                </div>
            </div>
            <div class="w-1/1 flex">
                <p class="w-36 md:w-44 lg:w-52 text-title3 md:text-xl lg:text-2xl">Players Added:</p>
                <div class="flex flex-wrap ml-6">
                    <p class="text-title4 md:text-xl lg:text-2xl">${datas.results[i].added} users</p>
                </div>
            </div>
            <div class="w-1/1 flex">
                <p class="w-32 text-title3 md:text-xl lg:text-2xl">Website:</p>
                <div class="flex flex-wrap">
                    <a class="text-title4 md:text-xl lg:text-2xl underline" href="${datas.results[i].website}">${datas.results[i].website}</a>
                </div>
            </div>
            <div class="w-1/1 flex">
                <p class="w-32 text-title3 md:text-xl lg:text-2xl">Reddit:</p>
                <div class="flex flex-wrap">
                    <a class="text-title4 md:text-xl lg:text-2xl underline" href="${datas.results[i].reddit_url}">${datas.results[i].reddit_url}</a>
                </div>
            </div>
            <div class="w-1/1 flex">
                <p class="w-36 md:w-44 lg:w-52 mr-4 text-title3 md:text-xl lg:text-2xl">Tags:</p>
                <div id="tags" class="flex flex-wrap w-52 md:w-60 lg:w-[900px]">
                    
                </div>
            </div>
            <div class="w-1/1 flex">
                <p class="w-36 md:w-44 lg:w-52 text-title3 md:text-xl lg:text-2xl">Updated:</p>
                <div class="flex flex-wrap ml-6">
                    <p class="text-title4 md:text-xl lg:text-2xl">${datas.results[i].updated}</p>
                </div>
            </div>
            <div class="w-1/1 flex flex-col">
                <p class="w-36 md:w-44 lg:w-52 text-title3 md:text-xl lg:text-2xl">Description:</p>
                <div class="flex flex-wrap">
                    <p class="text-title4 md:text-xl lg:text-2xl">${datas.results[i].description}</p>
                </div>
            </div>
            `);
            for ( let p = 0; p < datas.results[i].parent_platforms.length; p++) {
                if (datas.results[i].parent_platforms[p].platform.slug == "pc") {
                    document.querySelector("#plat").insertAdjacentHTML("beforeend", `
                        <img class="w-4 md:w-8 cursor-pointer hover:scale-105" src="img/window.png">
                    `);
                }
                if (datas.results[i].parent_platforms[p].platform.slug == "linux") {
                    document.querySelector("#plat").insertAdjacentHTML("beforeend", `
                        <img class="w-4 md:w-8 cursor-pointer hover:scale-105" src="img/linux-platform.png">
                    `);
                }
                if (datas.results[i].parent_platforms[p].platform.slug == "mac") {
                    document.querySelector("#plat").insertAdjacentHTML("beforeend", `
                        <img class="w-4 md:w-8 cursor-pointer hover:scale-105" src="img/happy-mac.png">
                    `);
                }
                if (datas.results[i].parent_platforms[p].platform.slug == "xbox") {
                    document.querySelector("#plat").insertAdjacentHTML("beforeend", `
                        <img class="w-4 md:w-8 cursor-pointer hover:scale-105" src="img/xbox-logo.png">
                    `);
                }
                if (datas.results[i].parent_platforms[p].platform.slug == "playstation") {
                    document.querySelector("#plat").insertAdjacentHTML("beforeend", `
                        <img class="w-4 md:w-8 cursor-pointer hover:scale-105" src="img/playstation-logotype.png">
                    `);
                }
                if (datas.results[i].parent_platforms[p].platform.slug == "nintendo") {
                    document.querySelector("#plat").insertAdjacentHTML("beforeend", `
                        <img class="w-4 md:w-8 cursor-pointer hover:scale-105" src="img/nintendo-switch.png">
                    `);
                }
                if (datas.results[i].parent_platforms[p].platform.slug == "ios") {
                    document.querySelector("#plat").insertAdjacentHTML("beforeend", `
                        <img class="w-4 md:w-8 cursor-pointer hover:scale-105" src="img/apple-logo.png">
                    `);
                }
                if (datas.results[i].parent_platforms[p].platform.slug == "android") {
                    document.querySelector("#plat").insertAdjacentHTML("beforeend", `
                        <img class="w-4 md:w-8 cursor-pointer hover:scale-105" src="img/android-logo.png">
                    `);
                }
            }
            document.querySelector("#plat").removeAttribute("id");
            for ( let y = 0; y < datas.results[i].genres.length; y++) {
                document.querySelector("#genre").insertAdjacentHTML("beforeend", `
                    <li class="text-title4 md:text-xl lg:text-2xl mr-6 md:mr-8">${datas.results[i].genres[y].name}</li>
                    `);
            }
            document.querySelector("#genre").removeAttribute("id");
            for ( let s = 0; s < datas.results[i].rating; s++) {
                document.querySelector("#stars").insertAdjacentHTML("beforeend", `
                    <img class="w-4 h-4 ml-1" src="img/star.png">
                    `);
            }
            document.querySelector("#stars").removeAttribute("id");
            for ( let y = 0; y < datas.results[i].developers.length; y++) {
                document.querySelector("#dev").insertAdjacentHTML("beforeend", `
                    <li class="text-title4 md:text-xl lg:text-2xl mr-6 md:mr-8">${datas.results[i].developers[y].name}</li>
                    `);
            }
            document.querySelector("#dev").removeAttribute("id");
            for ( let y = 0; y < datas.results[i].publishers.length; y++) {
                document.querySelector("#publi").insertAdjacentHTML("beforeend", `
                    <li class="text-title4 md:text-xl lg:text-2xl mr-6 md:mr-8">${datas.results[i].publishers[y].name}</li>
                    `);
            }
            document.querySelector("#publi").removeAttribute("id");
            for ( let y = 0; y < datas.results[i].tags.length; y++) {
                document.querySelector("#tags").insertAdjacentHTML("beforeend", `
                    <li class="text-title4 md:text-xl lg:text-2xl mr-6 md:mr-8">${datas.results[i].tags[y].name}</li>
                    `);
            }
            document.querySelector("#tags").removeAttribute("id");
            for (let check = 0; check < loves.length; check++) {
                if (loves[check] == datas.results[i].id) {
                    document.getElementById(`${datas.results[i].id}`).setAttribute("src", "img/fillheart.png");
                }
            }
            gamefind = true;
            turnon();
            break;
        }
    }
    if (gamefind == false) {
        getdata();
    }
}



async function getdata() {
    if (gamefind == false) {
        try {
    const res = await fetch(url);
    datas = await res.json();
    url = datas.next;
    displaydata();
  } catch (err) {
    console.error(err);
  }
    }
}

getdata();

document.getElementById("search").onclick = function () {
    window.location.href = "search.html";
}
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
document.getElementById("minisearch").onclick = function () {
    window.location.href = "search.html";
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