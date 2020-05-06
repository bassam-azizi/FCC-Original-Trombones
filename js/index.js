// let video_img = document.querySelector('.videoImg');
// let videoSection = document.querySelector('.videoSection');

// let videoFrame = document.createElement('iframe');
// videoFrame.src = "http://www.youtube.com/embed/y8Yv4pnO7qc?autoplay=1&rel=0";
// // videoFrame.src = "https://www.youtube.com/embed/y8Yv4pnO7qc";
// videoFrame.allow = "autoplay";
// if (window.chrome) {
//     videoFrame.src += "&mute=1";
// }

// let videoWrapper = document.createElement('div');
// videoWrapper.classList.add('videoWrapper');


// function hiddenImg() {
//     video_img.style = 'display: none '
// }


// // Video auto play when the image is clicked
// function playVideo() {
//     videoSection.appendChild(videoWrapper);
//     videoWrapper.appendChild(videoFrame);
//     hiddenImg();
// }

// event listener on hover of plans
let plan = document.querySelectorAll('.pDeck')
let planArray = Array.from(plan);

function activeSelection(x) {
    planArray.forEach(deck => {
        deck.style.cssText = "background: #e2e2e222;fitler:grayscale(1);-webkit-filter:grayscale(1);opacity:0.5;width:320px;transform:scale(1)";
    })
    x.style.cssText = "width: 365px;background: #fff;box-shadow: 0 0 0 3px #2f80ed70;-webkit-filter: grayscale(0);filter: grayscale(0);opacity: initial;"
}
function disableSelection() {
    planArray.forEach(deck => {
        deck.style.cssText = "width: 335px;background: #fff;box-shadow: 0 0 0 0 ;-webkit-filter: grayscale(0);filter: grayscale(0);opacity: initial;"

    })
}