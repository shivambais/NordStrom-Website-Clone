console.log(JSON.parse(localStorage.getItem("validEmail")))
document.getElementById("email1").value = JSON.parse(localStorage.getItem("validEmail"));
function createAccount() {
    event.preventDefault();
    console.log(JSON.parse(localStorage.getItem("validEmail")))
    document.getElementById("email1").value = JSON.parse(localStorage.getItem("validEmail"));
    var email = document.getElementById("email1").value;
    var firstname = document.getElementById("fname").value;
    var lastname = document.getElementById("lname").value;
    var password = document.getElementById("pass").value;

    if(password.trim() == "" && email.trim() == "" && firstname.trim() == "" && lastname.trim() == ""){
        pass.style.border = "2px solid #e44463";
        document.getElementById("errorPass").style.visibility = "visible";
        document.getElementById("invalidPass").style.visibility = "visible";
        email1.style.border = "2px solid #e44463";
        document.getElementById("errorEmail").style.visibility = "visible";
        document.getElementById("invalidEmail").style.visibility = "visible";
        fname.style.border = "2px solid #e44463";
        document.getElementById("errorFName").style.visibility = "visible";
        document.getElementById("invalidFName").style.visibility = "visible";
        lname.style.border = "2px solid #e44463";
        document.getElementById("errorLName").style.visibility = "visible";
        document.getElementById("invalidLName").style.visibility = "visible";
        // return false;
    }
    else if(email.trim() == ""){
        // alert("Please enter valid details");
        email1.style.border = "2px solid #e44463";
        document.getElementById("errorEmail").style.visibility = "visible";
        document.getElementById("invalidEmail").style.visibility = "visible";
        // return false;
    } 
    else if(firstname.trim() == ""){
        fname.style.border = "2px solid #e44463";
        document.getElementById("errorFName").style.visibility = "visible";
        document.getElementById("invalidFName").style.visibility = "visible";
        // return false;
    } 
    else if(lastname.trim() == ""){
        lname.style.border = "2px solid #e44463";
        document.getElementById("errorLName").style.visibility = "visible";
        document.getElementById("invalidLName").style.visibility = "visible";
        // return false;
    } 
    else if(password.trim() == ""){
        pass.style.border = "2px solid #e44463";
        document.getElementById("errorPass").style.visibility = "visible";
        document.getElementById("invalidPass").style.visibility = "visible";
        // return false;
    } 
    else if(password.trim().length<8){
        pass.style.border = "2px solid #e44463";
        document.getElementById("errorPass").style.visibility = "visible";
        document.getElementById("invalidPass").style.visibility = "visible";
        // return false;
    } 

    else {
        if (localStorage.getItem('usersData') === null) {
            localStorage.setItem("usersData", JSON.stringify([]))
        }
        var userDetails = {
            firstname,
            email,
            lastname,
            password
        };
        var userArr = JSON.parse(localStorage.getItem("usersData"));
        userArr.push(userDetails);
        localStorage.setItem("usersData", JSON.stringify(userArr));
        alert("Registered Successfully");
        window.location.href = "index.html";
        document.getElementById("email1").value = "";
        document.getElementById("fname").value = "";
        document.getElementById("lname").value = "";
        document.getElementById("pass").value = "";
    }
}
