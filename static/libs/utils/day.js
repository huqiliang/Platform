//日期格式化扩展
Date.prototype.Format = function (fmt) { //author: meizz 
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "h+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

function day(){}

day.prototype.today= function(){ 
    var d = new Date();
    var m=d.getMonth()+1;
    return d.getFullYear()+'-'+(m<10?("0"+m):m)+'-'+(d.getDate()<10?"0"+d.getDate():d.getDate());    
};
day.prototype.addDate= function(date,days){ 
    var d=new Date(date.replace(/-/g,"/"));
    d.Format(date);
    d.setDate(d.getDate()+days); 
    var m=d.getMonth()+1;
    return d.getFullYear()+'-'+(m<10?("0"+m):m)+'-'+(d.getDate()<10?"0"+d.getDate():d.getDate()); 
};
//实例化
var day = module.exports =new day()
