
// ------------------------
//         main Image
// ------------------------
const main_box = document.getElementsByTagName("header")[0];
main_box.addEventListener("mouseover", (event) => {
    let mainMusic = document.getElementById("mainMusic");
    mainMusic.play();
    console.log(event);
});

const main_box_ = document.getElementsByTagName("header")[0];
main_box_.addEventListener("mouseout", (event) => {
    let mainMusic = document.getElementById("mainMusic");
    mainMusic.pause();
    mainMusic.currentTime = 0;
    console.log(event);
});

// const newImage = document.getElementsByClassName("main-image")[0];
// newImage.addEventListener("mouseover", () => {
//     main_box.style.backgroundImage = "url('images/other-main.jpeg')"
// });

// ------------------------
//         Super Mario
// ------------------------

const mario_box = document.getElementById("superMario");
mario_box.addEventListener("mouseover", (event) => {
    let marioVoice = document.getElementById("marioVoice");
    marioVoice.play();
    console.log(event)
});

const newMarioP = document.createElement("p");
newMarioP.textContent = "Sound working...";
newMarioP.style.color = "red";
mario_box.insertBefore(newMarioP, mario_box.children[mario_box.children.length - 2]);

// ------------------------
//         Peach
// ------------------------
const peach_box = document.getElementById("peach");
peach_box.addEventListener("mouseover", () => {
    let peachVoice = document.getElementById("peachVoice");
    peachVoice.play();
});

const newPeachP = document.createElement("p");
newPeachP.textContent = "Her sound is working...";
newPeachP.style.color = "pink";
newPeachP.style.fontStyle = "italic";
peach_box.insertBefore(newPeachP, peach_box.children[peach_box.children.length -3]);

// ------------------------
//         Luigi
// ------------------------
const luigi_box = document.getElementById("luigi");
luigi_box.addEventListener("mouseover", () => {
    let luigiVoice = document.getElementById("luigiVoice");
    luigiVoice.currentTime = 23;
    luigiVoice.play();
});

const luigi_box_ = document.getElementById("luigi");
luigi_box.addEventListener("mouseout", () => {
    let luigiVoice = document.getElementById("luigiVoice");
    luigiVoice.pause();
    luigiVoice.currentTime = 0;
});

const newLuigiP = document.createElement("p");
newLuigiP.textContent = "His sound is working...";
newLuigiP.style.color = "green";
luigi_box.insertBefore(newLuigiP, luigi_box.children[luigi_box.children.length-2]);

// ------------------------
//        Boo ghost
// ------------------------

const boo_box = document.getElementById("boo");
boo_box.addEventListener("mouseover", () => {
    let booVoice = document.getElementById("booVoice");
    booVoice.play();
});

let boo_box_style = document.querySelector("#boo h2");
boo_box_style.style.color = "grey";

// ------------------------
//         Bomb
// ------------------------

const bomb_box = document.getElementById("king");
bomb_box.addEventListener("mouseover", () => {
    let bombVoice = document.getElementById("bombVoice");
    bombVoice.play();
});

// ------------------------
//        Wario
// ------------------------

const wario_box = document.getElementById("wario");
wario_box.addEventListener("mouseover", () => {
    let warioVoice = document.getElementById("warioVoice");
    warioVoice.currentTime = 11;
    warioVoice.play();
});

const wario_box_ = document.getElementById("wario");
wario_box.addEventListener("mouseout", () => {
    let warioVoice = document.getElementById("warioVoice");
    warioVoice.pause();
    warioVoice.currentTime = 11;
});
// ------------------------
//        Select Map
// ------------------------
const button_map = document.getElementById("select-map-button");
button_map.addEventListener("mouseover", () => {
    let soundMap = document.getElementById("audio-map");
    soundMap.play();
})
// ------------------------
//        Coin Sound
// ------------------------
const button_map_ = document.getElementById("select-map-button");
button_map_.addEventListener("click", () => {
    let soundCoin = document.getElementById("coin");
    soundCoin.currentTime = 0.2;
    soundCoin.play();
})

// ----------------------------------
//         More style editing
// ----------------------------------""

const h2Title = document.querySelectorAll("h2");
h2Title.forEach(h2Title => {
    h2Title.style.fontSize = "35px";
    h2Title.style.backgroundImage = "linear-gradient(to right, blue, green)";
    h2Title.style.borderRadius = "3px";
});

const newStyle = document.querySelectorAll("div");
newStyle.forEach(newStyle => {
    newStyle.classList.add("newEffect");
});

// ----------------------------------
//        Button editing
// ----------------------------------

let images = ["map1.png", "map2.png", "map3.png", "map4.png"];
let currentIndex = 0;

let button = document.getElementById("select-map-button");
button.addEventListener("click", selectMap);

function selectMap() {
    var image = document.getElementById("map");
    currentIndex = (currentIndex + 1) % images.length;
    image.src = images[currentIndex];
}

// ----------------------------------
//        Effect logic
// ----------------------------------
let rotateImg = document.getElementById("main-image");
rotateImg.addEventListener("mouseover", mario_kart);
function mario_kart() {
    rotateImg.classList.toggle("rotate-image");
    rotateImg.classList.toggle("dondolare");
}
rotateImg.addEventListener("mouseover", mario_kart);


let princess = document.getElementById("peach");
princess.addEventListener("keydown", function(event) {
    var nameKey = event.key;
    console.log(nameKey, ' Pressed');
    if (nameKey === "p") {
        console.log("p pressed");
        alert(`key pressed ${nameKey}`);
        princess.id = "princess";
    }
});



