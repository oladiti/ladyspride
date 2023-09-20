let navbar = document.querySelector('.header .navbar');
let menuBtn = document.querySelector('#menu-btn');
let closeBtn = document.querySelector('#close-navbar');

menuBtn.onclick = () =>{
   navbar.classList.add('active');
};

closeBtn.onclick = () =>{
    navbar.classList.remove('active');
 };

window.onscroll = () =>{
   navbar.classList.remove('active');
};

var swiper = new Swiper(".slide-content", {
   slidesPerView: 3,
   spaceBetween: 45,
   loop: true,
   centerSlide: 'true',
   fade: 'true',
   grabCursor: 'true',
   pagination: {
     el: ".swiper-pagination",
     clickable: true,
     dynamicBullets: true, 
   },
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
   autoplay:true,

   breakpoints:{
       0: {
           slidesPerView: 1,
       },
       520: {
           slidesPerView: 2,
       },
       950: {
           slidesPerView: 3,
       },
   },
  
 });







