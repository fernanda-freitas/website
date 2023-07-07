import"https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))m(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&m(l)}).observe(document,{childList:!0,subtree:!0});function p(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function m(e){if(e.ep)return;e.ep=!0;const t=p(e);fetch(e.href,t)}})();const g=document.querySelector('[data-id="title1"]'),f=document.querySelector('[data-id="title2"]'),c=document.querySelector('[data-id="title3"]'),d=document.querySelector('[data-id="highlight-projects__items"]'),y=document.querySelector('[data-id="highlight-info__items-small"]');document.querySelector('[data-id="work-section"]');const a=document.querySelector(".btn-cta"),s=document.querySelector(".logotype"),o=document.querySelector(".logotype-light"),S=document.querySelector(".stack-section"),r=S.getBoundingClientRect(),u=new ScrollTimeline({scrollOffsets:[CSS.vh(0),CSS.vh(100)]}),L=new ScrollTimeline({scrollOffsets:[{target:c,edge:"end",threshold:"1"},{target:c,edge:"start",threshold:"1"}]}),h=new ScrollTimeline({scrollOffsets:[{target:d,edge:"end",threshold:"0"},{target:d,edge:"start",threshold:"0"}]});g.animate({transform:["translateX(0px)","translateX(1200px)"]},{duration:1,timeline:u,easing:"ease-in-out"});f.animate({transform:["translateX(0px)","translateX(-2000px)"]},{duration:1,timeline:u,easing:"ease-in-out"});c.animate({transform:["translateY(80px)","translateY(-80px)"]},{duration:1,timeline:L,easing:"ease-in-out"});d.animate({transform:["translate3d(900px, 0px, 0px)","translate3d(-157.253px, 0px, 0px)"]},{duration:1,timeline:h,easing:"ease-in-out"});y.animate({transform:["translate3d(-500px, 0px, 0px)","translate3d(0px, 0px, 0px)"]},{duration:1,timeline:h,easing:"ease-in-out"});location.pathname==="/website"&&window.addEventListener("scroll",()=>{const i=window.scrollY;i<r.top?(s.classList.add("show"),s.classList.remove("hide"),o.classList.add("hide"),o.classList.remove("show"),a.classList.remove("light")):i>=r.top&&i<=r.bottom?(s.classList.add("hide"),s.classList.remove("show"),o.classList.add("show"),o.classList.remove("hide"),a.classList.add("light")):i>r.bottom&&(s.classList.add("show"),s.classList.remove("hide"),o.classList.add("hide"),o.classList.remove("show"),a.classList.remove("light"))});
