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
    // console.log(cardTitle);
    alert(`Calling ${cardSubTitle} ${cardNumber}`);

    const navCoinBtn = getElement("nav-coin");
    const sideItems = getElement("side-items");

    let clickOk = `Calling ${cardSubTitle} ${cardNumber}`;
    let navCoin = parseInt(navCoinBtn.innerText);
    const date = new Date().toLocaleTimeString();
    if (navCoin <= 10) {
      // console.log("clicked");
      alert("not enough coin");
      return;
    } else if (clickOk) {
      navCoinBtn.innerText = navCoin - 20;
      sideItems.innerText = `${cardTitle} ${cardNumber} ${date}`;
      // console.log(sideItems);
      const data = {
        subtitle: `${cardSubTitle}`,
        number: `${cardNumber}`,
        date: new Date().toLocaleTimeString(),
      };

      const sideContainer = getElement("side-container");
      for (const sideItems of callHistory) {
        console.log(sideItems);

        // const div = document.createElement("div");
        // div.innerHTML = `
        // <div id="side-items"
        //                             class="bg-gray-200 p-4 rounded-lg my-4 flex justify-between items-center">
        //                             <div>
        //                                   <h1>${sideItems.cardTitle}</h1>
        //                                   <p>${sideItems.cardNumber}</p>
        //                             </div>
        //                             <p>${sideItems.date}</p>
        //                       </div>
        // `;
        // sideContainer.appendChild(div);
      }
    }
  });
}
// copy btn works
// const cardCopy = document
//   .getElementsByClassName(".copy-btn")
//   .addEventListener("click", function () {
//     console.log("copy btn clicked");
//   });

// const sideItems = getElement("side-items");
//   const data = {
//     subtitle: `${cardSubTitle}`,
//     number: `${cardNumber}`,
//     date: new Date().toLocaleTimeString(),
//   };
//   sideItems.push(data);
//   //   console.log(callHistory);
