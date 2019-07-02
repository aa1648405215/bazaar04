$(function(){
		$('#header').load("commonHtml/header02.html");
		$('#re01').load("commonHtml/login02.html");
		$.getScript("commonJs/header02.js");
		$.getScript("commonJs/login02.js");
		
		//New 轮播 start
		uptime();
		function uptime(){
		var num =0;
		setInterval(function(){
			num++;
			if(num==3){
				num =0;				
				$('.style1').css('transition','0.5s none').css({'top':'0px'});	
				num =0;	
			}else{
				$('.style1').css('transition','0.5s ease-in-out');
			}
			var nowtop = -num*25;
			$('.style1').css('top',nowtop)
		},2000);
		}
		//New  end
		//轮播   start			
			slider();
			function slider(){
				inter();
				var iNow = 0;
				var timer;
				//遍历按钮数组,取索引值
				for(var i=0;i<$('.picBtn').length;i++){
//					console.log(i);
					bind(i);
				}
				//为按钮绑定点击事件,当点击事件发生时,调用changePic(index)改变图片透明度
				function bind(index){
					$('.picBtn')[index].onclick = function(){
				//当点击按钮时,清除定时器, 让后面changePic( index )调用++后,再重启定时器
						clearInterval(timer);
						iNow = index;
//						console.log('点击'+index);
						changePic( index );
						inter ();
					}
				}

				function changePic(){
					for(var j=0;j<$('.picBtn').length;j++){
					var nowleft = -iNow*1000;
//					console.log(nowleft);
//					oPicBox.style.left = nowleft;
					$('#picbox').css('left',nowleft);
					//console.log(oPicBox.left);
					//$('.picBtn')[j].style.backgroundColor='white';
					$('.picBtn').eq(j).css('background','white');
					if(j==iNow){
						$('.picBtn').eq(j).css('background','skyblue');
					}
					if(iNow==$('.picBtn').length){
						$('.picBtn').eq(0).css('background','skyblue');
					}
					
					}
					
				}
				//设置间隔定时器  来完成自动轮播
				function inter (){
					//timer全局变量 
					timer = setInterval(function(){
					iNow++;
					if(iNow>$('.bigPic').length-1){
						iNow = 0;
//						oPicBox.style.transition = '';
						$('#picbox').css('transition','');
						changePic();
					}else{
//						oPicBox.style.transition = 'left 0.2s';
						$('#picbox').css('transition','left 0.2s');
						changePic();
					}
//					console.log(iNow);
//					changePic();
				},3000);
				}
				//向前
				$('#before').click (function(){
					clearInterval(timer);
					iNow --;
					if(iNow<0){
						iNow = $('.bigPic').length-1;
					}
					console.log('向前'+iNow);
					changePic( iNow );
					inter();
				})
				//向后
				$('#next').click (function(){
					clearInterval(timer);
					iNow ++;
					if(iNow>$('.bigPic').length-1){
						iNow = 0;
					}
					console.log('向后'+iNow);
					changePic( iNow );
					inter();
				})
			}
			
			$('#box').mouseover(function(){
				$('#before').css('display','block');
				$('#next').css('display','block');
			})
			$('#box').mouseout(function(){
				$('#before').css('display','none');
				$('#next').css('display','none');
			})
		//轮播    end
		///////////////////////////////////////////////////////////////////
		
		//轮播2  start
		slider2();
		function slider2(){
		//01.布局  
		//   ul  absolute  top0  left0
		//02. setintrval   改变ul定位的left值
		var iNow = 0;

		function changePic(){
			var nowleft = -iNow*920;
			console.log(nowleft);
			$('#picbox1').css('left',nowleft)
		}
			
		//向前
		$('#before1').click (function(){		
//         clearInterval(timer);
			iNow --;
			if(iNow<0){
				iNow = 2;
			}
			console.log('向前'+iNow);
			changePic();
		})
		//向后
		$('#next1').click (function(){
//			clearInterval(timer);
			iNow ++;
			if(iNow>2){
				iNow = 0;
			}
			console.log('向后'+iNow);
			changePic();			
		})
	}
			
		//轮播2  end
		//轮播3  start
		slider3();
		function slider3(){
			inter();
				var iNow = 0;
				var timer;
				//遍历按钮数组,取索引值
				for(var i=0;i<$('.picBtn1').length;i++){
//					console.log(i);
					bind(i);
				}
				//为按钮绑定点击事件,当点击事件发生时,调用changePic(index)改变图片透明度
				function bind(index){
					$('.picBtn1')[index].onclick = function(){
				//当点击按钮时,清除定时器, 让后面changePic( index )调用++后,再重启定时器
						clearInterval(timer);
						iNow = index;
//						console.log('点击'+index);
						changePic( index );
						inter ();
					}
				}

				function changePic(){
					for(var j=0;j<$('.picBtn1').length;j++){
					var nowleft = -iNow*251;
//					console.log(nowleft);
					$('.one-bazaar-ul').css('left',nowleft);
					//console.log(oPicBox.left);
					$('.picBtn1').eq(j).css('background','#333');
					if(j==iNow){
						$('.picBtn1').eq(j).css('background','skyblue');
					}
					if(iNow==$('.picBtn1').length){
						$('.picBtn1').eq(0).css('background','skyblue');
					}
					
					}
					
				}
				//设置间隔定时器  来完成自动轮播
				function inter (){
					//timer全局变量 
					timer = setInterval(function(){
					iNow++;
					if(iNow>$('.picBtn1').length-1){
						iNow = 0;
						$('.one-bazaar-ul').css('transition','');
						changePic();
					}else{
						$('.one-bazaar-ul').css('transition','left 0.2s');
						changePic();
					}
				},5000);
				}
		}
		//轮播3  end
		//footer start
		$('#footer').load("commonHtml/footer.html");
		//footer end
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
 
   //神奇动物在哪里的   轮播

    		run();
			function run(){
				var iNow = 0;
				var timer;
				//遍历按钮数组,取索引值
				for(var i=0;i<$('.triggers ul li').length;i++){
					console.log(i);
					bind(i);
				}
				//为按钮绑定点击事件,当点击事件发生时,调用changePic(index)改变图片透明度
				function bind(index){
					$('.triggers ul li').eq(index).mousemove(function(){				
						iNow = index;
						console.log('点击'+index);
						changePic( index );
					});
				};
				//
				//先遍历大图,把所有大图透明度改为0
				//然后把点击事件的索引值赋值给j,使当前大图透明度为1
				function changePic( index ){					
					for(var j=0;j<$('.cont li').length;j++){
						$('.cont li').eq(j).css({'opacity':'0','z-index':'1'});
						if(j==index){
							$('.cont li').eq(index).css({'opacity':'1','z-index':'5'});
						}
					}
				}
			}
   //
   		


	});
