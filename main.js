import "./style.css";

const api_key = "api_key=fc1f80b194f3f02aff9e1973e07870eb";
const api_read_token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYzFmODBiMTk0ZjNmMDJhZmY5ZTE5NzNlMDc4NzBlYiIsInN1YiI6IjY0ZGE3ZDA5YmYzMWYyMDFjY2MwMjI5MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9sx4LvoFY_tf3GBe96QtR_0wWw6C80n-SXdDXd123TU";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYzFmODBiMTk0ZjNmMDJhZmY5ZTE5NzNlMDc4NzBlYiIsInN1YiI6IjY0ZGE3ZDA5YmYzMWYyMDFjY2MwMjI5MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9sx4LvoFY_tf3GBe96QtR_0wWw6C80n-SXdDXd123TU",
  },
};

const image_path = "https://image.tmdb.org/t/p/w1280";

const search_urlBase = "http://api.themoviedb.org/3/search/movie?";
const search_url = search_urlBase + api_key;
const api_urlBase =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc$";
const api_url = api_urlBase + api_key;

const form = document.getElementById("form");
const search = document.getElementById("search");
const main = document.getElementById("main");
