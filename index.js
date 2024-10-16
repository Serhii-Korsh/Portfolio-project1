import{A as I,a as _,i as q,S as $,N as D,K as N}from"./assets/vendor-DR3QWmmZ.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))t(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&t(c)}).observe(document,{childList:!0,subtree:!0});function r(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(o){if(o.ep)return;o.ep=!0;const n=r(o);fetch(o.href,n)}})();const v=document.getElementById("btn-header");document.getElementById("header-mob-span");let x=!1;v.addEventListener("click",()=>{x=!x;const e=document.documentElement,s=document.querySelector(".rectangle"),r=document.querySelectorAll(".ac");console.log(r),console.log(typeof r),x?(r.forEach(t=>{t.classList.add("ac-dt")}),s.classList.add("rectangle-dt"),v.classList.add("right"),e.style.setProperty("--white","#1E2023"),e.style.setProperty("--black","#F0F0F0"),e.style.setProperty("--accent-green","#14C57C"),e.style.setProperty("--light-grey","#2A2D32"),e.style.setProperty("--light-accent","#204136"),e.style.setProperty("--hover-grey","#3B3F45")):(r.forEach(t=>{t.classList.remove("ac-dt")}),s.classList.remove("rectangle-dt"),v.classList.remove("right"),e.style.setProperty("--white","#F0F0F0"),e.style.setProperty("--black","#292929"),e.style.setProperty("--accent-green","#00B068"),e.style.setProperty("--light-grey","#E4E5E6"),e.style.setProperty("--light-accent","#BCDFD1"),e.style.setProperty("--hover-grey","#BBBBBB"))});const i={openModalBtn:document.querySelectorAll(".js-open-menu"),closeModalBtn:document.querySelector(".js-close-menu"),modal:document.querySelector(".js-menu-container"),modalLinks:document.querySelectorAll(".mob-nav-tag")};i.openModalBtn.forEach(e=>{e.addEventListener("click",b)});i.closeModalBtn.addEventListener("click",b);i.modal.addEventListener("click",A);function A(e){e.target===e.currentTarget&&i.modal.classList.add("is-active")}function b(){i.modal.classList.toggle("is-active"),document.body.classList.toggle("no-scroll")}i.modalLinks.forEach(e=>{e.addEventListener("click",()=>{i.modal.classList.remove("is-active"),document.body.classList.remove("no-scroll")})});const F="/Portfolio-project/assets/projects1-Fww95F1J.jpg",O="/Portfolio-project/assets/projects1_xx-mywvv0cJ.jpg",T="/Portfolio-project/assets/projects2-DxN2odVS.jpg",z="/Portfolio-project/assets/projects2_xx-Cda9-ebG.jpg",J="/Portfolio-project/assets/projects3-CEcGoooa.jpg",G="/Portfolio-project/assets/projects3_xx-DPoVSB5Q.jpg",V="/Portfolio-project/assets/projects4-JhmGoZut.jpg",H="/Portfolio-project/assets/projects4_xx-BKKFpGsW.jpg",K="/Portfolio-project/assets/projects5-B1HZIuYL.jpg",Z="/Portfolio-project/assets/projects5_xx-Bje55MHr.jpg",R="/Portfolio-project/assets/projects6-DAPApIl8.jpg",U="/Portfolio-project/assets/projects6_xx-qMfuGWzT.jpg",W="/Portfolio-project/assets/projects7-8UPNHidz.jpg",Q="/Portfolio-project/assets/projects7_xx-135sHb3J.jpg",Y="/Portfolio-project/assets/projects8-xkayJYwa.jpg",X="/Portfolio-project/assets/projects8_xx-MzqbzosW.jpg",ee="/Portfolio-project/assets/projects9-DCuG7ItC.jpg",te="/Portfolio-project/assets/projects9_xx-D_UCmZD9.jpg",oe="/Portfolio-project/assets/projects10-Bna-RX6I.jpg",se="/Portfolio-project/assets/projects10_xx-DfQwEs-w.jpg",re="/Portfolio-project/assets/icon-CwlkgYyU.svg",w=[{ordinary:F,retina:O},{ordinary:T,retina:z},{ordinary:J,retina:G},{ordinary:V,retina:H},{ordinary:K,retina:Z},{ordinary:R,retina:U},{ordinary:W,retina:Q},{ordinary:Y,retina:X},{ordinary:ee,retina:te},{ordinary:oe,retina:se}],ne=10,B=3,u=[],ce=["power pulse webservice","mimino website","vyshyvanka vibes Landing Page","green harvest online store","wallet webservice","chego jewelry website","energy flow webservice","fruitbox online store","English excellence webservice","starlight studio landing page"],h=document.querySelector("button.projects-more"),ae=document.querySelector("ul.projects-list"),ie=()=>{const e=document.querySelectorAll("ul.projects-list li");e[e.length-1].scrollIntoView({behavior:"smooth"})},le=()=>{h.style.display="none"},de=()=>{h.style.display="block"},pe=e=>{for(let s=0;s<e;s++){const r=ce[s],t=s+1;u.push({idx:t,name:r,visible:!1})}},me=e=>{ae.innerHTML+=e.map(s=>{const{idx:r,name:t}=s,o=u.findIndex(n=>n.idx===r);return u[o].visible=!0,`
            <li>
                <img class="project-img" 
                    srcset="${w[r-1].ordinary} 1x, ${w[r-1].retina} 2x"
                    src="${w[r-1].ordinary}"
                    alt="${t}"
                    loading="lazy">
                <span class="projects-stack">React, JavaScript, Node JS, Git</span>
                <div class="projects-box">
                    <span class="projects-name">${t}</span>
                    <span class="projects-visit">
                        <a class="projects-link" href="#">
                            visit
                            <svg class="projects-icon">
                                <use href="${re}#icon-projects-icon"></use>
                            </svg>
                        </a>
                    </span>
                </div>
            </li>
        `}).join("")},k=(e,s)=>{const r=u.filter(o=>o.visible===!1),t=r.length;if(t){de();const o=t>=e?e:t;me(r.slice(0,o)),s&&ie(),t<=e&&le()}},ue=()=>{k(B,!0)};pe(ne);k(B,!1);h.addEventListener("click",ue);new I(".accordion-container",{openOnInit:[0]});const C=document.querySelector(".swiper-wrapper"),ye=document.querySelector(".button-wrapper");function ge(e){const s=e.map(({author:r,avatar_url:t,review:o,_id:n})=>n===5?`<li class="swiper-slide">
					<p class="reviews-text">${o.slice(0,-31)}</p>
					<div class="card-wrapper">
						<img class="reviews-icon" src="${t}" alt="${r}">
						<h2 class="reviews-author">${r}</h2>
					</div>
				</li>`:`<li class="swiper-slide">
					<p class="reviews-text">${o}</p>
					<div class="card-wrapper">
						<img class="reviews-icon" src="${t}" alt="${r}">
						<h2 class="reviews-author">${r}</h2>
					</div>
				</li>`).join("");C.innerHTML=s,ye.classList.remove("visually-hidden")}function je(){const e=`<li class="not-found swiper-slide">
	<p class="not-found-text">Not found!</p>
