$(function(){
	$('#header').load("commonHtml/header02.html");
	$('#re').load("commonHtml/login02.html");
	$.getScript("commonJs/header02.js");
	$.getScript("commonJs/login02.js");
	
	//放大镜  start
			//01.布局
			//02.监听鼠标在spic上移动的事件 
			//  获取鼠标的坐标    改变square的位置
			//判断left  top
			
			$('#spic').mousemove(function(event){
				//获取鼠标在square的位置     因为clientX/Y会随滚动条的改变而改变   所以改用pageX/Y
				var nowleft = event.pageX - $('#spic').offset().left-75;
				var nowtop = event.pageY - $('#spic').offset().top-75;
				console.log(nowleft,nowtop)
				if(nowleft<0){
					nowleft = 0;
				}
				if(nowleft>530){
					nowleft = 530;
				}
				if(nowtop<0){
					nowtop = 0;
				}
				if(nowtop>190){
					nowtop = 190;
				}
				
				$('#square').css({
					'top':nowtop,
					'left':nowleft
				})
				$('#b').css({
					'top':-nowtop*2.2,
					'left':-nowleft*2.2
				})
			})
	//放大镜  end
	
	//footer start
		$('#footer').load("commonHtml/footer.html");
		//footer end
			
})
