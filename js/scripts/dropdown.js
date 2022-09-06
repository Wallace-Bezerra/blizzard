const games = document.querySelector(".js-games");
const sports = document.querySelector(".js-sports");

const menuGames = document.querySelector(".menu-games");
const menusports = document.querySelector(".menu-sports");

games.addEventListener("click", () => {
    if (menusports.classList.contains('active')) {
        menusports.classList.remove("active");
    }
    menuGames.classList.toggle("active");
})

sports.addEventListener("click", () => {
    if (menuGames.classList.contains('active')) {
        menuGames.classList.remove("active");
    }
    menusports.classList.toggle("active");
})
