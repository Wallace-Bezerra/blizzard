const games = document.querySelector(".js-games");
const sports = document.querySelector(".js-sports");

const menuGames = document.querySelector(".menu-games");
const menusports = document.querySelector(".menu-sports");

games.addEventListener("click", (event) => {
    event.preventDefault();


    if (menusports.classList.contains('active')) {
        menusports.classList.remove("active");
        sports.classList.remove("active");
    }

    event.currentTarget.classList.toggle("active");
    menuGames.classList.toggle("active");
})

sports.addEventListener("click", (event) => {
    event.preventDefault();

    if (menuGames.classList.contains('active')) {
        menuGames.classList.remove("active");
        games.classList.remove("active");
    }

    event.currentTarget.classList.toggle("active");
    menusports.classList.toggle("active");
})
