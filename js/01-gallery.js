import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryPictures = document.querySelector('.gallery');

const markup = createPictures(galleryItems);
function createPictures(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div> `;
    })
    .join(""); 

};

galleryPictures.insertAdjacentHTML('beforeend', markup);

galleryPictures.addEventListener('click', (evt) => {
    evt.preventDefault();

    if (evt.target.nodeName !== 'IMG') {
        return;
    }
    const pict = evt.target.getAttribute('data-source');

    const instance = basicLightbox.create(` <img src = '${pict}' width = '800' height = '600' /> `);

    instance.show();

});



