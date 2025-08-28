function getElement(id) {
  const element = document.getElementById(id);
  return element;
}

const all = document.querySelectorAll(".love-icon");
const navLove = getElement("nav-love");
let count = 0;

for (const allArray of all) {
  allArray.addEventListener("click", function () {
    count++;
    navLove.innerText = count;
  });
}
