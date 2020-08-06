function getElements(type) {
  const elements = document.querySelectorAll(type);
  return elements;
}

function loadGallery() {
  const images = getElements(".gallery-image");
  const galleryListContainer = images[0].parentElement.parentElement;
  const imageContainer = images[0].parentElement;
  var gridRationWidth =
    galleryListContainer.clientWidth / imageContainer.clientWidth;
  gridRationWidth = Math.round(gridRationWidth);

  galleryListContainer.style.gridTemplateColumns = `repeat(${gridRationWidth}, 1fr)`;
  const imagesLength = images.length;

  images.forEach((e) => {
    var realWidth = e.naturalWidth;
    var realHeight = e.naturalHeight;
    var change = realWidth / e.parentElement.clientWidth;
    var newHeight = realHeight / change;
    console.log(realWidth + " " + realHeight);
    e.style.width = "100%";
    e.parentElement.style.height = newHeight + "px";
  });
}

window.addEventListener("load", () => {
  loadGallery();
});
