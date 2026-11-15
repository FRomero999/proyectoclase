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

document.querySelector("button.off-canvas-close")?.addEventListener("click", (event) => {
    event.preventDefault()
    offcanvas_menu.classList.add("hidden")
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

// Get the timetable section (only exists on the home page)
const timetable = document.querySelector("#timetable")

// Delegación de eventos: se registra UN solo listener en el ancestro (#timetable)
// en lugar de uno por cada celda. Los clicks en cualquier td burbujean (bubbling)
// desde el elemento pulsado hasta este ancestro común, donde se capturan.
timetable?.addEventListener("click", (event) => {
    // event.target es el elemento real pulsado (por ejemplo, el <abbr> de dentro).
    // event.currentTarget es siempre #timetable, el elemento que escucha el evento.
    // closest("td") sube por el DOM hasta la celda, aunque se pulse el texto.
    const cell = event.target.closest("td")

    // Ignorar clicks fuera de una celda de módulo (cabeceras, leyenda...)
    // y las filas de recreo, que usan td con colspan.
    if (!cell || cell.closest("tr").classList.contains("timetable-break")) return

    // Comprobar antes de limpiar para permitir deseleccionar al repetir click.
    const wasSelected = cell.classList.contains("timetable-cell--selected")

    // Una sola celda resaltada a la vez.
    timetable.querySelectorAll(".timetable-cell--selected").forEach(selectedCell => {
        selectedCell.classList.remove("timetable-cell--selected")
    })

    if (!wasSelected) {
        cell.classList.add("timetable-cell--selected")
    }
})
