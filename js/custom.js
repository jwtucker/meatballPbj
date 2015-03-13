var currentSection = '#home';
var currentSite = 'Pbj';

$(document).ready(function(){

	$(".window").hide();
	$(".meatballMain").hide();
	$('#home' + currentSite).show();
	$('body').toggleClass('purple',600)

	checkLinks();

	$('.pbjBarWrapper').click(function(){
		currentSite = 'Pbj';	
		$('.meatballMain').fadeOut(1000, function(){
			$('.window').hide();
			$('#home' + currentSite).show();
			$('.pbjMain').fadeIn(600);
			$('body').toggleClass('purple',600);
		});
	});

	$('.meatballBarWrapper').click(function(){
		currentSite = 'Meatball';
		$('body').toggleClass('purple',600);
		$('.pbjMain').fadeOut(1000, function(){
			$('.window').hide();
			$('#home' + currentSite).show();
			$('.meatballMain').fadeIn(600);
		});
	});

	meatballArrowAnimate();
	pbjArrowAnimate();



});

function checkLinks(){

	$('.homeLink').click(function(){
		$(".window").hide();
		$("#home" + currentSite).show();
		currentSection = "#home";
	});

	$('.menuLink').click(function(){
		$(".window").hide();
		console.log(currentSite);
		$("#menu" + currentSite).show();
		currentSection = "#menu";
	});

	$('.pressLink').click(function(){
		$(".window").hide();
		$("#press" + currentSite).show();
		currentSection = "#press";
	});

	$('.bioLink').click(function(){
		$(".window").hide();
		$("#bio" + currentSite).show();
		currentSection = "#bio";
	});

	$('.contactLink').click(function(){
		$(".window").hide();
		$("#contact" + currentSite).show();
		currentSection = "#contact";
	});
}

function meatballArrowAnimate(){
	$('.meatballArrow').fadeOut(1500,function(){
		$('.meatballArrow').fadeIn(1500,meatballArrowAnimate());
	})
}

function pbjArrowAnimate(){
	$('.pbjArrow').fadeOut(1500,function(){
		$('.pbjArrow').fadeIn(1500,pbjArrowAnimate());
	})
}