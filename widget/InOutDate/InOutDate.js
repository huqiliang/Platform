var $ = require('jquery');
var day=require("libs/utils/day")
require('laydate')                //日历插件

var fday = day.today();
var eday = day.addDate(fday,1);

$("#CheckInDate").val(fday);

/*获取明天日期*/
$("#CheckOutDate").val(eday);

//时间选择框声明
laydate({
    elem: '#CheckInDate',
    format: 'YYYY-MM-DD', // 分隔符可以任意定义，该例子表示只显示年月
    min: fday, //最小日期
    festival: true, //显示节日
    choose: function(datas){ //选择日期完毕的回调
      var edate=day.addDate(datas,1)
      $("#CheckOutDate").val(edate);
      laydate({
	    elem: '#CheckOutDate',
	    format: 'YYYY-MM-DD', // 分隔符可以任意定义，该例子表示只显示年月
	    min: edate, //最小日期
	    festival: true, //显示节日
      });
    }
});

laydate({
    elem: '#CheckOutDate',
    format: 'YYYY-MM-DD', // 分隔符可以任意定义，该例子表示只显示年月
    min: fday, //最小日期
    festival: true, //显示节日
    choose: function(datas){ //选择日期完毕的回调
       
    }
});

