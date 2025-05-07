  function closeModal() {
    document.getElementById('bookModal').style.display = 'none';
    document.getElementById('bookedit').style.display = 'none';
    document.getElementById('modalDelete').style.display = 'none';
  }
  function closeModaladmin() {
    document.getElementById('adminModal').style.display = 'none';
    document.getElementById('adminEdit').style.display = 'none';
    document.getElementById('modalDelete').style.display = 'none';
  }
  function confirmDelete() {
    document.getElementById('modalDelete').style.display = 'flex';
  }
  function showBookModal() {
    document.getElementById('bookModal').style.display = 'flex';
  }
  function showBookedit() {
    document.getElementById('bookedit').style.display = 'flex';
  }
  function showBookuser() {
    document.getElementById('modal-admin-user').style.display = 'flex';
   }
  function closeBookuser() {
    document.getElementById('modal-admin-user').style.display = 'none';
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



  // Function to handle the "Done" button click
  function handleDone() {
    // Get the values from the input fields
    const bookTitle = document.getElementById('booktitle').value;
    const bookId = document.getElementById('bookid').value;
    const bookGenre = document.getElementById('bookgenre').value;
    const bookStatus = document.getElementById('bookstatus').value;
    const rentedBy = document.getElementById('rentedby').value;

    // Perform the action you want, e.g., submit the form or add the book to a list
    console.log('Book Title:', bookTitle);
    console.log('Book ID:', bookId);
    console.log('Book Genre:', bookGenre);
    console.log('Book Status:', bookStatus);
    console.log('Rented By:', rentedBy);

    // Close the modal
    closeModal();
  }

  // Function to handle the "Delete" button click
  function handleDelete() {
    // Perform the delete action, e.g., remove the book from a list
    console.log('Delete button clicked');

    // Close the modal
    closeModal();
  }

  // Attach event listeners to the "Done" and "Delete" buttons
  document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelector('#bookModal .submit-btn').addEventListener('click', handleDone);
    document.querySelector('#bookModal .delete-btn').addEventListener('click', handleDelete);
  });

  document.getElementById('showPassword').addEventListener('change', function () {
    const passwordField = document.getElementById('password');
    const confirmPasswordField = document.getElementById('Cpassword');
  
    const type = this.checked ? 'text' : 'password';
  
    if (passwordField) passwordField.type = type;
    if (confirmPasswordField) confirmPasswordField.type = type;
  });
  
  document.getElementById('showPasswordEdit').addEventListener('change', function () {
    const passwordField = document.getElementById('passwordEdit');
    const confirmPasswordField = document.getElementById('CpasswordEdit');
  
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
   