javascript:(()=>{
	var x=document.getElementsByTagName("img");
	var txt="<h1>alt Attribute Report</h1><table>";
	Array.from(x).forEach((image)=>{
		let at=image.getAttribute("alt")===null ? "<em>is MISSING ALT attribute.</em>":image.getAttribute("alt");
		txt+="<tr><td>";
		txt+=image.src.substring(image.src.lastIndexOf('/')+1)+"</td><td>"+at+"</td></tr>";
	});
	txt+="</table>";
	document.write("<html><head></head><body>"+txt+"</body></html>");
})();
//Use JSTool plugin, and JSMin to minify once ready to update bookmark.