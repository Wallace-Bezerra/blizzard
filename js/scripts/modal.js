const login = document.querySelector(".buttons .btn-primary");
const modalLogin = document.querySelector(".modal");
const overlay = document.querySelector(".overlay.Modal");

login.addEventListener("click", (event) => {
  event.preventDefault();
  modalLogin.classList.add("active");
})

const closeModal = document.querySelector(".close");
closeModal.addEventListener("click", (event) => {
  event.stopPropagation();
  modalLogin.classList.remove("active");
})

overlay.addEventListener("click", (event) => {

  if (event.target == overlay) {
    modalLogin.classList.remove("active");
  }
})
