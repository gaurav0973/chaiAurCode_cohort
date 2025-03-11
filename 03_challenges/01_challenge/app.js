const toggleButton = document.getElementById("toggleButton")
const bulb = document.getElementById("bulb")
const showStatus = document.getElementById("status")
const body = document.getElementById("bulb")


let buldOnCommand = false
toggleButton.addEventListener("click", () => {
    buldOnCommand = !buldOnCommand
    if (buldOnCommand) {
        //turn in the bulb
        bulb.classList.remove("off")
        body.classList.remove("dark-mode")
        toggleButton.textContent = "Turn Off"
        showStatus.textContent = "Status : On"
    }
    else {
        bulb.classList.add("off");
        body.classList.add("dark-mode");
        toggleButton.textContent = "Turn On";
        showStatus.textContent = "Status: Off";
    }
})