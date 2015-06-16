var $ = require('jquery')
var datapicker=require('jquery-ui/i18n/datepicker-zh-TW')
var addDate=require("libs/utils.adddate")
/*获取当天日期*/
var jtd = new Date();
var monthw = jtd.getMonth()+1;
var datew = jtd.getDate();
if(monthw < 10){
	var monthw = '0' + monthw;
}
if(datew < 10){var datew = '0' + datew}
var jtstr = jtd.getFullYear()+"-"+ monthw +"-"+ datew;
$("#CheckInDate").val(jtstr);

/*获取明天日期*/
$("#CheckOutDate").val(addDate(jtstr,1));

//时间选择框声明
var dates = $( "#CheckInDate, #CheckOutDate" ).datepicker({
	minDate:0,
	showButtonPanel: true,
	dateFormat:"yy-mm-dd",
	closeText:'x',
	gotoCurrent:true,
	showButtonPanel:false,
	numberOfMonths: 1,
	beforeShow:function(){
		$(this).css("zIndex","9999999999");
		$(".room_types_list li").css("zIndex","0");
	},
	onSelect: function( selectedDate ) {
		var option = this.id == "CheckInDate" ? "minDate" : "maxDate",
			instance = $( this ).data( "datepicker" ),
			date = $.datepicker.parseDate(
				instance.settings.dateFormat ||
				$.datepicker._defaults.dateFormat,
				selectedDate, instance.settings );
			selectedDate=selectedDate.toString()
		dates.not( this ).datepicker( "option", option, addDate(selectedDate,1) );
		
	}
});	