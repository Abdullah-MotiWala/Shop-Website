// Funciton For cart animation add
var windowSize768 = matchMedia("(max-width: 768px)")
var divOfUl = document.getElementById("ul");
var cartDiv = document.getElementById("cart");
var cartToAddDiv = document.getElementById("mediaQueryCart");
var nav = document.getElementById("nav")

function stylingDivInSmallScreen() {
  cartDiv.style.borderRadius = "10px";
  cartDiv.style.width = "80px";
  cartDiv.style.height = "40px";
}

function stylingDivInBigScreen() {
  cartDiv.style.borderRadius = "10px";
  cartDiv.style.width = "120px";
}
function placmementOfDiv() {
  if (windowSize768.matches) {
    cartToAddDiv.append(cartDiv)
    stylingDivInSmallScreen()
  } else {
    document.addEventListener("scroll", function () {
      divOfUl.append(cartDiv)
      cartDiv.style.marginRight = "20px";
      stylingDivInBigScreen()
    })
  }
}
placmementOfDiv() //calling function to runing
document.addEventListener("scroll",placmementOfDiv())// calling on scroll
// document.addEventListener("resize",placmementOfDiv()) // calling on resizing screen to transform directly on media Query

// Funciton For cart animation end

// Funciton For animated Navbar Starts
var ulMediaQuery = document.getElementById("navs");
function toggle() {
  if (ulMediaQuery.style.left == "0%") {
    ulMediaQuery.style.left = "-100%";
  } else {
    ulMediaQuery.style.left = "0%"
  }
}
// Funciton For animated Navbar Finish

if(windowSize768.matches){
 var numberOfImages = 1;
}else{
  var numberOfImages = 3;
}
// Slider of Product Starts
var swiper = new Swiper('.swiper-container', {
  spaceBetween: 40,
  slidesPerView: numberOfImages,
  centeredSlides: true,
  // grabCursor: true,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
// Slider of Product Ends
