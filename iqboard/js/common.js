$(function(){
  //移动端-导航点击
  $(".nav-toggle").on("click",function(){
    if($(".nav").is(":visible")){
      $(".nav").css('display','none') 
    }else{
     $(".nav").css('display','block')
    }
  })
  
  //显示隐藏二级导航
  $("#nav li").mouseenter(function(){
    $(this).addClass("nav-sub-arrow")
    $(this).find(".nav-sub-wrap").stop().show();
  })
  $("#nav li").mouseleave(function(){
    $(this).removeClass("nav-sub-arrow")
    $(this).find(".nav-sub-wrap").stop().hide();
  })
  
})