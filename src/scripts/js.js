const button = document.getElementById("invert-button")
const body = document.getElementById("body")
button.addEventListener("click", ()=>{
    body.classList.toggle("ligth")
    body.classList.toggle("dark")
})