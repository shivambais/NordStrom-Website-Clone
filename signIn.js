var userEmail = [];
console.log(userEmail);
// var userEmail = [];

function validate(){
    // event.preventDefault();
    // console.log(email);
    var email = document.getElementById("email");
    // var regx = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,20})$/ ;
    console.log(email.value)
    userEmail.push(email.value);
    localStorage.setItem("validEmail", JSON.stringify(userEmail));
    if(email.value.trim() == "" || email.value.length < 11 || email.value.search(/[@]/)==-1 || email.indexOf('@') <= 0){
        // alert("invalidEmail");
        email.style.border = "2px solid #e44463";
        document.getElementById("error").style.visibility = "visible";
        document.getElementById("invalidEmail").style.visibility = "visible";
        return false;
    } 
    // else if(regx.test(email.value)){
    //     return true;
    // }
    else{
        return true;
    }
}


