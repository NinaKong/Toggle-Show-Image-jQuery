/*Nina Kong*/
$(document).ready(function(){
	var windowHeight = $( window ).height();
	$(".Content").height(windowHeight);

    $(".Content").hover(displayImage);
    function displayImage(){
    	$(this).toggleClass("toggleImage");
    }
});
