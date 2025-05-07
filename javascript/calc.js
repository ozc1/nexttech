function calc(){
    var pri = 50;
    var qu = document.querySelector("#quant").value;
    if(qu > 4)
    {
        document.querySelector("#tprice").innerHTML = pri * qu * 0.85;
        document.querySelector("#ltprice").innerHTML = "price after 15% discount"
    }
    else
    {
        document.querySelector("#tprice").innerHTML = pri * qu;
        document.querySelector("#ltprice").innerHTML = "total price";
    }
    document.querySelector("#tprice").style.fontSize = "16px"; 
    document.querySelector("#ltprice").style.fontSize = "16px";
}

function checkPassword() {
    let password = document.getElementById("password").value;
    if (password === "1234"){
        alert("Password accepted!");
        return true;
    }
    else{
        alert("Wrong password. Please try again.");
        return false;
    }
}