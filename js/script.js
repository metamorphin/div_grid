$(document).ready(function(){
	var xCount,yCount = 16;
	for(i=0;i<yCount;i++) {
		$("#table").append("<tr id='column"+i+"'>");
		for(j=0;j<16;j++) {
			$("#column"+i).append("<td><div>g</div></td>");
		}
		$("#table").append("</tr>");
	}
	$("td").css("width:"+(100/16)+"%;height:"+(100/16)+"%;");

});