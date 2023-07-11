import 'https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js';
import '../style.css'
import './routes'

const title1 = document.querySelector('[data-id="title1"]');
const title2 = document.querySelector('[data-id="title2"]')
const title3 = document.querySelector('[data-id="title3"]')
const projectsHighlight = document.querySelector('[data-id="highlight-projects__items"]')
const projectsHighlightSmall = document.querySelector('[data-id="highlight-info__items-small"]')
const ctaButton = document.querySelector('.btn-cta')
const logotypeDark = document.querySelector('.logotype')
const logotypeLight = document.querySelector('.logotype-light')
const stackSection = document.querySelector('.stack-section')
const stackSectionArea = stackSection.getBoundingClientRect()

const heroScrollTimeline = new ScrollTimeline({
  scrollOffsets: [
    {target: [title1, title2], edge: "start", threshold: "100"}
  ]
});

const stackScrollTimeline = new ScrollTimeline({
  scrollOffsets: [
    { target: title3, edge: "end", threshold: "1" },
    { target: title3, edge: "start", threshold: "1" }
  ]
});

const projectsHighlightTimeline = new ScrollTimeline({
  scrollOffsets: [
    { target: projectsHighlight, edge: "start", threshold: "0" },
    { target: projectsHighlight, edge: "start", threshold: "100" }
  ]
});


title1.animate(
  { transform: ['translateX(0rem)', 'translateX(-1000rem)'] },
  { duration: 1, timeline: heroScrollTimeline, easing: 'ease-in-out' }
);

title2.animate(
  { transform: ['translateX(0rem)', 'translateX(1000rem)'] },
  { duration: 1, timeline: heroScrollTimeline, easing: 'ease-in-out' }
);

title3.animate(
  { transform: ['translateY(12rem)', 'translateY(-100rem)'] },
  { duration: 1, timeline: stackScrollTimeline, easing: 'ease-in-out' }
);

projectsHighlight.animate(
  // { transform: ['translate3d(900px, 0px, 0px)', 'translate3d(-157.253px, 0px, 0px)'] },
  { transform: ['translateX(0rem)', 'translateX(-40rem)'] },
  { duration: 1, timeline: projectsHighlightTimeline, easing: 'ease-in-out' }
)

projectsHighlightSmall.animate(
  { transform: ['translate3d(-500px, 0px, 0px)', 'translate3d(0px, 0px, 0px)'] },
  { duration: 1, timeline: projectsHighlightTimeline, easing: 'ease-in-out' }
)

if (location.pathname === "/website/") {
  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY
  
    if (scrollPosition < stackSectionArea.top) {
      logotypeDark.classList.add("show")
      logotypeDark.classList.remove("hide")
      logotypeLight.classList.add("hide")
      logotypeLight.classList.remove("show")
      ctaButton.classList.remove('light')
    } else if (scrollPosition >= stackSectionArea.top && scrollPosition <= stackSectionArea.bottom) {
      logotypeDark.classList.add("hide")
      logotypeDark.classList.remove("show")
      logotypeLight.classList.add("show")
      logotypeLight.classList.remove("hide")
      ctaButton.classList.add('light')
    } else if (scrollPosition > stackSectionArea.bottom) {
      logotypeDark.classList.add("show")
      logotypeDark.classList.remove("hide")
      logotypeLight.classList.add("hide")
      logotypeLight.classList.remove("show")
      ctaButton.classList.remove('light')
    }
  })
}

const body = document.body
const speed = 0.4
let offset = 2

function smoothScroll() {
  offset += (window.getBoundingClientRect - offset) * speed
  var scroll = `translateY(-${offset}px) translateZ(0)`
  body.style.transform = scroll
  requestAnimationFrame(smoothScroll)
}
smoothScroll()
