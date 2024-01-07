import "./movieCard.css";
export const movieCard = (movie) => `
<div id="${movie.id}" class="movieCard">
  <img id="${movie.id}" src="${movie.poster}" alt="${movie.title}">
</div>
`;
