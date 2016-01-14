window.onload=function(){
	$(function(){
		$("#content").wrapInner("<table cellspacing='30'><tr>");
		$(".box").wrap("<td>");
	});

	$(".box").each(function(index){
			//console.log(index);
		$(this).css("background-color","green");
		var w=$(this).children('img').width();
		var h=$(this).children('img').height();
		$(this).children('img').css("height","0px");

		var newHeight=$(window).height()*4/5;
		var newWidth=newHeight*(w/h);

		$(this).css({
			width:newWidth,
			height:newHeight
		});
		$(this).children('img').css({
			height:newHeight,
			width:newWidth
		});
		var url=$(this).children('img').attr('src');
		$(this).css("background-image",'url('+url+')');
		$(this).css("background-repeat",'no-repeat');
		$(this).css("background-size",''+newWidth+'px '+newHeight+'px');
		$(this).children('img').css("height","0px");
	});

	//Setup About me page
	$(document).click(function(){
		$("#about").show();
	});
	$("#close").click(function(){
		$("#about").hide();
	});
	return 
}