var cartData= JSON.parse(localStorage.getItem("ProjectCartData")) || [];
var total_price = cartData.reduce(function(sum,elements){
    var pp= elements.price.replaceAll(",","");
     var num= parseFloat(pp);
    return sum+ num ;
},0)
var totalFinal= total_price+ 4075;

document.querySelector("#total_price_cart").innerText= "Total:   (INR)  "+ " "+ " "+ " "+ Number(totalFinal.toFixed(2));
document.querySelector("#total_price").innerText= "Items:    (INR)  "+ Number(total_price.toFixed(2));


// console.log(total_price.toFixed(2),typeof Number(total_price.toFixed(2)));
localStorage.setItem("projectCartTotal",Number(total_price.toFixed(2)));


cartData.map(function(e,i){
    var bigCartBox= document.createElement("div");
    bigCartBox.setAttribute("class","bigCartBox");

    var topCartBox= document.createElement("div");
    topCartBox.setAttribute("class","topCartBox");
    
    var topCartLeft= document.createElement("div");
    topCartLeft.setAttribute("class","topCartLeft");
    var topCartLeftImage= document.createElement("div");
   var cartImage= document.createElement("img");
      cartImage.src= e.image_url[0] ; 
      cartImage.setAttribute("class","cartImage")
    var topCartLeftPD= document.createElement("div");
    topCartLeftPD.setAttribute("class","topCartLeftPD");
        var named= document.createElement("p");
        named.innerText= e.p;
        var branded= document.createElement("p");
        branded.innerText= "Brand: "+e.brand;
        var sized= document.createElement("p");
        sized.innerText=  "Size: "+ e.size;

    var topCartCenter= document.createElement("div");
        var qty= document.createElement("p");
        qty.innerText= "Quantity: 1";

    var topCartRight= document.createElement("div");
        var prised= document.createElement("h4");
        prised.innerText= "INR " + e.price;
        // var strikePrised= document.createElement("p");
        // strikePrised.innerText= e.strikedoffprice;
        // strikePrised.setAttribute("class","strikePrised");

    var bottomCartBox= document.createElement("div");
    bottomCartBox.setAttribute("class","bottomCartBox");
    var bottomCartOnly= document.createElement("div");
    // var delivery= document.createElement("p");
    // delivery.innerText= "< Delivery >"
    // var para= document.createElement("p");
    // para.innerText= "International orders usually arrive within 5–13 business days. We'll give you delivery dates in checkout.";
    
    // var remove= document.createElement("h4");
    // remove.innerText= "Remove";
    // remove.setAttribute("id","remove");
    // remove.addEventListener("click",function(e,i){
    //     removeItemFunction();
    // })


    
    // bottomCartOnly.append(remove);
    topCartRight.append(prised);
    topCartCenter.append(qty);
    topCartLeftPD.append(named,branded,sized);
    topCartLeftImage.append(cartImage);
    topCartLeft.append(topCartLeftImage,topCartLeftPD);
    topCartBox.append(topCartLeft,topCartCenter,topCartRight);
    bottomCartBox.append(bottomCartOnly);
    bigCartBox.append(topCartBox,bottomCartBox);
    document.querySelector(".totalOuter").append(bigCartBox);

})


function removeItemFunction(e,i){
var cartData= JSON.parse(localStorage.getItem("ProjectCartData")) || [];
cartData.splice(i,1);
localStorage.setItem("ProjectCartData",JSON.stringify(cartData));
window.location.href="cart.html";
}

// document.querySelector("#checkout_Btn").addEventListener("click",)


