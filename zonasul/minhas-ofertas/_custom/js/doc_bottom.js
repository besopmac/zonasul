
	function closeOverlayPopup(e){
		$(e.target).closest('.popup').fadeOut();
		$('body').find('.overlay-popup').fadeOut(300, function() {
			//$('body').find('.overlay-popup').remove();
			$('#map_lightbox').css('opacity','0');
		});
		$('body').css({
			"overflow" : ""
			});
	}

	/*LIGHT BOX*/
	$(document).keyup(function(e) {
		if (e.keyCode == 27) {
			closeOverlayPopup(e);
		};
	});
	$('.popup .btn-fechar').on('click', function(e){
		closeOverlayPopup(e);
	});
	$(document).on('click', '.bg_overlay_close', function(e){
		closeOverlayPopup(e);
	});
	// $('.overlay-popup').on('click', function(e){
	// 	closeOverlayPopup(e);
	// });

	$('[data-action="close"]').on('click', function(e){
		$(e.target).closest('.popup').fadeOut();
		$('body').find('.overlay-popup').fadeOut(300, function() {
			//$('body').find('.overlay-popup').remove();
			$('#map_lightbox').css('opacity','0');
		});
		$('body').css({
			"overflow" : "auto"
		});
	});
	$('[data-popup="modal"]').click(function(){
		var target = $(this).attr('data-open');
		var height = $('#' + target).outerHeight();

		$('body').css({
			"overflow" : "hidden",
		});
		$('#map_lightbox').css({'opacity':'1','z-index':'9999999'});

		if ($(this).attr('data-width')) {
			var width = $(this).attr('data-width');

			$('#' + target).css({
				"display" : "inline-block",
				"width" : width + "px"
			});
		}else{
			$('#' + target).css({
				"display" : "inline-block",
				"width" : "600px"
			});
		}
		$('#' + target).fadeIn(300);
		$('#' + target).parent().prepend('<div class="bg_overlay_close"></div>');
		//$('body').find('.overlay-popup').remove();
		//$('body').append('<div class="overlay-popup"></div>');
		$('#' + target).parent().css({
			"display" : "block"
		});

	});

	/*LIGHT BOX*/


// SCRIPT PARA REVELAR A SENHA
$(".toggle-password").click(function() {

  $(this).toggleClass("fa-eye fa-eye-slash");
  var input = $($(this).attr("toggle"));
  if (input.attr("type") == "password") {
    input.attr("type", "text");
  } else {
    input.attr("type", "password");
  }
});

// // INTERNA OFERTA
$('.content_faq').on('click', function() {
  var el = $(this).children('.circle.dourado');
  if (el.text() == el.data("text-swap")) {
    el.text(el.data("text-original"));
  } else {
    el.data("text-original", el.text());
    el.text(el.data("text-swap"));
  }
});

$('.btn').on('click', function() {
  var el = $(this);
  if (el.text() == el.data("text-swap")) {
    el.text(el.data("text-original"));
    $(this).removeClass('active');
  } else {
    el.data("text-original", el.text());
    el.text(el.data("text-swap"));
    $(this).addClass('active');
  }
});

// BUSCA PRODUTO
$('#busca_produto').on('submit', function(){
  $(this).parent().parent().parent().parent().addClass('active')
});
$('#busca_produto').on('keyup', function(){
  if($(this).children().val() == ''){
    $(this).parent().parent().parent().parent().removeClass('active')
  }
  
});
// CONFIRMAR OFERTA
$('.check-oferta').on('click', function(){
  $(this).parent().fadeOut(300);
  $(this).parent().prev().children('.close').fadeOut(300);
  $('.show-item, .valor-produto').fadeIn();
  $('.float-right.show-item').css('display','inline-flex');
});
// REMOVER PRODUTO
$('.item-oferta .close').on('click', function(){
  $(this).parent().fadeOut();
  $(this).parent().next().fadeOut();
});
// INCLUIR ITEM NA LISTA
$('.incluir-item').on('click', function(){
  
  // $(this).parent().fadeOut();
  // $(this).parent().next().fadeOut();
});
// POPOUP FLUXO
$('[data-open]').on('click', function(){
  var $modal = $(this).attr('data-open');  
  $('.overlay-popup').css('display','none');
  $('#'+$modal).parent().css('display','block');  
});

// SELECT
$('#order .select_list').click(function() {
		if($(this).attr('class') === 'select_list active'){
			$(this).next().toggle();
			$(this).removeClass('active');
		}else{
			$(this).next().toggle();
			$(this).addClass('active');
		}
});
$('.content_select_list ul li').click(function() {
  $(this).parent().hide(0);
  $(this).parent().parent().prev().removeClass('active');
  $(this).parent().prev().children('span').text($(this).text());
});

//SCRIPT PARA O OWL CAROUSEL
$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
      nav: true,
      dots: false,
      margin: 1,
      autoWidth: false,
      responsiveClass: true,
      responsive:{
        1000: {
  			  items: 5
  		  },
        980: {
  			  items: 3
  		  },
        0: {
  			  items: 1
  		  }
      }
  })
});

// TOGGLE DUVIDAS
// $('.toggle').click(function(){});
// $(".image").click(function (e) {
// 	if (e.target == this) {
// 			var that = $(this).siblings('.last-line');
// 			$(".last-line").not(that).slideUp();
// 			that.slideToggle();
// 	}
// });

