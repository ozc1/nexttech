
function validateForm() {
    var res = true;

    res = fullName() && res;
    res = userNameVal() && res;
    res = passwordval() && res;
    res = confirmFun() && res;
    res = confirmmail() && res;
    res = confirmphone() && res;

    return res;
}

function fullName() {
    var name  = document.getElementById("fname").value;
    var msgBox = document.getElementById("msgBox1");
    if (name.length < 2){
        msgBox.style.color = "red";
        msgBox.innerHTML = "you must enter valid name"
        return false;}

    if (!isLetter(name[0])){
        msgBox.style.color = "red";
        msgBox.innerHTML = "user name must start with a letter";
        return false;
    }
    msgBox.innerHTML = "";
    return true;
}

function userNameVal(){
    var userName = document.getElementById("username").value;
    var msgBox = document.getElementById("msgBox2");
    if (userName.length == 0){
        msgBox.style.color = "red";
        msgBox.innerHTML = "you must enter user name"
        return false;
    }
    if(!isLetter(userName[0])){
        msgBox.style.color = "red";
        msgBox.innerHTML = "user name must start with a letter";
        return false;
    }
    msgBox.innerHTML = "";
    return true;
}

function passwordval(){
    var pass = document.getElementById("password").value;
    var msgBox = document.getElementById("msgBox3");
    if (pass.length < 7){
        msgBox.style.color = "red";
        msgBox.innerHTML = "password must contain at least 7 charecters";
        return false;
    }
    var specialChar = /[!@#$%^&*()_+]/;
    if (!specialChar.test(pass)){
        msgBox.style.color = "red";
        msgBox.innerHTML = "password must contain one special char";
        return false;
    }
    msgBox.innerHTML = "";
    return true;

}

function confirmFun(){
    var pass = document.getElementById("password").value;
    var confirm = document.getElementById("confirm").value;
    var msgBox = document.getElementById("msgBox4");
    if (pass != confirm) {
        msgBox.style.color = "red";
        msgBox.innerHTML = "confirm password doesnt match password";
        return false;
    }
    msgBox.innerHTML = "";
    return true;

}

function confirmmail(){
    var email = document.getElementById("email").value;
    var msgBox = document.getElementById("msgBox5");

    var reg = /^\w+/;
    if(!reg.test(email)) {
        msgBox.style.color = "red";
        msgBox.innerHTML = "mail must start with letter or digit";
        return false
    }
    msgBox.innerHTML = "";
    reg = /^\w+([\.-]?\w+)/;
    if(!reg.test(email)) {
        msgBox.style.color = "red";
        msgBox.innerHTML = "mail can have only one [. or -] following letter";
        return false
    }
    msgBox.innerHTML = "";
    reg = /^\w+([\.-]?\w+)*@/;
    if(!reg.test(email)) {
        msgBox.style.color = "red";
        msgBox.innerHTML = "mail must have @";
        return false
    }
    msgBox.innerHTML = "";
    reg = /^\w+([\.-]?\w+)*@\w+/;
    if(!reg.test(email)) {
        msgBox.style.color = "red";
        msgBox.innerHTML = "you need letters after @";
        return false
    }
    msgBox.innerHTML = "";
    reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4}+$)/;
    if(!reg.test(email)) {
        msgBox.style.color = "red";
        msgBox.innerHTML = "invaild email";
        return false
    }
    msgBox.innerHTML = "";
    return true
}

function confirmphone(){
    var phone = document.getElementById("phone").value;
    var msgBox = document.getElementById("msgBox6");

    var reg = /^{1}(2|3|4|5|6|7|8|9|5[0|(2-8)]|73)-?[1-9]\d{6}$/;
    if(!reg.test(phone)) {
        msgBox.style.color = "red"
        msgBox.innerHTML = "phone number is illegal";
        return false
    }
    msgBox.innerHTML = "";
    return true;
}

function isDigit(ch) {
    if (ch >= "0" && ch <= "9")
        true;
    false;
}

function isLetter(ch){
    if((ch >="a" && ch <= "z") || (ch >= "A" && ch <= "Z"))
        return true;
    return false;
}