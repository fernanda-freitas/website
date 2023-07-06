import 'https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js';
import '../style.css'
import './routes'

const title1 = document.querySelector('[data-id="title1"]');
const title2 = document.querySelector('[data-id="title2"]')
const title3 = document.querySelector('[data-id="title3"]')
const projectsHighlight = document.querySelector('[data-id="highlight-projects__items"]')
const projectsHighlightSmall = document.querySelector('[data-id="highlight-info__items-small"]')
// const projects = document.querySelector('[data-id="project-section"]')
const projects = document.querySelector('[data-id="work-section"]')
const ctaButton = document.querySelector('.btn-cta')
const logotype = document.querySelector('.logotype')

const heroScrollTimeline = new ScrollTimeline({
  scrollOffsets: [CSS.vh(0), CSS.vh(100)]
});

const stackScrollTimeline = new ScrollTimeline({
  scrollOffsets: [
    { target: title3, edge: "end", threshold: "1" },
    { target: title3, edge: "start", threshold: "1" }
  ]
});

const projectsHighlightTimeline = new ScrollTimeline({
  scrollOffsets: [
    { target: projectsHighlight, edge: "end", threshold: "0" },
    { target: projectsHighlight, edge: "start", threshold: "0" }
  ]
});


title1.animate(
  { transform: ['translateX(0px)', 'translateX(1200px)'] },
  { duration: 1, timeline: heroScrollTimeline, easing: 'ease-in-out' }
);

title2.animate(
  { transform: ['translateX(0px)', 'translateX(-2000px)'] },
  { duration: 1, timeline: heroScrollTimeline, easing: 'ease-in-out' }
);

title3.animate(
  { transform: ['translateY(80px)', 'translateY(-80px)'] },
  { duration: 1, timeline: stackScrollTimeline, easing: 'ease-in-out' }
);

projectsHighlight.animate(
  { transform: ['translate3d(900px, 0px, 0px)', 'translate3d(-157.253px, 0px, 0px)'] },
  { duration: 1, timeline: projectsHighlightTimeline, easing: 'ease-in-out' }
)

projectsHighlightSmall.animate(
  { transform: ['translate3d(-500px, 0px, 0px)', 'translate3d(0px, 0px, 0px)'] },
  { duration: 1, timeline: projectsHighlightTimeline, easing: 'ease-in-out' }
)

projects.addEventListener('wheel', (e) => {
  const scrollWidth = projects.scrollWidth
  const scrollClientWidth = projects.clientWidth
  const scrollLeft = projects.scrollLeft
  
  const isAtStart = scrollLeft === 0
  const isAtEnd = scrollLeft + scrollClientWidth === scrollWidth
  
  if ((e.deltaY < 0 && isAtStart) || (e.deltaY > 0 && isAtEnd)) {
    return;
  }
  e.preventDefault()
  projects.scrollLeft += e.deltaY
})

window.addEventListener('scroll', () => {
  if (window.scrollY > window.visualViewport.height) {
    ctaButton.classList.add('light')
    logotype.src = "./assets/images/logotype-light.svg"
  } else {
    ctaButton.classList.remove('light')
    logotype.src = "website/assets/images/logotype.svg"
  }
})