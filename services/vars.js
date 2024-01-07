export const app = document.getElementById("app");

export const header = document.getElementById("header");
export const form = document.getElementById("form");
export const search = document.getElementById("search");

export const hero = document.getElementById("hero");
export const heroLeft = document.getElementById("heroLeft");
export const iframe = document.getElementById("iframe");

export const main = document.getElementById("main");
export const section = document.getElementById("section");
export const movieCard = document.getElementById("movieCard");

export const URL_SEARCH =
  "https://api.themoviedb.org/3/search/movie?include_adult=false&include_video=true?query=";
export const URL_API =
  "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=true?sort_by=popularity.desc";
export const PATH_IMAGE = "https://image.tmdb.org/t/p/w1280/";
export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYzFmODBiMTk0ZjNmMDJhZmY5ZTE5NzNlMDc4NzBlYiIsInN1YiI6IjY0ZGE3ZDA5YmYzMWYyMDFjY2MwMjI5MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9sx4LvoFY_tf3GBe96QtR_0wWw6C80n-SXdDXd123TU",
  },
};
