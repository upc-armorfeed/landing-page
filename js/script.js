// Import Modules
import { setNavClickEvent, hideSections, setHeaderNavEvent } from "./headerNav.js";
import { SetBurgerNavIconEvent } from "./burgerNav.js";
import { setFooterNavContent } from "./footerNav.js";

(function init(){
    setHeaderNavEvent();
    SetBurgerNavIconEvent();
    setFooterNavContent();

    const paths = [
        ["home.html", "Home"],
        ["about-us.html", "About-us"],
        ["services.html", "Services"],
        ["help.html", "Help"]];

    paths.forEach(path => {
        fetch(`../${path[0]}`)
            .then(response => {
                return response.text()
            })
            .then(data => {
                document.querySelector("#"+path[1]).innerHTML = data;
            });
    })
})();
