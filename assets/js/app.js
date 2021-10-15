const intro = document.querySelector('.intro');
const video = intro.querySelector('video');
const text1 = intro.querySelector('a');
const text2 = intro.querySelector('ul');



//END SECTION
// const section = document.querySelector('section');
// const end = section.querySelector('h1');

//SCROLL MAGIC
const controller = new ScrollMagic.Controller();

let scene = new ScrollMagic.Scene({
    duration: 3000,
    triggerElement: intro,
    triggerHook: 0,
})
    .setPin(intro)
    .addTo(controller);

//VIDEO ANIMATION
let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on('update', e => {
    scrollpos = e.scrollPos / 1000;
    // video.currentTime = scrollpos;
});



setInterval(() => {
    delay += (scrollpos - delay) * accelamount;
    console.log(scrollpos, delay);

    video.currentTime = delay;
}, 33.3);


//TEXT ANIMATION
const text1Anim = TweenMax.fromTo(text1, 3, { opacity: 1 }, { opacity: 0 });

let scene2 = new ScrollMagic.Scene({
    duration: 3000,
    triggerElement: intro,
    triggerHook: 0,
})
.setTween(text1Anim)
.addTo(controller)


//TEXT ANIMATION
const text2Anim = TweenMax.fromTo(text2, 3, { opacity: 1 }, { opacity: 0 });

let scene3 = new ScrollMagic.Scene({
    duration: 3000,
    triggerElement: intro,
    triggerHook: 0,
})
.setTween(text2Anim)
.addTo(controller)



// GITHUB ANIMATION
const GH = document.querySelector('.github_pane');

const ghAnim = TweenMax.fromTo(GH, 3, { opacity: 0 }, { opacity: 1 });

let sceneGH = new ScrollMagic.Scene({
    duration: 1000,
    triggerElement: GH,
    triggerHook: 0,
})
.setTween(ghAnim)
.addTo(controller)
.setPin(GH)



// const textCV = document.querySelector('h1')

// //TEXT ANIMATION
// const textCVAnim = TweenMax.fromTo(textCV, 3, { opacity: 0 }, { opacity: 1 });

// let sceneCV = new ScrollMagic.Scene({
//     duration: 500,
//     triggerElement: textCV,
//     triggerHook: 0.7,
// })
// .setTween(textCVAnim)
// .addTo(controller)


// const textPD = document.querySelector('.PD')

// //TEXT ANIMATION
// const textPDAnim = TweenMax.fromTo(textPD, 3, { opacity: 0 }, { opacity: 1 });

// let scenePD = new ScrollMagic.Scene({
//     duration: 500,
//     triggerElement: textPD,
//     triggerHook: 0.7,
// })
// .setTween(textPDAnim)
// .addTo(controller)

// const textSB = document.querySelector('.SB')

// //TEXT ANIMATION
// const textSBAnim = TweenMax.fromTo(textSB, 3, { opacity: 0 }, { opacity: 1 });

// let sceneSB = new ScrollMagic.Scene({
//     duration: 500,
//     triggerElement: textSB,
//     triggerHook: 0.7,
// })
// .setTween(textSBAnim)
// .addTo(controller)


// const textSK = document.querySelector('.SK')

// //TEXT ANIMATION
// const textSKAnim = TweenMax.fromTo(textSK, 3, { opacity: 0 }, { opacity: 1 });

// let sceneSK = new ScrollMagic.Scene({
//     duration: 500,
//     triggerElement: textSK,
//     triggerHook: 0.7,
// })
// .setTween(textSKAnim)
// .addTo(controller)

// const textBE = document.querySelector('.BE')

// //TEXT ANIMATION
// const textBEAnim = TweenMax.fromTo(textBE, 3, { opacity: 0 }, { opacity: 1 });

// let sceneBE = new ScrollMagic.Scene({
//     duration: 500,
//     triggerElement: textBE,
//     triggerHook: 0.7,
// })
// .setTween(textBEAnim)
// .addTo(controller)



// const textBF = document.querySelector('.BF')

// //TEXT ANIMATION
// const textBFAnim = TweenMax.fromTo(textBF, 3, { opacity: 0 }, { opacity: 1 });

// let sceneBF = new ScrollMagic.Scene({
//     duration: 500,
//     triggerElement: textBF,
//     triggerHook: 0.7,
// })
// .setTween(textBFAnim)
// .addTo(controller)


// const textAK = document.querySelector('.AK')

// //TEXT ANIMATION
// const textAKAnim = TweenMax.fromTo(textAK, 3, { opacity: 0 }, { opacity: 1 });

// let sceneAK = new ScrollMagic.Scene({
//     duration: 300,
//     triggerElement: textAK,
//     triggerHook: 0.8,
// })
// .setTween(textAKAnim)
// .addTo(controller)


// const textBK = document.querySelector('.BK')

// //TEXT ANIMATION
// const textBKAnim = TweenMax.fromTo(textBK, 3, { opacity: 0 }, { opacity: 1 });

// let sceneBK = new ScrollMagic.Scene({
//     duration: 300,
//     triggerElement: textBK,
//     triggerHook: 1,
// })
// .setTween(textBKAnim)
// .addTo(controller)


const CS50 = document.querySelector('.CERTIFICATES')

//IMAGE ANIMATION
const imgCS50Anim = TweenMax.fromTo(CS50, 3, { opacity: 0 }, { opacity: 1 });

let sceneCS50 = new ScrollMagic.Scene({
    duration: 500,
    triggerElement: CS50,
    triggerHook: 0,
})
.setTween(imgCS50Anim)
.addTo(controller)
.setPin(CS50)
