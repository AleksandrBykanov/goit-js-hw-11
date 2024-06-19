import{S as l,i as c}from"./assets/vendor-0fc460d7.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();function d(s){const o="https://pixabay.com",a="/api/",t=new URLSearchParams({key:"44411867-7607aa296582669a38968dfd5",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${o}${a}?${t}`;return fetch(e).then(r=>r.json())}function u(s){const o=n.gallery,a=s.map(t=>`<a class="gallery-item" href="${t.largeImageURL}">
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
    </a>`).join("");o.innerHTML=a,new l(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}function f(){n.loader.classList.remove("hidden")}function m(){n.loader.classList.add("hidden")}const n={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")};n.form.addEventListener("submit",s=>{s.preventDefault();const o=s.target.elements.search.value;o===""&&(n.gallery.innerHTML=" ",c.warning({title:"warning",message:" Enter a word for the query, please.",position:"center",displayMode:"once",maxWidth:500,imageWidth:600})),f();const a=d(o);a.length!==0&&a.then(t=>u(t.hits)),a.catch(t=>{c.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",displayMode:"once",maxWidth:500,imageWidth:600})}),a.finally(()=>{m(),n.form.reset()})});
//# sourceMappingURL=commonHelpers.js.map
