import * as movieCard from "../components/main/movieCard/movieCard.js";
import * as vars from "./vars.js";

export const ignition = async () => {
  getMovies(vars.URL_API_1, vars.options, section1);
  await getMovies(vars.URL_API_2, vars.options, section2);
  await getMovies(vars.URL_API_3, vars.options, section3);
  await getMovies(vars.URL_API_4, vars.options, section4);
  await getMovies(vars.URL_API_5, vars.options, section5);
  await getMovies(vars.URL_API_6, vars.options, section6);

  const containers = document.querySelectorAll(".sectionContainer");
  if (containers.length > 0) {
    containers[0].scrollIntoView({ behavior: "smooth", block: "start" });
    containers.forEach((container) => {
      container.style.display = "flex";
      container.style.transition = "opacity 1s ease-in-out";
      setTimeout(() => {
        container.style.opacity = "1";
        containers[1].setAttribute("active", "true");
        containers[2].style.opacity = "0.5";
      }, 150);
    });
  }
  setTimeout(() => {
    whereIsSection(document.querySelectorAll("section"));
  }, 300);
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

  const sectionContainer = await card.closest(".sectionContainer");
  if (sectionContainer && sectionContainer.getAttribute("active")) {
    await movieCard.renderBackdrop(urlBackdrop, heroBackdrop);
  }
};
export const mouseClick = async (card) => {
  const urlTrailer = await movieCard.getTrailer(card.id);
  movieCard.renderTrailer(urlTrailer, heroTrailer);
};

export const whereIsSection = (sections) => {
  main.addEventListener("scroll", () => {
    sections = document.querySelectorAll(".sectionContainer");
    sections.forEach((section) => {
      const thirdQuarterTop = app.offsetHeight * (2 / 4);
      const thirdQuarterBottom = app.offsetHeight * (3 / 4);

      if (
        section.getBoundingClientRect().top <= thirdQuarterBottom &&
        section.getBoundingClientRect().top >= thirdQuarterTop
      ) {
        section.style.opacity = "1";
        section.setAttribute("active", "true");
      } else if (section.getBoundingClientRect().top < thirdQuarterTop) {
        section.style.opacity = "0";
        section.removeAttribute("active");
      } else {
        section.style.opacity = "0.5";
        section.removeAttribute("active");
      }
    });
  });
};
