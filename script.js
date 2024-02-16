document.addEventListener("DOMContentLoaded", function () {
  const galleryButton = document.getElementById("show-gallery");
  const imageGallery = document.querySelector(".image-gallery");
  const thankYouMessage = document.querySelector(".thank-you");

  const catGIFs = [
    "https://media.giphy.com/media/KHhs4BXpy5dba/giphy.gif?cid=ecf05e47cho3la1zx8m860mkjp8abaumbwhoa1kqmvx5kqph&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    "https://media.giphy.com/media/hzBc3HCFc0icM/giphy.gif?cid=ecf05e47cho3la1zx8m860mkjp8abaumbwhoa1kqmvx5kqph&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    "https://media.giphy.com/media/XmFXNCKrHcPw4/giphy.gif?cid=ecf05e47cho3la1zx8m860mkjp8abaumbwhoa1kqmvx5kqph&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbW1lbTJ1ZmhhNDkxZXd6b2FhNnFqYnMwYnFxeWxwZ2l6dXF6NmU1biZlcD12MV9naWZzX3NlYXJjaCZjdD1n/4Iw2OzgiiTc4M/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExY3doNzNuYWR5dHNwOGN4aWp2Z2NpbjlyZ2NtZ2VlZjliNWNmZ2UxbCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/yFQ0ywscgobJK/giphy.gif",
    "https://media.giphy.com/media/QLtO7Hs5FXtJe/giphy.gif?cid=ecf05e47wcezdx4t2fhvk61wexmrr8lsda216mr5imi2yhee&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    "https://media.giphy.com/media/r7Y17m4862kdW/giphy.gif?cid=ecf05e47onn2m47uu9j4ul5509e1jbgxvjbkdxdedfyqcppe&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    "https://media.giphy.com/media/ASvQ3A2Q7blzq/giphy.gif?cid=790b7611mf6iknq5lmcwd94h84j93pi9fvqd0b3o5rslhnhp&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    "https://media.giphy.com/media/X3Yj4XXXieKYM/giphy.gif?cid=ecf05e47qet7w6hedolcyoanzl1lptkbmsleebai0tsepn4f&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    "https://media.giphy.com/media/8JIRQqil8mvEA/giphy.gif?cid=ecf05e47t5svgegf5s3knvp7zheig52nnuq83qox0jpajp45&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    "https://media.giphy.com/media/Wsk5V26W0jVYur1f9Z/giphy.gif?cid=ecf05e471ual8j6uc1q7cperwsvze797xee02ju5kxu73vfz&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    "https://media.giphy.com/media/11s7Ke7jcNxCHS/giphy.gif?cid=ecf05e471ual8j6uc1q7cperwsvze797xee02ju5kxu73vfz&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    "https://media.giphy.com/media/KZGN8tU5OmFJC/giphy.gif?cid=ecf05e47p7zpf5l3e226vp258njtxd0ej7waq2828s0h3khp&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    "https://media.giphy.com/media/ERy32lxHhXfpu/giphy.gif?cid=ecf05e47spypb8igh8k52aphe8w3vsj80lfx0gz7kqn75gla&ep=v1_gifs_search&rid=giphy.gif&ct=g",
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
