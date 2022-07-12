// Выполняй это задание в файлах 02-lightbox.html и 02-lightbox.js. Разбей его на несколько подзадач:

// 1. Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи. 
//Используй готовый код из первого задания.
// 2. Подключение скрипта и стилей библиотеки используя CDN сервис cdnjs. Необходимо добавить ссылки на два файла: simple-lightbox.min.js и simple-lightbox.min.css.
// 3. Инициализация библиотеки после того как элементы галереи созданы и добавлены в div.gallery. Для этого ознакомься с документацией SimpleLightbox - в первую очередь секции «Usage» и «Markup».
// 4. Посмотри в документации секцию «Options» и добавь отображение подписей к изображениям из атрибута alt. Пусть подпись будет снизу и появляется через 250 миллисекунд после открытия изображения.

import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryBox = document.querySelector(".gallery");
const galleryImagesMarkup = createGalleryItems(galleryItems);

// 1.Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.
galleryBox.insertAdjacentHTML("beforeend", galleryImagesMarkup);

function createGalleryItems(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
        return `<li class="gallery__item">
            <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
         </li> `;
  }).join('');
}

galleryBox.addEventListener('click', onGalleryClick);

import SimpleLightbox from "simplelightbox";

// function onGalleryClick(evt) {
//   evt.preventDefault(); //отмена автоматического перехода по ссылке
//   const isGalleryItem = evt.target.classList.contains('gallery__image');
//   if (!isGalleryItem) {
//     return;
//   }
    
    let gallery = new SimpleLightbox('.gallery__item');
gallery.on('show.simplelightbox', function () {
	// Do something…
});

gallery.on('error.simplelightbox', function (e) {
	console.log(e); // Some usefull information
});

// with jQuery nearly the same
let gallery = $('.gallery a').simpleLightbox();
gallery.on('show.simplelightbox', function () {
	// Do something…
});

//     <div class="gallery">
//     <a href="${original}"><img src="${preview}" alt="${description}" title="${description}"/></a>
//     <a href="images/image2.jpg"><img src="images/thumbs/thumb2.jpg" alt="" title="Beautiful Image"/></a>
// </div>