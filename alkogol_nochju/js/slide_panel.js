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

$(document).ready(function(){
    $("#panel").hide();
    $(".btn-slide").click(function(){
        $("#panel").slideToggle("slow");
        $(this).toggleClass("active");
        return false;
    });
    
    
    $('.slide-link').click(function(){
        $(this).next().next('div').slideToggle('slow');
        return false;
    });
});

}
/*
     FILE ARCHIVED ON 00:10:57 Dec 19, 2014 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 14:38:41 Jul 19, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 161.018
  exclusion.robots: 0.255
  exclusion.robots.policy: 0.246
  RedisCDXSource: 1.709
  esindex: 0.01
  LoadShardBlock: 131.979 (3)
  PetaboxLoader3.datanode: 83.58 (4)
  CDXLines.iter: 23.173 (3)
  PetaboxLoader3.resolve: 111.753 (2)
  load_resource: 111.804
*/