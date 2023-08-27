function countDown(num) {
  let countDownTimer = setInterval(function () {
    if (num === 0) {
      clearInterval(countDownTimer);
      console.log("DONE!");
    } else {
      console.log(num);
      num--;
    }
  }, 1000);
}

let num = 5;
countDown(num);

function randomGame() {
  let count = 0;
  let randomNum = setInterval(function () {
    let num = Math.random();
    count++;
    if (num > 0.75) {
      clearInterval(randomNum);
      console.log(count);
    }
  }, 1000);
}

randomGame();
