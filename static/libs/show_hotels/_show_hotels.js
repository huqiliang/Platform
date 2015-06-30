
 $(function(){
	//初始化
	var city="hot";
	var hotel=$(".hotels").children("ul").children("li");
	$(".citys").children("ul").eq(0).show().siblings().hide();
	$(".citys").children("ul").eq(0).children("li").eq(0).find("a").addClass("active");
	for(var i=0;i<hotel.length;i++){		
		if(hotel.eq(i).find("a").attr("city")==city){
			hotel.eq(i).show();
		}
	}
	//城市切换
	$(".city_tab a").click(function(){
		$("#ad_more").hide();
		$("#ad_more_info").hide();
		var index=$(this).index();
		$(this).addClass("active").siblings().removeClass("active");	
		$(".citys").children("ul").eq(index).show().siblings().hide();
		var data_city=$(".citys").children("ul").eq(index).children("li").eq(0).children("a").attr("data-city");
			$(".citys").children("ul").eq(index).children("li").eq(0).children("a").addClass("active");
		hotel.hide();//全部隐藏
		for(var i=0,len=hotel.length;i<len;i++){
			if(hotel.eq(i).find("a").attr("data-city")==data_city){
				hotel.eq(i).show();
			}
		}
		 if(data_city=='hot'){
			$("#ad_more").show();
			/* var len = hotel.length;
			for(var i=0;i<len;i++){			
				hotel.eq(i).show();
			} */
			for(var i=0;i<hotel.length;i++){		
				if(hotel.eq(i).find("a").attr("city")==data_city){
					hotel.eq(i).show();
				}
			}
		}
	})
	//酒店切换
	$(".citys").find("a").click(function(){
		$("#ad_more").hide();
		$("#ad_more_info").hide();
		$("#ad_more").text("more>>");
		var data_city=$(this).attr("data-city");
		$(".citys").find("a").removeClass("active");
		$(this).addClass("active");
		hotel.hide();//全部隐藏
		for(var i=0;i< hotel.length;i++){
			if(hotel.eq(i).find("a").attr("data-city")==data_city){
				hotel.eq(i).show();
			}
		}
		if(data_city=='hot'){
			$("#ad_more").show();
			 for(var i=0;i<hotel.length;i++){			
				 if(hotel.eq(i).find("a").attr("city")=="hot"){
					hotel.eq(i).show();
				 }
			} 
		}
	})
	$("#ad_more").click(function(){
		if($("#ad_more_info").is(":hidden")){
			$(this).text("收起>>")
			$("#ad_more_info").slideDown();
		}else{
			$(this).text("more>>")
			$("#ad_more_info").slideUp();
		}
	})
})
