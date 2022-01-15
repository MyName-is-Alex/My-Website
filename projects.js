const jsProjectContainer = document.querySelectorAll(".js-project-container");
const displayOptionContainer = document.querySelectorAll(".display-option");
const displayOptionLinks = document.querySelectorAll(".display-option a");
const closeBtn = document.querySelectorAll(".closeBtnContainer");

let displayState = true;

for (let i = 0; i < jsProjectContainer.length; i++) {
  function displayOptions() {
    jsProjectContainer[i].style.opacity = "0";
    jsProjectContainer[i].style.transitionDelay = "0ms";
    displayOptionContainer[i].style.transitionDelay = "300ms";
    displayOptionContainer[i].style.opacity = "1";
    displayOptionContainer[i].style.zIndex = "10";
    displayState = false;
  }
  jsProjectContainer[i].addEventListener("click", displayOptions);
  function displayProject() {
    jsProjectContainer[i].style.opacity = "1";
    jsProjectContainer[i].style.transitionDelay = "300ms";
    displayOptionContainer[i].style.opacity = "0";
    displayOptionContainer[i].style.zIndex = "-10";
    displayOptionContainer[i].style.transitionDelay = "0ms";
    displayState = true;
  }
  for (let y = 0; y < jsProjectContainer.length; y++) {
    closeBtn[i].addEventListener("click", displayProject);
  }
}
