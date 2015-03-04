$(document).ready(function(){

$(".window").hide();
$('#home').show();

$('#homeLink').click(function(){
	$(".window").hide();
	$("#home").show();
});

$('#menuLink').click(function(){
	$(".window").hide();
	$("#menu").show();
});

$('#pressLink').click(function(){
	$(".window").hide();
	$("#press").show();
});

$('#bioLink').click(function(){
	$(".window").hide();
	$("#bio").show();
});

});