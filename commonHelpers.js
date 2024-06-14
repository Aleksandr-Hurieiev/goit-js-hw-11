import{S as d,i as n}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function f(o){const{key:r,q:s,image_type:i,orientation:e,safesearch:t,per_page:l}=o;return fetch(`https://pixabay.com/api/?key=${r}&q=${s}&image_type${i}&orientation=${e}&safesearch=${t}&per_page=${l}`).then(a=>{if(!a.ok)throw new Error(a.status);return document.querySelector(".form__button").classList.remove("form__button-active"),document.querySelector(".form__button").disabled=!1,document.querySelector(".form__input").disabled=!1,document.querySelector("#loader").classList.remove("loader"),a.json()})}const m=document.querySelector("#list-js");function _(o){console.dir(o);const r=o.hits.map(i=>`<li class="list__item">
                <div class="gallery">
          <a href="${i.webformatURL}"><img class="list__img" src="${i.webformatURL}" alt="${i.id}"</a>
      </div>
    <ul class="item__list">
      <li class="item__list-item">
        <h3 class="item__list-title">Likes</h3>
        <p class="item__list-text">${i.likes}</p>
      </li>
      <li class="item__list-item">
        <h3 class="item__list-title">Views</h3>
        <p class="item__list-text">${i.views}</p>
      </li>
      <li class="item__list-item">
        <h3 class="item__list-title">Comments</h3>
        <p class="item__list-text">${i.comments}</p>
      </li>
      <li class="item__list-item">
        <h3 class="item__list-title">Downloads</h3>
        <p class="item__list-text">${i.downloads}</p>
      </li>
    </ul>
  </li>`).join("");m.insertAdjacentHTML("beforeend",r),new d(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}const c={key:"44329356-b9318945d135833e2eb07a97b",q:"",image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:30},u=document.querySelector(".form_js");u.addEventListener("submit",p);function p(o){o.preventDefault(),document.querySelector("#loader").classList.add("loader"),document.querySelector(".form__button").classList.add("form__button-active"),document.querySelector(".form__input").disabled=!0,document.querySelector(".form__button").disabled=!0,m.innerHTML="";const r=o.target[0].value;c.q=r,setTimeout(()=>{f(c).then(s=>{s.hits.length===0?n.error({position:"topRight",title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}):_(s)}).catch(s=>{n.error({title:`${s}`,message:"Page not found",position:"topRight"})})},1e3),u.reset()}
//# sourceMappingURL=commonHelpers.js.map
