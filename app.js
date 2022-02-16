// console.log("hello world!");

// const myDiv = document.createElement("div");
// myDiv.textContent = "Hello world!";

// document.body.append(myDiv);

const form = document.getElementById("contact-form");
console.log(form);

const email = document.getElementById("email");
email.value = "info@example.com";

const thankYouDiv = document.getElementById("thank-you");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("i am submitting the form!");
  // remove the class hide from the thank you div
  thankYouDiv.classList.remove("hide");
  // add the class hide to the form
  form.classList.add("hide");
});

const clickMe = document.getElementById("click-me");
const audioTag = document.getElementById("audio");
clickMe.addEventListener("click", () => {
  console.log("clicking!!");
  audioTag.play();
});
