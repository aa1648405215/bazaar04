$(function(){
	$('#header').load("commonHtml/header02.html");
	$('#re').load("commonHtml/login02.html");
	$.getScript("commonJs/header02.js");
	$.getScript("commonJs/login02.js");
	
	//left container start 动态
	var sff =[{
						"src1": "img/listLeftBig/2.jpg",
						"name1": "宁静1天10片面膜变美未遂and加速烂脸......因为？",
						"src2":"img/listLeftBig/21.jpg",
						"time1":"前天"
						},
						{
						"src1": "img/listLeftBig/3.jpg",
						"name1": "吴昕泡脚也要化妆？get她的懒人卸妆法你也能有动力在家保持精致！",
						"src2":"img/listLeftBig/21.jpg",
						"time1":"2019-01-09"
						},
						{
						"src1": "img/listLeftBig/4.jpg",
						"name1": "翻开护肤大咖牛尔老师的包，发现每个产品都必买不可呢！",
						"src2":"img/listLeftBig/21.jpg",
						"time1":"2019-01-07"
						},
						{
						"src1": "img/listLeftBig/5.jpg",
						"name1": "“魑魅魍魉魃魈魁”，2019都到了，你怎么连这些都不知道？",
						"src2":"img/listLeftBig/21.jpg",
						"time1":"2019-01-08"
						},
						{
						"src1": "img/listLeftBig/6.jpg",
						"name1": "应采儿陈小春一家被“黑”？网友们比山鸡哥还激动......",
						"src2":"img/listLeftBig/21.jpg",
						"time1":"2019-01-09"
						},
						{
						"src1": "img/listLeftBig/7.jpg",
						"name1": "选择困难症的救星——那么多种水，我该“喝”哪一种？",
						"src2":"img/listLeftBig/21.jpg",
						"time1":"2019-01-09"
						},
						{
						"src1": "img/listLeftBig/8.jpg",
						"name1": "赵丽颖脸能透光......到底“打”什么了在脸上？",
						"src2":"img/listLeftBig/21.jpg",
						"time1":"前天"
						},
						{
						"src1": "img/listLeftBig/9.jpg",
						"name1": "保湿身体乳涂得不对等于随身携“电”！",
						"src2":"img/listLeftBig/21.jpg",
						"time1":"2019-01-09"
						},
						{
						"src1": "img/listLeftBig/10.jpg",
						"name1": "宋佳说女生睡得好比吃得好更重要！你有做到吗？",
						"src2":"img/listLeftBig/21.jpg",
						"time1":"前天"
						},
						{
						"src1": "img/listLeftBig/11.jpg",
						"name1": "寻芳记上线——跨越千山万水，看看他们都寻到了什么宝贝",
						"src2":"img/listLeftBig/21.jpg",
						"time1":"2019-01-09"
						},
						{
						"src1": "img/listLeftBig/12.jpg",
						"name1": "宋佳说女生睡得好比吃得好更重要！你有做到吗？",
						"src2":"img/listLeftBig/21.jpg",
						"time1":"前天"
						},
						{
						"src1": "img/listLeftBig/13.jpg",
						"name1": "保湿身体乳涂得不对等于随身携“电”！",
						"src2":"img/listLeftBig/21.jpg",
						"time1":"2019-01-09"
						},
						{
						"src1": "img/listLeftBig/14.jpg",
						"name1": "寻芳记上线——跨越千山万水，看看他们都寻到了什么宝贝",
						"src2":"img/listLeftBig/21.jpg",
						"time1":"前天"
						},
						{
						"src1": "img/listLeftBig/15.jpg",
						"name1": "选择困难症的救星——那么多种水，我该“喝”哪一种？",
						"src2":"img/listLeftBig/21.jpg",
						"time1":"2019-01-09"
						},
						{
						"src1": "img/listLeftBig/16.jpg",
						"name1": "寻芳记上线——跨越千山万水，看看他们都寻到了什么宝贝",
						"src2":"img/listLeftBig/21.jpg",
						"time1":"2019-01-09"
						},
						{
						"src1": "img/listLeftBig/17.jpg",
						"name1": "宁静1天10片面膜变美未遂and加速烂脸......因为？",
						"src2":"img/listLeftBig/21.jpg",
						"time1":"前天"
						},
						{
						"src1": "img/listLeftBig/18.jpg",
						"name1": "赵丽颖脸能透光......到底“打”什么了在脸上？",
						"src2":"img/listLeftBig/21.jpg",
						"time1":"2019-01-09"
						},
						{
						"src1": "img/listLeftBig/19.jpg",
						"name1": "寻芳记上线——跨越千山万水，看看他们都寻到了什么宝贝",
						"src2":"img/listLeftBig/21.jpg",
						"time1":"前天"
						},
						{
						"src1": "img/listLeftBig/20.jpg",
						"name1": "翻开护肤大咖牛尔老师的包，发现每个产品都必买不可呢！",
						"src2":"img/listLeftBig/21.jpg",
						"time1":"2019-01-01"
						},
						]
			
			$.each(sff, function(index,data2) {
				//console.log(data)
					var str3 = `<li>
							<div class="img-cl">
								<a>
									<img src="${data2.src1}"/>
								</a>
								<span class="caret"></span>
							</div>
							<div class="edge-cl">
								<p class="name-cl">
									<a>${data2.name1}</a>
								</p>
								<div class="source-cl">
									<a class="avatar-cl">
										<img src="${data2.src2}"/>
										时尚芭莎
									</a>
									<a>护肤</a>
									<span class="time-cl">${data2.time1}</span>
								</div>
							</div>
						</li>`;
					
					$('#ul-cl').append( str3 );
			});
	//left container end
	
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
 		//中间内容  右侧位置
 		$(document).scroll(function(){
        		var tt = $(document).scrollTop();
        		console.log(tt);
        		if(tt>1000&&tt<3400){
        			$('#listRight').css({'position':'fixed','top':'-950px','left':'874.5px'})
        			
        		}else if(tt>3400){
        			$('#listRight').css({'position':'absolute','top':'2761px','left':'874.5px'})
        				
        		}else{
        			$('#listRight').css({'position':'static'})
        		
        		}
        	})
})
