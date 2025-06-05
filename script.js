const images = [
  "./Images/gallery/1.jpg",
  "./Images/menu/2.jpg",
  "./Images/gallery/3.jpg",
  "./Images/menu/4.jpg",
  "./Images/gallery/5.jpg",
  "./Images/menu/6.jpg",
  "./Images/gallery/7.jpg",
  "./Images/menu/8.jpg",
  "./Images/menu/9.jpg",
  "./Images/gallery/10.jpg"
 
];

let currentIndex = 0;

function openLightbox(index) {
  currentIndex = index;
  document.getElementById("lightbox").style.display = "flex";
  updateLightbox();
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

function changeSlide(direction) {
  currentIndex += direction;
  if (currentIndex < 0) currentIndex = images.length - 1;
  if (currentIndex >= images.length) currentIndex = 0;
  updateLightbox();
}

function updateLightbox() {
  const lightboxImg = document.getElementById("lightbox-img");
  lightboxImg.src = images[currentIndex];
}



function submitBooking() {
  // Collect form values
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;
  const guests = document.getElementById('guests').value;

  // Show confirmation modal
  const details = `
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Date:</strong> ${date}</p>
    <p><strong>Time:</strong> ${time}</p>
    <p><strong>Guests:</strong> ${guests}</p>
  `;
  document.getElementById('bookingDetails').innerHTML = details;
  document.getElementById('confirmation').style.display = 'block';

  return false; // Prevent default form submission
}

function closeModal(id) {
  document.getElementById(id).style.display = 'none';
}

document.getElementById('confirmBtn').onclick = function () {
  document.getElementById('confirmation').style.display = 'none';
  document.getElementById('successModal').style.display = 'block';
}










