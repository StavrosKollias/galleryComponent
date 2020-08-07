//  ------ functions ---------- Functions ----- unctions ------

var getValCssPropertyElement = function (elem, style) {
  return parseInt(window.getComputedStyle(elem).getPropertyValue(style));
};

var getHeightContent = function (item) {
  return item.querySelector(".content").getBoundingClientRect().height;
};

function getElements(type) {
  const elements = document.querySelectorAll(type);
  return elements;
}

var resizeImagesContainer = function () {
  var heightGridRows = getValCssPropertyElement(gallery, "grid-auto-rows");
  var gapGrid = getValCssPropertyElement(gallery, "grid-row-gap");
  gallery.querySelectorAll(".image-container").forEach(function (item) {
    var el = item;
    el.style.gridRowEnd =
      "span " +
      Math.ceil(
        (getHeightContent(item) + gapGrid) / (heightGridRows + gapGrid)
      );
  });
};

const gallery = document.querySelector(".gallery-images-container");

gallery.querySelectorAll("img").forEach(function (item) {
  var heightGridRows = getValCssPropertyElement(gallery, "grid-auto-rows");
  var gapGrid = getValCssPropertyElement(gallery, "grid-row-gap");
  var gitem = item.parentElement.parentElement;
  gitem.style.gridRowEnd =
    "span " +
    Math.ceil((getHeightContent(gitem) + gapGrid) / (heightGridRows + gapGrid));
});

window.addEventListener("resize", resizeImagesContainer);
