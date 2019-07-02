$(function(){
	//导航条固定  start
	$(window).scroll(function(){
		 	if ($(window).scrollTop()>500){
		 		$('.nav').addClass('fix');
//		 		$('#nav').css({'position':'fixed'})		 		
		 	}else{
		 		$('.nav').removeClass('fix');
//		 		$('#nav').css({'position':'static'})	
//		 		$('.nav-1').css('position','relative')
		 	}
            
		});
		
	//导航条固定  end	
	
	//登录页面的选框    start	
	 $('#checkP').click(function(){
					$('#checkP span').toggleClass('checked');
			})
		
	//登录页面的选框    end
	$('.register').click(function( ){
		alert(3213213)
		$('#mask').css('display','block !important')
	})	
	$('.close').click(function( ){
		$('#mask').css('display','none')
	})
	
		
		
		
		
		
})
