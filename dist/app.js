$(document).foundation(),$(function(){$(".title").typed({strings:["^2000 Witaj na mojej stronie","Adept ^1000 Sztuki Front Endowej :-) "],typeSpeed:100})}),$(".thumbnail").addClass("hidden").viewportChecker({classToAdd:"visible animated bounceInDown",offset:100}),$(".badge").addClass("hidden").viewportChecker({classToAdd:"visible animated fadeInRightBig",offset:100}),$(function(){$('a[href*="#"]:not([href="#"])').click(function(){var e=$(this.hash);if(e=e.length?e:$("[name="+this.hash.substr(1)+"]"),e.length)return $("html,body").animate({scrollTop:e.offset().top},1e3),!1})});