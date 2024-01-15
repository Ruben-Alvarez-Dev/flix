import "./App.css";
import "../utils/vars.js";
import { sel, whatDeviceIs } from "../utils/utils.js";
/* import * as vars from "../services/vars.js"; */
/* import { HeaderComponent } from "../components/header/Header.js"; */
import { AsideComponent } from "../components/aside/aside.js";
import { HeroComponent } from "../components/hero/Hero.js";
import { InfoComponent } from "../components/info/Info.js";
import { DisplayComponent } from "../components/display/Display.js";
/* import { FooterComponent } from "../components/footer/Footer.js"; */
import { Gallery } from "../components/gallery/gallery.js";
import { MovieCard } from "../components/movieCard/MovieCard.js";
import { CharacterCard } from "../components/characterCard/CharacterCard.js";

export const initHtml = () => {
  const moviesAray = [];
  for (let i = 0; i < 20; i++) {
    moviesAray.push(MovieCard());
  }
  const charactersArray = [];
  for (let i = 0; i < 20; i++) {
    charactersArray.push(CharacterCard());
  }

  sel("#app").innerHTML = `
  <div id="gridContainer" class="gridContainer">
  ${
    AsideComponent(Gallery(charactersArray.join(""), "portrait")) +
    InfoComponent() +
    HeroComponent() +
    DisplayComponent() +
    Gallery(moviesAray.join(""), "landscape") +
    Gallery(moviesAray.join(""), "landscape") +
    Gallery(moviesAray.join(""), "landscape") +
    Gallery(moviesAray.join(""), "landscape") +
    Gallery(moviesAray.join(""), "landscape")
  }

  </div>
  `;
  // Simulation

  // APP Height Adjutsment
  whatDeviceIs();
};
