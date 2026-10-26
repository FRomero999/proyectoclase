console.clear()
console.log("App starting...")

const offcanvas_menu = document.querySelector("aside.off-canvas")

document.querySelector("#open_offcanvas")?.addEventListener("click", (event) => {    
    console.log("click")
    console.log(event.target)
    event.preventDefault()
    offcanvas_menu.classList.toggle("hidden")
})

