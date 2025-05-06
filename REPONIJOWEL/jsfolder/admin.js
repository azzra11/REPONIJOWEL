
  document.getElementById('showPassword').addEventListener('change', function () {
    const passwordField = document.getElementById('password');
    const confirmPasswordField = document.getElementById('Cpassword');

    const type = this.checked ? 'text' : 'password'; 

    if (passwordField) passwordField.type = type;
    if (confirmPasswordField) confirmPasswordField.type = type;
  });

  document.getElementById('showPasswordedit').addEventListener('change', function () {
    const passwordField = document.getElementById('passwordedit');
    const confirmPasswordField = document.getElementById('Cpasswordedit');

    const type = this.checked ? 'text' : 'password';

    if (passwordField) passwordField.type = type;
    if (confirmPasswordField) confirmPasswordField.type = type;
  });
  function showModal() {
   document.getElementById('adminModal').style.display = 'flex';
  }
  function showModalEdit() {
    document.getElementById('adminEdit').style.display = 'flex';
  }
  function modalDelete() {
    document.getElementById('modalDelete').style.display = 'flex';
  }

  function closeModal() {
     document.getElementById('adminModal').style.display = 'none';
     document.getElementById('adminEdit').style.display = 'none';
     document.getElementById('modalDelete').style.display = 'none';
  }
  function showLogoutModal() {
     document.getElementById('logoutModal').style.display = 'flex';
  }
  function closeLogoutModal() {
     document.getElementById('logoutModal').style.display = 'none';
  }
  function logout() {
     closeLogoutModal();
     setTimeout(() => {
       window.location.href = '/REPONIJOWEL/components/modals/login1.html'; // Change this to the desired URL
    }, 1000); // Delay in milliseconds (1 second)
  }