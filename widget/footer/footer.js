//公用js
//语言切换
$(function(){




	$("#sina").mouseenter(function(){
		$(this).find("img").attr("src","/static/images/sina_hover.jpg");
	}).mouseleave(function(){
		$(this).find("img").attr("src","/static/images/sina.jpg");
	})
	$("#weixin").mouseenter(function(){
		$(".erweima").stop(true,true).fadeIn();	
		$(this).find("img").attr("src","/static/images/weixin_hover.jpg");
	}).mouseleave(function(){
		$(".erweima").hide();
		$(this).find("img").attr("src","/static/images/weixin.jpg");
	})
	$(".erweima").mouseenter(function(){
		$(".erweima").show();
		$("#weixin").find("img").attr("src","/static/images/weixin_hover.jpg");
	}).mouseleave(function(){
		$(".erweima").stop(true,true).fadeOut();	
		$("#weixin").find("img").attr("src","/static/images/weixin.jpg");
	})
	
})