$(function(){ 



    ////////////////////////////
    
    $("#main").fullpage({
        anchors:['m01', 'm02' , 'm03' , 'm04' , 'm05'],
        afterLoad: function(origin, destination, direction){
          console.log(destination.index)
          $(".section").eq(destination.index).addClass("on").siblings().removeClass("on");
          $("nav li").eq(destination.index).addClass("on").siblings().removeClass("on");
          if(destination.index===4) {
            $("footer").css({color:"#fff"})
          }else{
            $("footer").removeAttr("style")
    
          }
    
        },
          
    });
    $("#mopen").on("click",function(){
      $(this).toggleClass("on");
      $("#cover_nav").toggleClass("on");
    });
    
    
  
    
  
    
    
    
    $("#cover_nav .link a").on("click" , function(){
      $("#cover_nav").removeClass("on")
      $("#mopen").removeClass("on")
    });
    
    
    
    
    $(".pt__silider").slick({
      slidesToShow: 3,
      arrows:false,
      dots:true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow:1,
    
          }
        },
    
    
      ]
    });
    
    
    
    
    
    
    $(".pf03 i.xi-arrow-left").on("click",function(){
      $(".pt__silider").slick("slickPrev");
    
    });
    
    $(".pf03 i.xi-arrow-right").on("click",function(){
      $(".pt__silider").slick("slickNext");
    
    });
    
    
    

    
    //////////////////////////

    
    
    })











