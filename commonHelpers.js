import{i as a}from"./assets/vendor-ad859c2f.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();function m(r){return fetch(`https://pixabay.com/api/?key=${o.key}&q=${o.q}&image_type${o.image_type}&orientation=${o.orientation}&safesearch=${o.safesearch}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(t=>t)}const o={key:"44329356-b9318945d135833e2eb07a97b",q:"",image_type:"photo",orientation:"horizontal",safesearch:!0},u=document.querySelector(".list"),c=document.querySelector(".form_js");c.addEventListener("submit",f);function f(r){r.preventDefault();const t=r.target[0].value;o.q=t,m().then(i=>{i.hits.length===0&&a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),d(i)}).catch(i=>{}),c.reset()}function d(r){console.log(r);const t=r.hits.map(i=>(console.log(i),`<li class="list__item">
    <img class="list__img" src="${i.pageURL}" alt="${i.id}" />
    <ul class="item__list">
      <li class="item__list-item">
        <h3 class="item__list-title">Likes</h3>
        <p class="item__list-text">${likes}</p>
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
  </li>`)).join("");console.log(t),u.insertAdjacentHTML("beforeend",t)}
//# sourceMappingURL=commonHelpers.js.map
