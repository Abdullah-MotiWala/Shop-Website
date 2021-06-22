var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 40,
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

// Funciton For Div animation add
function addCart(){
  var nav = document.getElementById("ul");
  var cartDiv =document.getElementById("cart");
  nav.append(cartDiv)
  cartDiv.style.marginRight= "20px";
  cartDiv.style.borderRadius = "10px";
  cartDiv.style.transition = "100s ease";
  cartDiv.style.width = "130px";
}
// Funciton For Div animation end