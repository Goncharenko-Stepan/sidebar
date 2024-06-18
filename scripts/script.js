const firstDiv = document.querySelector(".firstDiv");
const openButton = document.querySelector(".openButton");
const sideBarDiv = document.querySelector(".sideBarDiv");

openButton.addEventListener("click", () => {
  sideBarDiv.classList.toggle("active");
  if (sideBarDiv.classList.contains("active")) {
    sideBarDiv.style.display = "block";
  } else {
    sideBarDiv.style.display = "none";
  }
});
