function getCookie(name) {  
    var value = `; ${document.cookie}`;  
    var parts = value.split(`; ${name}=`);  
    if (parts.length === 2) return parts.pop().split(';').shift();  
    return null;  
}  
  
function checkCredentials() {  
    var usernameInput = document.getElementById("username").value;  
    var passwordInput = document.getElementById("password").value;  
  
    var usernameCookie = getCookie("username");  
    var passwordCookie = getCookie("password");  

    
  
    if (usernameInput === usernameCookie) {  
         
        window.location.href = "shopping.html";  
    } else {  
        alert("Invalid username or password.");  
    }  
}  
