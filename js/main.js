$(function() {
	$('a[href*="#"]').bind('click', function(e) {
		e.preventDefault();

		let target = $(this).attr('href');

		$('html, body').stop().animate({
			scrollTop: $(target).position().top
		}, 600, function() {
			location.hash = target;
		});
		return false;
	});

	$(window)
		.scroll(function() {
			const scrollDistance = $(window).scrollTop();

			$('.sect').each(function(i) {
				if ($(this).position().top <= scrollDistance) {
					$('#nav-menu a.active').removeClass('active');
					$('#nav-menu a').eq(i).addClass('active');
				}
			});
		})
		.scroll();
});
