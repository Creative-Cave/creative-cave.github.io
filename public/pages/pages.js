var listedPages = [
    "home", "index", "library"
]

var indexContainer = document.getElementById("index-container");

for (page in listedPages) {
    var indexElement = document.createElement("h2");
    indexElement.innerHTML = `<a href="/${listedPages[page]}">${listedPages[page].toUpperCase()}</a>`;
    indexContainer.appendChild(indexElement);
}
