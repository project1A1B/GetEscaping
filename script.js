let navbar = document.querySelector('.navbar')
document.querySelector('#menu-btn').onclick = () =>{
  navbar.classList.toggle('active');
  loginForm.classList.remove('active');
  searchForm.classList.remove('active');
  
}

let loginForm = document.querySelector('.login-form')
 document.querySelector('#login-btn').onclick = () =>{
   loginForm.classList.toggle('active');
   navbar.classList.remove('active');
   searchForm.classList.remove('active');
   
}

 
 let videoBtn = document.querySelectorAll('.vid-btn');
 videoBtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
         document.querySelector('.controls .active').classList.remove('active');
         btn.classList.add('active');
         let src = btn.getAttribute('data-src');
         document.querySelector('#video-slider').src = src;
      
    }); 
   
});

 var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 5500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});



