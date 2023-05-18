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



function makeModalWindow(event) {
  event.preventDefault();
  // console.log(event.target);
  if (event.target.nodeName !== "IMG") {
    return;
  }
  
  const instance = basicLightbox.create(`
  <img src="${event.target.attributes.datasource.nodeValue}" width="800" height="600">
  `);
  // console.log(event.target.attributes.datasource.nodeValue);
  instance.show();
  galleryRef.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      instance.close();
    }
  });
}

galleryRef.addEventListener("click", makeModalWindow);