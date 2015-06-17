//当前日期
var today = module.exports = function(){ 

    var tday = new Date();

	var monthw = tday.getMonth()+1;

	var datew = tday.getDate();

	if(monthw < 10){var monthw = '0' + monthw;}

	if(datew < 10){var datew = '0' + datew}
		
	return tday.getFullYear()+"-"+ monthw +"-"+ datew;
};