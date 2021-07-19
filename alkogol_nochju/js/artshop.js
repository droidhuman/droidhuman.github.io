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
	
    $("div.content_tabs").hide();
    $(".panel").hide();
    $(".description").hide();
    $(".pan0").show();
    $("#ct1").show();
	
    //$("#scene a, div .topblock_big a, #leftmenu_box a, .subcategorylink, .product_name, .scl").betterTooltip({speed: 150, delay: 300});
    //SetDefaultCity();	
    //CityItit();
    
    $("#login-form label").inFieldLabels();
    
    UpdateOrderFormTitles();
    
    
    $('#cart2').parent().click(function(){
        location.href = '/catalog/cart.html';
    });
    
    $('#cart2').parent().mouseover(function(){
        $('#cart2 .cartlink').addClass('hvr');
    }).mouseout(function(){
        $('#cart2 .cartlink').removeClass('hvr');
    });
    
    $('div.opt-box').mouseover(function(){
        //$(this).addClass('opt-box-hover');
        $(this).css({
            'background-position':'bottom'
        });
    }).mouseout(function(){
        //$(this).removeClass('opt-box-hover');
        $(this).css({
            'background-position':'top'
        });
    });
    
    $('#opt-viagra').click(function(){
        location.href = '/viagra-viagra-/viagra-optom.html';
    });
    
    $('#opt-cialis').click(function(){
        location.href = '/sialis-cialis-/sialis-optom.html';
    });
    
    $('#opt-levitra').click(function(){
        location.href = '/levitra-levitra-/levitra-optom.html';
    });
    
	
    //RefreshProductPriceForCity();
    $('.dyntitle').click(function(){
        var title = $(this).attr("title");
        var text = $(this).val();
         
        if(text == title)
        {
            $(this).val('');
            $(this).removeClass("grey");
        }
    });
    
    $('.dyntitle').blur(function(){
        var title = $(this).attr("title");
        var text = $(this).val();
        
        if(text == '')
        {
            $(this).val(title);
            $(this).addClass("grey");
        }
    });
	 
    $(".thumbs a").click(function(){	
        var largePath = $(this).attr("href");
        var largeAlt = $(this).attr("title");
        $("#largeImg").fadeOut(400, function (){
            $("#largeImg").attr({
                src: largePath, 
                alt: largeAlt
            });
        }).fadeIn(400);
        $("#image_descr").text($(this).attr("title"));
        $("#largeImg").fadeIn(400);		
        return false;
    });
	
    $("a.catbutton").click(function(){	
        var cl="." + $(this).attr("rel");
        $(".panel").hide();
        $(".description").hide();
        $(cl).show();		
        var largePath = $(this).attr("href");
        var largeAlt = $(this).attr("title");		
        $("#largeImg").attr({
            src: largePath, 
            alt: largeAlt
        });
        return false;
    });
	
    $("a.tabs").click(function(){

        $("a.tabs").removeClass("toptab");
        $(this).addClass("toptab");
        var cntid = "#"+$(this).attr("cntid");
		
        //$("div.content_tabs").fadeOut(400, function (){$(cntid).fadeIn(400);});
        //$("div.content_tabs").fadeOut(400, function (){$(cntid).Show();});
		
		
        //$("div.content_tabs").hide();
        //$(cntid).show();
        //$("div.content_tabs").fadeOut(300, function (){$(cntid).fadeIn(600);});
		
        var ua = navigator.userAgent.toLowerCase();
		
		
		
        $("div.content_tabs").hide();
		
        if (ua.indexOf("msie") != -1 && ua.indexOf("opera") == -1){
            $(cntid).show();
        }
        else{
            $(cntid).fadeIn(800);
        }			
		
        return false;
    });
	

	
    $("a.addcartbutton").click(function(){
        //var productcount=$('input#productcount').prev().val();
		
        var my="#"+$(this).attr("p_id");
        var ident= parseInt($(this).attr("p_id"));
        var productcount=parseInt($(my).attr("value"));
        //var productcount=1;
        var quantity_additional=parseInt($(this).attr("quantity_additional"));
        var price_additional=parseInt($(this).attr("price_additional"));
        var price_main=parseInt($(this).attr("price_main"));
        var name=$(this).attr("name");
        var pricemode=$(this).attr("pricemode");
				
		
        var cartdata=LoadCart();
        cartdata["pricemode"] = pricemode;
        var productlist=LoadProductlist();
        var i=0;
        var j=productlist.length;
		
		
        var marker=0;
		
		
        for (i=0; i<j; i++){
            if(productlist[i][0]==ident){
                marker=1;
                var number=i;
            }
        }
				
        if(marker==0){
            productlist[productlist.length]=[ident, productcount, price_main, price_additional, quantity_additional];
        }
        else{
            productlist[number][1]=productlist[number][1]+productcount;
        //alert(productlist[marker][1]);
        }
		
		
        SaveCart(cartdata);
        SaveProductlist(productlist);
		
        var notifytext="Товар \""+name+"\" добавлен в корзину в количестве  " + productcount+ " шт.";
        $.notify.add(notifytext, 3); 
		
    // return false;
	
	
    });
	
	
	
    $("#clearcart").click(function(){
        ClearCart();
        $(".carttab").remove();
        $("#itogo").remove();
        var clearcarttext="Ваша корзина пуста";
        $("#cartbox").text(clearcarttext);
        RefreshCart();
        $.notify.add("Ваша корзина очищена", 6); 
        return false;
    });
        
    $('a.pm-button').click(function(){
         
        
        var my='#'+$(this).attr('p_id');
        var ident= parseInt($(this).attr('p_id'));
        var productcount=parseInt($(my).attr('value'));
        
        var notifytext = '';
        
        if ($(this).is('.pm-minus') &&  productcount == 0){
            notifytext="Количество этого товара уже равно 0. \n\
            Нельзя его сделать еще меньше.";
            $.notify.add(notifytext, 4);
            return false;
        }
        
        if ($(this).is('.pm-minus') &&  productcount > 0 ){
            productcount = productcount - 1;
            $(my).attr('value', productcount);
            notifytext = "Количество этого товара в корзине уменьшено на 1 шт.";
        }
        
        if ($(this).is('.pm-plus')){
            productcount = productcount + 1;
            $(my).attr('value', productcount);
            notifytext = "Количество этого товара в корзине увеличено на 1 шт.";
        }
        
        var quantity_additional=parseInt($(this).attr('quantity_additional'));
        var price_additional=parseInt($(this).attr('price_additional'));
        var price_main=parseInt($(this).attr('price_main'));
        var name=$(this).attr('name');
        var pricemode=$(this).attr('pricemode');
        
        var cartdata=LoadCart();
        cartdata["pricemode"] = pricemode;
        var productlist=LoadProductlist();
        var i=0;
        var j=productlist.length;		
		
        var marker=0;		
		
        for (i=0; i<j; i++){
            if(productlist[i][0]==ident){
                marker=1;
                var number=i;
            }
        }
				
        if(marker==0){
            productlist[productlist.length]=[ident, productcount, price_main, price_additional, quantity_additional];
        }
        else{
            productlist[number][1]=productcount;
        //alert(productlist[marker][1]);
        }
		
        SaveCart(cartdata);
        SaveProductlist(productlist);		
		
        var productprice=ConsiderProductPrice (price_main, price_additional, pricemode, productcount, quantity_additional);
        
       
        $(this).parent().children('.pm-counter').text(productcount);
        RefreshProductInCart(productcount, productprice, my);
        RefreshItogo();
        RefreshCart();
        //var notifytext="Количество товара \""+name+"\" в корзине изменено на "+productcount+" шт.";
        $.notify.add(notifytext, 6); 
        return false;
    });

	
    $("a.setproductcount").click(function(){
        var my="#"+$(this).attr("p_id");
        var ident= parseInt($(this).attr("p_id"));
        var productcount=parseInt($(my).attr("value"));
        var quantity_additional=parseInt($(this).attr("quantity_additional"));
        var price_additional=parseInt($(this).attr("price_additional"));
        var price_main=parseInt($(this).attr("price_main"));
        var name=$(this).attr("name");
        var pricemode=$(this).attr("pricemode");
		
        var cartdata=LoadCart();
        cartdata["pricemode"] = pricemode;
        var productlist=LoadProductlist();
        var i=0;
        var j=productlist.length;
		
		
        var marker=0;
		
		
        for (i=0; i<j; i++){
            if(productlist[i][0]==ident){
                marker=1;
                var number=i;
            }
        }
				
        if(marker==0){
            productlist[productlist.length]=[ident, productcount, price_main, price_additional, quantity_additional];
        }
        else{
            productlist[number][1]=productcount;
        //alert(productlist[marker][1]);
        }
		
        SaveCart(cartdata);
        SaveProductlist(productlist);		
		
        var productprice=ConsiderProductPrice (price_main, price_additional, pricemode, productcount, quantity_additional);
		
        RefreshProductInCart(productcount, productprice, my);
        RefreshItogo();
        RefreshCart();
        var notifytext="Количество товара \""+name+"\" в корзине изменено на "+productcount+" шт.";
        $.notify.add(notifytext, 6); 
        return false;
    });
	
    $("a.deleteproduct").click(function(){
		
        var my="#"+$(this).attr("p_id");
        var ident= parseInt($(this).attr("p_id"));
        var productcount=0;
        var quantity_additional=parseInt($(this).attr("quantity_additional"));
        var price_additional=parseInt($(this).attr("price_additional"));
        var price_main=parseInt($(this).attr("price_main"));
        var name=$(this).attr("name");
        var pricemode=$(this).attr("pricemode");
		
        var cartdata=LoadCart();
        cartdata["pricemode"] = pricemode;
        var productlist=LoadProductlist();
        var i=0;
        var j=productlist.length;
		
		
        var marker=0;

        $(my).val('0');
		
        for (i=0; i<j; i++){
            if(productlist[i][0]==ident){
                marker=1;
                var number=i;
            }
        }
				
        if(marker==0){
            productlist[productlist.length]=[ident, productcount, price_main, price_additional, quantity_additional];
        }
        else{
            productlist[number][1]=productcount;
        //alert(productlist[marker][1]);
        }
		
        SaveCart(cartdata);
        SaveProductlist(productlist);		
		
        var productprice=ConsiderProductPrice (price_main, price_additional, pricemode, productcount, quantity_additional);
		
        RefreshProductInCart(productcount, productprice, my);
        RefreshItogo();
        RefreshCart();
		
        var notifytext="Товар \""+name+"\" удален из вашей корзины" ;
        $.notify.add(notifytext, 6); 
		
        return false;
    });
	
	
    $("#c_switch").bind("change", function(){
        //var notifytext="пышь!!11";
        var cityparam = $("#c_switch option:selected").val();
        $.cookies.set('cityparam', cityparam, {
            path : '/'
        });
        RefreshProductPriceForCity();
        RefreshCart();
        var city = $("#c_switch option:selected").html();
        var notifytext="Выбран город "+city;
        $.notify.add(notifytext, 6);
    });
	
	
    RefreshCart();
	
});



