var e=document.querySelector("body"),t=!1,n=!1,o=new Promise(function(e,n){document.addEventListener("click",function(){t=!0,e("First promise was resolved")}),setTimeout(function(){n(Error("First promise was rejected"))},3e3)}),i=new Promise(function(e,o){document.addEventListener("click",function(){t=!0,e("Second promise was resolved")}),document.addEventListener("contextmenu",function(t){t.preventDefault(),n=!0,e("Second promise was resolved")})}),r=new Promise(function(e,o){document.addEventListener("click",function(){n&&t&&e("Third promise was resolved")}),document.addEventListener("contextmenu",function(o){o.preventDefault(),n&&t&&e("Third promise was resolved")})}),c=function(t){return function(n){var o;e.appendChild(((o=document.createElement("div")).setAttribute("data-qa","notification"),o.classList.add("message",t),o.textContent=n,o))}},s=c("success"),d=c("error");o.then(s).catch(d),i.then(s),r.then(s);
//# sourceMappingURL=index.0c86424c.js.map
