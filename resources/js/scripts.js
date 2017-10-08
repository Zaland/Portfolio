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

    /* Run when contact form button is pressed */
    $('.contact-form-submit').click(function(e) {
        e.preventDefault();

        var name = $('#name').val();
        var email = $('#email').val();
        var message = $('#message').val();

        $.ajax({
            type: 'GET',
            url: 'resources/scripts/contact-mail.php',
            data: {name:name, email:email, message:message},
            success: function(result) {
                alert("Mail sent successfully");
            }
        });
    });
});