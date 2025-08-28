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
    alert(`Calling ${cardSubTitle} ${cardNumber}`);

    const navCoinBtn = getElement("nav-coin");
    let clickOk = `Calling ${cardSubTitle} ${cardNumber}`;
    if (clickOk) {
      let navCoin = parseInt(navCoinBtn.innerText);
      navCoinBtn.innerText = navCoin - 20;
      console.log(navCoinBtn);
    } else if (navCoinBtn <= 0) {
      console.log(navCoinBtn);
    }
  });
}
// const sideItems = getElement("side-items");
//   const data = {
//     subtitle: `${cardSubTitle}`,
//     number: `${cardNumber}`,
//     date: new Date().toLocaleTimeString(),
//   };
//   sideItems.push(data);
//   //   console.log(callHistory);
