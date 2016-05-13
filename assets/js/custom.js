(function($) {

// prettyPhoto
	jQuery(document).ready(function(){
		jQuery('a[data-gal]').each(function() {
			jQuery(this).attr('rel', jQuery(this).data('gal'));
		});  	
		jQuery("a[data-rel^='prettyPhoto']").prettyPhoto({animationSpeed:'slow',theme:'light_square',slideshow:false,overlay_gallery: false,social_tools:false,deeplinking:false});
		
		var contentNav = $('#headerwrap').height();
		var stickyNav = function () {
		    var scrollTop = $(window).scrollTop();
		    if (scrollTop > contentNav/1.2) {
		        $('.navbar').removeClass("transparent");
		        document.getElementById("nav-title").innerHTML = document.title;
		    } else {;
		        $('.navbar').addClass("transparent");
		        document.getElementById("nav-title").innerHTML = "BRUNO SHOW";
		    }
		};
		stickyNav();
		$(window).scroll(function () {
		    stickyNav();
		});
	}); 
		
})(jQuery);