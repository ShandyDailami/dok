const body = document.querySelector("body")
const burger = document.querySelector(".burger")
const nav = document.getElementById("nav")

burger.addEventListener("click", () => {
  nav.classList.toggle("active")
  body.classList.toggle("lock-scroll")
})