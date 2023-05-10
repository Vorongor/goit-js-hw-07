import { galleryItems } from "./gallery-items.js";
// Change code below this line

// =============CREATE GALLERY HTML=========
const body = document.querySelector("body");
const galleryRef = document.querySelector(".gallery");
const pictures = [];

function makeGalleryItem(items) {
  for (const item of items) {
    const tumb = document.createElement("li");
    tumb.classList.add("gallery__item");

    const picture = document.createElement("a");
    picture.classList.add("gallery__link");
    picture.setAttribute("href", `${item["original"]}`);
    tumb.appendChild(picture);

    const pictureEl = document.createElement("img");
    pictureEl.classList.add("gallery__image");
    pictureEl.setAttribute("src", `${item["preview"]}`);
    pictureEl.setAttribute("dataSource", `${item["original"]}`);
    pictureEl.setAttribute("alt", `${item["description"]}`);
    picture.appendChild(pictureEl);
    pictures.push(tumb);
  }
}
makeGalleryItem(galleryItems);
galleryRef.append(...pictures);
// console.log(galleryItems);

// ============CREATE MODAL WINDOW HTML======

const modal = document.createElement("div");
modal.classList.add("modal-window");
modal.classList.add("is-hidden");
modal.addEventListener("click", closeModal);
modal.addEventListener("keydown", event => {
    // if (event.code === '')
    // console.log(event);
});

function closeModal() {
  modal.classList.add("is-hidden");
  modal.innerHTML = "";
}
body.appendChild(modal);

galleryRef.addEventListener("click", makeModalWindow);

function makeModalWindow(event) {
  event.preventDefault();
  // console.log(event.target);
  if (event.target !== event.currentTarget) {
    modal.classList.remove("is-hidden");
    const currentImageRef = document.createElement("img");
    currentImageRef.classList.add("modal-img");
    currentImageRef.setAttribute(
      "src",
      event.target.attributes.datasource.nodeValue
    );
    modal.appendChild(currentImageRef);
    console.dir(event.target.attributes.datasource.nodeValue);
  } else {
    console.log("nope");
  }
}
