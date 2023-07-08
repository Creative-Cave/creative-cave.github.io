// delete fade in overlay after the animation completes
window.onload = function() {
  setTimeout(function() {
    document.getElementById("fadein").remove();
  }, 6000);
};

// use twemoji
twemoji.parse(document.body);
