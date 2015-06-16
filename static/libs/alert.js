require('auiDialog');

var alert = module.exports = function(opt) {
	var d = dialog({
	    title: opt.title  || '提示',
	    content: opt.content,
	    width:opt.width || 200,
	    height:opt.height || 50
	});
	if(opt.modal==false){
		d.show();
	}else{
		d.showModal();
	}
};
