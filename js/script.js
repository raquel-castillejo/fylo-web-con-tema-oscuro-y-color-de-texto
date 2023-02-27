// cambio del color de fondo
const themeButtonElement = document.getElementById('theme');

themeButtonElement.addEventListener('click', ()=> {
    console.log("click click");

    document.body.classList.toggle('dark');
});


// cambio del color de los textos
const colorSelectElement = document.getElementById("text-color-select");

const rootStyles = document.documentElement.style;

colorSelectElement.addEventListener("click", (e) => {
  rootStyles.setProperty("--txt-color", e.target.dataset.color);
  rootStyles.setProperty("--white-text", e.target.dataset.color);
  console.dir(e.target);
});