(()=>{"use strict";document.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelector("#homeBtn"),n=document.querySelector("#contactBtn"),t=document.querySelector("#menuBtn");e.addEventListener("click",(()=>{!function(){const e=document.querySelector("#content");e.innerHTML="";const n=document.createElement("img");n.src="burger.jpg",n.alt="main food image",n.style.cssText="height: 150px; width: auto;",e.appendChild(n);const t=document.createElement("h1");t.textContent="Welcome to Our Restaurant",e.appendChild(t);const r=document.createElement("p");r.textContent="Discover the finest dining experience in town at Our Restaurant. From our delectable dishes crafted with the freshest ingredients to our warm and inviting ambiance, we strive to create memorable moments for our guests.",e.appendChild(r);const i=document.createElement("p");i.textContent="ndulge in a culinary journey that delights the senses and satisfies the soul. Whether you're joining us for a romantic dinner, a family celebration, or a casual meal with friends, our attentive staff is here to ensure your experience is nothing short of extraordinary.",e.appendChild(i)}()})),n.addEventListener("click",(()=>{!function(){const e=document.querySelector("#content");e.innerHTML="";const n=document.createElement("div");n.innerHTML="<h1>Contact Us</h1>\n    <h3>Kolkata Branch</h3>\n    <p>Address: 6th Avenue, Paul street, Kolkata - 700009, West Bengal, IN</p>\n    <h3>Howrah Branch</h3>\n    <p>Address: Near Hindu Temple, HOWRAH, 711101, West Bengal, IN</p>",e.appendChild(n)}()})),t.addEventListener("click",(()=>{!function(){const e=document.querySelector("#content");e.innerHTML="";const n=document.createElement("div");n.innerHTML='<h1>Beverages</h1>\n    <h3>Chilled Beer</h3><img src="beer.png" alt="beer icon">\n    <p>Kingfisher chilled beer with snacks. 250ml &#8377; 400</p>\n    <h3>Burger</h3><img src="burgerIcon.png" alt="burger icon"> \n    <p>Chicken cheese burger &#8377; 200</p>\n    <h3>Pizza</h3><img src="pizza.png" alt="pizza icon">\n    <p>Chicken, mutton mixed pizza with paproni flavopur &#8377; 270</p>\n    <h3>Pasta</h3><img src="pasta.png" alt="pasta icon">\n    <p>White sauce pasta &#8377; 250</p>',e.appendChild(n)}()}))}))})();