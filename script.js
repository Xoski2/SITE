// Theme Toggle
const toggleTheme = document.getElementById('toggle-theme');
toggleTheme.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  toggleTheme.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

const readMoreBtn = document.getElementById("readMoreBtn");
const extraBio = document.querySelector(".extra-bio");

readMoreBtn.addEventListener("click", () => {
  extraBio.classList.toggle("show");
  readMoreBtn.textContent = extraBio.classList.contains("show") ? "Read Less" : "Read More";
});



document.addEventListener("DOMContentLoaded", function() {
  const elements = document.querySelectorAll(".project-card");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in-up");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  elements.forEach(el => observer.observe(el));
});

function openViewer(filePath) {
  const modal = document.getElementById("fileModal");
  const iframe = document.getElementById("fileFrame");

  // Determine file type
  if (filePath.endsWith(".pdf")) {
    // Use PDF.js viewer or Google Docs
    iframe.src = `https://docs.google.com/gview?url=${window.location.origin}/${filePath}&embedded=true`;
  } else if (filePath.endsWith(".doc") || filePath.endsWith(".docx")) {
    // Use Office online viewer
    iframe.src = `https://view.officeapps.live.com/op/embed.aspx?src=${window.location.origin}/${filePath}`;
  } else {
    // Image files
    iframe.src = filePath;
  }

  modal.style.display = "flex";
}

function closeViewer() {
  const modal = document.getElementById("fileModal");
  const iframe = document.getElementById("fileFrame");
  iframe.src = ""; // Clear src to stop loading
  modal.style.display = "none";
}

// Close modal on background click
document.getElementById("fileModal").addEventListener("click", function(e) {
  if (e.target === this) closeViewer();
});

//kuona
let currentIndex = 0;
const images = document.querySelectorAll('.gallery-images img');
const modal = document.getElementById('gallery-modal');
const modalImg = document.getElementById('gallery-modal-img');
const caption = document.getElementById('gallery-caption');

function openGallery(index) {
  currentIndex = index;
  modal.style.display = 'flex'; // Force display before adding fade
  setTimeout(() => {
    modal.classList.add('active'); // Trigger fade-in
  }, 10);
  document.body.style.overflow = 'hidden'; // Prevent scroll
  updateImage();
}

function closeGallery() {
  modal.classList.remove('active'); // Start fade-out
  document.body.style.overflow = ''; // Restore scroll
  setTimeout(() => {
    modal.style.display = 'none'; // Fully hide after fade-out
  }, 300);
}



function changeImage(n) {
  currentIndex += n;
  if (currentIndex < 0) currentIndex = images.length - 1;
  if (currentIndex >= images.length) currentIndex = 0;
  updateImage();
}

function updateImage() {
  modalImg.src = images[currentIndex].src;
  caption.innerText = images[currentIndex].alt;
}

// Keyboard Navigation
document.addEventListener('keydown', function(e) {
  if (modal.style.display === 'flex') {
    if (e.key === 'ArrowRight') changeImage(1);
    if (e.key === 'ArrowLeft') changeImage(-1);
    if (e.key === 'Escape') closeGallery();
  }
});




// Swipe Support
let startX = 0;
modal.addEventListener('touchstart', function(e) {
  startX = e.touches[0].clientX;
});
modal.addEventListener('touchend', function(e) {
  let endX = e.changedTouches[0].clientX;
  if (startX - endX > 50) changeImage(1);   // Swipe Left → Next
  if (endX - startX > 50) changeImage(-1); // Swipe Right → Prev
});


  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('nav ul');
  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
  });

