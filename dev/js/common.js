$(function(){
	// $('#masonry-item').masonry({
	// 	itemSelector: '.masonry-item',
	// 	columnWidth: 100
	// });

	//burder buttons and menu
	$('.bars').click(function(){
		console.log(1);
		$(this).toggleClass('active');
		$(".menu").animate(
			{height: 'toggle'},
			{duration:500}
		);
	})
})
