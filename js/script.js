

    window.silex = window.silex || {}
    window.silex.data = {"site":{"width":1200},"pages":[{"id":"page-home","displayName":"Home","link":{"linkType":"LinkTypePage","href":"#!page-home"},"canDelete":true,"canProperties":true,"canMove":true,"canRename":true,"opened":false},{"id":"page-site-vitrine","displayName":"site-vitrine","link":{"linkType":"LinkTypePage","href":"#!page-site-vitrine"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false},{"id":"page-cv-en-ligne","displayName":"cv-en-ligne","link":{"linkType":"LinkTypePage","href":"#!page-cv-en-ligne"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false},{"id":"page-rgpd","displayName":"rgpd","link":{"linkType":"LinkTypePage","href":"#!page-rgpd"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false},{"id":"page-referencement-google","displayName":"referencement-google","link":{"linkType":"LinkTypePage","href":"#!page-referencement-google"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false},{"id":"page-referencement-naturel","displayName":"referencement-naturel","link":{"linkType":"LinkTypePage","href":"#!page-referencement-naturel"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false},{"id":"page-achat-de-nom-de-domaine","displayName":"achat-de-nom-de-domaine","link":{"linkType":"LinkTypePage","href":"#!page-achat-de-nom-de-domaine"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false},{"id":"page-hebergement","displayName":"hebergement","link":{"linkType":"LinkTypePage","href":"#!page-hebergement"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false},{"id":"page-vos-emails","displayName":"vos-emails","link":{"linkType":"LinkTypePage","href":"#!page-vos-emails"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false},{"id":"page-update-de-votre-site","displayName":"update-de-votre-site","link":{"linkType":"LinkTypePage","href":"#!page-update-de-votre-site"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false},{"id":"page-contact","displayName":"Contact","link":{"linkType":"LinkTypePage","href":"#!page-contact"},"canDelete":true,"canProperties":true,"canMove":true,"canRename":true,"opened":false},{"id":"page-politiques-des-cookies","displayName":"Politiques des cookies","link":{"linkType":"LinkTypePage","href":"#!page-politiques-des-cookies"},"canDelete":true,"canProperties":true,"canMove":true,"canRename":true,"opened":false},{"id":"page-conditions-general","displayName":"Conditions general","link":{"linkType":"LinkTypePage","href":"#!page-conditions-general"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false},{"id":"page-tarifs","displayName":"Tarifs","link":{"linkType":"LinkTypePage","href":"#!page-tarifs"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false}]}
$(function() {
    $('.hero-scroll-down').click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#after-hero").offset().top
        }, 500);
    });
})



/* animation on scroll widget */
$(function() {
    var $animation_elements = $('.animation-element');
    var $window = $(window);

    function check_if_in_view() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);
    
    $.each($animation_elements, function() {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);
    
        //check to see if this current container is within viewport
        if ((element_bottom_position >= window_top_position) &&
            (element_top_position <= window_bottom_position)) {
        $element.addClass('in-view');
        } else {
        $element.removeClass('in-view');
        }
    });
    }

    $window.on('scroll resize', check_if_in_view);
    $window.trigger('scroll');

})
/* /animation on scroll widget */

/* Jarallax */

$(function() {
    var elements = $('.jarallax').jarallax({
        //onInit: function(){ console.log('onInit', this)},
        onCoverImage: function(){
            var container = $('#jarallax-container-' + this.instanceID).children()[0]
            if (container) {
                container = $(container)
                container.css({
                    'width': (container.width() / silex.scale) + 'px',
                    'height': (container.height() / silex.scale) + 'px',
                })
            }
        }
    });
});

/* End of Jarallax */

