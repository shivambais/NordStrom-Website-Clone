var cartData= JSON.parse(localStorage.getItem("ProjectCartData")) || [];

     // var obj('e' here)= {
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

    var total_price = cartData.reduce(function(sum,elements){
        var pp= elements.price.replaceAll(",","");
         var num= parseFloat(pp);
        return sum+ num;
    },0)
    document.querySelector("#total_price_cart").innerText= "INR "+ Number(total_price.toFixed(2));
    // console.log(total_price.toFixed(2),typeof Number(total_price.toFixed(2)));
    localStorage.setItem("projectCartTotal",Number(total_price.toFixed(2)));

    cartData.map(function(e,i){
            var bigCartBox= document.createElement("div");
            bigCartBox.setAttribute("class","bigCartBox");

            var hline= document.createElement("hr");

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
                var strikePrised= document.createElement("p");
                strikePrised.innerText= e.strikedoffprice;
                strikePrised.setAttribute("class","strikePrised");

            var bottomCartBox= document.createElement("div");
            bottomCartBox.setAttribute("class","bottomCartBox");
            var bottomCartOnly= document.createElement("div");
            var delivery= document.createElement("p");
            delivery.innerText= "< Delivery >"
            var para= document.createElement("p");
            para.innerText= "International orders usually arrive within 5–13 business days. We'll give you delivery dates in checkout.";
            var remove= document.createElement("h4");
            remove.innerText= "Remove";
            remove.setAttribute("id","remove");
            remove.addEventListener("click",function(){
                removeItemFunction(e,i);
            })


            
            bottomCartOnly.append(delivery,para,remove);
            topCartRight.append(prised,strikePrised);
            topCartCenter.append(qty);
            topCartLeftPD.append(named,branded,sized);
            topCartLeftImage.append(cartImage);
            topCartLeft.append(topCartLeftImage,topCartLeftPD);
            topCartBox.append(topCartLeft,topCartCenter,topCartRight);
            bottomCartBox.append(bottomCartOnly);
            bigCartBox.append(hline,topCartBox,bottomCartBox);
            document.querySelector(".outerCartClass").append(bigCartBox);

    })


    function removeItemFunction(e,i){
        var cartData= JSON.parse(localStorage.getItem("ProjectCartData")) || [];
        cartData.splice(i,1);
        localStorage.setItem("ProjectCartData",JSON.stringify(cartData));
        window.location.href="cart.html";
    }

    // document.querySelector("#checkout_Btn").addEventListener("click",)



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

    