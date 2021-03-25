(()=>{"use strict";var n={78:(n,e,s)=>{n.exports=s.p+"img/ed10c2e09a0636d6cd72.svg"}},e={};function s(i){var c=e[i];if(void 0!==c)return c.exports;var r=e[i]={exports:{}};return n[i](r,r.exports,s),r.exports}s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),(()=>{var n;s.g.importScripts&&(n=s.g.location+"");var e=s.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var i=e.getElementsByTagName("script");i.length&&(n=i[i.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),s.p=n})(),(()=>{var n=s(78);console.log(n);const e=document.querySelector(".recipe"),i=async function(){try{const s=window.location.hash.slice(1);if(console.log(s),!s)return;!function(e){const s=`\n    <div class="spinner">\n        <svg>\n          <use href="${n}#icon-loader"></use>\n        </svg>\n    </div>\n  `;e.innerHTML="",e.insertAdjacentHTML("afterbegin",s)}(e);const i=`\n      <figure class="recipe__fig">\n            <img src="${recipe.image}" alt="${recipe.title}" class="recipe__img" />\n            <h1 class="recipe__title">\n              <span>${recipe.title}</span>\n            </h1>\n          </figure>\n\n          <div class="recipe__details">\n            <div class="recipe__info">\n              <svg class="recipe__info-icon">\n                <use href="${n}#icon-clock"></use>\n              </svg>\n              <span class="recipe__info-data recipe__info-data--minutes">${recipe.cookingTime}</span>\n              <span class="recipe__info-text">minutes</span>\n            </div>\n            <div class="recipe__info">\n              <svg class="recipe__info-icon">\n                <use href="${n}#icon-users"></use>\n              </svg>\n              <span class="recipe__info-data recipe__info-data--people">${recipe.servings}</span>\n              <span class="recipe__info-text">servings</span>\n\n              <div class="recipe__info-buttons">\n                <button class="btn--tiny btn--increase-servings">\n                  <svg>\n                    <use href="${n}#icon-minus-circle"></use>\n                  </svg>\n                </button>\n                <button class="btn--tiny btn--increase-servings">\n                  <svg>\n                    <use href="${n}#icon-plus-circle"></use>\n                  </svg>\n                </button>\n              </div>\n            </div>\n\n            <div class="recipe__user-generated">\n              <svg>\n                <use href="./src/img/icons.svg#icon-user"></use>\n              </svg>\n            </div>\n            <button class="btn--round">\n              <svg class="">\n                <use href="${n}#icon-bookmark-fill"></use>\n              </svg>\n            </button>\n          </div>\n\n          <div class="recipe__ingredients">\n            <h2 class="heading--2">Recipe ingredients</h2>\n            <ul class="recipe__ingredient-list">\n            ${recipe.ingredients.map((e=>`\n                <li class="recipe__ingredient">\n                  <svg class="recipe__icon">\n                    <use href="${n}#icon-check"></use>\n                  </svg>\n                  <div class="recipe__quantity">${e.quantity}</div>\n                  <div class="recipe__description">\n                    <span class="recipe__unit">${e.unit}</span>\n                    ${e.description}\n                  </div>\n                </li>\n              `)).join("")}\n            </ul>\n          </div>\n\n          <div class="recipe__directions">\n            <h2 class="heading--2">How to cook it</h2>\n            <p class="recipe__directions-text">\n              This recipe was carefully designed and tested by\n              <span class="recipe__publisher">${recipe.publisher}</span>. Please check out\n              directions at their website.\n            </p>\n            <a\n              class="btn--small recipe__btn"\n              href="${recipe.sourceUrl}"\n              target="_blank"\n            >\n              <span>Directions</span>\n              <svg class="search__icon">\n                <use href="${n}#icon-arrow-right"></use>\n              </svg>\n            </a>\n          </div>\n    `;e.innerHTML="",e.insertAdjacentHTML("afterbegin",i)}catch(n){alert(n)}};i(),["hashchange","load"].forEach((n=>window.addEventListener(n,i)))})()})();