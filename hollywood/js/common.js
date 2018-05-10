

$(function(){
  
  //移动端-导航点击
  $(".nav-toggle").on("click",function(){
    if($(".nav").is(":visible")){
      $(".nav").css('display','none') 
    }else{
     $(".nav").css('display','block')
    }
  })
  
  //移动端-点击一级导航跳转
  $("#nav li > a").on('click touchend', function(e) {
    var el = $(this);
    var link = el.attr('href');
    window.location = link;
  });
  
  //显示隐藏二级导航
  $("#nav li:eq(2)").mouseenter(function(){
    $(this).addClass("nav-sub-arrow")
    $(this).find(".nav-sub-wrap").stop().show();
  })
  $(".nav-sub-wrap, #nav li:eq(2)").mouseleave(function(){
    $("#nav li:eq(1)").removeClass("nav-sub-arrow")
    $(".nav-sub-wrap").stop().hide();
  })
  
  
})