function UpdateOrderFormTitles(){
    $('.dyntitle').each(function(i, elem){
        var title = $(this).attr("title");
        var text = $(this).val();
        if (text == '' && title!=''){
            $(this).addClass('grey');
            $(this).val(title);
        }
       
    });
}


function RefreshCart()
{	
		
    if(!$.cookies.get('cartdata')||!$.cookies.get('productlist'))
    {
        var carttext1="Ваша корзина пуста";
        var carttext2="";
    }
    else {		
        var cartdata=LoadCart();
        var pricemode=cartdata["pricemode"];
        var productlist=LoadProductlist();
        var total= new Object();
        var total=GetTotal(productlist, pricemode);
        var carttext1='Товаров: '+total["count"]+' шт.';
        var carttext2 = '<br /> На сумму: ' + total["price"] +' руб.';
    /*                
        if (total["count"]>0){
            $('.buttonforcart').addClass('x-cart');
        }*/
    }
	
        
    if($.cookies.get('order_checkout')){
        var carttext1="Заказ оформлен";
        var carttext2="";
        $.cookies.del('order_checkout');
    }
        
        
    $("#carttext, #carttext2").text(carttext1);
    $("#carttext, #carttext2").append(carttext2);
}
	
function RefreshItogo()
{
    if(!$.cookies.get('cartdata')||!$.cookies.get('productlist'))
    {
        var itog_text="Ваша корзина пуста";
    }
    else {		
        var cartdata=LoadCart();
        var pricemode=cartdata["pricemode"];
        var productlist=LoadProductlist();
        var total= new Object();
        var total=GetTotal(productlist, pricemode);
        var itog_text="Итого: "+ total["price"]+" руб.";
    }
    $("#itogo").text(itog_text);	
}


