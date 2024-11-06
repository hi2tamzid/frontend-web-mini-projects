const topContent = document.querySelector(".top-content");
const bottomContent = document.querySelector(".bottom-content");
const smallJar = document.querySelectorAll(".small-jar");
const topContentHeading = topContent.querySelector("h4");
const bottomContentHeading = bottomContent.querySelector("p");
let lastClicked;
smallJar.forEach((element, index) => {
  element.addEventListener("click", (e) => {
    let copyIndex = index;
    if (element.classList.contains("active") && element == lastClicked)
      copyIndex = copyIndex - 1;

    smallJar.forEach((item, newIndex) => {
      if (copyIndex >= newIndex) item.classList.add("active");
      else item.classList.remove("active");
    });

    const percentage = (100 / 8) * (copyIndex + 1);
    topContent.style.height = `${100 - percentage}%`;
    bottomContent.style.height = `${percentage}%`;
    const liter = (2 / 100) * (100 - percentage);
    topContentHeading.textContent = `${liter}L`;
    bottomContentHeading.textContent = `${percentage}%`;
    lastClicked = element;
  });
});
