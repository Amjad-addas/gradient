
let redColorInput=document.getElementById("red-color")
let greenColorInput=document.getElementById("green-color")
let css = document.querySelector("h4");

css.textContent="linear-gradient(to right, rgb(0, 255, 0), rgb(255, 0, 0));"



function setGradient(){
    let body=document.getElementById("body")
        body.style.background = 
        "linear-gradient(to right, " 
        + greenColorInput.value
        + ", " 
        + redColorInput.value
        + ")";

        css.textContent=body.style.background + ";";
}
greenColorInput.addEventListener("input",setGradient)
redColorInput.addEventListener("input",setGradient)