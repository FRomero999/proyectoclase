// Clear the console to make debugging output easier to read
console.clear()
// Print an initial message to indicate that the app has started
console.log("App starting...")

// Get the off-canvas navigation menu element from the DOM
const offcanvas_menu = document.querySelector("aside.off-canvas")
const cookies_panel = document.querySelector("div.cookies-panel")

// Add an event listener to the "Programs" link/button that opens the off-canvas menu
document.querySelector("#open_offcanvas")?.addEventListener("click", (event) => {    
    // Log when the menu trigger is clicked (for debugging)
    console.log("click")
    console.log(event.target)
    // Prevent the default link behavior so the menu toggles instead of navigating
    event.preventDefault()
    // Toggle the "hidden" class to show or hide the off-canvas menu
    offcanvas_menu.classList.toggle("hidden")
})

document.querySelector("#cookies-link")?.addEventListener("click", (event) => {    
    event.preventDefault()
    cookies_panel.classList.add("show")
})

document.querySelector("button.cookies-accept")?.addEventListener("click", (event) => {    
    event.preventDefault()
    cookies_panel.classList.remove("show")
    cookies_panel.classList.remove("show-extended")    
})

document.querySelector("button.cookies-read")?.addEventListener("click", (event) => {    
    event.preventDefault()
    cookies_panel.classList.add("show-extended")
})
