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

// // //cart working js
// // if (document.readyState == 'loading'){
// //     document.addEventListener('DOMContentLoaded',ready)
// // }else{
// //     ready()
// // }



// // // reomve items from cart
// // function removecartitem(event){
// //     var buttonclicked = event.target;
// //     buttonclicked.parentElement.remove();
// // }

// // //making function
// // function ready(){
// //     // reomve items from cart
// //     var reomvecartbuttons = document.getElementsByClassName('cart-remove')
// //     console.log(reomvecartbuttons)
// //     for(var i=0; i < reomvecartbuttons.length ; i++){
// //         var button = reomvecartbuttons[i]
// //         button.addEventListener('click' ,removecartitem)
// //     }
// // }

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

document.onclick = function (event) {
    
    if (event.target.parentElement.className === "cartk-box") {
        event.target.parentElement.remove()
    } else {
        
    }
}

// Karim

// let i = document.querySelector(".cart-remove");
// i.addEventListener("click" , function () {
//     document.querySelector(".cartk-box").remove()
    
// })






let BTN = document.querySelectorAll(".buy")
// console.log(BTN)

BTN.forEach(function (ele , index , Array) {

    ele.addEventListener("click" , function () {
        console.log(this.parentElement)

let Local = document.querySelector(".cartk-box").cloneNode(true)
let  Global= document.querySelector(".cartk-content")
Global.append(Local)
    })
})