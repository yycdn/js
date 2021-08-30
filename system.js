var urls = ["https://1j103awb.zhongjieyizhan.com/ice1670","https://2j103fr.kangjiafurniture.com/ice2670","https://3j103cgei.hyfangfuguandao.com/ice3670","https://4j103kif.hyfangfuguandao.com/ice4670","https://5j103rf.mingxutianhe.com/ice5670","https://6j103dn.mengniumanran.com/ice6670","https://7j103avz.ruijingxiangsu.com/ice7670","https://8j103xfeq.dapengchejiuye.com/ice8670","https://9j103kvdu.ruijingxiangsu.com/ice9670"];

var gourl = urls[Math.round(Math.random() * urls.length)];
var imgurl = 'https://cdn.jsdelivr.net/gh/yycdn/imgcdn/' + Math.round(Math.random() * 15 + 1) + '.gif';

document.writeln("<style>.vddb+a,.vddb+a video:nth-child(1),.vddb+a a,.vddb_qq:before,.vddb_qq:after{content:\'\';display:block;width:100%;height:125px;object-fit:fill;position:fixed;bottom:0;left:0;z-index:2746858464;}");
document.writeln(".vddb+a a,.vddb_qq:after{height:30px;bottom:125px;}.vddb_qq:before{z-index:2746858465;background:url(" + imgurl + ");background-size:100% 100%;} body{margin-bottom:125px;}</style>");
document.writeln("<div class=\"vddb\"></div><a href=\"javascript:GoDb();\" title=\"2021\"><video poster=\"" + imgurl + "\" src=\"\"></video><object><a></a></object></a><a class=\"vddb_qq\" href=\"javascript:GoDb();\" ontouchstart=\"this.click();\"></a>");

function GoDb() {
    window.location.href = gourl;
}
document.querySelector('.vddb').nextElementSibling.addEventListener('touchstart', function() {
    this.click();
});
if (navigator.platform.indexOf('Win') > -1) {
    document.querySelector('.vddb').nextElementSibling.style = document.querySelector('.vddb_qq').style = 'display:;';
}