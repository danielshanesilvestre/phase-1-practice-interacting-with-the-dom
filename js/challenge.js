



let count = 0;
let likesData = {};
let interval;

document.addEventListener("DOMContentLoaded", () => {
  startTimer();

  let counter = document.getElementById("counter");
  let minus = document.getElementById("minus");
  let plus = document.getElementById("plus");
  let heart = document.getElementById("heart");
  let likes = document.getElementsByClassName("likes")[0];
  let pause = document.getElementById("pause");
  let comments = document.getElementById("list");
  let comment_form = document.getElementById("comment-form");
  let comment_input = document.getElementById("comment-input");

  function updateCount() {
    counter.textContent = count.toString();
  }
  function startTimer() {
    interval = setInterval(() => {
      count++;
      updateCount();
    }, 1000);
  }
  function stopTimer() {
    clearInterval(interval);
    interval = null;
  }
  function handleClickHeart() {
    if (!(count in likesData)) {
      likesData[count] = 1;

      let countLikes = document.createElement("li");
      countLikes.setAttribute("data-num", count);
      countLikes.innerHTML = `${count} has been liked <span>${likesData[count]}</span> times.`;
      likes.append(countLikes);
    } else {
      likesData[count]++;

      let countLikes = likes.querySelector(`li[data-num="${count}"]`);
      countLikes.getElementsByTagName("span")[0].textContent = likesData[count];
    }
  }
  function handleClickPause() {
    if (interval === null) {
      startTimer();
    } else {
      stopTimer();
    }
  }
  function handleSubmitComment(event) {
    event.preventDefault();

    let p = document.createElement("p");
    p.textContent = comment_input.value;
    comments.append(p);

    event.target.reset();
  }

  minus.addEventListener("click", () => {
    count--;
    updateCount();
  });
  plus.addEventListener("click", () => {
    count++;
    updateCount();
  });
  heart.addEventListener("click", handleClickHeart);
  pause.addEventListener("click", handleClickPause);
  comment_form.addEventListener("submit", handleSubmitComment);
});