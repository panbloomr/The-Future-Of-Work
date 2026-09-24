const video = document.querySelector('#background-video');
const media = document.querySelector('.hero-media');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

function showPoster() {
  media.classList.remove('is-playing');
}

async function playVideo() {
  if (reducedMotion.matches) {
    video.pause();
    showPoster();
    return;
  }

  video.muted = true;

  try {
    await video.play();
  } catch {
    // Keep the original still visible when autoplay or loading is blocked.
    showPoster();
  }
}

video.addEventListener('playing', () => {
  if (!reducedMotion.matches) media.classList.add('is-playing');
});
video.addEventListener('error', showPoster);
reducedMotion.addEventListener('change', playVideo);

playVideo();
