import { setNavClickEvent } from "./headerNav.js";

const navTemplate = document.getElementById("TemplateNav");
const burgerIcon = document.getElementById("burgerNav");
let allowed = true;

export function SetBurgerNavIconEvent(){
    burgerIcon.addEventListener('click', e => {
        const element = document.querySelector('body');
        const referenceNode = document.querySelector('.base');
        navInjection(element,InjectNavInDOM,referenceNode);
    })
}

export function InjectNavInDOM(p,n,referenceNode){
    if(!allowed)
            return;
    const closeButton = document.createElement('li');
    closeButton.innerHTML = '<a class="header__tabs-item close-btn">X</a>';
    // Setting Events in X button
    closeButton.addEventListener('click', e => {
        n.classList.remove('showNavAnimation');
        n.classList.add('hideNavAnimation');
        setTimeout(() => {
            n.classList.remove('hideNavAnimation');
            p.removeChild(n);
        },500);
        allowed = true;
    });
    // Inserting in DOM
    n.appendChild(closeButton);
    p.insertBefore(n,referenceNode);
    setNavClickEvent(n,false);
    allowed = false;
}

export function navInjection(parent,method,referenceNode){
    const p = navTemplate.content.querySelector('.TemplateTabsNav');
    const node = p.cloneNode(true);
    const body = document.querySelector('body');
    method(parent,node,referenceNode);
}
