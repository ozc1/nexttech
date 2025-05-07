function fullName() {
    var name  = document.getElementById("fname").value;
    var msgBox = document.getElementById("msgBox1");
    if (name.length < 2){
        msgBox.style.color = "red";
        msgBox.innerHTML = "you must enter valid name"
        return false;}
    }