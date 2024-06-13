import{S as p,i as c}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function d(l){const{key:r,q:s,image_type:i,orientation:e,safesearch:t,per_page:o}=l;return fetch(`https://pixabay.com/api/?key=${r}&q=${s}&image_type${i}&orientation=${e}&safesearch=${t}&per_page=${o}`).then(n=>{if(!n.ok)throw new Error(n.status);return n.json()})}const a=document.querySelector("#list-js");function m(l){const r=l.hits.map(i=>`<li class="list__item">
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
  </li>`).join("");a.insertAdjacentHTML("beforeend",r),new p(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}const f={key:"44329356-b9318945d135833e2eb07a97b",q:"",image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:9},u=document.querySelector(".form_js");document.querySelector(".form__button");document.querySelector("#loader");u.addEventListener("submit",_);function _(l){l.preventDefault();const r=l.target[0].value;f.q=r,d(f).then(s=>{s.hits.length===0?(a.innerHTML="",c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})):(a.childElementCount>0&&(a.innerHTML=""),m(s))}).catch(s=>{c.error({title:`${s}`,message:"Page not found"})}),u.reset()}
//# sourceMappingURL=commonHelpers.js.map
