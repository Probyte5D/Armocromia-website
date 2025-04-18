document.querySelectorAll(".color").forEach((div) => {
  div.style.backgroundColor = div.dataset.color;

  div.addEventListener("click", () => {
    const colorCode = div.dataset.color;
    navigator.clipboard.writeText(colorCode).then(() => {
      div.style.outline = "3px solid #222";
      setTimeout(() => div.style.outline = "none", 1000);
    });
  });
});
