const search = document.querySelector(".pink-search");
const loc = document.querySelector(
  "body > header > div > div.header > div.user-links > div.location"
);
search.addEventListener("click", (e) => {
  const input = document.querySelector(".tab input");
  input.focus();
  console.log(input);
});

loc.addEventListener("click", (e) => {
  const clickText = document.querySelector(
    "body > header > div > div.header > div.user-links > div.location > div.on-click-text"
  );
  if (clickText.style.display === "none") {
    clickText.style.display = "block";
  } else {
    clickText.style.display = "none";
  }
});
