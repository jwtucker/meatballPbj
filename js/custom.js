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
			calculateResize();
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
			calculateResize();
		});
	});

	meatballArrowAnimate();
	pbjArrowAnimate();

	calculateResize();

	$(window).resize(function(){
		calculateResize();
	});

});

function checkLinks(){

	$('.homeLink').click(function(){
		$(".window").hide();
		$("#home" + currentSite).show();
		currentSection = "#home";
		console.log($("#home" + currentSite).height());
	});

	$('.menuLink').click(function(){
		$(".window").hide();
		$("#menu" + currentSite).show();
		currentSection = "#menu";
		console.log($("#menu" + currentSite).height());
	});

	$('.pressLink').click(function(){
		$(".window").hide();
		$("#press" + currentSite).show();
		currentSection = "#press";
		console.log($("#press" + currentSite).height());
	});

	$('.bioLink').click(function(){
		$(".window").hide();
		$("#bio" + currentSite).show();
		currentSection = "#bio";
		console.log($("#bio" + currentSite).height());
	});

	$('.contactLink').click(function(){
		$(".window").hide();
		$("#contact" + currentSite).show();
		currentSection = "#contact";
		console.log($("#contact" + currentSite).height());
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

function calculateResize(){
	if($(window).height() > 900){
		$('.meatballBarWrapper').css('top',$(window).height()-300);
		$('.pbjBarWrapper').css('top',$(window).height()-300);
	}
	else{
		$('.meatballBarWrapper').css('top',600);	
		$('.pbjBarWrapper').css('top',600);	
	}
	$('.window').each(function(i){
		if($(window).height() > 900){
			$(this).css('margin-top', ($(window).height()-$(this).height())/2);
		}
		else{
			$(this).css('margin-top', (900-$(this).height())/2);
		}
	})
}