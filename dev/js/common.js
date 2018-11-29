$(function(){
	var $grid = $('#masonry');
	//burder buttons and menu
	$('.bars').click(function(){
		$(".main-screen").toggleClass('active')
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
	$('.about-item__name').click(function() {
		var $more = $(this).siblings('.about-item__description');
			if ($more.is(':hidden')) {
				$more.slideDown();
				$(this).addClass('close');
			} else {
				$more.slideUp();
				$(this).removeClass('close');
			}
		$(this).siblings('.circle-plus').toggleClass('opened');
	})
	$('.faq__answer').hide();
	$('.faq__question').click(function() {
		var $more = $(this).siblings('.faq__answer');
			if ($more.is(':hidden')) {
				$more.slideDown();
				$(this).addClass('close');
			} else {
				$more.slideUp();
				$(this).removeClass('close');
			}
		$(this).siblings('.circle-plus').toggleClass('opened');
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
	var distance=$('.main-screen-title')[0].getBoundingClientRect().top;
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
		var opacity=$('.main-screen-title')[0].getBoundingClientRect().bottom/distance;
		if(opacity>=0){
			$('.main-screen-title').css("opacity",opacity)
		}
		var headerOfset=$(".header-bottom").offset().top;
		var scrollTop=$(window).scrollTop();
		console.log(scrollTop);
		if(scrollTop<37){
			$('.header-top').animate({marginTop: -37}, 500);
		}
		else {
			$('.header-top').animate({marginTop: 0}, 500);
		}
	});
	// input-mask
		$('input[type="tel"]').inputmask('+7(999) 999 - 99 - 99');
});
