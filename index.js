// let typed = new Typed('.typedText', {
//     Strings : ['Front-End Developer... ', 'Web-Developer...', 'Search Engine Optimization', 'UI & UX...'],
// typedSpeed: 100,
// backSpeed: 50,
// backDelay:1000,
// loop: true,

// });

var typed = new Typed(".auto",{
    strings: ["Front-End Developer...", "Web-Developer...", "Search Engine Optimization", "UI & UX..."],
    typedSpeed: 100,
    backSpeed: 100,
    backDelay:1000,
    loop: true
})


// here we write code of light theme mood.
let moon = document.querySelector('.moon');
let sun = document.querySelector('.sun');

moon.addEventListener('click',()=>{
     sun.style.display= 'inline-block'
     moon.style.display='none'
     document.querySelector('body').classList.add('nightMood')
});

sun.addEventListener('click',()=>{
     sun.style.display= 'none'
     moon.style.display='inline-block'
     document.querySelector('body').classList.remove('nightMood')
});
