
function login() {
const body = document.body;
body.classList.add('fade-out');

setTimeout(() => {
  window.location.href = "/REPONIJOWEL/components/modals/login1.html";
}, 500); // Match this duration with the CSS transition duration
}

function signup() {
const body = document.body;
body.classList.add('fade-out');

setTimeout(() => {
  window.location.href = "/REPONIJOWEL/components/modals/login4.html";
}, 500); // Match this duration with the CSS transition duration
}

// Add event listeners to the navigation links
document.querySelectorAll('.primaryNavigation a').forEach(link => {
link.addEventListener('click', function(event) {
  event.preventDefault();
  const body = document.body;
  body.classList.add('fade-out');

  setTimeout(() => {
    window.location.href = this.getAttribute('href');
  }, 500); // Match this duration with the CSS transition duration
});
});

// log in 2
function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  form.classList.add('fade-out');

  setTimeout(() => {
    window.location.href = "/REPONIJOWEL/components/modals/login3.html"; // Redirect to the desired page
  }, 500); // Match this duration with the CSS transition duration
}

function redirectToSignup(event) {
  event.preventDefault();
  const signupLink = event.target;
  signupLink.classList.add('fade-out');

  setTimeout(() => {
    window.location.href = "/REPONIJOWEL/components/modals/login4.html"; // Redirect to the desired page
  }, 500); // Match this duration with the CSS transition duration
}

// log in 3

// Function to toggle password visibility
document.getElementById('showPassword').addEventListener('change', function() {
  const passwordField = document.getElementById('password');
  if (this.checked) {
    passwordField.type = 'text';
  } else {
    passwordField.type = 'password';
  }
});

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  form.classList.add('fade-out');

  setTimeout(() => {
    window.location.href = "/REPONIJOWEL/components/modals/login3.html"; // Redirect to the desired page
  }, 500); // Match this duration with the CSS transition duration
}

function redirectToSignup(event) {
  event.preventDefault();
  const signupLink = event.target;
  signupLink.classList.add('fade-out');

  setTimeout(() => {
    window.location.href = "/REPONIJOWEL/components/modals/login4.html"; // Redirect to the desired page
  }, 500); // Match this duration with the CSS transition duration
}

// Function to toggle password visibility
document.getElementById('showPassword').addEventListener('change', function() {
  const passwordField = document.getElementById('password');
  if (this.checked) {
    passwordField.type = 'text';
  } else {
    passwordField.type = 'password';
  }
});
function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  form.classList.add('fade-out');

  setTimeout(() => {
    window.location.href = "/REPONIJOWEL/components/modals/login3.html"; // Redirect to the desired page
  }, 500); // Match this duration with the CSS transition duration
}

// log in 4
function redirectToLogin(event) {
  event.preventDefault();
  const signupLink = event.target;
  signupLink.classList.add('fade-out');

  setTimeout(() => {
    window.location.href = "/REPONIJOWEL/components/modals/login1.html"; // Redirect to the desired page
  }, 500); // Match this duration with the CSS transition duration
}

// Function to toggle password visibility
document.getElementById('showPassword').addEventListener('change', function() {
  const passwordField = document.getElementById('password');
  if (this.checked) {
    passwordField.type = 'text';
  } else {
    passwordField.type = 'password';
  }
});