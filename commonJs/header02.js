//导航条固定  start
	$(window).scroll(function(){
		 	if ($(window).scrollTop()>400){
		 		$('.nav').addClass('fix');
//		 		$('#nav').css({'position':'fixed'})		 		
		 	}else{
		 		$('.nav').removeClass('fix');
//		 		$('#nav').css({'position':'static'})	
//		 		$('.nav-1').css('position','relative')
		 	}
            
		});
		
	//导航条固定  end	
	