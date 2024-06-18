const firstDiv = document.querySelector(".firstDiv");
const openButton = document.querySelector(".openButton");
const sideBarDiv = document.querySelector(".sideBarDiv");

openButton.addEventListener("click", () => {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  const currentLeft = parseInt(window.getComputedStyle(sideBarDiv).left, 10);
  const currentTop = parseInt(window.getComputedStyle(sideBarDiv).top, 10);

  if (currentLeft < screenWidth && currentTop < screenHeight) {
    sideBarDiv.style.left = screenWidth + "px";
    sideBarDiv.style.top = screenHeight + "px";
  } else {
    sideBarDiv.style.left = "0px";
    sideBarDiv.style.top = "50px";
  }
});
