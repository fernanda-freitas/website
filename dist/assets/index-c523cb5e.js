import"https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const l of e.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function i(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function o(t){if(t.ep)return;t.ep=!0;const e=i(t);fetch(t.href,e)}})();const p={"/":{template:"index.html"},"#construir":{template:"/construir.html"}},u=async()=>{var n=window.location.hash;n.length==0&&(n="/");const r=p[n],i=await fetch(r.template).then(o=>o.text());document.getElementById("page-content").innerHTML=i};window.addEventListener("hashchange",u);u();const f=document.querySelector('[data-id="title1"]'),g=document.querySelector('[data-id="title2"]'),a=document.querySelector('[data-id="title3"]'),c=document.querySelector('[data-id="highlight-projects__items"]'),x=document.querySelector('[data-id="highlight-info__items-small"]'),s=document.querySelector('[data-id="project-section"]'),d=document.querySelector(".btn-cta"),m=new ScrollTimeline({scrollOffsets:[CSS.vh(0),CSS.vh(100)]}),y=new ScrollTimeline({scrollOffsets:[{target:a,edge:"end",threshold:"1"},{target:a,edge:"start",threshold:"1"}]}),h=new ScrollTimeline({scrollOffsets:[{target:c,edge:"end",threshold:"0"},{target:c,edge:"start",threshold:"0"}]});f.animate({transform:["translateX(0px)","translateX(1200px)"]},{duration:1,timeline:m,easing:"ease-in-out"});g.animate({transform:["translateX(0px)","translateX(-2000px)"]},{duration:1,timeline:m,easing:"ease-in-out"});a.animate({transform:["translateY(200px)","translateY(-80px)"]},{duration:1,timeline:y,easing:"ease-in-out"});c.animate({transform:["translate3d(900px, 0px, 0px)","translate3d(-157.253px, 0px, 0px)"]},{duration:1,timeline:h,easing:"ease-in-out"});x.animate({transform:["translate3d(-500px, 0px, 0px)","translate3d(0px, 0px, 0px)"]},{duration:1,timeline:h,easing:"ease-in-out"});s.addEventListener("wheel",n=>{const r=s.scrollWidth,i=s.clientWidth,o=s.scrollLeft,t=o===0,e=o+i===r;n.deltaY<0&&t||n.deltaY>0&&e||(n.preventDefault(),s.scrollLeft+=n.deltaY)});window.addEventListener("scroll",()=>{window.scrollY>window.visualViewport.height?d.classList.add("light"):d.classList.remove("light")});
