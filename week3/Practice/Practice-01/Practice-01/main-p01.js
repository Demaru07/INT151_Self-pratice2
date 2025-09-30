const buttons = document.getElementsByTagName('button')
const box = document.getElementById('box')
Array.from(buttons).forEach((button) => {
    button.addEventListener("click", () => {
        if (button.id === "add") {
            box.classList.add("bordered")
        }
        if (button.id === "remove") {
            box.classList.remove("bordered")
        }
        if (button.id === "toggle") {
            box.classList.toggle("bordered")
        }
    })
})