function LoadCart() {
    if(!$.cookies.get('cartdata')) {
        var cartdata= new Object();
    }
    else {
        var cartdata= $.cookies.get('cartdata');
    }
    return cartdata;
}

function SaveCart(cartdata) {
    $.cookies.set('cartdata', cartdata, {
        path : '/'
    });	
    //RefreshCart();
    return true;
}

function ClearCart() {
    $.cookies.del('cartdata');
    $.cookies.del('productlist');
    RefreshCart();
}

function LoadProductlist() {
    if(!$.cookies.get('productlist')) {
        var productlist= new Array();
    }
    else {
        var productlist= $.cookies.get('productlist');
    }
    return productlist;	
}

function SaveProductlist(productlist){
    $.cookies.set('productlist', productlist, {
        path : '/'
    });	
    RefreshCart();
    return true;
}

function GetTotal (productlist, pricemode) {
    switch (pricemode) {
        case "quantity":
            total=QuantityMode(productlist);					
            break;
        case "twocity":
            total=TwoCityMode(productlist);
            break;

        default:
            break;
	
    }
    return total;
}

function QuantityMode(productlist) {
    var total= new Object();
    total["count"]=0;
    total["price"]=0;
	
    var i=0;
    var j=productlist.length;
	
	
	
    for (i=0; i<j; i++){
        if(productlist[i][1]>=productlist[i][4]){
            total["price"]=total["price"]+productlist[i][3]*productlist[i][1];
        }
        else{
            total["price"]=total["price"]+productlist[i][2]*productlist[i][1];
        }
        total["count"]=total["count"]+productlist[i][1];
    }
    return total;
}

