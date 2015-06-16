var $ = require('jquery');

var login = require('libs/login/login');
var regedit = require('libs/regedit/regedit');

$('.login').on('click', function() {
    login() 
});
$('.regedit').on('click', function() {
    regedit()
});

