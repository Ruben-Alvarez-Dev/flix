export const sel = (selector) => {
  return document.querySelector(selector);
};
export const whatDeviceIs = () => {
  const gridContainer = document.querySelector(".gridContainer");
  const ua = navigator.userAgent;
  if (
    /Mobile|iPad|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
      ua
    )
  ) {
    gridContainer.setAttribute("mobile", "true");
  } else {
    gridContainer.setAttribute("desktop", "true");
    return "desktop";
  }
};
