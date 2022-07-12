// Задание 1 - галерея изображений​

// Создай галерею с возможностью клика по её элементам и просмотра полноразмерного изображения в модальном окне.
// Выполняй это задание в файлах 01 - gallery.html и 01 - gallery.js.Разбей его на несколько подзадач:

// 1.Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.

// Обрати внимание на то, что изображение обернуто в ссылку, а значит при клике по умолчанию пользователь будет перенаправлен на другую страницу.Запрети это поведение по умолчанию.
    // evt.preventDefault(); //отмена автоматического перехода по ссылке
  
// 2.Реализация делегирования на div.gallery и получение url большого изображения.
// 3.Подключение скрипта и стилей библиотеки модального окна basicLightbox. Используй CDN сервис jsdelivr и добавь в проект ссылки на минифицированные (.min) файлы библиотеки.

//Подключаем в файле html
//<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.css" />

//Скрипт подклбчаем перед!!! своим skript.js, чтобы мой .js уже видел библиотеку и выполнялся!!!
//<script src="https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.js"></script>


// 4.Открытие модального окна по клику на элементе галереи. Для этого ознакомься с документацией и примерами.
// 5.Замена значения атрибута src элемента <img> в модальном окне перед открытием. Используй готовую разметку модального окна с изображением из примеров библиотеки basicLightbox.

import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryBox = document.querySelector(".gallery");
const galleryImagesMarkup = createGalleryItems(galleryItems);

// 1.Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.
galleryBox.insertAdjacentHTML("beforeend", galleryImagesMarkup);

function createGalleryItems(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img class="gallery__image" src = "${preview}" data-source="${original}" alt = "${description}" /> 
         </a>
         </div> `;
  }).join('');
}

// 2.Реализация делегирования на div.gallery и получение url большого изображения.
galleryBox.addEventListener('click', onGalleryClick);

function onGalleryClick(evt) {
  evt.preventDefault(); //отмена автоматического перехода по ссылке
  const isGalleryItem = evt.target.classList.contains('gallery__image');
  if (!isGalleryItem) {
    return;
  }
 
  // 4.Открытие модального окна по клику на элементе галереи. Замена значения атрибута src элемента <img> в модальном окне перед открытием
  const targetItemAddr = evt.target.dataset.source;
  const instance = basicLightbox.create(`
    <img src="${targetItemAddr}">
`);
  instance.show();
}