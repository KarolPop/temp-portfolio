$(document).foundation();
 
	$(function(){
	        $(".title").typed({
	            strings: ["^2000 Witaj na mojej stronie","Adept ^1000 Sztuki Front Endowej :-) "],
	            typeSpeed: 100,
	        });
	    });

	$(".thumbnail").addClass("hidden").viewportChecker({
        classToAdd: "visible animated bounceInDown",
        offset: 100
	});

	$(".badge").addClass("hidden").viewportChecker({
        classToAdd: "visible animated fadeInRightBig",
        offset: 100
	});

	$(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.substr(1) +']');
        if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    });
});
