import{i as u,a as b,S as v}from"./assets/vendor-DWXSRYDZ.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();window.global||(window.global=window);const w="https://pixabay.com/api/?",L="48318006-868fd1918e5aa19d98c3706e2",n=new URLSearchParams({key:L,q:"",image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40,page:1});let i=0;const P="Sorry, there are no images matching your search query.Please, try again!",m="We're sorry, but you've reached the end of search results",g=document.querySelector(".image-content"),d=document.querySelector(".loader"),p=document.querySelector(".load-more-button");function q(){let t=document.querySelector(".content-list-item").getBoundingClientRect();window.scrollBy({top:t.height*2,behavior:"smooth"})}function l(o,t){u.settings({timeout:5e3,transitionIn:"flipInX",transitionOut:"flipOutX"}),u.show({maxWidth:"350px",message:`${o}`,position:"topRight",backgroundColor:`${t}`})}function S(o){const t=o.hits.map(({webformatURL:r,largeImageURL:c,tags:e,likes:s,views:a,comments:y,downloads:h})=>`<li class="content-list-item">
            <div class="container-div">
                <a href="${c}">
                    <img src="${r}" alt="${e}" width="240" height="200">
                </a>
                <div class="content-bottom">
                    <div class="content-bottom-inner">
                        <p><b>Likes</b></p>
                        <p class="stats">${s}</p></div>
                    <div class="content-bottom-inner">
                        <p><b>Views</b></p>
                        <p class="stats">${a}</p></div>
                    <div class="content-bottom-inner">
                        <p><b>Comments</b></p>
                        <p class="stats">${y}</p></div>
                    <div class="content-bottom-inner">
                        <p><b>Downloads</b></p>
                        <p class="stats">${h}</p></div>
                </div> 
            </div> 
        </li>`).join("");g.innerHTML+=t,new v(".content-list-item a",{captionsData:"alt",captionDelay:250})}async function f(){try{const o=await b.get(w,{params:n});if(d.style.display="none",p.style.display="none",i=o.data.totalHits,i===0)l(P,"red");else{S(o.data);const t=Number(n.get("page")),r=Number(n.get("per_page"));t<Math.ceil(i/r)&&(p.style.display="block"),Math.ceil(i/r)===1&&l(m,"aqua")}}catch(o){d.style.display="none",l(o,"purple")}}const M=document.querySelector(".search-form"),$=document.querySelector(".search-input");M.addEventListener("submit",o=>{o.preventDefault(),n.set("q",$.value),n.set("page","1"),g.innerHTML="",d.style.display="flex",f()});p.addEventListener("click",async o=>{let t=Number(n.get("page")),r=n.get("per_page");n.set("page",t+1),await f(),q(),t+1>=Math.ceil(i/r)&&(l(m,"aqua"),p.style.display="none")});
//# sourceMappingURL=index.js.map
