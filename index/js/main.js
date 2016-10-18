$(function(){
	var mask = $(".mask"),
	sidebar = $("#sidebar"),
	backButton = $(".back-to-top"),
	sidebar_trigger = $(".trigger");
	
	function showSidebar(){
//		sidebar.css('right','0');
		sidebar.animate({'right':'0'},500);
		mask.fadeIn(500);
	}
	
	function hideSidebar(){
		sidebar.animate({"right":-sidebar.width()},500);
		mask.fadeOut(500);
	}
	
	function backToTop(){
		$("body").animate({scrollTop:0},500);
	}
	
	
	sidebar_trigger.on('click',showSidebar);
	mask.on('click',hideSidebar);
//	$(window).on('scroll',hideSidebar);
	backButton.on('click',backToTop);
	
	$(window).on('scroll',function(){
		if($(this).scrollTop()>$(this).height())
		backButton.fadeIn();
		else
		backButton.fadeOut();
	})
	
	$(window).scroll();
})

