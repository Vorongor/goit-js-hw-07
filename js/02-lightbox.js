import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);

const galeryRef = document.querySelector(".gallery");

function makeGalerryMarkap(items) {
    return items
    .map((item) => `<li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
       <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
    </a>
 </li>`)
    .join(" ");
}
console.log(makeGalerryMarkap(galleryItems));

galeryRef.innerHTML = makeGalerryMarkap(galleryItems);

galeryRef.addEventListener('click', onImageClick)

function onImageClick (evt) {
    evt.preventDefault();
    if (evt.target.nodeName !== "IMG") {
        return;        
    }

    const instance = basicLightbox.create(`
    <iframe src="https://www.youtube.com/embed/E1oZhEIrer4" width="560" height="315" frameborder="0"></iframe>
`)

instance.show()
}
