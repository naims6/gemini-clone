// HTML element selecting

let menuBar = document.querySelectorAll(".menu-bar")
let navBar = document.querySelector(".navbar")
let version = document.querySelector(".version")
let versionDropdown = document.querySelector(".version-dropdown")
let versionSelected = document.querySelector(".version-selected")
let versionName = document.querySelectorAll(".version-name")
let sendBtn = document.querySelector(".send-btn")
let microPhone = document.querySelector(".microphone")
let inputField = document.querySelector("form input")

function openMenu() {
     navBar.style.display = "flex"
     navBar.classList.toggle("hide")
     navBar.style.width = "340px";
}

// Version Show Hidden Funtion
function showVersion(e) {
    e.stopPropagation();
    versionDropdown.classList.toggle("show")
}
document.addEventListener("click", () => {
    if(versionDropdown.classList.contains("show")) {
        versionDropdown.classList.remove("show");
    }
})

versionName.forEach((v) => {
    v.addEventListener("click", () => {
        versionSelected.innerHTML = v.dataset.value;
    })
})
// Change Send btn icon
inputField.addEventListener("keyup", () => {
    if(inputField.value.length > 0) {
        microPhone.style.display = "none"
        sendBtn.style.display = "block"
    } else {
        microPhone.style.display = "block"
        sendBtn.style.display = "none"
    }
})


version.addEventListener("click", showVersion)
menuBar.forEach((bar) => {
    bar.addEventListener("click", openMenu)
    
})
