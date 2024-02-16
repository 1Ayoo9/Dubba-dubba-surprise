document.addEventListener("DOMContentLoaded", function () {
	const galleryButton = document.getElementById("show-gallery");
	const imageGallery = document.querySelector(".image-gallery");
	const thankYouMessage = document.querySelector(".thank-you");

	const GIPHY_ROOT = "https://media.giphy.com/media";

	const gifIds = [
		"KHhs4BXpy5dba",
		"hzBc3HCFc0icM",
		"XmFXNCKrHcPw4",
		"4Iw2OzgiiTc4M",
		"yFQ0ywscgobJK",
		"QLtO7Hs5FXtJe",
		"r7Y17m4862kdW",
		"ASvQ3A2Q7blzq",
		"X3Yj4XXXieKYM",
		"8JIRQqil8mvEA",
		"Wsk5V26W0jVYur1f9Z",
		"11s7Ke7jcNxCHS",
		"KZGN8tU5OmFJC",
		"ERy32lxHhXfpu",
	];

	const catGIFs = gifIds.map((id) => `${GIPHY_ROOT}/${id}/giphy.gif`);

	galleryButton.addEventListener("click", function () {
		imageGallery.classList.add("active");
		renderGIFS();
	});

	const renderGIFS = async () => {
		catGIFs.forEach(async (gif) => {
			const img = new Image();
			img.onload = function () {
				imageGallery.appendChild(img);
				img.classList.add("active"); // Show the new image
			};
			img.src = gif;
			await new Promise((r) => setTimeout(r, 1000));
		});
		thankYouMessage.classList.add("active");
	};
});
