
for (var i = 0; i < work.length; i++) {
	var piece=work[i];
	$("#work-stuff").append(
		$("<a href=\"#"+piece.folder+"\"></a>").append(
			"<div class=\"image-tile\" style=\"background-image:url(work/"+piece.folder+"/"+piece.thumb+");\"></div>"
		).append(
			$("<figcaption></figcaption>").html(piece.name)
		)
	)
}
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
var currentQuote=0;
var nextQuote = function(){
	var quote=quotes[currentQuote];
	$("#quote").html("<b>"+quote.quote+"</b>");
	$("#quote-source").html("<br>"+quote.from+"<br>"+quote.title+(quote.company?", "+quote.company:""))
	currentQuote++;
	if(currentQuote>=quotes.length){
		currentQuote=0;
	}
	$("#quote-container").fadeTo(1000,1).delay(5000).fadeTo(1000,0,function(){nextQuote()})
}

// var currentSplash=0;
// var nextSplash = function(){
// 	$("#splash").attr("style","background-image:url('splash/"+splashes[currentSplash]+"')");
// 	currentSplash++;

// 	if(currentSplash>=splashes.length){
// 		currentSplash=0;
// 	}

// 	setTimeout(nextSplash,5000);

// }

$(document).ready(function(){
	if(getByFolder(window.location.hash.replace(/#/g,""))){
		activate(true);
	}
	$("nav .links, .go, #kathy, #icons").click(function(event){
		var hash=$(event.target).is("a")?$(event.target).attr("href"):$(event.target).parent().attr("href");
		activate(false,hash);
		event.preventDefault();
	})
	quotes.sort(function(a,b){return Math.random()-0.5})
	nextQuote();
	// nextSplash();
})
$(window).on("hashchange",function(){
	activate();
})
var tempAmount=0,prevAmount;
$(window).scroll(function(){
	tempAmount=$(window).scrollTop();
})

//var raf=window.webkitRequestAnimationFrame||window.requestAnimationFrame;
//var update = function(){
//	var amount = tempAmount/$(window).innerHeight();
//	if(prevAmount!=tempAmount){
//		$("#name").css("opacity", 0.95*clamp(1-2*amount, 0, 1));
//		$("#splash").css("background-position", "center "+clamp(50-amount*40, 0, 100)+"%");		
//	}
//	prevAmount=tempAmount;
//	if(raf){
//		raf(arguments.callee);
//	}
//	else{
//		setTimeout(arguments.callee,1000/60);
//	}
//}
//update();
//
//function clamp(number, min, max){
//	if(number < min){
//		return min;
//	}
//
//	if(number > max){
//		return max;
//	}
//
//	else{
//		return number;
//	}
//
//};

var slippy = $("core-animated-pages")[0];

setInterval(function(){
    slippy.selected+=1;
    if (slippy.selected>5){
    slippy.selected=0;
    }
},2000);
