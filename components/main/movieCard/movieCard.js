import "./movieCard.css";
export const movieCard = (movie) => `
<div class="movieCard">
  <img id="${movie.id}" src="${movie.poster}" alt="${movie.title}">
</div>
`;
