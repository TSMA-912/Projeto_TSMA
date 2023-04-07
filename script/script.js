let slideIndex = 0;
let timeout = undefined;

showSlide();

// Next/previous controls
function nextSlide() {
  clearTimeout(timeout);
  slideIndex++;
  let slides = document.getElementsByClassName("mySlides");
  if (slideIndex == slides.length) {
    slideIndex = 0;
  }
  showSlide();
  console.log("plus");
}

// Next/previous controls
function previousSlide() {
  clearTimeout(timeout);
  slideIndex--;
  if (slideIndex == -1) {
    let slides = document.getElementsByClassName("mySlides");
    slideIndex = slides.length - 1;
  }
  showSlide();
  console.log("plus");
}

// Thumbnail image controls
function currentSlide(n) {
  clearTimeout(timeout);
  slideIndex = n;
  showSlide();
}

function showSlide() {
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    if (i == slideIndex) {
      slides[i].style.display = "block";
      dots[i].className = "dot active";
    } else {
      slides[i].style.display = "none";
      dots[i].className = "dot";
    }
  }
  timeout = setTimeout(nextSlide, 3000);
}