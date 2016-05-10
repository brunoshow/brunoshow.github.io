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
		    if (scrollTop > contentNav/2) {
		        $('.navbar').removeClass("transparent");
		    } else {;
		        $('.navbar').addClass("transparent");
		    }
		};
		stickyNav();
		$(window).scroll(function () {
		    stickyNav();
		});
	}); 
		
})(jQuery);