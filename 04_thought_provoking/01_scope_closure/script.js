const dropdown = document.getElementById("dropDown");
const createColorBtn = document.getElementById("createColorBtn");
const addedBtnDiv = document.getElementsByClassName("addedBtnDiv")[0];

createColorBtn.addEventListener("click", () => {
    const color = dropdown.value
    // console.log(color)
    const div = document.createElement("div")
    const colorBtn = document.createElement("button")
    colorBtn.classList.add("colorBtn")
    colorBtn.style.backgroundColor = color  
    colorBtn.textContent = color
    addedBtnDiv.appendChild(colorBtn)
});

console.log(colorBtn);
