$(document).ready(function(){
	var xCount = prompt("x");
	var yCount = xCount*0.75;
	for(i=0;i<yCount;i++) {
		$("tbody").append("<tr id='column"+i+"'>");
		for(j=0;j<xCount;j++) {
			$("#column"+i).append("<td><div class='tile'></div></td>");
		}
		$("tbody").append("</tr>");
	}
	$("td").css("width:"+(100/16)+"%;");
	$("tr").css("height:"+(100/16)+"%;");

	$(".tile").hover(function(){
		$(this).css("opacity",""+(parseFloat($(this).css("opacity"))+0.1));
	});

});

function randomColor(){
	var color = [];
	var hex = ["A","B","C","D","E","F",1,2,3,4,5,6,7,8,9];
	for(i=0;i<6;i++) {
		color[i] = hex[Math.floor(Math.random()*15)];
	}
	return "#"+(color.toString()).replace(/\,/g,"");
};




