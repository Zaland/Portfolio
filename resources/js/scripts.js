$(document).ready(function() {
    // Animations for projects section
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated bounceInUp');
    }, { offset: "40%" });
    
    // Animated scroll for nav buttons
    $('.nav-home').click(function() {
        $('html, body').animate({scrollTop: $('.js--main-nav').offset().top}, 1000); 
    });

    $('.nav-projects').click(function() {
        $('html, body').animate({scrollTop: $('.js--wp-1').offset().top}, 1000); 
    });

    $('.nav-contact').click(function() {
        $('html, body').animate({scrollTop: $('.js--wp-2').offset().top}, 1000); 
    });

    // Run when contact form button is pressed
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

    // Load sticky nav when reached a certain point
    $('.js--home-nav').waypoint(function(direction) {
        if(direction == "down") {
            $('nav').addClass('animated fadeInDown');
            $('nav').addClass('sticky-header-nav');
        }
        else {
            $('nav').removeClass('animated fadeInDown');
            $('nav').removeClass('sticky-header-nav');
        }
    }, { offset: '40%;' });
    
    $('.js--wp-1').waypoint(function(direction) {
        if(direction == "down") {
            $('nav').removeClass('sticky-header-nav');
            $('nav').addClass('sticky');
        }
        else {
            $('nav').removeClass('sticky');
            $('nav').addClass('sticky-header-nav');
        }
    }, { offset: '5%;' });
    
    // Set the home nav link to highlight in the beginning
    $('.nav-home').addClass('highlight');
    
    // If the waypoint for the home page is reached, set up the highlight
    $('.js--home-nav').waypoint(function() {
        $('.nav-home').addClass('highlight');
        $('.nav-projects').removeClass('highlight');
        $('.nav-contact').removeClass('highlight');
    });
    
    // If the projects section is reached, set up the highlight
    $('.js--wp-1').waypoint(function() {
        $('.nav-home').removeClass('highlight');
        $('.nav-projects').addClass('highlight');
        $('.nav-contact').removeClass('highlight');
    }, { offset: '5%;' });
    
    // If the contact me section is reached, set up the highlight
    $('.js--wp-2').waypoint(function() {
        $('.nav-home').removeClass('highlight');
        $('.nav-projects').removeClass('highlight');
        $('.nav-contact').addClass('highlight');
    }, { offset: '70%;' });
});