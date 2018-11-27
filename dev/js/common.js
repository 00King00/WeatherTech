$(function(){
	var $grid = $('#masonry');
	//burder buttons and menu
	$('.bars').click(function(){
		console.log(1);
		$(this).toggleClass('active');
		$(".menu").animate(
			{height: 'toggle'},
			{duration:500}
		);
	})
	//setTimeout(function() {$grid.masonry();}, 900);
	$grid.imagesLoaded(function() {
		$grid.masonry({
			columnWidth: '.grid-sizer',
			itemSelector: '.masonry-item'

		});
	});
	//$grid.masonry('reloadItems')

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
			document.body.scrollTop = val_scroll;
			if (val_scroll <= 0){
				clearInterval(timer);
			}
		}, (10));
	})
	new WOW(
		{
			offset: 100,
			live: true
		}
	).init();
	//for .order-label
	$(window).scroll(function(){
		var height = window.innerHeight;
		var elemHeight = $(".order-label").height();
		var elem = $(".order-label")[0].getBoundingClientRect().top + elemHeight;
		if(elem<=height){
			$(".order-label").addClass("active");
			$(".order-label .border").addClass("active");
		}else{
			$(".order-label").removeClass("active");
			$(".order-label .border").removeClass("active");
		}
	});
});
