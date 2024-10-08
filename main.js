const showPasswordToggle = document.querySelector(".show-password");
const passwordInput = document.querySelector("#password");
const rememberMeCheckbox = document.querySelector("#remember-me");
const loginButton = document.querySelector("#login-btn");
const logBtn = document.querySelector('#logBtn')
const logo = document.getElementById('logo');
const image = document.getElementById('image');
const container = document.querySelector('.container');
const imageBox = document.querySelector('.image-box');

document.addEventListener("DOMContentLoaded", function () {
  const loaderContainer = document.getElementById('loader-container');
  const container = document.querySelector('.container');

  // Simulate loading and hide loader
  setTimeout(() => {
    loaderContainer.style.display = 'none'; // Hide loader
    container.classList.remove('hidden'); // Show container
  }, 2000); // Adjust time as needed
});



showPasswordToggle.addEventListener("click", function () {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    showPasswordToggle.textContent = "Hide";
  } else {
    passwordInput.type = "password";
    showPasswordToggle.textContent = "Show";
  }
});

loginButton.addEventListener('click', function() {
  let button = this;  
  logBtn.innerText = " " 
  // Add loading class for animation
  button.classList.add('loading');

  setTimeout(function() {
    button.classList.remove('loading');
    logBtn.innerText = 'Login'

    setTimeout(() => {
      image.classList.remove('image-visible');
      image.classList.add('image-hidden');
    }, 2000);
    

  },3000);  

});




