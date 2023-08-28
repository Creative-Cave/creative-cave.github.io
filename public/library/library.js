const searchQueryURL = "https://raw.githubusercontent.com/Writers-Cave/data/main/library/library.json";

const libraryCardTemplate = `
<p class="library-card-title">{title}</p>
<p class="library-card-author">{author}</p>
<p class="library-card-genre">{genre}</p>`

function createCard(workData) {
    console.log(workData);
    let element = document.createElement("a");
    
    element.href = workData.url;
    element.target = "_blank";
    element.rel = "noopener noreferrer";

    element.classList += "library-card";

    if (workData.genre == undefined) {
        workData.genre = "Other";
    }

    element.innerHTML = libraryCardTemplate.replace("{title}", workData.title).replace("{author}", workData.author).replace("{genre}", workData.genre);

    element.style.backgroundImage = generateRandomGradients();
    return element;
}

function updateSubmissionCounter(value) {
    var counter = document.getElementById("submission-counter");
    counter.innerHTML = counter.innerHTML.replace("0", value);
}

function shuffle(obj) {
  const keys = Object.keys(obj);
  const shuffledKeys = [...keys];

  for (let i = shuffledKeys.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledKeys[i], shuffledKeys[j]] = [shuffledKeys[j], shuffledKeys[i]];
  }

  const shuffledObj = {};

  for (let key of shuffledKeys) {
    shuffledObj[key] = obj[key];
  }

  return shuffledObj;
}

async function getLibrary() {
    var library;
    const response = await fetch(searchQueryURL);
    library = await response.json();

    console.log(library.library);
    updateSubmissionCounter(Object.keys(library.submissions).length);

    for (workID in shuffle(library.library)) {
        document.getElementById("library-container").appendChild(createCard(library.library[workID]));
    }

    generateRandomGradients();
}

function getCssValuePrefix() {
    var rtrnVal = '';
    var prefixes = ['-o-', '-ms-', '-moz-', '-webkit-'];

    var dom = document.createElement('div');

    for (var i = 0; i < prefixes.length; i++) {
        // Attempt to set the style
        dom.style.background = prefixes[i] + 'linear-gradient(#000000, #ffffff)';

        // Detect if the style was successfully set
        if (dom.style.background) {
            rtrnVal = prefixes[i];
        }
    }

    dom = null;
    delete dom;

    return rtrnVal;
}

function generateRandomGradients() {
    var hexValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e"];

    function populate(a) {
        for (var i = 0; i < 6; i++) {
            var x = Math.round(Math.random() * 14);
            var y = hexValues[x];
            a += y;
        }
        return a;
    }

    var newColor1 = populate('#');
    var newColor2 = populate('#');
    var angle = Math.round(Math.random() * 360);

    var gradient = "linear-gradient(" + angle + "deg, " + newColor1 + ", " + newColor2 + ")";
    return getCssValuePrefix() + gradient;
}

getLibrary();
