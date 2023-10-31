const time = new Date();
const hour = -3600 * (time.getHours() % 12);
const mins = -60 * time.getMinutes();
app.style.setProperty("--_dm", `${mins}s`);
app.style.setProperty("--_dh", `${hour + mins}s`);

(function createSecondLines() {
  let clock = document.querySelector("#app");
  let rotate = 0;

  let byFive = function (n) {
    return n / 5 === parseInt(n / 5, 10) ? true : false;
  };

  for (i = 0; i < 30; i++) {
    let span = document.createElement("span");

    if (byFive(i)) {
      span.className = "fives";
    }

    span.style.transform = "translate(-50%,-50%) rotate(" + rotate + "deg)";
    clock.appendChild(span);
    rotate += 6;
  }
})();
