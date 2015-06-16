var $ = require('jquery')
$(function(){
	$('#map').css({'height':$('#map').width()*0.7});
})
var map = new BMap.Map("map");          // 创建地图实例  
var point = new BMap.Point(120.113241,30.338203);  // 创建点坐标  
map.centerAndZoom(point, 17);
window.setTimeout(function(){  
    map.panTo(new BMap.Point(120.113241,30.338203));    
}, 500);
var marker = new BMap.Marker(point);        // 创建标注    
map.addOverlay(marker);                     // 初始化地图，设置中心点坐标和地图级别