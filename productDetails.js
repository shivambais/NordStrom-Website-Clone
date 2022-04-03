//attaching the prodct details here : START

var obj= JSON.parse(localStorage.getItem("productDetailsStorage"));

// var obj= {
  // image_url: ["https://n.nordstrommedia.com/id/sr3/a06ce077-05f9-4f1c-96b9-d3f1cf414045.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  // "https://n.nordstrommedia.com/id/sr3/a06ce077-05f9-4f1c-96b9-d3f1cf414045.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  // "https://n.nordstrommedia.com/id/sr3/a06ce077-05f9-4f1c-96b9-d3f1cf414045.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  // "https://n.nordstrommedia.com/id/sr3/a06ce077-05f9-4f1c-96b9-d3f1cf414045.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  // "https://n.nordstrommedia.com/id/sr3/a06ce077-05f9-4f1c-96b9-d3f1cf414045.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196"],

//   name:"Limited-Time SaleLimited-Time Sale",
//   size:"s",
//   brand:"levis",
//   p:"LEVI'S® \n 501® Original Cutoff Denim Shorts (Luxor Heat)",
//   price: "4,261.53",
//   strikedoffprice: "Was:INR 5,682.5825% off",
// };


var product_images= obj.image_url;
                product_images.map(function(ele){
                    var image= document.createElement("img");
                    image.src= ele;
                    var imdiv= document.createElement("div");
                    imdiv.append(image);
                    document.querySelector("#photos").append(imdiv);
                })

    document.querySelector(".product_name").innerText = obj.p;
    document.querySelector(".product_brand").innerText = obj.brand;
    document.querySelector(".product_price").innerText= "INR  "+ obj.price;
    document.querySelector(".strikedPrice").innerText = obj.strikedoffprice;

    
    


// var productDetails= JSON.parse(localStorage.getItem("productDetailsStorage"));
// productDetails.map(function(ele){
    
//     var product_images= ele.image_url;
//                 product_images.map(function(element){
//                     var image= document.createElement("img");
//                     image.src= element;


//                     document.querySelector("#photos").append(image);
//                 })




//     document.querySelector(".product_name").innerText = ele.p;
//     document.querySelector(".product_brand").innerText = ele.brand;
//     document.querySelector(".product_price").innerText = ele.price;
//     document.querySelector(".strikedPrice").innerText = ele.strikedoffprice;



// })

//attaching the prodct details here : END 


//adding product to cart: START

document.querySelector(".addToBag").addEventListener("click",addToBag);

function addToBag(){

   var cartDataArr= JSON.parse(localStorage.getItem("ProjectCartData")) || [];
   var productDetailsObj= JSON.parse(localStorage.getItem("productDetailsStorage"));

   cartDataArr.push(productDetailsObj);
        localStorage.setItem("ProjectCartData",JSON.stringify(cartDataArr));

        document.querySelector(".changeText").innerText = "Added to your Bag"  ;  
        
        
    // document.querySelector(".addToBag").addEventListener("click",goToCart);
}

// function goToCart(){
// location.href= 'cart.html';
// }
//adding product to cart: END




var recommended_item=[{images:"https://n.nordstrommedia.com/id/sr3/3a675965-fcd6-480d-916d-9d21d43f71e8.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",names: "PAIGE",prices:"INR 4561.63",strikedPrices:"INR 5601.96"},
{images:"https://n.nordstrommedia.com/id/sr3/5c61f80b-ee66-4db7-b09b-f458feb2b433.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",names: "Vuori",prices:"INR 2356.96",strikedPrices:"INR 4589.36"},
{images:"https://n.nordstrommedia.com/id/sr3/052c02a9-6ac4-4b9c-9970-7a694934bcc2.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",names: "SPGBK",prices:"INR 3346.82",strikedPrices:"INR 5524.93"},
{images:"https://n.nordstrommedia.com/id/sr3/3a3da7f2-8609-4b69-8f01-caea4aff5dfa.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",names: "Prada",prices:"INR 7359.15",strikedPrices:"INR 11256.84"},
{images:"https://n.nordstrommedia.com/id/sr3/6c0592b9-0bba-4d70-83fd-27cc58304feb.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",names: "Nike",prices:"INR 5378.29",strikedPrices:"INR 8286.34"}];


// Recommended at bottom
recommended_item.map(function(elem){
    var card= document.createElement("div");
    card.setAttribute("class","card");

    var images= document.createElement("img");
    images.src= elem.images;
    var imagesDiv= document.createElement("div");
    imagesDiv.append(images);
    imagesDiv.setAttribute("class","imagesDiv")

    var names= document.createElement("p");
    names.innerText= elem.names;
    var prices= document.createElement("h5");
    prices.innerText= elem.prices;
    prices.setAttribute("class","product_price bottom_price");

   var strikedPrices= document.createElement("p");
   strikedPrices.innerText= elem.strikedPrices;
   strikedPrices.setAttribute("class","strikedPrice");


    card.append(imagesDiv,names,prices,strikedPrices);
    document.querySelector("#recommended_item").append(card);
});

// Recommended at right
recommended_item.map(function(elem){
    var card= document.createElement("div");
    card.setAttribute("class","card");

    var images= document.createElement("img");
    images.src= elem.images;
    var imagesDiv= document.createElement("div");
    imagesDiv.append(images);
    imagesDiv.setAttribute("class","imagesDiv")

    var names= document.createElement("p");
    names.innerText= elem.names;
    var prices= document.createElement("h5");
    prices.innerText= elem.prices;
    prices.setAttribute("class","product_price r_price");

   var strikedPrices= document.createElement("p");
   strikedPrices.innerText= elem.strikedPrices;
   strikedPrices.setAttribute("class","strikedPrice");


    card.append(imagesDiv,names,prices,strikedPrices);
    document.querySelector("#right_box").append(card);
});