$(function(){
  //显示关闭图标
  $(".form-info li > label > input").on("keyup focus",function(e){
    e.stopPropagation()
    $(this).next().show()
    console.log("1")
  })
  //点击关闭图标
  $(".form-info li i").on("click",function(e){
    e.stopPropagation()
    $(this).prev().val("")
    $(this).prev().focus()
  })
  
  //隐藏关闭图标
  $(".form-info li > label > input").blur(function(e){
    e.stopPropagation()
    var _this = this
    setTimeout(function(){
      $(_this).next().hide()
    console.log("2")
    },200)
    
  })
  
  //增加同事
  $("#addC").on("click",function(){
    var colleague = '<div class="ipt2-wrap">'
                      +'<label><input type="text" class="ipt" placeholder="姓名"></label>'
                      +'<label><input type="text" class="ipt" placeholder="电话"><i>×</i></label>'
                      +'<label><em class="del">-</em></label>'
                    +'</div>'
    $("#colleagues").append(colleague)
  })
  //删除同事
  $("#colleagues").on("click", ".del", function(){
     $(this).parents(".ipt2-wrap").remove()
  })
  //增加亲属
  $("#addR").on("click",function(){
    var colleague = '<div class="ipt3-wrap">'
                      +'<label><input type="text" class="ipt" placeholder="姓名"></label>'
                      +'<label><input type="text" class="ipt" placeholder="关系"><i>×</i></label>'
                      +'<label><input type="text" class="ipt" placeholder="联系方式"><i>×</i></label>'
                      +'<label><em class="del">-</em></label>'
                    +'</div>'
    $("#colleagues").append(colleague)
  })
  //删除同事
  $("#colleagues").on("click", ".del", function(){
     $(this).parents(".ipt3-wrap").remove()
  })
  
})