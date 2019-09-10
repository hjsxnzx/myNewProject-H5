//通过require请求加载cats.js模块
var cats = require('./cats.js');
var common = require('../common.js');
require('./index.css');
common();
//打印请求回来的cats
consolep.log(cats);
$('body').html("一直想明白")