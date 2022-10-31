
const TimeLine = gsap.timeline({

    defaults:{
      autoAlpha:0,
      duration:0.8
    },
    paused:true

})

setTimeout(() => TimeLine.play(), 1000);


TimeLine
.from('#navbar',{opacity:0})
.from('.navbar-brand', {x:-100}, "<")
.from('#nav-item', {x:-20,duration:0.5, stagger:0.1})
.from('#head-wrapper', {y:-10})
.from('#header-text',{opacity:0,y:'10%',stagger:0.2,})
.from('#product-section',{y:20},'<')


// right menuAnimation

  
// navRight.create({
//   trigger: "#product-section",
//   pin: "#right-menu",
//   start: "top 40%",
//   end: "bottom bottom",
//   markers:true,
// }) 



// navMove.create({
//   trigger: "#header-wrapper",
//   start:"top 3%",
//   end: "bottom 30%",
//   scrub:true,
  
// })

gsap.from("#right-menu",{
  scrollTrigger: {
    trigger: "#product-section",
    start: "top 50%",
    end: "end 30%",
    scrub:3,
    autoAlpha:1,
    // markers:"ture",
  },
  y:"-500px",
  autoAlpha:0,

})

// ScrollTrigger.create({
//   trigger: "#product-section",
//   start: "top 50%",
//   end: "bottom 50%",
//   scrub:1,
//   autoAlpha:1,
//   markers:true,

//   onEnter: () => {
//     console.log('prevFuncA')
//     gsap.from("#right-menu",{
//       scrollTrigger: {
//         trigger: "#head-wrapper",
//         start: "center 3%",
//         end: "bottom 30%",
//         scrub:1,
//         autoAlpha:1,

//       },
//       y:"-500px",
//       autoAlpha:0,
      
//     })
//     console.log('Enter');
//   },


// })


const results = [...document.querySelectorAll('#products')];
for( const product of results ) {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: product,
      start:'top 90%',
      // markers:true,
    },

  });

  tl.from( product, {
    opacity:0,
    y:'10%',
    stagger:0.03,
    
  });
}


// gsap.to('#mid-nav',{
//   scrollTrigger: {
//     trigger:'#navmenu',
//     start:'bottom top',
//     end:'bottom top',
//     scrub:true,
//     autoAlpha:1,
//     markers:true,
//   },
//   // y: "-100%",
//   opacity:1,
// })