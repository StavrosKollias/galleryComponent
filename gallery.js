function getElements(type) {
  const elements = document.querySelectorAll(type);
  return elements;
}

// ".gallery-image"

function loadGallery() {
  const images = getElements(".gallery-image");

  images.forEach((e) => {
    var realWidth = e.naturalWidth;
    var realHeight = e.naturalHeight;

    var change = realWidth / 200;

    var newHeight = realHeight / change;
    // e.parentElement.style.maxHeight = e.naturalHeight;
    console.log(realWidth + " " + realHeight);
    // e.style.height = "100%";
    e.style.width = "100%";
    e.parentElement.style.height = newHeight + "px";
    // e.parentElement.style.width = "50px";
  });
}

window.addEventListener("load", () => {
  loadGallery();
});
