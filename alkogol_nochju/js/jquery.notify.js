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

/**
* Notify plugin 1.0
*
* Copyright (c) 2010 Landgraf Paul (http://landgraf-paul.blogspot.com/)
* Licensed under the MIT
*/
jQuery.notify = {};

jQuery.notify.add = function (message, css, timeOut) {
    if (!timeOut) {
        timeOut = css;
        css = undefined;
    }
    if ($('#notifyBox').length == 0) {
        $(document.body).append('<table width="100%" id="notifyBox" style="position: fixed; top: 0px;"><tr><td align="center"><div id="boxs"></div></td></tr></table>');
    }
    var mesgId = 'messageBox' + (new Date).getTime();
    $('#boxs').append('<div id="' + mesgId + '" class="messageBox"></div>');
    if (css) {
        $('#' + mesgId).addClass(css);
    } else { //reset class
        $('#' + mesgId).attr('className', 'messageBox');
    }
    $('#' + mesgId).text(message).fadeIn();
    setTimeout(function () {
        $('#' + mesgId).fadeOut("normal", function () {
            $(this).remove();
        });
    }, timeOut * 1000);
    return $('#' + mesgId);
}

jQuery.notify.remove = function (obj, timeOut) {
    setTimeout(function () {
        obj.fadeOut("normal", function () {
            $(this).remove();
        });
    }, timeOut * 1000);
}

//.messageBox
//        {
//            display: none;
//            z-index: 10;
//            border: 1px solid #3399FF;
//            padding: 2px;
//            background-color: #99CCFF;
//            color: Black;
//            margin: 2px;
//            width: 300px;
//            font-size: 12px;
//            font-family: "Trebuchet MS" , "Helvetica" , "Arial" , "Verdana" , "sans-serif";
//        }

//var msgObj = $.notify.add("Начало сохранения", 3); //Выводим сообщение о начале действий (продолжительностью 3 сек) и сохраняем ссылку на сообщение в msgObj
//$.get('/test.php', function (result) {
//    if (result.ok) { //если все выполнилось удачно
//        $.notify.remove(msgObj, 0.5); //удаляем предыдущее сообщение через 0,5 сек, вдруг все сохранилось быстрее чем мы думали
//        $.notify.add("Сохранение выполнено успешно", 1); //и добавляем новое в стек сообщений
//    } else { //если произошла ошибка
//        $.notify.remove(msgObj, 0.5); //удаляем предыдущее сообщение через 0,5 сек, вдруг все сломалось быстрее чем мы думали
//        $.notify.add("Ошибка сохранения", { 'background-color': '#FF4242', 'border': '1px solid darkred' }, 3); //выводим сообщение "необычного" оформления на 3 сек
//    }
//} .bind(this));

}
/*
     FILE ARCHIVED ON 23:03:01 Dec 18, 2014 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 14:35:21 Jul 19, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.588
  PetaboxLoader3.resolve: 38.575
  CDXLines.iter: 37.34 (3)
  load_resource: 175.378
  RedisCDXSource: 1.474
  esindex: 0.027
  captures_list: 327.23
  exclusion.robots.policy: 0.561
  PetaboxLoader3.datanode: 294.283 (4)
  LoadShardBlock: 282.129 (3)
*/