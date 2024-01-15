import "./Gallery.css";
export const Gallery = (cardsArray, type) => {
  return `
  <div id="gallery" class="gallery" ${type}="true">
  <div id="gallery__start" class="gallery__start"></div>
  ${cardsArray}
  <div id="gallery__end" class="gallery__end"></div>
  </div>
  `;
};
