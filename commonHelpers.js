import{S as c,i as l}from"./assets/vendor-0fc460d7.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();function d(i){const o="https://pixabay.com",t="/api/",s=new URLSearchParams({key:"44411867-7607aa296582669a38968dfd5",q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${o}${t}?${s}`;return fetch(e).then(r=>r.json())}function u(i){const o=i.map(t=>`<li class="gallery-item"
      <a class="gallery-link" href="${t.largeImageURL}">
    <img
      width=360;
      height=200;
      class="gallery-image"
      src="${t.webformatURL}"
      alt="${t.tags} " />
          <div class="image-info">
               <p>LIKES: ${t.likes}</p>
                    <p>VIEWS: ${t.views}</p>
                    <p>COMMENTS: ${t.comments}</p>
                    <p>DOWNLOADS: ${t.downloads}</p>
                </div>
            </a>
            </li>
        `).join("");n.gallery.innerHTML=o,f.refresh()}const f=new c(".gallery li",{captionsData:"alt",captionDelay:250});function p(){n.loader.classList.remove("hidden")}function m(){n.loader.classList.add("hidden")}const n={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")};n.form.addEventListener("submit",i=>{i.preventDefault();const o=i.target.elements.search.value.trim();if(o==="")return l.warning({title:"warning",message:"Enter a word for the query, please.",position:"topRight",displayMode:"once"});p();const t=d(o);t.then(s=>{s.hits.length===0&&l.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",displayMode:"once"}),u(s.hits)}),t.catch(s=>{}),t.finally(()=>{m(),n.form.reset()})});
//# sourceMappingURL=commonHelpers.js.map
