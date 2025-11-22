document.addEventListener('DOMContentLoaded', () => {
    console.log('video.js loaded');

    const videos = document.querySelectorAll('.video__player');

    console.log('videos:', videos);

    videos.forEach(video => {
      video.addEventListener('click', () => {
        if (video.paused) {
          video.play();
        } else {
          video.pause();
          video.currentTime = 0;
        }
      });
    });
});
