var webColor = [
	'#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"
]

function randomNum(){
	var length = webColor.length;
	var num = Math.round(Math.random()*length);
	return num;
}
$(document).ready(function(){
	var quote;
	var author;
	var num = randomNum();
	$("body").css({"backgroundColor":webColor[num],'color':webColor[num]});
	$(".btn-default").css("backgroundColor",webColor[num]);
	$.getJSON("https://v1.hitokoto.cn/",function(data){
		quote = data.hitokoto;
		author = data.creator;
		$("#quote").text(quote);
		$("#author").text(author);
	});

	$("#changeQuoteBtn").click(function(){
		$.getJSON("https://v1.hitokoto.cn/",function(data){
			quote = data.hitokoto;
			author = data.creator;
			$("#quote").text(quote);
			$("#author").text(author);
		});
		var num = randomNum();
		$("body").css({"backgroundColor":webColor[num],"color":webColor[num]});
		$(".btn-default").css("backgroundColor",webColor[num]);
	});

	$("#shareWeibo").bind("click",function(){
		window.open("http://service.weibo.com/share/share.php?title="+quote+"------"+author);
	});
	$("#shareQQ").on("click",function(){
        console.log(quote+author);
        window.open('http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=https://younguei.github.io/Random-Quote-Machine/&desc='+quote+'——'+author);
	 });
})