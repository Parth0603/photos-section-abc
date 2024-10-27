const images = document.querySelectorAll("img")
const fullImage = document.querySelectorAll(".full-view")
const fullImageDiv = document.querySelector(".fullImageDiv")
const linkTag = document.querySelectorAll("a")
const eventContainer = document.querySelectorAll(".event")

fullImageDiv.addEventListener("click", () => {
    fullImageDiv.style.display = "none"
}
)

fullImageDiv.addEventListener("wheel", (e) => {
    e.preventDefault()
    e.stopPropagation()
}
)


// linkTag.forEach((e) => {
//     e.addEventListener("click", () => {
//         linkTag.forEach((f) => {

//             f.addEventListener("click", (e) => {
//                 const index = f.href.indexOf("#")
//                 let eventClass = f.href.substring(index + 1)
//                 let event = document.getElementById(eventClass)
//                 if (window.getComputedStyle(event).paddingTop == "0px") {
//                     event.style.paddingTop = "90px"

//                 } else {
//                     event.style.paddingTop = "0px"

//                 }
//             })
//         }
//         )
//     }
//     )
// })


// console.log(images);

images.forEach((e) => {
    e.addEventListener("click", () => {
        if (!e.classList.contains("full-view")) {
            let src = e.src
            fullImageDiv.innerHTML = `        <img src="assets/images/ABC_logo.png" class="ABCLogo" alt=""><img src="${src}" class="full-view">`
            console.log(fullImageDiv.innerHTML)
            console.log(e);

            fullImageDiv.style.display = "flex"
        }
    })
}
)