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


// booking form
  const bookingForm = document.getElementById('bookingForm');
  const confirmModal = document.getElementById('confirmModal');
  const finalModal = document.getElementById('finalModal');
  const confirmText = document.getElementById('confirmText');

  let bookingData = {};

  bookingForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // Gather form data
    bookingData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      phone: document.getElementById('phone').value,
      date: document.getElementById('date').value,
      time: document.getElementById('time').value,
      guests: document.getElementById('guests').value,
    };

    confirmText.innerHTML = `
      <strong>Name:</strong> ${bookingData.name}<br>
      <strong>Email:</strong> ${bookingData.email}<br>
      <strong>Phone:</strong> ${bookingData.phone}<br>
      <strong>Date:</strong> ${bookingData.date}<br>
      <strong>Time:</strong> ${bookingData.time}<br>
      <strong>Guests:</strong> ${bookingData.guests}
    `;

    confirmModal.style.display = 'flex';
  });

  document.getElementById('confirmBtn').onclick = function() {
    confirmModal.style.display = 'none';
    finalModal.style.display = 'flex';
    bookingForm.reset(); // Optional: reset form
  };

  document.getElementById('cancelBtn').onclick = function() {
    confirmModal.style.display = 'none';
  };

  function closeFinalModal() {
    finalModal.style.display = 'none';
  }