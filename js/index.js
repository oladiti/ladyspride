 // let navbar = document.querySelector('.header');
document.addEventListener ('scroll', () =>{
 const headMake = document.querySelector('.header');
 const headWay = document.querySelector("[data-header]");

 if (window.scrollY > 0) {
  headMake.classList.add('scrolled');
  headWay.classList.add('active');
  
 }
 else {
  headMake.classList.remove('scrolled');
  headWay.classList.remove('active')
 }

 });
 const toTop = document.querySelector(".to-top");
 window.addEventListener("scroll", () =>{
  if (window.scrollY>100) {
   toTop.classList.add('active');
  }
  else{
   toTop.classList.remove('active');
  }
 });
