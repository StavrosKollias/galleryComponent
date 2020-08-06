function getElements(type) {
  const elements = document.querySelectorAll(type);
  return elements;
}

function loadGallery() {
  const images = getElements(".gallery-image");
  const imagesLength = images.length;

  const galleryListContainer = images[0].parentElement.parentElement;
  const imageContainer = images[0].parentElement;
  const gridRatioWidth = findGridRatioWidth(
    galleryListContainer,
    imageContainer,
    imagesLength
  );
  galleryListContainer.style.gridTemplateColumns = `repeat(${gridRatioWidth}, max-content)`;

  checkRows(gridRatioWidth, imagesLength);
  forEachImage(images);
}

function checkRows(gridRatioWidth, length) {
  const countRows = 0;
  const module = length % gridRatioWidth;
  module > 0
    ? console.log(module + " " + gridRatioWidth)
    : console.log(module + " " + gridRatioWidth);
}

function forEachImage(listImages) {
  listImages.forEach((e) => {
    var realWidth = e.naturalWidth;
    var realHeight = e.naturalHeight;
    var change = realWidth / e.parentElement.clientWidth;
    var newHeight = realHeight / change;
    e.style.width = "100%";
    e.parentElement.style.height = newHeight + "px";
  });
}

function findGridRatioWidth(
  galleryListContainer,
  imageContainer,
  imagesLength
) {
  var gridRatioWidth =
    galleryListContainer.clientWidth /
    (imageContainer.clientWidth +
      (galleryListContainer.clientWidth * 20) / imageContainer.clientWidth);
  gridRatioWidth = Math.round(gridRatioWidth);

  gridRatioWidth > imagesLength
    ? (gridRatioWidth = imagesLength)
    : gridRatioWidth;

  return gridRatioWidth;
}

window.addEventListener("load", () => {
  loadGallery();
});

window.addEventListener("resize", () => {
  loadGallery();
});
