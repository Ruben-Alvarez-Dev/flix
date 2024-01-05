import "./style.css";

const form = document.getElementById("form");
const search = document.getElementById("search");
const main = document.getElementById("main");

const SEARCH_URL = "https://api.themoviedb.org/3/search/keyword?query=";
const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc";
const IMAGE_PATH = "https://image.tmdb.org/t/p/w1280/";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYzFmODBiMTk0ZjNmMDJhZmY5ZTE5NzNlMDc4NzBlYiIsInN1YiI6IjY0ZGE3ZDA5YmYzMWYyMDFjY2MwMjI5MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9sx4LvoFY_tf3GBe96QtR_0wWw6C80n-SXdDXd123TU",
  },
};

// Get movies
async function getMovies(url) {
  const res = await fetch(url, options);
  const data = await res.json();
  displayMovies(data.results);
  console.log(data);
  return data;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchValue = search.value;
  if (searchValue && searchValue !== "") {
    getMovies(SEARCH_URL + searchValue);
  } else {
    window.location.reload();
  }
});

// Display movies
function displayMovies(movies) {
  main.innerHTML = "";
  movies.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie;
    const moviesElement = document.createElement("div");
    moviesElement.classList.add("movie");
    moviesElement.innerHTML = `
    <img src="${IMAGE_PATH + poster_path}" alt="${title}">
    <div class="movie-info">
      <h3>${title}</h3>
      <span class="${getClassesByRating(vote_average)}">${vote_average}</span>
      <div class="overview">
        <h3>Overview</h3>
        <p>${overview}</p>
      </div>
    </div>
  `;

    main.appendChild(moviesElement);
  });
}

function getClassesByRating(rating) {
  if (rating >= 8) {
    return "green";
  } else if (rating >= 5) {
    return "orange";
  } else {
    return "red";
  }
}

getMovies(API_URL);
