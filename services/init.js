import { movieCard } from "../components/main/movieCard/movieCard.js";
import * as vars from "./vars.js";

export const getMovies = async (url, options, target) => {
  const res = await fetch(url, options);
  const data = await res.json();
  mapMovies(data, target);
  /*   return data;
   */
};
export const mapMovies = (rawMovies, target) => {
  const mappedMovies = rawMovies.results.map((movie) => {
    return {
      id: movie.id,
      title: movie.title,
      poster: vars.PATH_IMAGE + movie.poster_path,
    };
  });
  listMovies(mappedMovies, target);
  /* return mappedMovies; */
};
export const listMovies = (mappedMovies, target) => {
  let listMovies = [];
  mappedMovies.forEach((movie) => {
    const { id, title, poster } = movie;
    const card = movieCard(movie);
    listMovies += card;
  });
  renderMovies(listMovies, target);
  /* return listMovies; */
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
  getMovies(vars.URL_API_1, vars.options, section1);
  getMovies(vars.URL_API_2, vars.options, section2);
  getMovies(vars.URL_API_3, vars.options, section3);
  getMovies(vars.URL_API_4, vars.options, section4);
  getMovies(vars.URL_API_5, vars.options, section5);
  getMovies(vars.URL_API_6, vars.options, section6);
};
