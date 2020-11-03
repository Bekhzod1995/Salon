/*
 **	Plugin for counter shortcode
 */
(function($) {
	"use strict";

	$.fn.countTo = function(options) {
		// merge the default plugin settings with the custom options
		options = $.extend({}, $.fn.countTo.defaults, options || {});

		// how many times to update the value, and how much to increment the value on each update
		var loops = Math.ceil(options.speed / options.refreshInterval),
			increment = (options.to - options.from) / loops;

		return $(this).each(function() {
			var _this = this,
				loopCount = 0,
				value = options.from,
				interval = setInterval(updateTimer, options.refreshInterval);

			function updateTimer() {
				value += increment;
				loopCount++;
				$(_this).html(value.toFixed(options.decimals));

				if (typeof(options.onUpdate) === 'function') {
					options.onUpdate.call(_this, value);
				}

				if (loopCount >= loops) {
					clearInterval(interval);
					value = options.to;

					if (typeof(options.onComplete) === 'function') {
						options.onComplete.call(_this, value);
					}
				}
			}
		});
	};

	$.fn.countTo.defaults = {
		from: 0,  // the number the element should start at
		to: 100,  // the number the element should end at
		speed: 1000,  // how long it should take to count between the target numbers
		refreshInterval: 100,  // how often the element should be updated
		decimals: 0,  // the number of decimal places to show
		onUpdate: null,  // callback method for every time the element is updated,
		onComplete: null  // callback method for when the element finishes updating
	};

	$.fn.absoluteCounter=function(b){b=$.extend({},$.fn.absoluteCounter.defaults,b||{});return $(this).each(function(){var d=this,g=b.speed,f=b.setStyles,e=b.delayedStart,c=b.fadeInDelay;if(f){$(d).css({display:"block",position:"relative",overflow:"hidden"}).addClass('animated')}$(d).css("opacity","0");$(d).animate({opacity:0},e,function(){var l=$(d).text();$(d).text("");for(var k=0;k<l.length;k++){var n=l.charAt(k);var m="";if(parseInt(n,10)>=0){m='<span class="onedigit p'+(l.length-k)+" d"+n+'">';for(var h=0;h<=parseInt(n,10);h++){m+='<span class="n'+(h%10)+'">'+(h%10)+"</span>"}m+="</span>"}else{m='<span class="onedigit p'+(l.length-k)+' char"><span class="c">'+n+"</span></span>"}$(d).append(m)}$(d).animate({opacity:1},c);$("span.onedigit",d).each(function(i,o){if(f){$(o).css({"float":"left",position:"relative"});$("span",$(o)).css({display:"block"})}var p=$("span",$(o)).length,j=$(d).height();$(o).css({height:(p*j)+"px",top:"0"});$("span",$(o)).css({height:j+"px"});$(o).animate({top:-1*((p-1)*j)+"px"},g,function(){if(typeof(b.onComplete)==="function"){b.onComplete.call(d)}})})})})};

	$.fn.absoluteCounter.defaults= {
		speed:2000,
		setStyles:true,
		onComplete:null,
		delayedStart:0,
		fadeInDelay:0
	};

})(jQuery);