function TwoCityMode (productlist) {
    var total= new Object();
    total["count"]=0;
    total["price"]=0;
	
	
    if($.cookies.get('cityparam')){
        var cityparam = $.cookies.get( 'cityparam' );
    }
    else{
        var cityparam = 'nsk';
    }
	
    var i=0;
    var j=productlist.length;
	
    for (i=0; i<j; i++){
        if(cityparam == 'nsk'){
            //total["price"]=total["price"]+productlist[i][3]*productlist[i][1];
            var price =  productlist[i][2]*productlist[i][1];
        }
        else{
            //total["price"]=total["price"]+productlist[i][2]*productlist[i][1];
            var price = productlist[i][3]*productlist[i][1];
        }
		
        total["price"]=total["price"]+price;
        total["count"]=total["count"]+productlist[i][1];
    } 
	
    return total;
}


function ConsiderProductPrice (price_main, price_additional, pricemode, productcount, quantity_additional) {
    switch (pricemode)

    {
        default:
            var price_one=price_main;		
            break;
    }	
    var price_all= price_one*productcount;
		
    var price= new Object();
    price["one"]=price_one;
    price["all"]=price_all;
    return price;		
		
}


function RefreshProductInCart(productcount, productprice, my){
    var count_id= my+'_count';
    
    //alert(productcount);
    //$(count_id).text(productcount);	
	
    var price_id= my+'_price';
    $(price_id).text(productprice['all']);
	
    var priceone_id=my+'_priceone';
    $(priceone_id).text(productprice['one']);	
}


function CityItit() {
    if ( $('#c_switch').length ){
        if($.cookies.get('cityparam')){
            var cityparam = $.cookies.get( 'cityparam' );
        }
        else{
            var cityparam = 'nsk';
        }
		
        if (cityparam == 'spb')
        {
            $('#c_switch option:last').attr('selected', 'selected');
        }
    }

}

function SetDefaultCity() {
    if(!$.cookies.get('cityparam'))
    {
        var deaultcity='nsk';
        $.cookies.set('cityparam', deaultcity, {
            path : '/'
        });
        var notifytext="По умолчанию город выбран город Новосибирск. Изменить город вы можете с помощью соответствующего переключателя в левой части страницы. Обратите внимание, что для жителей разнах городов деймтвуют разные условия обслуживания и цены.";
        $.notify.add(notifytext, 4);
    }
}

function RefreshProductPriceForCity() {
    if ( $('#c_switch').length ){
        var cityparam = $.cookies.get('cityparam');
		
        $(".addcartbutton").each(function(i,elem){
				
            var my = $(elem).attr("p_id");
				
            if (cityparam=='nsk'){
                var productprice = $(elem).attr("price_main");
            }
            else{
                var productprice = $(elem).attr("price_additional");
            }
            $('#price-'+my).text(productprice);
				
				
        //alert(i + ': ' + $(elem).attr("price_main"));
				
        });
			
        if  ( $('#cartbox').length ){				
            $(".setproductcount").each(function(j,elem){
                if (cityparam=='nsk'){
                    var price_one = $(elem).attr("price_main");
                }
                else{
                    var price_one = $(elem).attr("price_additional");
                }
                var my = $(elem).attr("p_id");
                $('#'+my+'_priceone').text(price_one);
                var productcount=parseInt($('#'+my+'_count').text());
                var productprice = price_one*productcount;
                $('#'+my+'_price').text(productprice);
            });
            
            
            RefreshItogo();
        }
		
			
    }
}

}
/*
     FILE ARCHIVED ON 23:15:02 Dec 18, 2014 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 13:07:57 Jul 19, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  cdx.remote: 0.082
  LoadShardBlock: 218.001 (3)
  exclusion.robots: 0.286
  exclusion.robots.policy: 0.276
  captures_list: 255.178
  esindex: 0.01
  CDXLines.iter: 26.408 (3)
  load_resource: 80.893
  PetaboxLoader3.datanode: 142.483 (4)
  PetaboxLoader3.resolve: 68.977 (2)
*/