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
    x.style.cssText = "width: 363px;background: #fff;border: 2px solid #2f80edbf ;-webkit-filter: grayscale(0);filter: grayscale(0);opacity: initial;"
}
function disableSelection() {
    planArray.forEach(deck => {
        deck.style.cssText = "width: 335px;background: #fff;border: 1px solid #2f80ed70;-webkit-filter: grayscale(0);filter: grayscale(0);opacity: initial;"

    })
}

// ********
// function replaceHeroOrder() {
//     console.log('here im ');
//     let herocontainer = document.querySelector('.hero-header');
//     let headercontainer = document.querySelector('.header-container');
//     let newOne = document.querySelector('.newOne');

//     if (window.screen.width <= 600) {
//         newOne.parentNode.replaceChild(herocontainer, newOne);
//         console.log(newOne);
//     }
//     else {
//         headercontainerss.replaceChild(newOne, headercontainer);
//     }
// }

// window.onresize = replaceHeroOrder;