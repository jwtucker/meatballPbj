$(document).ready(function(){

	$('.navBar').css('left',$('#jumbotron').offset().left);

	$(window).resize(function(){
		$('.navBar').css('left',$('#jumbotron').offset().left);
	})

});