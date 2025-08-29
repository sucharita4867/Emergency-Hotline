const callHistory = [];

function getElement(id) {
  const element = document.getElementById(id);
  return element;
}

// coin update function
const all = document.querySelectorAll(".love-icon");
const navLove = getElement("nav-love");
let count = 0;
for (const allArray of all) {
  allArray.addEventListener("click", function () {
    count++;
    navLove.innerText = count;
  });
}

// call btn clicked work
const cardCallButton = document.getElementsByClassName("call-btn");
for (const cardBtn of cardCallButton) {
  cardBtn.addEventListener("click", function () {
    const cardSubTitle = cardBtn.parentNode.parentNode.childNodes[5].innerText;
    const cardNumber = cardBtn.parentNode.parentNode.childNodes[7].innerText;
    let cardTitle = cardBtn.parentNode.parentNode.childNodes[3].innerText;
    alert(`Calling ${cardSubTitle} ${cardNumber}`);
    const navCoinBtn = getElement("nav-coin");
    const sideItems = getElement("side-items");

    let clickOk = `Calling ${cardSubTitle} ${cardNumber}`;
    let navCoin = parseInt(navCoinBtn.innerText);
    const date = new Date().toLocaleTimeString();
    if (navCoin <= 10) {
      alert("not enough coin");
      return;
    } else if (clickOk) {
      navCoinBtn.innerText = navCoin - 20;
      // sideItems.innerText = `${cardTitle} ${cardNumber} ${date}`;
      const sideContainer = getElement("side-container");
      const newCart = document.createElement("div");
      newCart.innerHTML = `
      <div id="side-items"class="bg-gray-100 p-2 rounded-lg my-4  md:flex  md:justify-between items-center">
                                  <div>
                                        <h1 class="md:font-semibold md:text-lg text-sm">${cardTitle}</h1>
                                        <p class="text-[#5c5c5c]">${cardNumber}</p>
                                  </div>
                                  <p>${date}</p>
                            </div>
      `;
      sideContainer.appendChild(newCart);
    }
  });
}
document.getElementById("clear-btn").addEventListener("click", function () {
  const sideContainer = getElement("side-container");
  sideContainer.innerHTML = "";
});

// copy btn works

const copyBtn = document.querySelectorAll(".copy-btn");
const navCopy = getElement("nav-copy");
let counts = 0;
for (const item of copyBtn) {
  item.addEventListener("click", function () {
    const copyNum = item.parentNode.parentNode.childNodes[7].innerText;
    navigator.clipboard.writeText(copyNum);
    counts++;
    navCopy.innerText = counts;
    alert(`The number is copied: ${copyNum}`);
  });
}
