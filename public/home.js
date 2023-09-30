var title = document.getElementById("title");
var cycle = document.getElementById("title-cycle");

var cycleStrings = [
    "creators",
    "writers",
    "artists",
    "developers",
    "musicians"
];
var index = 0;

var typed = new Typed("#title-cycle", {
    strings: cycleStrings,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 1500,
    smartBackspace: false,
    loop: true,
});
