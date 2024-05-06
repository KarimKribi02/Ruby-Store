
  // Get the button:
let topBtn = document.getElementById("top-btn")

window.onscroll = function () { scrollFunction() }

// When the user scrolls down 20px from the top of the document, show the button
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topBtn.style.display = "block"
    } else {
        topBtn.style.display = "none"
    }
}

// When the user clicks on the button, scroll to the top of the document
function backToTop() {
    document.body.scrollTop = 0 // For Safari
    document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
}

function initBtnActions() {
    let btnCart = document.getElementById('cart-btn')
    btnCart.addEventListener('click', function(e) {
        alert('zalllllooo')
    }, false)
}

function myFunction() {
    let x = document.getElementById("nav-bar");
    if (x.className === "nav-bar") {
      x.className += " responsive";
    } else {
      x.className = "nav-bar";
    }
  } 
