
console.log(window.document.children)
const container = document.querySelector("container")

const btn = document.querySelector(".btn")

btn.textContent = "Click Me Again!"
btn.style.backgroundColor ="silver"
btn.style.color = "black"
btn.style.borderRadius = "50px"
btn.style.border = "none"
btn.style.padding = "12px 20px"

// container.innerHTML = `<div class="card"></div>`

const card = document.querySelector(".card")
const cardDiv = document.createElement("div")
cardDiv.setAttribute("class", "card")

const h1Heading = document.createElement("h1")
h1Heading.textContent = "Hello World"

cardDiv.append(h1Heading)

container.append(cardDiv)

console.log(btn)