// Popup Modal
const modalOpen = document.querySelector('.modal-open');
const modalClose = document.querySelector('.modal-close');
const modalOverlay = document.querySelector('.modal-overlay');

// Opened Modal and Closed Modal
modalOpen.addEventListener('click', () => {
   modalOverlay.classList.add('active');
});

modalClose.addEventListener('click', () => {
   modalOverlay.classList.remove('active');
});

// Closed Modal by Clicking Outside
window.addEventListener('click', (e) => {
   if (e.target == modalOverlay) {
      modalOverlay.classList.remove('active');
   }
});

// Closed Modal by Clicking Escape
window.addEventListener('keyup', (e) => {
   if (e.key == 'Escape' && modalOverlay.classList.contains('active')) {
      modalOverlay.classList.remove('active');
   }
});
