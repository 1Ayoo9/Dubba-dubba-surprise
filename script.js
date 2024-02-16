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

  let currentGIFIndex = 0;


    galleryButton.addEventListener("click", function () {
      imageGallery.classList.add("active");
      showNextGIF();
    });

  function showNextGIF() {
    if (currentGIFIndex < catGIFs.length) {
      const img = new Image();
      img.onload = function () {
        imageGallery.appendChild(img);
        img.classList.add("active"); // Show the new image
        currentGIFIndex++;
        setTimeout(showNextGIF, 1000);
      };
      img.src = catGIFs[currentGIFIndex];
    } else {
      thankYouMessage.classList.add("active");
    }
  }
});
