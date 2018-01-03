function waveify (elem) {
	var text = $(elem).text();
	$(elem).text("");
	for(var i in text) { 
	  if(text[i] === " ") {
	    $(elem).append( $("<span>").html("&nbsp;") ); 
	  } else {  
	    $(elem).append( $("<span>").text(text[i]) ); 
	  }
	}
	$(elem).addClass("wavetext");
}

$("h1, h3").each(function(index, elem){
	waveify(elem);
})



work.forEach((piece)=>{
	$("#work-stuff").append(
		$("<a href=\"#"+piece.folder+"\"></a>").append(
			"<div class=\"image-tile\" style=\"background-image:url(work/"+piece.folder+"/"+piece.thumb+");\"></div>"
		).append(
			$("<figcaption></figcaption>").text(piece.name)
		).append(
			$("<figcaption class=\"tags\"></figcaption>").text(piece.tags)
		)
	)
});
	
//Responds to a hash change. Scrolls to work, connect, or about, or puts the content of a given folder (given by hash) into the lightbox, and optionally fades if not in a hurry.
var activate = function(hurry,overrideHash){
	var hash=(overrideHash||window.location.hash).replace(/#/g,""), piece;
	$.scrollTo.window().stop(true);
	if(hash=="about"||hash=="connect"||hash=="work"||hash==""){
		if(!hurry){
			$.scrollTo("#"+(hash||"splash"),1000,function(){
				window.location.hash=hash;
			});
		}
	}
	else if(piece=getByFolder(hash)){
		var imageRegex=/\[([^\[\]]+)\]/g, underlineRegex=/\*([^\*]+)\*/g, centerRegex = /\{([^\{\}]+)\}/g;
		var callback=function(){
			var content=piece.content.replace(/\[/g,"\n[").replace(/\]/,"]\n").replace(/\n+/g,"\n").replace(/^\s+|\s+$/g,"").split("\n"),contentString="";
			for (var i = 0; i < content.length; i++) {
				if(content[i].search(imageRegex)>=0){
					contentString+=content[i].replace(imageRegex,function(a,b){return "<img src=\"work/"+piece.folder+"/"+b+"\">"});
				}
				else{
					contentString+="<div"+(content[i].search(centerRegex)>=0?" class=\"center-align\"":"")+">"+content[i].replace(centerRegex,function(a,b){return b;}).replace(underlineRegex,function(a,b){return "<span class=\"highlight\">"+b+"</span>"})+"</div>"
				}

			};
			$("#content").html("<h3>"+piece.name+"</h3><br>"+contentString);
			$("#content").find("h3").each(function(index, elem){
				waveify(elem);
			})
			$("#lightbox").show();
			$.scrollTo("#lightbox",0);
		}
		if(hurry){
			callback();
		}
		else{
			$("body").stop(true).fadeTo(200,0,function(){
				callback();
				$("body").fadeTo(500,1);
			});
		}
	}

}
var deactivate = function(){
	$("#lightbox").slideUp(500);
}
var getByFolder = function(folderName){
	for (var i = 0; i < work.length; i++) {
		if(work[i].folder==folderName){
			return work[i];
		}
	}
	return null;
}

$(document).ready(function(){
	if(getByFolder(window.location.hash.replace(/#/g,""))){
		activate(true);
	}
	$(".scroll, #up").click(function(event){
		var hash=$(event.target).is("a")?$(event.target).attr("href"):$(event.target).parent().attr("href");
		activate(false,hash);
		event.preventDefault();
	})

})
$(window).on("hashchange",function(){
	activate();
})
var tempAmount=0,prevAmount;
$(window).scroll(function(){
	tempAmount=$(window).scrollTop();
})

var slippy = $("core-animated-pages")[0];

setInterval(function(){
    slippy.selected += 1;
    if (slippy.selected>5){
        slippy.selected=0;
    }
},2000);