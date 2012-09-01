 /*
 * @author gnsg-swpy(Prince)
 * jQuery keyboard
 *
 * Copyright 2010, Genesis Networks Pte Ltd.
 * Depends: jquery.1.3.2.js above
 */
 
$(function() {
	//loadKeyboard("numPad");
	//$("input").loadKeyboard("abcPad");
	$(".vKeyboard").loadKeyboard("numPad");
	//$(".vKeyboard").loadKeyboard("abcPad");
	//$("#write3").loadKeyboard("abcPad");
	//$("#write4").loadKeyboard("numPad");
	//$("#write5").loadKeyboard("abcPad");
	//$("#write6").loadKeyboard("numPad");
	
	$('#icon_div #icon_key').click(function() {
		//alert($write.scrollTop() );
		//alert($write.offset());
		//$(window).scrollTop(100);
		/*
		var is_on = $("#keyboard").css("display");
		if(is_on == "block"){
			$("#keyboard").hide(300);
			//$write.removeClass("red");
		}else{
			$("#keyboard").show(300);
		}*/
	});
	
	//$("#keyboard").draggable({ cursor: 'move' });
});


/**
 * load key board
 * @param keyBoard = numPad or abcPad
 * example to load $(".vKeyboard").loadKeyboard("numPad");
 */

jQuery.fn.loadKeyboard = function(keyBoard){
	var $writeNew;
	$(this).each(function(){
		var $write = $(this);
		$write.dblclick(function(){
			$writeNew = $(this);
			$(window).scrollTop(250);
			//$write = $(this);
			$write.addClass("red");
			
			var position = $write.offset();
			$("#keyboard").css("top",position.top + 30);
			//alert(position.left);
			$("#keyboard").css("left",position.left + 20);

			
			$("#keyboard").show();
			if(keyBoard == "numPad"){
				$("#abcPad").hide();
				$("#keyboard").css("width","336px");
				$("#keyboard").css("_width","278px");
				$("#numPad").show(200);
			}else {//query pad, default load
				$("#numPad").hide();
				$("#keyboard").css("width","1194px");
				$("#keyboard").css("_width","990px");
				$("#abcPad").show(200);
			}
		
		
		}).blur(function(){
			$write.removeClass("red");
		});
		//alert($(this).attr("id") );
	});
	///*
	
	
	var shift = false, capslock = false;
	
	$('#keyboard button').click(function() {
		var $this = $(this);
		character = $this.html(); // If it's a lowercase letter, nothing happens to this variable
		
		//hide button
		if ($this.hasClass('keyboard-close')) {
			$("#keyboard").hide(300);
			return false;
		}
		
		// Num switch
		if ($this.hasClass('num')){
			$("#abcPad").hide();
			$("#keyboard").css("width","336px");
			$("#keyboard").css("_width","278px");
			$("#numPad").show(200);
			keyBoard = "numPad";
			return false;
		}
		// Abc switch
		if ($this.hasClass('abc')){
			$("#numPad").hide();
			$("#keyboard").css("width","1194px");
			$("#keyboard").css("_width","990px");
			$("#abcPad").show(200);
			keyBoard = "abcPad";
			return false;
		}
		
		$writeNew.focus();
		// Shift keys
		if ($this.hasClass('left-shift') || $this.hasClass('right-shift')) {
			$('.letter').toggleClass('uppercase');
			$('.symbol span').toggle();

			shift = (shift === true) ? false : true;
			capslock = false;
			return false;
		}

		// Caps lock
		if ($this.hasClass('capslock')) {
			$('.letter').toggleClass('uppercase');
			capslock = true;
			return false;
		}

		// Delete
		if ($this.hasClass('delete')) {
			var html = $writeNew.val();
			$writeNew.val(html.substr(0, html.length - 1));
			return false;
		}

		// Special characters
		if ($this.hasClass('symbol')){
			character = $('span:visible', $this).text();
		}
		if ($this.hasClass('space'))
			character = ' ';
		if ($this.hasClass('tab'))
			character = "\t";
		if ($this.hasClass('return'))
			character = "\n";
		
		
		// Uppercase letter
		if ($this.hasClass('uppercase'))
			character = character.toUpperCase();

		// Remove shift once a key is clicked.
		if (shift === true) {
			$('.symbol span').toggle();
			if (capslock === false)
				$('.letter').toggleClass('uppercase');

			shift = false;
		}
		

		// Add the character
		$writeNew.val($writeNew.val() + character);
	}).keypress(function(){
		var $this = $(this);
		// Delete
		alert("fd");
		if ($this.hasClass('delete')) {
			var html = $writeNew.val();
			$writeNew.val(html.substr(0, html.length - 1));
			return false;
		}
	});//*/
}
