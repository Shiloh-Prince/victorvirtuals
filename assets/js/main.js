function signup() {
    var fname = document.getElementById('inputFname').value
    var lname = document.getElementById('inputLname').value
    var email = document.getElementById('inputEmail').value
    var password = document.getElementById('inputPassword').value


    if (fname.length == (" ")) {
        document.getElementById('inputFnames').style.visibility = 'visible'
        document.getElementById('inputFnames').style.color = 'red'
    } else {
        document.getElementById('inputFnames').style.visibility = 'hidden'
        document.getElementById('inputFnames').style.color = 'red'
    }

    if (lname.length == (" ")) {
        document.getElementById('inputLnames').style.visibility = 'visible'
        document.getElementById('inputLnames').style.color = 'red'
    } else {
        document.getElementById('inputLnames').style.visibility = 'hidden'
        document.getElementById('inputLnames').style.color = 'red'
    }
    if (email.length == (" ")) {
        document.getElementById('inputEmails').style.visibility = 'visible'
        document.getElementById('inputEmails').style.color = 'red'
    } else {
        document.getElementById('inputEmails').style.visibility = 'hidden'
        document.getElementById('inputEmails').style.color = 'red'
    }
    if (password.length == (" ")) {
        document.getElementById('inputPasswords').style.visibility = 'visible'
        document.getElementById('inputPasswords').style.color = 'red'
    } else {
        document.getElementById('inputPasswords').style.visibility = 'hidden'
        document.getElementById('inputPasswords').style.color = 'red'
    }



}