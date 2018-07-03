(function() {
	$window = $('body');
	$window.scroll(function(e) {
		parallaxScroll($('[data-scroll]'));
	});

	function parallaxScroll(el) {
		var scrolled = $window.scrollTop();
		el.css('top', 0 - scrolled * el.data('scroll') + 'px');
	}

	$('a[href="#top"]').click(function(e) {
		e.preventDefault();
		$('html, body').animate({ scrollTop: 0 }, 'slow');
		return false;
	});
})();
