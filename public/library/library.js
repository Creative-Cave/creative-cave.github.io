var url = "https://raw.githubusercontent.com/Writers-Cave/data/main/library/library.json";
const libraryCardTemplate = `
<div>
    <p class="library-card-title">{title}</p>
    <p class="library-card-author">by {author}</p>
</div>
<div>
    <p class="library-card-genre">{genre}</p>
</div>`

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

    // element.style.backgroundImage = generateRandomGradients();
    
    return element;
}

async function getLibrary() {
    var library;
    const response = await fetch(url);
    library = await response.json();

    console.log(library.library);
    // updateSubmissionCounter(Object.keys(library.submissions).length);

    //for (workID in shuffle(library.library)) {
    for (workID in library.library) {
        document.getElementById("library-container").appendChild(createCard(library.library[workID]));
    }
}

getLibrary();