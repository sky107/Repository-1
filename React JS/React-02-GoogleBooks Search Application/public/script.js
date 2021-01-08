function getPassword() {
    var chars = "";
    console.log("hello");
    var capital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var small = "abcdefghijklmnopqrstuvwxyz";
    var digits = "0123456789";
    var s_characters = "!@#$%^&*()_+?><:{}[];'/.,";


    if (document.getElementById("digits").checked == true) {
        chars += digits;
    }
    if (document.getElementById("special-characters").checked == true) {
        chars += s_characters;
    }
    if (document.getElementById("capital").checked == true) {
        chars += capital;
    }

    if (document.getElementById("small").checked == true) {
        chars += small;
    }


    var passwordLength = document.getElementById("length").value;
    var password = "";
    for (var i = 0; i < passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1);
    }

    if (password != "") {
        console.log("Initiated");
        document.getElementById("password").style.display = "block";
        document.getElementById("breaker").style.display = "none";
        document.getElementById("password").value = password;
    }


}

function copypassword() {
    if (document.getElementById("password").value != "") {
        var copyPassText = document.getElementById("password");
        copyPassText.select();
        copyPassText.setSelectionRange(0, 9999);
        document.execCommand("copy");
        alert("Password Copied");
    }
}