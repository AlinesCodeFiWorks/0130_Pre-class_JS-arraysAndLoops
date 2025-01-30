//Ingredients
const darkModeButton = document.querySelector(".darkModeButton");
const docBody = document.body;

//Recipe
function displayMode() {
  if (darkModeButton.innerText === "Dark Mode") {
    darkModeButton.classList.add("darkModeOn");
    docBody.classList.add("darkModeOn");
    darkModeButton.textContent = "Light Mode";
  } else {
    darkModeButton.classList.remove("darkModeOn");
    docBody.classList.remove("darkModeOn");
    darkModeButton.innerHTML = "Dark Mode";
  }
}
darkModeButton.addEventListener("click", displayMode);
