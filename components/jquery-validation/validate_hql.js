(function (factory) {
    
    module.exports = factory(require('jquery'), require('./jquery.validate'));
}(function ($) {
	//身份证扩展验证
		$.validator.addMethod("isCid",function ( value ) {
			//身份证正则表达式(15位) 
			isIDCard1=/^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$/; 
			//身份证正则表达式(18位) 
			isIDCard2=/^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{4}$/; 
			//地区、性别和身份证进行判断的正则表达式：  
			var  aCity={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江",31:"上海",32:"江苏",33:"浙江",34:" 安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州" ,53:"云南",54:"西藏",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外"} 
			return (function cidInfo(){ 
				var iSum=0,info="";
				if(!/^\d{17}(\d|x)$/i.test(value))	return false; 
				value=value.replace(/x$/i,"a"); 
				if(aCity[parseInt(value.substr(0,2))]==null)	return false; 
				sBirthday=value.substr(6,4)+"-"+Number(value.substr(10,2))+"-"+Number(value.substr(12,2)); 
				var d=new Date(sBirthday.replace(/-/g,"/")) 
				if(sBirthday!=(d.getFullYear()+"-"+ (d.getMonth()+1) + "-" + d.getDate())) return false; 
					for(var i = 17;i>=0;i --) iSum += (Math.pow(2,i) % 11) * parseInt(value.charAt(17 - i),11) 
				if(iSum%11!=1) return false; 
				if($("input[name=sex]:checked").val()!=(value.substr(16,1)%2?"1":"2"))return false;
				return true  //返回校验true 地区男女
			})();
		});
		//手机扩展验证
		$.validator.addMethod("isPhone",function (value,element) {	
			return this.optional(element) || /^1((3\d)|(4[57])|(5[012356789])|(8\d))\d{8}$/.test(value);
		});
		//手机动态码扩展验证
		$.validator.addMethod("PhoneCode",function (value,element) {	
			if(value == null || value == "" || element.title=="")  
		        return false || this.optional(element);  
			if(element.title==value){
				return true;
			}else{
				return false;
			}
		});
		
}))