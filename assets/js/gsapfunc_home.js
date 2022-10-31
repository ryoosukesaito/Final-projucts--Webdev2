

const cards = [...document.querySelectorAll('#main-card')];


const tlHome = gsap.timeline({
  defaults:{
    autoAlpha:0,

  },
  paused:true,

  scrollTrigger: {
    trigger: "#main",
    start: "top 90%",
    end:"bottom 65%",
    // scrub: 3,
    // markers:true,
  },
});

  tlHome.from( cards, {
    opacity: 0,
    x:300,
    stagger:0.5,
    duration:1.3,
    autoAlpha:1,
  })

const spanWrapText = (target) => {
  const nodes = [...target.childNodes];
  let returnText = '';

  for(const node of nodes) {
    if (node.nodeType === 3) {
      const text = node.textContent.replace(/\r?\n/g, '');
      const splitText = text.split('');

      for (const char of splitText) {
        returnText += `<span>${char}</span>`;
      }
    }else{
      returnText += node.outerHTML;
    }
  }
  return returnText;
}

const textContents1 = [...document.querySelectorAll('.wrapper')];
const textContents2 = [...document.querySelectorAll('.wrapper-text')];

for(const textContent1 of textContents1) {
  textContent1.innerHTML = spanWrapText(textContent1);
  textContent1.spans = textContent1.querySelectorAll('span');

};

for(const textContent2 of textContents2) {
  textContent2.innerHTML = spanWrapText(textContent2);
  textContent2.spans = textContent2.querySelectorAll('span');

};

const tlText = gsap.timeline({
  defaults: {
    autoAlpha:0 ,
  },

  scrollTrigger: {
    trigger:"#main",
    start: "center 55%",
    // markers:true,
  },

});

tlText
.from( textContents1.spans, {
  opacity:0,
  duration:0.01,
  stagger:0.03
})
.from( textContents2.spans, {
  opacity:0,
  duration:0.01,
  stagger:0.03
})


