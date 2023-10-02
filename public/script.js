// include header and footer on every page
try {
	var navbar = document.getElementsByTagName("nav")[0];
	var footer = document.getElementsByTagName("footer")[0];
} catch (e) {}



if (navbar) {
	fetch(`${directory_root}/components/header.html`)
		.then((res) => res.text())
		.then((html) => (navbar.innerHTML = twemoji.parse(html)));
}

if (footer) {
	fetch(`${directory_root}/components/footer.html`)
		.then((res) => res.text())
		.then((html) => (footer.innerHTML = twemoji.parse(html)));
}

twemoji.parse(document.body, {
	folder: 'svg',
	ext: '.svg'
});
