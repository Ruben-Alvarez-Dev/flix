import "./hero.css";

export const heroComponent = () => {
  return `
    
    <div id="hero" class="hero">
        <div opacity="0" id="heroBackdrop" class="heroBackdrop"></div>  
        <iframe id="heroTrailer" class="heroTrailer" src="" frameborder="0" allowfullscreen></iframe>
        <div id="heroShadow" class="heroShadow"></div>
    </div>
    
    `;
};
