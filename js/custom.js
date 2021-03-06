var currentSection = '#home';
var currentSite = 'Pbj';

$(document).ready(function(){

	console.log(document.URL.toLowerCase());
	//console.log(document.getElementById("iframe_id").contentWindow.location.href);
	console.log(document.referrer);

	if(document.URL.toLowerCase().indexOf('meatball') != -1 || document.referrer.toLowerCase().indexOf('meatball') != -1) currentSite = 'Meatball';

	$(".window").hide();
	if(currentSite == 'Pbj'){
		$(".meatballMain").hide();		
	}
	else{
		$(".pbjMain").hide();
	}
	$('#home' + currentSite).show();
	if(currentSite == 'Pbj')	$('body').toggleClass('purple',600);

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

	meatballClickHereAnimate();
	pbjClickHereAnimate();

	calculateResize();

	$(window).resize(function(){
		calculateResize();
	});

});

$(window).load(function(){
	calculateResize();
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

function meatballClickHereAnimate(){
	$('.meatballClickHere').fadeOut(1500,function(){
		$('.meatballClickHere').fadeIn(1500,meatballClickHereAnimate());
	})
}

function pbjClickHereAnimate(){
	$('.pbjClickHere').fadeOut(1500,function(){
		$('.pbjClickHere').fadeIn(1500,pbjClickHereAnimate());
	})
}

function calculateResize(){
	if($(window).height() > 900 && $(window).width() > 1169){
		$('.meatballBarWrapper').css('top',$(window).height()-320);
		$('.pbjBarWrapper').css('top',$(window).height()-320);
	}
	else if($(window).height() > 900 && $(window).width() <= 1169){
		$('.meatballBarWrapper').css('top',105);
		$('.pbjBarWrapper').css('top',90);
	}
	else if($(window).height() < 900 && $(window).width() > 1169){
		$('.meatballBarWrapper').css('top',600);	
		$('.pbjBarWrapper').css('top',600);	
	}
	else{
		$('.meatballBarWrapper').css('top',105);
		$('.pbjBarWrapper').css('top',90);
	}
	$('.window').each(function(i){
		if($(window).height() > 900 && $(window).width() > 1169){
			$(this).css('margin-top', ($(window).height()-$(this).height())/2);
		}
		else if($(window).height() < 900 && $(window).width() > 1169){
			$(this).css('margin-top', (900-$(this).height())/2);
		}
		else{
			$(this).css('margin-top', 0);
		}
	})
}