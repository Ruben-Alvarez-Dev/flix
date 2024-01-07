import "./app.css";
/* import * as vars from "../services/vars.js"; */
import * as header from "../components/header/header.js";
import * as hero from "../components/hero/hero.js";
import * as main from "../components/main/main.js";

export const initApp = (target) => {
  target.innerHTML =
    /* header.headerComponent() +  */ hero.heroComponent() +
    main.mainComponent();
};
