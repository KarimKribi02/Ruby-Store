
     function myFunction(smallImg)
    {
        var fullImg = document.getElementById("imageBox");
        fullImg.src = smallImg.src;
    }
let btn = document.querySelector('#btn-up')
console.log(btn)
window.onscroll = function(){
    if (window.scrollY >= 400)
    {
       btn.style.cssText = `
       display : block`
    }
    else
    {
        btn.style.cssText = `
        display : none`  
    }
}
  btn.onclick = function(){
    window.scroll(0,0)
  }