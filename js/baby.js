$(function(){
	$('#header').load("commonHtml/header02.html");
	$('#re').load("commonHtml/login02.html");
	$.getScript("commonJs/header02.js");
	$.getScript("commonJs/login02.js");
	
	//editors 轮播  start
		
		slidereditors();
		function slidereditors(){
		//01.布局  
		//   ul  absolute  top0  left0
		//02. setintrval   改变ul定位的left值
		var iNow = 0;

		function changePic(){
			var nowleft = -iNow*300;
			console.log(nowleft);
			$('#list').css('left',nowleft)
		}
			
		//向前
		$('#prv').click (function(){		
//         clearInterval(timer);
			iNow --;
			if(iNow<0){
				iNow = 4;
			}
			console.log('向前'+iNow);
			changePic();
		})
		//向后
		$('#next').click (function(){
//			clearInterval(timer);
			iNow ++;
			if(iNow>$('#list li').length-1){
				iNow = 0;
			}
			console.log('向后'+iNow);
			changePic();			
		})
	}
			
		//editors 轮播 end
		
		//footer  start
		$('#footer').load("commonHtml/footer.html");
		//footer  end
		
		//scroll bar start
		 $(window).scroll(function(){
		 	if ($(window).scrollTop()<500){
		 		$('.scroll-bar').css('display','none')
		 	}else{
		 		$('.scroll-bar').css('display','block')
		 	}
		 	   if ($(window).scrollTop()>200){
                $("#scrollTop").click(function(){
                $('body,html').scrollTop(0);
               
            });
           }
            });
 //scroll bar end
 		//中间内容  右侧位置
  		$(document).scroll(function(){
        		var tt = $(document).scrollTop();
        		console.log(tt);
        		if(tt>586&&tt<3400){
        			$('#rightCon').css({'position':'fixed','top':0,'left':'874.5px'})
        		}else if(tt>3400){
        			$('#rightCon').css({'position':'absolute','top':'3379px','left':'874.5px'})
        		}else{
        			$('#rightCon').css({'position':'static'})
        		}
        	})
 
})
