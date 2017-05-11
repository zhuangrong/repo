$(function(){
  //移动端-导航点击
  $(".nav-toggle").on("click",function(){
    if($(".nav").is(":visible")){
      $(".nav").css('display','none')
      
    }else{
     $(".nav").css('display','block')
     $(".close-nav").css('display','block')
    }
  })
  
  
  //pc-显示隐藏二级导航下拉菜单
  $("#nav li").mouseenter(function(){
    $(this).find(".nav-sub").stop().fadeIn();
  })
  $("#nav li").mouseleave(function(){
    $(this).find(".nav-sub").stop().fadeOut();
  })
  //导航关闭
  $(".close-nav").on("click",function(){
    $(this).hide()
    $(".nav").hide();
  })
  
})