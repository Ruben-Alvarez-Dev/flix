import "./movieCard.css";
import * as vars from "../../../services/vars";

export const template = (movie) => `
<div id="${movie.id}" class="movieCard">
  <img id="${movie.id}" src="${movie.poster}" alt="${movie.title}">
</div>
`;

export const getTrailer = async (id) => {
  const response = await fetch(
    vars.URL_MOVIE_ID + id + "/videos",
    vars.options
  );
  const data = await response.json();
  const trailers = await data.results.filter(
    (result) => result.type === "Trailer"
  );
  const trailer = trailers[0].key;
  const urlTrailer = vars.URL_YOUTUBE_INIT + trailer + vars.URL_YOUTUBE_END;
  // console.log(urlTrailer);

  return urlTrailer;
};
export const renderTrailer = (urlTrailer, target) => {
  /* heroTrailer.classList.remove("reveal"); */
  target.style.opacity = "0";

  target.setAttribute("src", urlTrailer);
  setTimeout(() => {
    target.style.opacity = "1";
  }, 750);
  /* heroTrailer.classList.add("reveal"); */

  return;
};
export const getBackdrop = async (id) => {
  const response = await fetch(
    vars.URL_MOVIE_ID + id + "/images",
    vars.options
  );

  const data = await response.json();
  const backdrops = await data.backdrops;
  const backdrop = backdrops[0].file_path;
  const urlBackdrop = vars.PATH_IMAGE + backdrop;

  return urlBackdrop;
};
export const renderBackdrop = async (urlBackdrop) => {
  await (heroBackdrop.style.backgroundImage = `url(${urlBackdrop})`);
  return;
};
export const logoFn = async (card) => {
  console.log(card.id);
  console.log(vars.URL_MOVIE_ID + card.id);
  const response = await fetch(vars.URL_MOVIE_ID + card.id, vars.options);
  const data = await response.json();
  console.log(data);
};
