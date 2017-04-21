

function savefavoriteinfo(moduleid,itemid,title,catid)
{

//获取表单对象和用户信息值
//接收表单的URL地址
var url = "favorite.php";
//需要POST的值，把每个变量都通过&来联接
var postStr    = "moduleid="+ moduleid +"&itemid="+ itemid+"&title="+ title+"&catid="+ catid+"&action=add" ;
//实例化Ajax
//var ajax = InitAjax();

           var ajax = false;
          //开始初始化XMLHttpRequest对象
          if(window.XMLHttpRequest) { //Mozilla 浏览器
                  ajax = new XMLHttpRequest();
                  if (ajax.overrideMimeType) {//设置MiME类别
                          ajax.overrideMimeType("text/xml");
                  }
          }
          else if (window.ActiveXObject) { // IE浏览器
                  try {
                          ajax = new ActiveXObject("Msxml2.XMLHTTP");
                  } catch (e) {
                          try {
                                  ajax = new ActiveXObject("Microsoft.XMLHTTP");
                          } catch (e) {}
                  }
          }
          if (!ajax) { // 异常，创建对象实例失败
                  window.alert("不能创建XMLHttpRequest对象实例.");
                  return false;
          }
           
//通过Post方式打开连接
ajax.open("POST", url, true);
//定义传输的文件HTTP头信息
ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
//发送POST数据
ajax.send(postStr);
//获取执行状态
ajax.onreadystatechange = function() {
    //如果执行状态成功，那么就把返回信息写到指定的层里
    if (ajax.readyState == 4 && ajax.status == 200) {
     alert(ajax.responseText);
    }
}

}

function show_commentwapdb(u, m, i) {document.write('<iframe src="'+u+'comment.php?mid='+m+'&itemid='+i+'" name="destoon_comment" id="destoon_comment"  style="width:99%;height:0px;"scrolling="no" frameborder="0" ></iframe>');}
function show_bid(u, m, i) {document.write('<iframe src="'+u+'bid.php?mid='+m+'&itemid='+i+'" name="destoon_bid" id="des'+'toon_bid"  scrolling="no" frameborder="0"></iframe>');}