</li><li class="not-found swiper-slide">
	<p class="not-found-text">Not found!</p>
</li>`;C.innerHTML=e}async function fe(e){try{const{data:s}=await _.get("https://portfolio-js.b.goit.study/api/reviews");ge(s)}catch(s){je(),q.error({position:"topRight",message:s.message})}}fe();new $(".swiper",{modules:[D,N],direction:"horizontal",navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:{enabled:!0},slidesPerView:1,spaceBetween:32,breakpoints:{1280:{slidesPerView:2}}});document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("work-together-form"),s=document.getElementById("modal-backdrop"),r=document.getElementById("modal-close-btn"),t=document.getElementById("modal-title"),o=document.getElementById("modal-message"),n=document.getElementById("email"),c=document.getElementById("user-comment"),y=document.getElementById("email-error"),m=document.getElementById("message-error"),g=document.querySelector(".work-together-form-input-valid");function j(a,d){t.textContent=a,o.textContent=d,s.classList.add("active")}function f(){s.classList.remove("active")}function L(a){return/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(a)}function M(){y.textContent="",m.textContent=""}n.addEventListener("input",()=>{M(),L(n.value.trim())?(n.classList.remove("error"),n.classList.add("valid"),g.style.display="inline"):(n.classList.add("error"),y.textContent="Invalid email, try again",g.style.display="none")}),c.addEventListener("input",()=>{c.value.trim()!==""?(c.classList.remove("error"),c.classList.add("valid"),m.textContent=""):(c.classList.remove("valid"),c.classList.add("error"),m.textContent="Message cannot be empty")}),e.addEventListener("submit",async a=>{a.preventDefault();const d=n.value.trim(),E=c.value.trim();if(!L(d)){y.textContent="Please enter a valid email address.";return}if(!E){m.textContent="Message cannot be empty.";return}var S={email:d,comment:E};const P=JSON.stringify(S);console.log(P);try{const l=await fetch("https://portfolio-js.b.goit.study/api/requests",{method:"POST",headers:{"Content-Type":"application/json"},body:P});if(l.ok){const p=await l.json();j(t.textContent,o.textContent||"Message sent successfully!"),e.reset(),g.style.display="none"}else{const p=await l.json();console.error("Error response:",p),t.textContent="Error",t.style.color="red",j(t.textContent,p.message||"Unexpected error, please try again.")}}catch(l){const p=l.message;console.error("Network Error:",p),t.textContent="Network Error",t.style.color="red",j(t.textContent,`Network error: ${l.message}`)}}),r.addEventListener("click",f),s.addEventListener("click",a=>{a.target===s&&f()}),document.addEventListener("keydown",a=>{a.key==="Escape"&&f()})});
//# sourceMappingURL=index.js.map
