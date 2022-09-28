/** CODIGO AJAX - NECESITA DE APACHE PARA FUNCIONAR */
/** GIT HUB NO LO CARGA CORRECTAMENTE */

/** NAV-BAR-TOP */

$.get("_home.html", function(data) {
    $("#Home").load(data);
    $("#Home").replaceWith(data);
});

/** NAV-BAR-BOTTOM */

/*
$.get("_navbar_bottom.html", function(data) {
    $("#navbar-bottom").replaceWith(data);
});*/
