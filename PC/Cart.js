// 
// 
// let closcart = document.querySelector()
// console.log(closcart)
// // open cart
// // carticon.onclick = () => {
// //     cart.classList.add("show");
// // };

// // close cart
// closcart.onclick = () => {
//     cart.classList.add("remove");
// };



let cart = document.querySelector('#cartk')
let  ele= document.querySelector(".close-cart");
let carticon = document.querySelector('.cart-icon')
console.log(cart)
console.log(ele)
console.log(carticon)

carticon.addEventListener("click" , function () {
    cart.classList.add("show");
    
})
ele.addEventListener("click" , function () {
    
    cart.classList.remove("show")
})





// Simp

// document.onclick = function (event) {
    
//     if (event.target.parentElement.className === "cartk-box") {
//         event.target.parentElement.remove()
//     } else {
        
//     }
// }

// Karim

// let i = document.querySelector(".cart-remove");
// i.addEventListener("click" , function () {
//     document.querySelector(".cartk-box").remove()
    
// })






// let BTN = document.querySelectorAll(".buy")
// // console.log(BTN)

// BTN.forEach(function (ele , index , Array) {

//     ele.addEventListener("click" , function () {
//         console.log(this.parentElement)

// let Local = document.querySelector(".cartk-box").cloneNode(true)
// let  Global= document.querySelector(".cartk-content")
// Global.append(Local)
//     })
// })




// // //cart working js
if (document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded',ready)
}else{
    ready()
}



// // // reomve items from cart
function removecartitem(event){
    var buttonclicked = event.target;
    buttonclicked.parentElement.remove();
    updatetotal()
}

//making function
function ready(){
    // reomve items from cart
    var reomvecartbuttons = document.getElementsByClassName('cart-remove')
    console.log(reomvecartbuttons)
    for(var i=0; i < reomvecartbuttons.length ; i++){
        var button = reomvecartbuttons[i]
        button.addEventListener('click' ,removecartitem)}
    //Quantity changes
    var quantityInputs = document.getElementsByClassName("cart-quantity") ;
    for (var i=0 ; i < quantityInputs.length; i++){
        var input = quantityInputs[i];
        input.addEventListener("change",quantityChanged);
    }
    // add to cart
    var addCart = document.getElementsByClassName("buy");
    for (var i = 0; i < addCart.length; i++){
        var button = addCart[i];
        button.addEventListener("click", addCartClicked)
    }
    // Buy button work
    document
    .getElementsByClassName("btn-buy")[0]
    .addEventListener("click", buyButtonClicked);
}
//Buy Button
function buyButtonClicked(){
    alert('Your Order is placed')
    var cartContent = document.getElementsByClassName('cartk-content')[0];
    while (cartContent.hasChildNodes()){
        cartContent.removeChild(cartContent.firstChild);
    }
    updatetotal();
}
//Quantity changes
function quantityChanged(event){
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0){
        input.value = 1;
    }
    updatetotal()
}

// add to cart 
function addCartClicked(event){
    var button = event.target;
    var shopProducts = button.parentElement;
    var title = shopProducts.getElementsByClassName("product-title")[0].innerText;
    var price = shopProducts.getElementsByClassName("price")[0].innerText;
    var productImg = shopProducts.getElementsByClassName("product-img")[0].src;
    addProductToCart(title,price,productImg);
    updatetotal();
}
function addProductToCart(title,price,productImg){
    var cartshopBox = document.createElement("div");
    cartshopBox.classList.add("cartk-box")
    var cartItems = document.getElementsByClassName('cartk-content')[0]
    var cartItemsNames = cartItems.getElementsByClassName('cart-product-title')
    for (var i = 0; i < cartItemsNames.length; i++){
        if( cartItemsNames[i].innerHTML == title){
            alert('hiiiiiiiiiiiiiiiiiiiii')
        return;
        }
    }
    var cartBoxContent = ` <img src="${productImg}" alt="" class="cartk-img">
    <div class="detail-box">
    <div class="cart-product-title">${title}</div>
    <div class="cart-price">${price}</div>
    <input type="number" value="1" class="cart-quantity">

    </div>
    <i class="fa-solid fa-trash cart-remove"></i>`;
cartshopBox.innerHTML = cartBoxContent
cartItems.append(cartshopBox)
cartshopBox
    .getElementsByClassName('cart-remove')[0]
    .addEventListener('click', removecartitem);  
cartshopBox
    .getElementsByClassName('cart-quantity')[0]
    .addEventListener('change', quantityChanged);
}

//////////////////////
function updatetotal(){
    var cartContent = document.getElementsByClassName("cartk-content")[0];
    var cartBoxes = cartContent.getElementsByClassName("cart-quantity");
    var total = 0 ; 
    for(var i=0; i < cartBoxes.length ; i++){
        var cartbox = cartBoxes[i];
        var priceElement = document.getElementsByClassName("cart-price")[0];
        // console.log(priceElement)
        var quantityElement = document.getElementsByClassName("cart-quantity")[0];
        // console.log(quantityElement)
        var price = parseFloat(priceElement.innerText.replace("DH",""));
        var quantity = quantityElement.value;
        total += price * quantity;
         }
        total = Math.round(total*100) / 100;
        document.getElementsByClassName("total-price")[0].innerText = "DH" +  total ;
   
}