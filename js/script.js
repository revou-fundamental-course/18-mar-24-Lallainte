// slide show start
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
// slide show end
function validateForm() {
  if (document.forms["formPendaftaran"]["nama"].value == "") {
    alert("Nama Tidak Boleh Kosong");
    document.forms["formPendaftaran"]["nama"].focus();
    return false;
  }
  if (document.forms["formPendaftaran"]["email"].value == "") {
    alert("Email must not be empty.");
    document.forms["formPendaftaran"]["email"].focus();
    return false;
  }
  if (document.forms["formPendaftaran"]["jurusan"].selectedIndex < 1) {
    alert("Select Destination.");
    document.forms["formPendaftaran"]["jurusan"].focus();
    return false;
  }
}
