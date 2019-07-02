$(function(){
	$('#header').load("commonHtml/header02.html");
	$('#re').load("commonHtml/login02.html");
	$.getScript("commonJs/header02.js");
	$.getScript("commonJs/login02.js");
	
	//register
	      //用户名正则，4到16位（字母，数字，下划线，减号）  
			var reg01 =/^[a-zA-Z0-9_-]{4,16}$/;
			//密码输入6-20个字母、数字、下划线
			var reg02 = /^\w{6,20}$/;
////			//确认密码
////			var reg04 = reg02;
//			//邮箱
			var reg03 = /^([a-zA-Z0-9_\.\-]+)@([a-zA-Z0-9_\.\-]+)\.([a-zA-Z]{2,4})$/;
			
//			$('.common-input input').blur(function(){
//				var n = $('.common-input input').index(this)
//				console.log(n)
//				var result = reg01.test($('.common-input input').eq(0).val());
//				if(result==false){
//					$('.error').eq(0).css({'display':'block','left':'500px','top':'2px'});
//				}else{
//					$('.error').eq(0).css('display','none');
//				}
//				
//			})
//			
			$('.common-input input').eq(0).blur(function(){
//				console.log($('.common-input input').eq(0))
				//console.log($('.common-input input').index(this));
				var result = reg01.test($('.common-input input').eq(0).val());
				//console.log(result)
			
				if(result==false){
					$('.error01').eq(0).css({'display':'block','left':'500px','top':'2px'});
				}else{
					$('.error01').eq(0).css('display','none');
				}
			})
			
			$('.common-input input').eq(1).blur(function(){
//				console.log($('.common-input input').eq(0).val());
				//console.log($('.error01').index(this))
				var result = reg02.test($('.common-input input').eq(1).val());
				if(result==false){
					$('.error01').eq(1).css({'display':'block','left':'500px','top':'2px'});
				}else{
					$('.error01').eq(1).css('display','none');
				}
			})
//			
			$('.common-input input').eq(2).blur(function(){
				//console.log($('.common-input input').eq(2).val());
				//console.log($('.error').index(this))
				if($('.common-input input').eq(2).val()==$('.common-input input').eq(1).val()){
					$('.error01').eq(2).css('display','none');
				}else{
					$('.error01').eq(2).css({'display':'block','left':'500px','top':'2px'});
				}
			})
		

			$('.common-input input').eq(3).blur(function(){
//				console.log($('.common-input input').eq(0).val());
				var result = reg03.test($('.common-input input').eq(3).val());
				if(result==false){
					$('.error01').eq(3).css({'display':'block','left':'500px','top':'2px'});
				}else{
					$('.error01').eq(3).css('display','none');
				}
			})


		//footer start
		$('#footer').load("commonHtml/footer.html");
		//footer end
})
