const player = document.querySelector('.player');
const volume = document.querySelector('.volume');
const video = document.querySelector('.video');

// Video Control Toggle
player.addEventListener('click', () => {
   if (!player.classList.contains('switch')) {
      player.classList.add('switch');
      video.pause();
   } else {
      player.classList.remove('switch');
      video.play();
   }
});

// Volume Control Toggle
// volume.addEventListener("click", () => {
//    if (!volume.classList.contains("switch")) {
//       volume.classList.add("switch");
//       video.muted = false;
//    } else {
//       volume.classList.remove("switch");
//       video.muted = true;
//    }
// });
