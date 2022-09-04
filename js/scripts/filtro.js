
const filtro = document.querySelectorAll(".filtro a");

filtro.forEach((item) => {

  item.addEventListener('click', (event) => {
    event.preventDefault();

    filtro.forEach((itemClass) => {

      if (itemClass.classList.contains("active")) {
        console.log(itemClass, event.currentTarget);
        if (itemClass !== event.currentTarget) {
          itemClass.classList.remove("active");
        }
      }
    })

    item.classList.toggle("active");

    const href = item.getAttribute('href');

    const paneGames = document.querySelectorAll(".tab-pane-games");
    paneGames.forEach((item) => {
      if (item.classList.contains("active")) {
        item.classList.remove("active");
      }
    });

    const paneGame = document.querySelector(href);

    if (item.classList.contains("active")) {
      paneGame.classList.add("active")
    }
    else {
      paneGame.classList.remove("active")
      paneGames[0].classList.add("active");
    }
  })
});

