import "./movieCard.css";
import * as vars from "../../../services/vars";
import * as iframe from "../../hero/iframe/iframe.js";

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
  target.innerHTML = iframe.template(urlTrailer);
  /* document.querySelector("#iframe").setAttribute("src", urlTrailer); */
  return;
};
