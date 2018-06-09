$(function(){
  //移动端-导航点击
  $(".nav-toggle").on("click",function(){
    if($(".nav").is(":visible")){
      $(".nav").css('display','none')
      $(".nav-mask").hide()
    }else{
     $(".nav").css('display','block')
     $(".nav-mask").show()
    }
  })

  //移动端-点击一级导航跳转
  $("#nav li > a").on('click touchend', function(e) {
    var el = $(this);
    var link = el.attr('href');
    window.location = link;
  });
  //mask-导点击
  $(".nav-mask").on("click",function(){
    $(".nav").css('display','none')
    $(this).hide()
  })


})
