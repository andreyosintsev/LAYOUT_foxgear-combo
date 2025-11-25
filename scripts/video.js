document.addEventListener("DOMContentLoaded", () => {
    console.log("video.js loaded");

    const videos = document.querySelectorAll(".video__player");
    console.log("videos found:", videos.length);

    videos.forEach((video) => {
        video.addEventListener("click", () => {
            if (video.paused) {
                playVideo(video);
            } else {
                pauseVideo(video);
            }
        });
    });

    function playVideo(video) {
        videos.forEach((video) => pauseVideo(video));
        video.play();
    }

    function pauseVideo(video) {
        video.pause();
        video.currentTime = 0;
    }
});
