function getElements(type) {
  const elements = document.querySelectorAll(type);
  return elements;
}

function loadGallery() {}

window.addEventListener("load", () => {
  loadGallery();
});

window.addEventListener("resize", () => {
  loadGallery();
});
