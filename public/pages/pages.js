var listedPages = [
    "home", "index", "library"
]

var indexContainer = document.getElementById("index-container");

for (page in listedPages) {
    var indexElement = document.createElement("h2");

    if (listedPages[page] != "home") {
        indexElement.innerHTML = `<a href="/${listedPages[page]}">${listedPages[page].toUpperCase()}</a>`;
    } else {
        indexElement.innerHTML = `<a href="/">HOME</a>`;
    }
    indexContainer.appendChild(indexElement);
}
