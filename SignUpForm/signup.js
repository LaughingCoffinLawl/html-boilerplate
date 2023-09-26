const myButton = document.getElementById("create-account");

myButton.addEventListener("click", checkPassword);

function checkPassword(password, conpassword) {
    password = document.getElementById('password').value;
    conpassword = document.getElementById('conpassword').value;

    const value = password.length;

    if (password == "") alert("Password Vuota!");
    else {
        if (value < 8) alert ("Password troppo corta!");
        else if (password !== conpassword) {
            alert("le due password non coincidono!");
        } else {
            alert("Password ok!");
        }
    }
}