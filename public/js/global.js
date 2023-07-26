// delete fade in overlay after the animation completes
window.onload = function () {
  setTimeout(function () {
    document.getElementById("fadein").remove();
  }, 6000);
};


// include header and footer on every page
var headerWrapper = document.getElementById("header-wrapper");
var footerWrapper = document.getElementById("footer-wrapper");

fetch(`${directory_root}/components/header.html`)
  .then(res => res.text())
  .then(html => headerWrapper.innerHTML = twemoji.parse(html));

fetch(`${directory_root}/components/footer.html`)
  .then(res => res.text())
  .then(html => footerWrapper.innerHTML = twemoji.parse(html));

twemoji.parse(document.body);