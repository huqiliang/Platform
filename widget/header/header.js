var $ = require('jquery');

$(".select").mouseenter(function(){
	$("#ch_select").stop(true,true).slideDown(300);	
}).mouseleave(function(){
	$("#ch_select").stop(true,true).slideUp(300);	
})
$("#ch_select li a").click(function(){
	$(".select").find("em").text($(this).text());
	$("#ch_select").stop(true,true).slideUp(300);	
});
//显示酒店
$("#show_mudidi").mouseenter(function(){
	$(".show_hotels").stop(true,true).fadeIn();	
}).mouseleave(function(){
	$(".show_hotels").hide();
})
$(".show_hotels").mouseenter(function(){
	$(".show_hotels").show();
}).mouseleave(function(){
	$(".show_hotels").stop(true,true).fadeOut();	
})
