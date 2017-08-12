$(document).ready(function() {
    /* Animations on scroll */
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated bounceInUp');
    }, {
        offset: "40%",
    });
    
    /* Animated button */
    $('.scroll-down-icon').click(function() {
        $('html, body').animate({scrollTop: $('.js--wp-1').offset().top}, 1000); 
    });
});