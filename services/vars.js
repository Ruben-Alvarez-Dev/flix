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

export const URL_API_1 =
  "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=true?sort_by=popularity.desc";
export const URL_API_2 =
  "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=true&sort_by=vote_count.desc&with_genres=12";
export const URL_API_3 =
  "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=true&sort_by=vote_count.desc&with_genres=27";
export const URL_API_4 =
  "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=true&sort_by=vote_count.desc&with_genres=80";
export const URL_API_5 =
  "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=true&sort_by=vote_count.desc&with_genres=10402";
export const URL_API_6 =
  "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=true&sort_by=vote_count.desc&with_genres=10752";

export const PATH_IMAGE = "https://image.tmdb.org/t/p/w1280/";
export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYzFmODBiMTk0ZjNmMDJhZmY5ZTE5NzNlMDc4NzBlYiIsInN1YiI6IjY0ZGE3ZDA5YmYzMWYyMDFjY2MwMjI5MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9sx4LvoFY_tf3GBe96QtR_0wWw6C80n-SXdDXd123TU",
  },
};
