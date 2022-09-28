import { setNavClickEvent } from "./headerNav.js";

const footer = document.getElementById("footer");
const footerDescription = footer.querySelector('.footer__Description');
const template = document.getElementById("TemplateNav");
const navTemplate = template.content.querySelector('.TemplateTabsNav');

export function setFooterNavContent(){
    const node = navTemplate.cloneNode(true);
    node.classList.remove('showNavAnimation');
    footer.insertBefore(node,footerDescription);
    setNavClickEvent(node,false);
}