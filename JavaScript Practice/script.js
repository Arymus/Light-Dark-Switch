const button = document.getElementById("changebutton");

button.addEventListener("click",  function lightMode() {
    if (button.innerText === "Light") {
        button.innerText = "Dark";
    } else {
        button.innerText = "Light";
    }
});

button.addEventListener("click", function bgChange() {
    if (button.innerText === "Light") {
        document.body.style.backgroundColor = "white";
        document.getElementById("title").style.color = "black";
    } else {
        document.body.style.backgroundColor = "black";
        document.getElementById("title").style.color = "white";
        button.innerText = "Dark";
    }
})
