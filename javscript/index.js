

const loader = document.querySelector('.loading');

const myLoader = () => {
	loader.style.display = 'none';
}

const search = document.querySelector(".pink-search");
const loc = document.querySelector("#location");
const clickText = document.querySelector("#location .on-click-text");
search.addEventListener("click", (e) => {
  const input = document.querySelector(".tab input");
  input.focus();
});

loc.addEventListener("click", (e) => {
  if (clickText.style.display === "none") {
    clickText.style.display = "block";
  } else {
    clickText.style.display = "none";
  }
});

window.addEventListener("click", (event) => {
  const svg = document.querySelector("#location .globe svg path");
  if (event.target !== loc) {
    clickText.style.display = "none";
  }
});
