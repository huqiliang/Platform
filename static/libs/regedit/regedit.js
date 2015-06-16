require('auiDialog');
require('default.validate');
var verifyCode=require('/static/libs/verifyCode');
//var SendMessage=require("SendMessage");
var regeditTplFn = __inline('./_regedit.tmpl');
//注册模块
var regedit = module.exports = function(opt){
	var dom = $(regeditTplFn());
	var $regedit=dom.filter("#regedit");
	//换验证码
	verifyCode($regedit.find(".yzm_img"));
	//注册框验证
	$regedit.validate({
	
		submitHandler : function (form) {
			$.ajax({
				   url:'/registerApplyWithOutVerify.htm',
				   type: 'POST',
				   dataType: 'json',
				   async: false,
				   data:$regedit.serialize(),
			       success: function(data){
			    	   if(data.resultCode == "0"){
			    		  window.location.href="/member/profile.htm";
			    	   }
			    	   else{
			    		    $(".reg_request").html(data.resultMsg).show();  
	                  		
			    	   }
				  }
			 });
		},
	
		showErrors : function (errorMap, errorList) {
			var errors = this.numberOfInvalids();
			this.defaultShowErrors();
		},
		
		highlight : function (element, errorClass) {
			$(".reg_request").html('');
			$(element).css('border', '1px solid #f00');
			$(element).parent().find('.star').html('*').removeClass('succ');
		},
		
		unhighlight : function (element, errorClass) {
			$(".reg_request").html('');
			$(element).css('border', '1px solid #ccc');
			$(element).parent().find('.star').html('&nbsp;').addClass('succ');
		},
	
		errorLabelContainer : 'ol.reg_error',
		wrapper : 'li',
		
		errorPlacement: function(error, element) {  
		    error.appendTo($('ol.reg_error'));  
		},

		rules : {
			username : {
				required : true
			},
			idNo : {
				required : true,
				isCid :true
			},
			password : {
				required : true,
				minlength : 6
			},
			vierfyPassword : {
				required : true,
				equalTo: "#regedit_pass" 
			},
			mobile : {
				required : true,
				isPhone:true
			},
			phone_code:{
				required:true,
				PhoneCode:true
			},
			verifyCode : {
				required:true
			},
			accept : {
				required:true
			}
		},
		messages : {
			username : {
				required : '姓名不能为空！'
			},
			idNo : {
				required : '身份证号不能为空！',
				isCid : '请输入正确的身份证号！'
			},	
			password : {
				required : '密码不能为空！',
				minlength : '密码不得小于6位！'
			},
			vierfyPassword : {
				required : '确认密码不能为空！',
				equalTo: "密码输入不一致！" 
			},
			mobile : {
				required : '手机号不能为空！',
				isPhone:"请输入正确的手机号！"
			},
			phone_code:{
				required : '手机动态码不能为空！',
				PhoneCode:"请输入正确的手机动态码！"
			},
			verifyCode : {
				required:'验证码不能为空！'
			},
			accept : {
				required:'请同意官网服务条款！'
			}

		}
	});
	//弹窗
	var d = dialog({
	    title:'会员登陆',
	    content: dom,
	    fixed:true,
	    width:400,
	    ok: function () {
        	$regedit.submit()
	        return false;
	    },
	    okValue:"确定",
	    cancel: function () {
	       d.remove(); dom.remove()
	    },
	    cancelValue:"取消"
	}).showModal();
}