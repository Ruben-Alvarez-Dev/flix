import * as movieCard from "../components/main/movieCard/movieCard.js";
import * as vars from "./vars.js";

export const ignition = async () => {
  getMovies(vars.URL_API_1, vars.options, section1);
  getMovies(vars.URL_API_2, vars.options, section2);
  getMovies(vars.URL_API_3, vars.options, section3);
  getMovies(vars.URL_API_4, vars.options, section4);
  getMovies(vars.URL_API_5, vars.options, section5);
  getMovies(vars.URL_API_6, vars.options, section6);
};
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
    /* const { id, title, poster } = movie; */
    const card = movieCard.template(movie);
    listMovies += card;
  });
  renderMovies(listMovies, target);
  /* return listMovies; */
  /*   putListeners();
   */
};
export const renderMovies = (mappedMovies, target) => {
  target.innerHTML = "";
  target.innerHTML += mappedMovies;
  const toListenInThisTarget = target.querySelectorAll(".movieCard");
  putListeners(toListenInThisTarget);
};
export const putListeners = (movieCards) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.addEventListener("click", () => {
          click(entry.target);
        });
        observer.unobserve(entry.target);
      }
    });
  });
  movieCards.forEach((card) => {
    observer.observe(card);
  });
};
export const click = async (card) => {
  const urlTrailer = await movieCard.getTrailer(card.id);
  await movieCard.renderTrailer(urlTrailer, frame);
};
