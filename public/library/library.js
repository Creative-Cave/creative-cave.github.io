var url =
	"https://raw.githubusercontent.com/Writers-Cave/data/main/library/library.json";
const libraryCardTemplate = `
<div>
    <p class="library-card-title">{title}</p>
    <p class="library-card-author">by {author}</p>
</div>
<div>
    <p class="library-card-genre">{genre}</p>
</div>`;

let cardContainer = document.getElementById("library-container");

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

	element.innerHTML = libraryCardTemplate
		.replace("{title}", workData.title)
		.replace("{author}", workData.author)
		.replace("{genre}", workData.genre);

	// element.style.backgroundImage = generateRandomGradients();

	return element;
}

async function getLibrary() {
	var library;
	var cards;
	const response = await fetch(url);
	library = await response.json();

	// updateSubmissionCounter(Object.keys(library.submissions).length);

	//for (workID in shuffle(library.library)) {
	for (let i = 0; i < Object.keys(library.library).length; i++) {
        setTimeout(() => {
            cardContainer.appendChild(createCard(library.library[`id${i+1}`]));
        }, 100 * i);
	}

	return cards;
}

let cards = getLibrary();

console.log(cards);


