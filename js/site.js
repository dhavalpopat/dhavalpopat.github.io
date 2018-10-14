// var windowWidth = $(window).width();
// var windowHeight = $(window).height();

window.onscroll = function() {scrollFunction();};

function scrollFunction() {
    // show the button when user scrolls down 100px from top of the document
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("scroll-up-anchor").style.display = "block";
    } else {
        document.getElementById("scroll-up-anchor").style.display = "none";
    }
}

// scroll to top of the document when user clicks on the button
function takeMeUp() {
    window.scroll({
        top: 0, 
        left: 0, 
        behavior: 'smooth' 
    });
}

/********** image slideshow **********/

// var slideIndex = 1;
// showSlides(slideIndex);

// function nextSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("image-slider");
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1} 
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none"; 
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block"; 
//   dots[slideIndex-1].className += " active";
// }
