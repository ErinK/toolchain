/*
  Toolchain Labs Scripts
*/
		
'use strict';
		
	
	/* HEADER SCROLL
	===================================== */
	function headerBar(){
	var scrollTop = $(window).scrollTop();
    
	if(scrollTop > 10){
	  $('header').addClass('scroll');
	} else {
	  $('header').removeClass('scroll');
	}
  
	}
  
	$(window).scroll(headerBar);
	$(document).ready(headerBar);
    
    
	/* Animate on Scroll - Credit to https://www.sitepoint.com/scroll-based-animations-jquery-css3/ 
	=============================================================================================== */
	var $animation_elements = $('.animation-element');
	var $window = $(window);

	function check_if_in_view() {
	var window_height = $window.height();
	var window_width = $window.width();
	var window_top_position = $window.scrollTop();
	var window_bottom_position = (window_top_position + window_height);
	var window_middle_position = ( window_top_position + (window_height * .80) );
	var window_lower_position = ( window_top_position + (window_height * .95) );

	$.each($animation_elements, function() {
	  var $element = $(this);
	  var element_height = $element.outerHeight();
	  var element_top_position = $element.offset().top;
	  var element_bottom_position = (element_top_position + element_height);

	  //check to see if this current container is within viewport

	  if(window_width > 768){
	      if( (element_bottom_position >= window_top_position) &&
	          (element_top_position <= window_middle_position) ) {
	          $element.addClass('in-view');
	      }
	  } else {
	      if( (element_bottom_position >= window_top_position) &&
	          (element_top_position <= window_bottom_position) ) {
	          $element.addClass('in-view mobile');
	      }
	  }
      
	});
    
	}

	$window.on('scroll resize', check_if_in_view);
	$window.bind('load', function() {
	// wait for the page (including images) to load before trigging the animation events
	$window.trigger('scroll');
	});

	/* MOBILE MENU
	=========================================== */
	$('.mobile-menu.open').on('click', function(){
		$('.header-nav').addClass('active');
		$('.mobile-menu.close').css('opacity', '1');
	});
	$('.mobile-menu.close').on('click', function(){
		$('.header-nav').removeClass('active');
		$(this).css('opacity', '0');
	});
	

	/* COOKIE CONSENT MODAL 
	=========================================== */
	function hideDialog() {
	$('.modal').css({
	  transition: 'opacity 0.5s',
	  opacity: 0,
	})
	setTimeout(function(){
	  $('.modal').hide()
	}, 1000);
	}
	
	function showDialog() {
	  if($('.modal').length){
	    $('.modal').css({
		  display: 'block'
		});
      
		setTimeout(function(){
		  $('.modal').css({
		    opacity: 1
		  })
		}, 1500);
	  }
	}
	
	function termsAccepted() {
	  return $.cookie('accept_terms');
	}

	function setTermsAccepted() {
	  $.cookie('accept_terms', true);
	  hideDialog();
	}
	
	
	window.onload = function(e) {
    
	/* SHOW/HIDE COOKIE CONSENT */
	if (!termsAccepted()) {
	  showDialog();
	}
	else {
	  hideDialog();
	}
          
	}

