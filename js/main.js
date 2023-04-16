// jsを記述する際はここに記載していく
  const pagetop_btn = document.querySelector(".pagetop");


pagetop_btn.addEventListener("click", scroll_top);


function scroll_top() {
  window.scroll({ top: 0, behavior: "smooth" });
}

window.addEventListener("scroll", scroll_event);
function scroll_event() {
  if (window.pageYOffset > 100) {
    pagetop_btn.style.opacity = "1";
  } else if (window.pageYOffset < 100) {
    pagetop_btn.style.opacity = "0";
  }
}

