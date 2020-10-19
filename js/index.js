//==================//
//wavify functions
//==================//

// function waveify (elem) {
// 	var text = $(elem).text();
// 	$(elem).text("");
// 	for(var i in text) {
// 	  if(text[i] === " ") {
// 	    $(elem).append( $("<span>").html("&nbsp;") );
// 	  } else {
// 	    $(elem).append( $("<span>").text(text[i]) );
// 	  }
// 	}
// 	$(elem).addClass("wavetext");
// }

// $("h3").each(function(index, elem){
// 	waveify(elem);
// })


//========================//
// willy's advanced F&R
//=======================//

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

//======================//
// helper function
// (see if it's a valid folder)
//======================//

var getByFolder = function(folderName){
	for (var i = 0; i < work.length; i++) {
		if(work[i].folder==folderName){
			return work[i];
		}
	}
	return null;
}

//======================//
// when you click on a project
//======================//

//Responds to a hash change. Scrolls to work, connect, or about, or puts the content of a given folder (given by hash) into the lightbox, and optionally fades if not in a hurry.

var activate = function(hurry,overrideHash){
	var hash=(overrideHash||window.location.hash).replace(/#/g,""), piece;
	$('body').stop(true);
	if(hash=="about"||hash=="work"||hash==""){
		if(!hurry){
			//$.scrollTo("#"+(hash||"splash"),1000,function(){
            //var wherewewannago = $("#"+(hash||"splash")).offset().top
			$('body').fadeOut(100,function(){
				window.location.hash=hash;
                $("#lightbox").hide();
                $("#about").show();

                $('body').fadeIn(100);

			});
		}
	}
	else if(piece=getByFolder(hash)){
        $('body').fadeOut(100,function(){
		var imageRegex=/\[([^\[\]]+)\]/g, underlineRegex=/\*([^\*]+)\*/g, centerRegex = /\{([^\{\}]+)\}/g;
//		var callback=function(){
			var content=piece.content.replace(/\[/g,"\n[").replace(/\]/,"]\n").replace(/\n+/g,"\n").replace(/^\s+|\s+$/g,"").split("\n"),contentString="";
			for (var i = 0; i < content.length; i++) {
				if(content[i].search(imageRegex)>=0){
					contentString+=content[i].replace(imageRegex,function(a,b){return "<img src=\"work/"+piece.folder+"/"+b+"\">"});
				}
				else{
					contentString+="<div"+(content[i].search(centerRegex)>=0?" class=\"center-align\"":"")+">"+content[i].replace(centerRegex,function(a,b){return b;}).replace(underlineRegex,function(a,b){return "<span class=\"highlight\">"+b+"</span>"})+"</div>"

                }
//======================//
// wave-ify the text
// this is also the part where kathy hacked together a border and "All projects" divider text
//======================//
			};
			$("#content").html("<h3>"+piece.name+"</h3><br>"+contentString+"<div id='contentdivider'></div>"+"<h3>All projects ↝</h3>");
			// $("#content").find("h3").each(function(index, elem){
			// 	waveify(elem);
			// })

//======================//
// show the lightbox
//======================//

		$("#lightbox").show();
        $("#about").hide();

//			var wherewewannago = $("#lightbox").offset().top
//			$('html, body').animate({scrollTop:wherewewannago },(hurry?0:400),function(){
//				window.location.hash=hash;
//			});


                window.location.hash=hash;
                $('body').scrollTop(0).fadeIn(100);

			});

//		}


	}

}



//==============================//
// what happens when page loads
//==============================//

//this is what happens when you load the page
$(document).ready(function(){
	if(getByFolder(window.location.hash.replace(/#/g,""))){
		activate(true);
	}
	$(".scroll").click(function(event){
		var hash=$(event.target).is("a")?$(event.target).attr("href"):$(event.target).parent().attr("href");
		activate(false,hash);
		event.preventDefault();
	})

})
$(window).on("hashchange",function(){
	activate();
})
