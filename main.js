// DOM manipulation
const input = document.querySelector(".input");
const btn = document.querySelector(".btn");
const avatar = document.querySelector(".avatar");
const name = document.querySelector(".name");
const followers = document.querySelector(".followers");
const following = document.querySelector(".following");
const residence = document.querySelector(".location");
const creationTime = document.querySelector(".dataCreation");
const descriptionContainer = document.querySelector(".descriptionContainer");
const description = document.querySelector(".description");
const nameHREF = document.querySelector(".nameHREF");

if (window.innerWidth < 700) {
  alert("Your device is too small :(");
  document.body.style.display = "none";
}

// name - login
// avatar - avatar_url
// bio - bio
// created time - created_at
// followers -  followers
// following - following
// href - html_url

async function getInfo() {
  const response = await fetch(`https://api.github.com/users/${input.value}`);
  const data = await response.json();
  console.log(data);
  if (data.bio === null) {
    description.textContent = "No description 🙁";
  }
  if (data.bio !== null) {
    description.textContent = `${data.bio}`;
  }
  if (data.location === null) {
    residence.textContent = "No location 🙁";
  }
  if (data.location !== null) {
    residence.textContent = `${data.location}`;
  }
  avatar.style.display = "block";
  descriptionContainer.style.display = "block";
  avatar.src = `${data.avatar_url}`;
  nameHREF.textContent = `${data.login}`;
  nameHREF.href = `${data.html_url}`;
  followers.textContent = `Followers ${data.followers}`;
  following.textContent = `Following ${data.following}`;
  creationTime.textContent = `Created ${data.created_at.slice(0, 10)}`;
  input.value = "";
}

input.addEventListener("keydown", function (event) {
  if (event.keyCode == "13") {
    getInfo();
  }
});
