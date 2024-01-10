import * as movieCard from "../components/main/movieCard/movieCard.js";
import * as vars from "./vars.js";

export const ignition = async () => {
  getMovies(vars.URL_API_1, vars.options, section1);
  getMovies(vars.URL_API_2, vars.options, section2);
  getMovies(vars.URL_API_3, vars.options, section3);
  getMovies(vars.URL_API_4, vars.options, section4);
  getMovies(vars.URL_API_5, vars.options, section5);
  getMovies(vars.URL_API_6, vars.options, section6);
  await whereIsSection(document.querySelectorAll("section"));
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
  const parent = target.parentNode;
  parent.innerHTML = `<h2>${target.id}</h2>`;
  /* target.innerHTML = `<h2>${target.id}</h2>`; */
  parent.innerHTML += mappedMovies;
  const cardsToListen = parent.querySelectorAll(".movieCard");
  putListeners(cardsToListen);
};
export const putListeners = (movieCards) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.addEventListener("mouseover", () => {
          setTimeout(() => {
            heroBackdrop.classList.add("reveal");
            heroTrailer.classList.add("reveal");
            mouseOver(entry.target);
          }, 750);
        });
        entry.target.addEventListener("mouseout", () => {
          setTimeout(() => {
            heroBackdrop.classList.remove("reveal");
            /* heroTrailer.classList.remove("reveal"); */
            heroTrailer.style.opacity = "0";
            setTimeout(() => {
              heroTrailer.setAttribute("src", "");
            }, 750);
          }, 750);
        });
        entry.target.addEventListener("click", () => {
          mouseClick(entry.target);
          setTimeout(() => {
            heroTrailer.style.opacity = "1";
          }, 750);
        });
        observer.unobserve(entry.target);
      }
    });
  });
  movieCards.forEach((card) => {
    observer.observe(card);
  });
};
export const mouseOver = async (card) => {
  const urlBackdrop = await movieCard.getBackdrop(card.id);
  await movieCard.renderBackdrop(urlBackdrop, heroBackdrop);
};
export const mouseClick = async (card) => {
  const urlTrailer = await movieCard.getTrailer(card.id);
  await movieCard.renderTrailer(urlTrailer, heroTrailer);
};
export const whereIsSection = (sections) => {
  main.addEventListener("scroll", () => {
    sections = document.querySelectorAll(".sectionContainer");
    sections.forEach((section) => {
      if (
        section.getBoundingClientRect().top > main.offsetHeight / 2 &&
        section.getBoundingClientRect().bottom < main.offsetHeight
      ) {
        section.style.opacity = "1";
      } else if (section.getBoundingClientRect().top < main.offsetHeight / 2) {
        section.style.opacity = "0";
      } else {
        section.style.opacity = "0.5";
      }
    });
  });
};
