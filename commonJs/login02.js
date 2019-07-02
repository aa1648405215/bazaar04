
//console.log( 'wqeqw' )
//console.log( $('#mask') )
$('.register').eq(0).click(function( ){
//	alert(3213213)
	$('.mask-layer').css('display','block ')
	//console.log( $('#mask') )
})	
$('.close').click(function( ){
	$('.mask-layer').css('display','none')
})
//
//登录页面的选框    start
   $('#checkP').click(function(){
				$('#checkP span').toggleClass('checked');
		})
		
//登录页面的选框    end