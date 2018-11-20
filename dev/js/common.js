$(function(){
	//burder buttons and menu
	$('.bars').click(function(){
		console.log(1);
		$(this).toggleClass('active');
		$(".menu").animate(
			{height: 'toggle'},
			{duration:500}
		);
	})
	$('#masonry').masonry({
		itemSelector: '.masonry-item',
		percentPosition: true,
		columnWidth: '.grid-sizer'
	});
	$('.about-item__description').hide();
	$('.about-item').click(function() {
		var $more = $(this).children('.about-item__description');
			if ($more.is(':hidden')) {
				$more.slideDown();
				$(this).addClass('close');
			} else {
				$more.slideUp();
				$(this).removeClass('close');
			}
		$(this).children('.circle-plus').toggleClass('opened');
	})

	$("#up-button").click(function(){
		var val_scroll = document.body.scrollTop;
		var time = 50;
		var step = val_scroll/time;
		var timer = setInterval(function(){
			val_scroll = val_scroll - step;
			document.body.scrollTop = val_scroll; // For Safari
			//document.documentElement.scrollTop = val_scroll_1; // For Chrome, Firefox, IE and Opera
			if (val_scroll <= 0){
				clearInterval(timer);
			}
		}, (10));
	})
})
