const userName = document.querySelector(".nav__username");
const jobTitle = document.querySelector(".profile-card__title");
const profilePicture = document.querySelector(".profile-card__img img");
const profilePictureComment = document.querySelector(
  ".start-post-user__img img"
);

userName.innerHTML = "New Username";
jobTitle.innerHTML = "New Name, New Job Title";
profilePicture.src = "./assets/images/nonbinary.png";
profilePictureComment.src = "./assets/images/woman.png";
