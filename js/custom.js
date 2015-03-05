var currentSection = '#home';
var currentSite = 'Meatball';

$(document).ready(function(){

	$(".window").hide();
	$(".pbjMain").hide();
	$('#home' + currentSite).show();

	checkLinks();

	$('.pbjBarWrapper').click(function(){
		currentSite = 'Pbj';	
		$('.meatballMain').fadeOut(1000, function(){
			$('.window').hide();
			$(currentSection + currentSite).show();
			$('.pbjMain').fadeIn(600);
			$('body').toggleClass('purple',600);
		});
	});

	$('.meatballBarWrapper').click(function(){
		currentSite = 'Meatball';
		$('body').toggleClass('purple',1000);
		$('.pbjMain').fadeOut(1000, function(){
			$('.window').hide();
			$(currentSection + currentSite).show();
			$('.meatballMain').fadeIn(600);
		});
	});



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