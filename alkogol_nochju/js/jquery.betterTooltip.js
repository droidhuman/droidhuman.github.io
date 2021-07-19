var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

/*-------------------------------------------------------------------------------
	A Better jQuery Tooltip
	Version 1.0
	By Jon Cazier
	jon@3nhanced.com
	01.22.08
-------------------------------------------------------------------------------*/

$.fn.betterTooltip = function(options){
	
	/* Setup the options for the tooltip that can be 
	   accessed from outside the plugin              */
	var defaults = {
		speed: 200,
		delay: 300
	};
	
	var options = $.extend(defaults, options);
	
	/* Create a function that builds the tooltip 
	   markup. Then, prepend the tooltip to the body */
	getTip = function() {
		var tTip = 
			"<div class='tip'>" +
				"<div class='tipMid'>"	+
				"</div>" +
				"<div class='tipBtm'></div>" +
			"</div>";
		return tTip;
	}
	$("body").prepend(getTip());
	
	/* Give each item with the class associated with 
	   the plugin the ability to call the tooltip    */
	$(this).each(function(){
		
		var $this = $(this);
		var tip = $('.tip');
		var tipInner = $('.tip .tipMid');
		
		var tTitle = (this.title);
		this.title = "";
		
		var offset = $(this).offset();
		var tLeft = offset.left;
		var tTop = offset.top;
		var tWidth = $this.width();
		var tHeight = $this.height();
		
		/* Mouse over and out functions*/
		$this.hover(
		function() {
		var offset = $(this).offset(); // !
		var tLeft = offset.left; // !
		var tTop = offset.top; // !
		tipInner.html(tTitle);
		setTip(tTop, tLeft);
		setTimer();
		},
		function() {
		stopTimer();
		tip.hide();
		}
		);
		
	
		
		
		
		/* Delay the fade-in animation of the tooltip */
		setTimer = function() {
			$this.showTipTimer = setInterval("showTip()", defaults.delay);
		}
		
		stopTimer = function() {
			clearInterval($this.showTipTimer);
		}
		
		/* Position the tooltip relative to the class 
		   associated with the tooltip                */
		setTip = function(top, left){
			var topOffset = tip.height();
			var xTip = (left-30)+"px";
			var yTip = (top-topOffset-60)+"px";
			tip.css({'top' : yTip, 'left' : xTip});
		}
		
		/* This function stops the timer and creates the
		   fade-in animation                          */
		showTip = function(){
			stopTimer();
			tip.animate({"top": "+=20px", "opacity": "toggle"}, defaults.speed);
		}
	});
};

}
/*
     FILE ARCHIVED ON 23:28:09 Dec 18, 2014 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 11:59:01 Jul 19, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots.policy: 0.264
  CDXLines.iter: 18.86 (3)
  esindex: 0.012
  captures_list: 97.842
  exclusion.robots: 0.276
  LoadShardBlock: 75.789 (3)
  PetaboxLoader3.datanode: 97.382 (4)
  PetaboxLoader3.resolve: 35.773
  RedisCDXSource: 0.618
  load_resource: 68.62
*/