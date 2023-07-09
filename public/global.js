// delete fade in overlay after the animation completes
window.onload = function () {
  setTimeout(function () {
    document.getElementById("fadein").remove();
  }, 6000);
};


// include header and footer on every page
var headerWrapper = document.getElementById("header-wrapper");
var footerWrapper = document.getElementById("footer-wrapper");

fetch("./components/header.html")
  .then(res => res.text())
  .then(html => headerWrapper.innerHTML = twemoji.parse(html));

fetch("./components/footer.html")
  .then(res => res.text())
  .then(html => footerWrapper.innerHTML = twemoji.parse(html));


// insert svg logos where needed
var wcLogos = document.getElementsByClassName("wclogo");
var d3Logos = document.getElementsByClassName("d3logo");

fetch("./components/wcLogo-svg.txt")
  .then(res => res.text())
  .then(svgContent => {
    for (var i = 0; i < wcLogos.length; i++) {
      wcLogos[i].innerHTML = svgContent;
    }
  });

  fetch("./components/d3Logo-svg.txt")
  .then(res => res.text())
  .then(svgContent => {
    for (var i = 0; i < d3Logos.length; i++) {
      d3Logos[i].innerHTML = svgContent;
    }
  });

twemoji.parse(document.body);