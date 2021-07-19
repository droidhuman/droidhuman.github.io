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

$(document).ready(function() {
    $("#phone").mask("9-999-999-99-99");

    $('.toggle-box').hide();

    $('.toggle-link').click(function() {
        $(this).next('div.toggle-box').slideToggle('medium');
        $(this).toggleClass('active-toggle');
        return false;
    });

    $('div.subcategory-container').click(function() {
        var url = $(this).children('.subcategorylink').attr('href');
        location.href = url;
    });


    $('div#bottle, div.bottle-bow').click(function() {
        var url = '/';
        location.href = url;
    });

    $('div.hdr-hvr').click(function() {
        var url = '/dostavka.html';
        location.href = url;
    });


    $('.recept p a, a.show-recept').hover(function() {
        $('.shacker-link').addClass('active');
    }, function() {
        $('.shacker-link').removeClass('active');
    });

    $('div.hdr-hvr').hover(function() {
        $('div.lamp').addClass('hovered');
        $('div.nsk').addClass('hovered');
        $('a.phone').addClass('hovered');
    }, function() {
        $('div.lamp').removeClass('hovered');
        $('div.nsk').removeClass('hovered');
        $('a.phone').removeClass('hovered');
    });

    if ($.cookies.get('scroll_flag')) {
        scroll_to_elem('topmenu', 100);
        //alert('test');
    } else {
        $.cookies.set('scroll_flag', 1, {
            path: '/'
        });
    }


    $('#gift-rumble').jrumble({
        x: 2,
        y: 2,
        rotation: 1
    });

    $('#gift-rumble').hover(function() {
        $(this).trigger('startRumble');
    }, function() {
        $(this).trigger('stopRumble');
    });

// $("input, textarea, select, button").uniform();

    /* $('#orderform').ajaxForm(function() { 
     $("#orderform").empty();
     $(".ordermessage").removeClass('hidden');
     // alert("Форма отправлена!"); 
     });*/


});

function scroll_to_elem(elem, speed) {
    if (document.getElementById(elem)) {
        var destination = jQuery('#' + elem).offset().top;
        jQuery("html,body").animate({
            scrollTop: destination
        }, speed);
    }
}

}
/*
     FILE ARCHIVED ON 22:58:48 Dec 18, 2014 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 14:41:41 Jul 19, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 196.537
  exclusion.robots: 0.288
  exclusion.robots.policy: 0.278
  RedisCDXSource: 1.623
  esindex: 0.009
  LoadShardBlock: 170.284 (3)
  PetaboxLoader3.datanode: 60.833 (4)
  CDXLines.iter: 21.642 (3)
  PetaboxLoader3.resolve: 147.707 (2)
  load_resource: 107.894
*/