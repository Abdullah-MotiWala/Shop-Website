// Funciton For cart animation add
var windowSize = matchMedia("(max-width: 768px)")
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
  if (windowSize.matches) {
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
    console.log("As ")
  } else {
    ulMediaQuery.style.left = "0%"
    console.log("Af")
  }
}
// Funciton For animated Navbar Finish

// Slider of Product Starts
var swiper = new Swiper('.swiper-container', {
  spaceBetween: 40,
  slidesPerView: 3,
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
