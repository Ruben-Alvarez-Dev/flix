import "./style.css";

const form = document.getElementById("form");
const search = document.getElementById("search");
const main = document.getElementById("main");

const SEARCH_URL =
  "https://api.themoviedb.org/3/search/movie?include_adult=false&include_video=true?query=";
const API_URL =
  "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=true?sort_by=popularity.desc";
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

// Search Event Listener
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
    const { id, title, poster_path, vote_average, overview } = movie;
    const moviesElement = document.createElement("div");
    moviesElement.classList.add("movie");
    moviesElement.innerHTML = `
    <img id="${id}" src="${IMAGE_PATH + poster_path}" alt="${title}">
    <div class="movie-info">
      <h3>${title}</h3>
      <span class="${getClassesByRating(vote_average)}">${vote_average}</span>
      <div class="overview">
        <h3>Overview</h3>
        <p>${overview}</p>
      </div>
    </div>
  `;
    const element = main.appendChild(moviesElement);
    element.addEventListener("click", () => {
      const img = element.querySelector("img");
      const id = img.id;
      console.log(id);
      fetch(
        `https://api.themoviedb.org/3/movie/${id}/videos?include_adult=false&include_video=true?`,
        options
      )
        .then((res) => res.json())
        .then((data) => {
          const trailers = data.results.filter(
            (result) => result.type === "Trailer"
          );
          console.log(trailers);
          const trailer = trailers[0];
          console.log(trailer);
          const url = "https://www.youtube.com/watch?v=" + trailer.key;
          window.open(url, "_blank");
        })
        .catch((error) => {
          console.log(error);
        });
    });
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
