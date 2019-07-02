$(function(){
	$('#header').load("commonHtml/header02.html");
	$('#re').load("commonHtml/login02.html");
	$.getScript("commonJs/header02.js");
	$.getScript("commonJs/login02.js");
	
	//动态
	var sdd = [{
						"src": "img/trialCenter/4.jpg",
						"name": "Bio-MESO肌活衡肤瓷感动力肌底液",
						"time1":"7",
						"time2":"10",
						"num":"10份",
						"hot":"7676",
						"size":"680元/48ml",
						"sub":"提交报告"						
					},
					{
						"src": "img/trialCenter/2.jpg",
						"name": "CPB肌肤之钥立体紧颜精华乳",
						"time1":"8",
						"time2":"15",
						"num":"15份",
						"hot":"494",
						"size":"中样",
						"sub":"申请试用"	
					},
					{
						"src": "img/trialCenter/3.png",
						"name": "BABOR芭宝保湿滋润安瓶精华液",
						"time1":"9",
						"time2":"15",
						"num":"10份",
						"hot":"3012",
						"size":"269元/48ml",
						"sub":"提交报告"	
					},
					{
						"src": "img/trialCenter/4.jpg",
						"name": "Bio-MESO肌活衡肤瓷感动力肌底液",
						"time1":"7",
						"time2":"10",
						"num":"10份",
						"hot":"10654",
						"size":"358元/48ml",
						"sub":"提交报告"	
					},
					{
						"src": "img/trialCenter/5.jpg",
						"name": "EVE LOM亮采洁净面膜",
						"time1":"4",
						"time2":"14",
						"num":"10份",
						"hot":"55634",
						"size":"510元/50ml",
						"sub":"提交报告"	
					},
					{
						"src": "img/trialCenter/1.jpg",
						"name": "Origins悦木之源榆绿木青春紧弹精华素",
						"time1":"6",
						"time2":"15",
						"num":"10份",
						"hot":"7676",
						"size":"680元/48ml",
						"sub":"提交报告"	
					},]
	
//	console.log(srr);
			$.each(sdd, function(index,data) {
//				console.log(data)
					var str = `<li>
								<div class="list-lf">
									<a>
										<img src="${data.src}"/>
									</a>
								</div>
								<div class="list-rt">
									<span class="pro-tit">
										<a>${data.name}</a>
									</span>
									<div class="pro-time">
										离报告截止时间：
										<span>${data.time1}</span>
										天
										<span>${data.time2}</span>
										小时
									</div>
									<div class="pro-info">
										<div class="cm pro-info1">
											试用数
											<br />
											${data.num}
										</div>
										<div class="cm pro-info2">
											热度
											<br />
											${data.hot}
										</div>
										<div class="cm pro-info3">
											规格
											<br />
											${data.size}
										</div>
									</div>
									<div class="pro-apply">
										<a>${data.sub}</a>
									</div>
								</div>
							</li>`;
					
					$('#aUl').append( str );
			});
			var scc =[{
						"src": "img/trialCenter/5.jpg",
						"name": "EVE LOM亮采洁净面膜",
						"time":"活动已结束",						
						"num":"10份",
						"hot":"55634",
						"size":"510元/50ml",
						"sub":"提交报告"	
						},
						{
						"src": "img/trialCenter/4.jpg",
						"name": "EVE LOM亮采洁净面膜",
						"time":"活动已结束",						
						"num":"10份",
						"hot":"55634",
						"size":"510元/50ml",
						"sub":"提交报告"	
						},
						{
						"src": "img/trialCenter/2.jpg",
						"name": "EVE LOM亮采洁净面膜",
						"time":"活动已结束",						
						"num":"10份",
						"hot":"55634",
						"size":"510元/50ml",
						"sub":"提交报告"	
						}]
			//第二次动态创建
			$.each(scc, function(index,da) {
//				console.log(data)
					var str2 = `<li>
								<div class="list-lf">
									<a>
										<img src="${da.src}"/>
									</a>
								</div>
								<div class="list-rt">
									<span class="pro-tit">
										<a>${da.name}</a>
									</span>
									<div class="pro-time">										
										<span>${da.time}</span>																			
									</div>
									<div class="pro-info">
										<div class="cm pro-info1">
											试用数
											<br />
											${da.num}
										</div>
										<div class="cm pro-info2">
											热度
											<br />
											${da.hot}
										</div>
										<div class="cm pro-info3">
											规格
											<br />
											${da.size}
										</div>
									</div>
									<div class="pro-apply">
										<a>${da.sub}</a>
									</div>
								</div>
							</li>`;
					
					$('#aUl').append( str2 );
			});
			
		//footer start
		$('#footer').load("commonHtml/footer.html");
		//footer end
			
})
