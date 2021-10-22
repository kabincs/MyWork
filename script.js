window.onload = function () {
  var addMoreBtn = document.getElementById("add-more");
  var addCountVal = null;
  var startBtn = null;
  var stopBtn = null;
  var reStartBtn = null;
  var addMoreBtn = document.getElementById("add-more");
  var contentWrapper = document.getElementById("content-wrapper");

  var progressElement =
    "<div class='progress-wrapper'><div class='progress'><div class='fill-color'></div></div><div class='progress-controls'><button class='start-btn'>Start</button><button class='stop-btn'>Stop</button><button class='replay-btn'>Replay</button></div></div>";
  // var progressElement = document.getElementsByClassName("progress-wrapper")[0];
  addMoreBtn.addEventListener("click", function () {
    addProgressBar();
    resetEventForBtn();
  });
  resetEventForBtn();
  function resetEventForBtn() {
    startBtn = document.getElementsByClassName("start-btn");
    stopBtn = document.getElementsByClassName("stop-btn");
    reStartBtn = document.getElementsByClassName("replay-btn");

    for (var btnCount = 0; btnCount < startBtn.length; btnCount++) {
      reStartBtn[btnCount].addEventListener("click", function (event) {
        event.target.parentNode.parentNode.querySelector(
          ".fill-color"
        ).style.animationPlayState = "running";
        event.target.parentNode.parentNode
          .querySelector(".fill-color")
          .classList.remove("fill-color");
        void event.target.parentNode.parentNode.querySelector(
          ".progress div"
        ).offsetWidth;
        event.target.parentNode.parentNode
          .querySelector(".progress div")
          .classList.add("fill-color");
      });
      stopBtn[btnCount].addEventListener("click", function (event) {
        event.target.parentNode.parentNode.querySelector(
          ".fill-color"
        ).style.animationPlayState = "paused";
      });
      startBtn[btnCount].addEventListener("click", function (event) {
        event.target.parentNode.parentNode.querySelector(
          ".fill-color"
        ).style.animationPlayState = "running";
      });
    }
  }
  function addProgressBar() {
    addCountVal = document.getElementById("count-val").value;
    for (var count = 0; count < addCountVal; count++) {
      console.log("haii");
      contentWrapper.insertAdjacentHTML("beforeend", progressElement);
    }
  }
};
