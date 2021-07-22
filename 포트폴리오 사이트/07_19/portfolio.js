$(function(){ 



////////////////////////////

$("#main").fullpage({
    anchors:['m01', 'm02' , 'm03' , 'm04' , 'm05'],
    afterLoad: function(origin, destination, direction){
      $(".section").eq(destination.index).addClass("on").siblings().removeClass("on");
      $("nav li").eq(destination.index).addClass("on").siblings().removeClass("on");

    },
      
});

























//////////////////////////











})