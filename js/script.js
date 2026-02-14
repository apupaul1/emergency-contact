const callBtn = document.getElementsByClassName("call-btn");
const titleCollection = document.getElementsByClassName("emergency-title");
let totalPoints = document.getElementById("total-points");

for (let i = 0; i < callBtn.length; i++) {
  callBtn[i].addEventListener("click", function (event) {
    event.preventDefault();

    if (totalPoints.innerText == 0) {
      alert("Please Recharge your Account");
      return
    }

    let convertedPoints = parseInt(totalPoints.innerText);
    convertedPoints = convertedPoints - 20;
    totalPoints.innerText = convertedPoints;

    const date = new Date().toLocaleTimeString();

    const titleText = titleCollection[i].innerText;
    const container = document.getElementById("history-container");

    const div = document.createElement("div");

    div.innerHTML = `
    <div class="flex justify-between items-center bg-base-200 p-3 rounded-md mb-1">
                  <div>
                <h1 class="font-bold">${titleText}</h1>
                <p class="text-gray-600">999</p>
              </div>
              <div>
                <p class="text-gray-600">${date}</p>
              </div>
              </div>
    `;

    container.appendChild(div);
  });
}

const resetBtn = document.getElementById("clear-history");

resetBtn.addEventListener("click", function () {
  const container = document.getElementById("history-container");
  container.innerHTML = "";
});
