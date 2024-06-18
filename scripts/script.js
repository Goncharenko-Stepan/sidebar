const firstDiv = document.querySelector(".firstDiv");
const openButton = document.querySelector(".openButton");
const sideBarDiv = document.querySelector(".sideBarDiv");

sideBarDiv.style.left = "-300px";

openButton.addEventListener("click", () => {
  const currentLeft = parseInt(window.getComputedStyle(sideBarDiv).left, 10);

  if (currentLeft < 0) {
    sideBarDiv.style.left = "0px";
  } else {
    sideBarDiv.style.left = "-300px";
  }
});
