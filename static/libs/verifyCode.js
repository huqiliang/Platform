require('jquery')
var verifyCode=module.exports=function(obj){
	$(obj).on("click",function(){
		$(this).attr("src","http://www.9djd.cn/verifyCode.htm?t=" + new Date().getTime())
	})
	
}