function checkingOut(){
    event.preventDefault();
    var email = document.getElementById("IDEmail").value;
    var firstname = document.getElementById("fname").value;
    var lastname = document.getElementById("lname").value;
    var address = document.getElementById("street").value;
    var pincode = document.getElementById("IDPincode").value;
    var city = document.getElementById("IDCity").value;
    var mobile = document.getElementById("phone").value;

    if(address.trim() == "" && email.trim() == "" && firstname.trim() == "" && lastname.trim() == ""
       && pincode.trim() == "" && city.trim() == "" && mobile.trim() == ""){
        IDPincode.style.border = "2px solid #e44463";
        document.getElementById("errorPinCode").style.visibility = "visible";
        document.getElementById("invalidPincode").style.visibility = "visible";
        IDEmail.style.border = "2px solid #e44463";
        document.getElementById("errorEmail").style.visibility = "visible";
        document.getElementById("invalidEmail").style.visibility = "visible";
        fname.style.border = "2px solid #e44463";
        document.getElementById("errorFName").style.visibility = "visible";
        document.getElementById("invalidFName").style.visibility = "visible";
        lname.style.border = "2px solid #e44463";
        document.getElementById("errorLName").style.visibility = "visible";
        document.getElementById("invalidLName").style.visibility = "visible";
        street.style.border = "2px solid #e44463";
        document.getElementById("errorAddress").style.visibility = "visible";
        document.getElementById("invalidAddress").style.visibility = "visible";
        phone.style.border = "2px solid #e44463";
        document.getElementById("errorPhone").style.visibility = "visible";
        document.getElementById("invalidPhone").style.visibility = "visible";
        IDCity.style.border = "2px solid #e44463";
        document.getElementById("errorCity").style.visibility = "visible";
        document.getElementById("invalidCity").style.visibility = "visible";
        // return false;
    }
    else if(email.trim() == ""){
        // alert("Please enter valid details");
        email.style.border = "2px solid #e44463";
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
    else if(address.trim() == ""){
        street.style.border = "2px solid #e44463";
        document.getElementById("errorAddress").style.visibility = "visible";
        document.getElementById("invalidAddress").style.visibility = "visible";
        // return false;
    } 
    else if(mobile.trim().length<10){
        phone.style.border = "2px solid #e44463";
        document.getElementById("errorPhone").style.visibility = "visible";
        document.getElementById("invalidPhone").style.visibility = "visible";
        // return false;
    } 
    else if(pincode.trim().length<5){
        pincode1.style.border = "2px solid #e44463";
        document.getElementById("errorPinCode").style.visibility = "visible";
        document.getElementById("invalidPincode").style.visibility = "visible";
        // return false;
    } 
    else if(city.trim() == ""){
        city1.style.border = "2px solid #e44463";
        document.getElementById("errorCity").style.visibility = "visible";
        document.getElementById("invalidCity").style.visibility = "visible";
        // return false;
    } 
    else {
        console.log("Yes");
        if (localStorage.getItem('usersData') === null) {
            localStorage.setItem("usersData", JSON.stringify([]))
        }
        var userDetails = {
            firstname,
            lastname,
            email,
            mobile,
            address,
            pincode,
            city,
        };
        var userArr = JSON.parse(localStorage.getItem("usersData"));
        userArr.push(userDetails);
        localStorage.setItem("usersData", JSON.stringify(userArr));
        // alert("Ordered Successfully", userArr);
        
        // window.location.href = "cart.html";
        document.getElementById("IDEmail").value = "";
        document.getElementById("fname").value = "";
        document.getElementById("lname").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("IDPincode").value = "";
        document.getElementById("IDCity").value = "";
        document.getElementById("street").value = "";
        document.getElementById("address").value = "";
    }
}

function shippingCost(){
    var rd1 = document.getElementById("rd1");
    var rd2 = document.getElementById("rd2");
    var rd3 = document.getElementById("rd3");
    var rd4 = document.getElementById("rd4");

    if(rd1.checked == true){
        alert("Delivery selected is" + " " + rd1.value);
    } else if(rd2.checked == true){
        alert("Delivery selected is" + " " + rd2.value);
    } else if(rd3.checked == true){
        alert("Delivery selected is" + " " + rd3.value);
    } else if(rd4.checked == true){
        alert("Delivery selected is" + " " + rd4.value);
    } else{
        alert("Select Delivery")
    }
}

function myCoupon(){
    var coupon = document.getElementById("promocode").value
    if(coupon.length < 1){
        promocode.style.border = "2px solid #e44463";
        document.getElementById("errorPromo").style.visibility = "visible";
    }
    else{
        promocode.style.border = "2px solid #e44463";
        document.getElementById("invalidPromo").style.visibility = "visible";
    }
}

function myCard(){
    var Dtcard = document.getElementById("cardD").value;
    var Exp = document.getElementById("month").value;
    var Cred = document.getElementById("secure").value;

    if(Dtcard.trim() == "" && Exp.trim() == "" && Cred.trim() == ""){
        cardD.style.border = "2px solid #e44463";
        document.getElementById("errorCard").style.visibility = "visible";
        month.style.border = "2px solid #e44463";
        document.getElementById("errorExpiry").style.visibility = "visible";
        secure.style.border = "2px solid #e44463";
        document.getElementById("errorCVV").style.visibility = "visible";
    }
    else if(Dtcard.trim() == ""){
    cardD.style.border = "2px solid #e44463";
    document.getElementById("errorCard").style.visibility = "visible";
    } 
    else if(Exp.trim() == ""){
    month.style.border = "2px solid #e44463";
    document.getElementById("errorExpiry").style.visibility = "visible";
    } 
    else if(Cred.trim() == ""){
    secure.style.border = "2px solid #e44463";
    document.getElementById("errorCVV").style.visibility = "visible";
    } 
}

var overlay = document.querySelector("#output");

document.querySelector("#myOutput").addEventListener("click",() =>{
    overlay.style.display = "block";
})