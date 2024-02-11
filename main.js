const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  autoplay: {
    delay: 3000,
  },
})

let form = document.querySelector("form")

form.addEventListener("submit", function (event) {
  event.preventDefault()

  let errorContainer = document.querySelector(".message-error")
  let errorList = document.querySelector(".message-error ul")

  errorList.innerHTML = ""
  errorContainer.classList.remove("visible")

  let email = document.querySelector("#email")
  if (email.value === "") {
    errorContainer.classList.add("visible")
    email.classList.remove("success")

    let err = document.createElement("li")
    err.innerText = "Le champ email ne doit pas être vide"

    errorList.appendChild(err)
  } else {
    email.classList.add("success")
  }

  let pseudo = document.querySelector("#pseudo")
  if (pseudo.value.length < 6) {
    errorContainer.classList.add("visible")
    pseudo.classList.remove("success")

    let err = document.createElement("li")
    err.innerText = "Le pseudo doit avoir au moins 6 caractères"

    errorList.appendChild(err)
  } else {
    pseudo.classList.add("success")
  }

  let password = document.querySelector("#password")
  let passCheck = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$"
  )
  if (password.value.length < 10 || passCheck.test(password.value) === false) {
    errorContainer.classList.add("visible")
    password.classList.remove("success")

    let err = document.createElement("li")
    err.innerText =
      "Le mot de passe doit avoir au moins 10 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial"

    errorList.appendChild(err)
  } else {
    password.classList.add("success")
  }

  let passwordConfirm = document.querySelector("#password2")
  if (password.value !== "") {
    if (password.value !== passwordConfirm.value) {
      errorContainer.classList.add("visible")
      passwordConfirm.classList.remove("success")

      let err = document.createElement("li")
      err.innerText = "Les deux mots de passe doivent être indentiques"

      errorList.appendChild(err)
    } else {
      passwordConfirm.classList.add("success")
    }
  }

  let successContainer = document.querySelector(".message-success")
  successContainer.classList.remove("visible")

  if (
    email.classList.contains("success") &&
    pseudo.classList.contains("success") &&
    password.classList.contains("success") &&
    passwordConfirm.classList.contains("success")
  ) {
    successContainer.classList.add("visible")
  }
})

const lightbox = new SimpleLightbox(".card a")

let mode = document.querySelector(".dark-light")
mode.addEventListener("click", function () {
  document.body.classList.toggle("dark")

  if (document.body.classList.contains("dark")) {
    this.innerHTML = "Light mode"
  } else {
    this.innerHTML = "Dark mode"
  }
})

const options = {
  gutterPixels: 50,
}

const filterizr = new Filterizr(".portfolio-elements", options)

let filtersList = document.querySelectorAll(".filters li")
filtersList.forEach(function (filterItem) {
  filterItem.addEventListener("click", function () {
    document.querySelector(".filters .active").classList.remove("active")
    this.classList.add("active")
  })
})
