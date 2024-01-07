import { movieCard } from "../components/main/movieCard/movieCard.js";
import * as vars from "./vars.js";

export const getMovies = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();
  mapMovies(data);
  return data;
};
export const mapMovies = (rawMovies) => {
  const mappedMovies = rawMovies.results.map((movie) => {
    return {
      id: movie.id,
      title: movie.title,
      poster: vars.PATH_IMAGE + movie.poster_path,
    };
  });
  listMovies(mappedMovies);
  return mappedMovies;
};
export const listMovies = (mappedMovies) => {
  let listMovies = [];
  mappedMovies.forEach((movie) => {
    const { id, title, poster } = movie;
    const card = movieCard(movie);
    listMovies += card;
  });
  renderMovies(listMovies, section1);
  return listMovies;
};
export const renderMovies = (mappedMovies, target) => {
  target.innerHTML = "";
  target.innerHTML += mappedMovies;

  /* mappedMovies.forEach((movie) => {
    const { id, title, poster_path } = movie;
    const card = movieCard(movie);
    moviesArray += card;
  });
  target.innerHTML += movie; */
};
export const putListeners = () => {};

export const ignition = () => {
  getMovies(vars.URL_API, vars.options);
};
