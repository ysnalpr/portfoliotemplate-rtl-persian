$(document).ready(function() {


  


  // Sticky Navigarion 

  let navOffsetTop = $('.header-area').height() + 50;

  function navbarFixed() {
    if($('.header-area').length) {
      $(window).scroll( function() {
        let scroll = $(window).scrollTop();
       if(scroll >= navOffsetTop){
          $('.header-area').addClass('navbar-fix');
        }
        else{
          $('.header-area').removeClass('navbar-fix');
        }
      });
    }
  }
  navbarFixed();
}); 





// Navigation burger ==>

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  hamburger.classList.toggle('toggle');
});


// End Navigation burger





// Scroll Up Button

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 




