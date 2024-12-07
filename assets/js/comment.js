jQuery('document').ready(function() {
    if (jQuery(window.location.hash).length > 0) {
        jQuery('html, body').animate({ scrollTop: jQuery(window.location.hash).offset().top}, 1000);
    }
});