import "./header.css";

export const headerComponent = () => {
  return `
  <header id="header" className="header">
    <form action="" id="form" className="form">
        <input
          type="text"
          id="search"
          class="search"
          placeholder="Search..."
        />
      </form>
    </header>
  `;
};
