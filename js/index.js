let video_img = document.querySelector('.videoImg');
let videoSection = document.querySelector('.videoSection');

let videoFrame = document.createElement('iframe');
videoFrame.src = "http://www.youtube.com/embed/y8Yv4pnO7qc?autoplay=1&rel=0";
// videoFrame.src = "https://www.youtube.com/embed/y8Yv4pnO7qc";
videoFrame.allow = "autoplay";
if (window.chrome) {
    videoFrame.src += "&mute=1";
}

let videoWrapper = document.createElement('div');
videoWrapper.classList.add('videoWrapper');


function hiddenImg() {
    video_img.style = 'display: none '
}



function playVideo() {
    videoSection.appendChild(videoWrapper);
    videoWrapper.appendChild(videoFrame);
    hiddenImg();
}

// video_img.addEventListener("click", playVideo);