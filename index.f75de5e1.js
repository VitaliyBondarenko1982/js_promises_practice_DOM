"use strict";
const body = document.querySelector("body");
let isLeftClick = false;
let isRightClick = false;
const firstPromise = new Promise((resolve, reject)=>{
    document.addEventListener("click", ()=>{
        isLeftClick = true;
        resolve("First promise was resolved");
    });
    setTimeout(()=>{
        reject(new Error("First promise was rejected"));
    }, 3000);
});
const secondPromise = new Promise((resolve, reject)=>{
    document.addEventListener("click", ()=>{
        isLeftClick = true;
        resolve("Second promise was resolved");
    });
    document.addEventListener("contextmenu", (e)=>{
        e.preventDefault();
        isRightClick = true;
        resolve("Second promise was resolved");
    });
});
const thirdPromise = new Promise((resolve, reject)=>{
    document.addEventListener("click", ()=>{
        if (isRightClick && isLeftClick) resolve("Third promise was resolved");
    });
    document.addEventListener("contextmenu", (e)=>{
        e.preventDefault();
        if (isRightClick && isLeftClick) resolve("Third promise was resolved");
    });
});
const makeHandler = (type)=>(message)=>{
        body.appendChild(createMessageElement(message, type));
    };
const successHandler = makeHandler("success");
const errorHandler = makeHandler("error");
firstPromise.then(successHandler).catch(errorHandler);
secondPromise.then(successHandler);
thirdPromise.then(successHandler);
function createMessageElement(message, type) {
    const div = document.createElement("div");
    div.setAttribute("data-qa", "notification");
    div.classList.add("message", type);
    div.textContent = message;
    return div;
}

//# sourceMappingURL=index.f75de5e1.js.map
