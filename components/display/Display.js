import "./Display.css";
/* import { Gallery } from "../gallery/Gallery.js"; */

export const DisplayComponent = (galleries) => {
  return `
  <main id="display" class="display">
  <div id="display__start" class="display__start"></div>
  ${galleries}
  <div id="display__end" class="display__end"></div>
  </main>
  `;
};
