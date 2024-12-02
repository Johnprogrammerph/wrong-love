// Get modal elements
const popupButton = document.getElementById('show-popup');
const popupModal = document.getElementById('popup-modal');
const closeButton = document.querySelector('.close');

// Show the modal
popupButton.addEventListener('click', () => {
  popupModal.style.display = 'block';
});

// Close the modal when clicking on 'x'
closeButton.addEventListener('click', () => {
  popupModal.style.display = 'none';
});

// Close the modal when clicking outside of it
window.addEventListener('click', (event) => {
  if (event.target === popupModal) {
    popupModal.style.display = 'none';
  }
});


// Ensure autoplay works for the audio element
window.addEventListener('load', () => {
    const audio = document.getElementById('audio-player');
    audio.play().catch((error) => {
      console.log('Autoplay was blocked by the browser, user interaction required.');
    });
  });
  