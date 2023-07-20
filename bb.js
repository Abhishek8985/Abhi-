function login()
{  
    var loginForm = document.getElementById('loginForm');
  var emailInput = loginForm.elements['email'];
  var passwordInput = loginForm.elements['password'];

  if (emailInput.value === '' || passwordInput.value === '') {
    alert('Please fill in all required fields');
    return false; 
  }
   document.write("You are succesfully Loggedin!!!");
}
function sign_up()
{
    
   document.write("You have succesfully Signed!!!");
}
