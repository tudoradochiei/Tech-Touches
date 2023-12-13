//Dropdown code

let subMenu=document.getElementById("subMenu");
function showMenu(){
   subMenu.classList.toggle("open-menu");
}

function deleteMenu(){
   subMenu.classList.toggle("close-menu");
}

//Slides code

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 6000); 
}

//Scanner code

let qrCodeScanner;

document.addEventListener('DOMContentLoaded', (event) => {
 qrCodeScanner = new Html5Qrcode("my-qr-reader");
});

function startScanning() {
 qrCodeScanner.start(
     { facingMode: "environment" },
     true,
     qrCodeSuccessCallback,
     qrCodeErrorCallback
 )
 .catch(err => {
     // Handle error
     console.error(err);
 });
}

function qrCodeSuccessCallback(decodedText, decodedResult) {
 // Handle the decoded text
 alert(decodedText);
}

function qrCodeErrorCallback(errorMessage) {
 // Handle the error
 console.error(errorMessage);
}
