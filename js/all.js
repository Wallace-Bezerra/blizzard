"use strict";var filtro=document.querySelectorAll(".filtro a"),slide_thumbnail=(filtro.forEach(function(a){a.addEventListener("click",function(t){t.preventDefault(),filtro.forEach(function(e){e.classList.contains("active")&&(console.log(e,t.currentTarget),e!==t.currentTarget&&e.classList.remove("active"))}),a.classList.toggle("active");var e=a.getAttribute("href"),i=document.querySelectorAll(".tab-pane-games"),e=(i.forEach(function(e){e.classList.contains("active")&&e.classList.remove("active")}),document.querySelector(e));(a.classList.contains("active")?e:(e.classList.remove("active"),i[0])).classList.add("active")})}),new Swiper(".slide-thumbnail",{slidesPerView:5,direction:"vertical",spaceBetween:20,watchSlidesProgress:!0})),slide_hero=new Swiper(".slide-principal",{effect:"fade",thumbs:{swiper:slide_thumbnail},autoplay:{delay:5e3,disableOnInteraction:!1}}),login=document.querySelector(".buttons .btn-primary"),modalLogin=document.querySelector(".modal"),overlay=document.querySelector(".overlay.Modal"),closeModal=(login.addEventListener("click",function(e){e.preventDefault(),modalLogin.classList.add("active")}),document.querySelector(".close"));closeModal.addEventListener("click",function(e){e.stopPropagation(),modalLogin.classList.remove("active")}),overlay.addEventListener("click",function(e){e.target==overlay&&modalLogin.classList.remove("active")});