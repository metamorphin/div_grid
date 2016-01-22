$(document).ready(function(){
	var xCount = 16;
	var yCount = 8;
	for(i=0;i<yCount;i++) {
		$("tbody").append("<tr id='column"+i+"'>");
		for(j=0;j<xCount;j++) {
			$("#column"+i).append("<td><div class='tile'></div></td>");
		}
		$("tbody").append("</tr>");
	}
	$("td").css("width:"+(100/16)+"%;");
	$("tr").css("height:"+(100/16)+"%;");

	$(".tile").click(function(){
	$(this).css("background-color","#000000");
	});

});


