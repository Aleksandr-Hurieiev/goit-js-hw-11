import{S as d,i as n}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();function _(i){const{key:s,q:t,image_type:l,orientation:e,safesearch:r,per_page:o}=i;return fetch(`https://pixabay.com/api/?key=${s}&q=${t}&image_type${l}&orientation=${e}&safesearch=${r}&per_page=${o}`).then(a=>{if(!a.ok)throw new Error(a.status);return a.json()})}const f=document.querySelector("#list-js");let h=new d(".gallery a",{captionsData:"alt",captionDelay:250});function g(i){console.dir(i);const s=i.hits.map(t=>`<li class="list__item">
                <div class="gallery">
          <a href="${t.webformatURL}"><img class="list__img" src="${t.webformatURL}" alt="${t.user}"</a>
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
  </li>`).join("");f.insertAdjacentHTML("beforeend",s),h.refresh()}const c={key:"44329356-b9318945d135833e2eb07a97b",q:"",image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:30},p=document.querySelector(".form_js"),y=document.querySelector("#loader"),m=document.querySelector(".form__button"),b=document.querySelector(".form__input");p.addEventListener("submit",$);function $(i){i.preventDefault(),f.innerHTML="";const s=i.target[0].value.trim();if(!s)return i.target[0].value="",n.warning({title:"Warning",message:"Enter more than one character",position:"topRight"});c.q=s,u(!0),setTimeout(()=>{_(c).then(t=>{t.hits.length?g(t):n.error({position:"topRight",title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})}).catch(t=>{n.error({title:`${t}`,message:"Page not found",position:"topRight"})}).finally(()=>{u(!1)})},1e3),p.reset()}function u(i){y.classList.toggle("loader",i),m.classList.toggle("form__button-active",i),b.disabled=i,m.disabled=i}
//# sourceMappingURL=commonHelpers.js.map
