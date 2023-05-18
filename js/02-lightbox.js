import { galleryItems } from "./gallery-items.js";
// Change code below this line
// console.log(galleryItems);

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
// console.log(makeGalerryMarkap(galleryItems));

galeryRef.innerHTML = makeGalerryMarkap(galleryItems);


function onImageClick (evt) {
    evt.preventDefault();
    if (evt.target.nodeName !== "IMG") {
        return;        
    }
    const lightbox = new SimpleLightbox('.gallery a', {
        captionsData: "alt",
        captionDelay: 250,
        disableScroll: false
     });
}

galeryRef.addEventListener('click', onImageClick)