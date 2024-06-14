import{S as d,i as n}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function t(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(e){if(e.ep)return;e.ep=!0;const i=t(e);fetch(e.href,i)}})();function f(s){const{key:r,q:t,image_type:l,orientation:e,safesearch:i,per_page:o}=s;return fetch(`https://pixabay.com/api/?key=${r}&q=${t}&image_type${l}&orientation=${e}&safesearch=${i}&per_page=${o}`).then(a=>{if(!a.ok)throw new Error(a.status);return document.querySelector(".form__button").classList.remove("form__button-active"),document.querySelector(".form__button").disabled=!1,document.querySelector(".form__input").disabled=!1,document.querySelector("#loader").classList.remove("loader"),a.json()})}const m=document.querySelector("#list-js");function _(s){console.dir(s);const r=s.hits.map(t=>`<li class="list__item">
                <div class="gallery">
          <a href="${t.webformatURL}"><img class="list__img" src="${t.webformatURL}" alt="${t.id}"</a>
      </div>
    <ul class="item__list">
      <li class="item__list-item">
        <h3 class="item__list-title">Likes</h3>
        <p class="item__list-text">${t.likes}</p>
      </li>
      <li class="item__list-item">
        <h3 class="item__list-title">Views</h3>
        <p class="item__list-text">${t.views}</p>
      </li>
      <li class="item__list-item">
        <h3 class="item__list-title">Comments</h3>
        <p class="item__list-text">${t.comments}</p>
      </li>
      <li class="item__list-item">
        <h3 class="item__list-title">Downloads</h3>
        <p class="item__list-text">${t.downloads}</p>
      </li>
    </ul>
  </li>`).join("");m.insertAdjacentHTML("beforeend",r),new d(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}const c={key:"44329356-b9318945d135833e2eb07a97b",q:"",image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:30},u=document.querySelector(".form_js");u.addEventListener("submit",p);function p(s){s.preventDefault(),document.querySelector("#loader").classList.add("loader"),document.querySelector(".form__button").classList.add("form__button-active"),document.querySelector(".form__input").disabled=!0,document.querySelector(".form__button").disabled=!0,m.innerHTML="";const r=s.target[0].value;c.q=r,setTimeout(()=>{f(c).then(t=>{t.hits.length===0?n.error({position:"topRight",title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}):_(t)}).catch(t=>{n.error({title:`${t}`,message:"Page not found",position:"topRight"})})},1e3),u.reset()}
//# sourceMappingURL=commonHelpers.js.map
