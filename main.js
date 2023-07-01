import './style.css'
import 'https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js';

const title1 = document.querySelector('[data-id="title1"]');
const title2 = document.querySelector('[data-id="title2"]')
const title3 = document.querySelector('[data-id="title3"]')
const projects = document.querySelector('[data-id="project-section"]')
const ctaButton = document.querySelector('.btn-cta')

const heroScrollTimeline = new ScrollTimeline({
  scrollOffsets: [CSS.vh(0), CSS.vh(100)]
});

const stackScrollTimeline = new ScrollTimeline({
  scrollOffsets: [
    { target: title3, edge: "end", threshold: "1" },
    { target: title3, edge: "start", threshold: "1" }
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
  { transform: ['translateY(180px)', 'translateY(-100px)'] },
  { duration: 1, timeline: stackScrollTimeline, easing: 'ease-in-out' }
);

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
  } else {
    ctaButton.classList.remove('light')
  }
})