

$(function(){
   
   $(window).scroll(function(){
     backtops()
   });
  
  //移动端-导航点击
  $(".nav-toggle").on("click",function(){
    if($(".nav").is(":visible")){
      $(".nav").css('display','none') 
    }else{
     $(".nav").css('display','block')
    }
  })
  
  //显示隐藏二级导航
  $("#nav li:eq(1)").mouseenter(function(){
    $(this).addClass("nav-sub-arrow")
    $(this).find(".nav-sub-wrap").stop().show();
  })
  $(".nav-sub-wrap, #nav ul").mouseleave(function(){
    $("#nav li:eq(1)").removeClass("nav-sub-arrow")
    $(".nav-sub-wrap").stop().hide();
  })
  
  //搜索
  $(".hd-so input").focus(function(){
     $(".nav").hide()
     $(".hd-so").addClass("long")
     $(".logo").addClass("long")
  })
  $(".hd-so input").blur(function(){
     $(".hd-so").removeClass("long")
     $(".logo").removeClass("long")
      setTimeout(function(){
         $(".nav").show()
      },500)
  })
  $(".hd-so span").click(function(){
     $(".hd-so input").val("")
  })
  
  //留言
  $("#btn-fb").on("click",function(){
    $("#feedback").toggle()
  })
  
})

//返回顶部动态位置
function backtops(){
  var top2=$(document).scrollTop(); 
  var docH = $(document).height()
  var screenH = $(window).height()
  var footerH = $(".footer").height()
  if((docH - top2) <= (screenH + footerH)){
    $(".backtop").css("bottom", footerH + 50)
    $(".backlist").css("bottom", footerH + 100)
  }else{
    $(".backtop").css("bottom", "100px")
    $(".backlist").css("bottom", "150px")
  }
}
