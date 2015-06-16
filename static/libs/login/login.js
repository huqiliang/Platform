require('auiDialog');
require('jquery.validate');
var verifyCode=require('/static/libs/verifyCode');
var loginTplFn = __inline('./_login.tmpl');
//登陆模块
var login = module.exports = function(opt){
	var dom = $(loginTplFn());
	var $login=dom.filter("#login");
	//换验证码
	verifyCode($login.find(".yzm_img"));
	//提交验证
	$login.validate({
		submitHandler : function (form) {
			$.ajax({ 
				 url: '/checkLogin',  			//登陆请求控制器
				 data:$login.serialize(),		//提交用户名跟密码
				 type:'POST',
				 dataType: "json",
				 success: function(res) {
				 	alert(res.code)
	  			    if(res.code=="0"){			//返回 0 登陆成功
	  			    	if(res.RedirectUrl!=""){
	  			    		//window.location.href=res.RedirectUrl;
	  			    	}else{
	  			    		//window.location.reload();
	  			    	}
	  			    }else{
	  			    	d.title("会员登陆")
	  			    	$("ol.request").text(res.message).show();
	  			    }
				 },
				 error : function(){ //请求完成后最终执行参数　　
				 	d.title("会员登陆")
				 	$("ol.request").text("登陆错误").show();
			　　}
			}); 
		},
		showErrors : function (errorMap, errorList) {
			var errors = this.numberOfInvalids();
			this.defaultShowErrors();
		},
		highlight : function (element, errorClass) {
			$(element).css('border', '1px solid #f00');
			$(element).parent().find('span').html('*').removeClass('succ');
		},
		unhighlight : function (element, errorClass) {
			$("ol.request").text('');
			$(element).css('border', '1px solid #ccc');
			$(element).parent().find('span').html('&nbsp;').addClass('succ');
		},
		
		errorLabelContainer : 'ol.login_error',
		wrapper : 'li',
		
		errorPlacement: function(error, element) {  
		    error.appendTo($('ol.login_error'));  
		},
		rules : {
				loginId : {
					required : true,
					number:true
				},
				loginPassword : {
					required : true,
					minlength : 6
				},
				verifyCode:{
					required:true
				}
		},
		messages : {
			loginId : {
				required : '帐号不能为空！',
				number:"请输入数字"
			},
			loginPassword : {
				required : '密码不能为空！',	
				minlength : '密码不能小于6位！'
			},
			verifyCode : {
				required : '验证码不能为空！'	
			}	
		}
	})
	$login.on("keydown",function(event) {
		if (event.keyCode==13) {$(this).submit();};
	});
	//弹窗
	var d = dialog({
	    title:'会员登陆',
	    content: dom,
	    fixed:true,
	    width:400,
	    ok: function () {
        	$login.submit()
	        return false;
	    },
	    okValue:"确定",
	    cancel: function () {
	       d.remove(); dom.remove()
	    },
	    cancelValue:"取消"
	}).showModal();
}