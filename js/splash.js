const splash = document.querySelector(".splash-screen");

splash.addEventListener("animationend", () => {
  splash.remove();
});
