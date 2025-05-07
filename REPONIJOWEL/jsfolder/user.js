function showBookuser() {
    document.getElementById('modal-admin-user').style.display = 'flex';
  }
  function closeModal() {
    document.getElementById('modal-admin-user').style.display = 'none';
    document.getElementById('logoutModal').style.display = 'flex';
 }

 function showLogoutModal() {
  document.getElementById('logoutModal').style.display = 'flex';
}
function logout() {
  closeModal();
  setTimeout(() => {
    window.location.href = '/REPONIJOWEL/components/modals/login1.html'; // Change this to the desired URL
  }, 1000); // Delay in milliseconds (1 second)
}