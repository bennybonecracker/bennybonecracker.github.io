$(window).load(function() {
	$(".se-pre-con").fadeOut("slow");
});

$(document).ready(function($){
	$(this).scrollTop(0);

	// navigation click actions	
	$('.scroll-link').on('click', function(e){
		e.preventDefault();
		var sectionID = $(this).attr("data-id");
		scrollToID('#' + sectionID, 750);
		
	});

	function scrollToID(id, speed){
		var offSet = 50;
		var targetOffset = $(id).offset().top - offSet;
		$('html,body').animate({scrollTop:targetOffset}, speed);
	}

	var timelineBlocks = $('.cd-timeline-block'),
		offset = 0.8;

	//hide timeline blocks which are outside the viewport
	hideBlocks(timelineBlocks, offset);

	var navbar =  $('.navbar');
	//on scolling, show/animate timeline blocks when enter the viewport
	$(window).on('scroll', function(){
		if ($(window).scrollTop() <= 0) {

			navbar.css("opacity",0.0);
			$('.navbar').hover(function(){
				navbar.css("opacity",1);
			});
		} else if ($(window).scrollTop() <= 100) {
			navbar.css("opacity",0.5);
		} else {
	        navbar.css("opacity",0.7);
	    }

		(!window.requestAnimationFrame) 
			? setTimeout(function(){ 
				showBlocks(timelineBlocks, offset);
				$("#skill").show();
			 }, 1000)
			: window.requestAnimationFrame(function(){ 
				showBlocks(timelineBlocks, offset);
				$("#skill").show();
			 });

	});

	function hideBlocks(blocks, offset) {
		blocks.each(function(){
			( $(this).offset().top > $(window).scrollTop()+$(window).height()*offset ) 
				&& $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
		});
	}

	function showBlocks(blocks, offset) {
		blocks.each(function(){
			( $(this).offset().top <= $(window).scrollTop()+$(window).height()*offset 
				&& $(this).find('.cd-timeline-img').hasClass('is-hidden') ) && $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
		});
	}
/*
	$(".cd-read-more").on('click',function(){
	}, function(){
		if($(this).siblings(".complete").css('display') == 'none') {
	  	  $(this).siblings(".complete").fadeIn("slow", function() {});
	      $(this).text("Hide text").show();
		} else {
			 $(this).siblings(".complete").fadeOut("fast", function() {});
			 $(this).text("Read more").show();
		}
	});*/

});
