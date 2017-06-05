$('#btn').click(function(){
  //获取帐号密码
  nam = $('.name').val();
  pas = $('.password').val();
  console.log(nam);
  console.log(pas);
  i = "name=" + nam +"&pwd=" + pas;
  console.log(i);
  //jQ创建XHR对象
  $.ajax({
    type:'post',
    url:'/carrots-admin-ajax/a/login',
    data:{
      "name":nam,
      "pwd":pas
    },
    dataType: "json",
    success:function (data) {
        // var jb = JSON.parse(Mes);
      if (data.message == "success") {
        window.location.href = "http://dev.admin.carrots.ptteng.com/#/login?name=admin&pwd=123456";}
        else {
            $('#mes').text(data.message);
        }
    }
  })
  //原生方法
  // //创建XHR对象
  // var xmlHttp;
  // if (window.XMLHttpRequest)
  // {
  //   xmlHttp = new XMLHttpRequest();
  // }
  // else {
  //   xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
  // }
  // //发送数据
  //   xmlHttp.open("POST","/carrots-admin-ajax/a/login",true);
  //   xmlHttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
  //   xmlHttp.send(i);
  // //返回数据
  // xmlHttp.onreadystatechange = function(){
  //   if(xmlHttp.readyState == 4 && xmlHttp.status == 200)
  //   {
  // mes =JSON.parse(xmlHttp.responseText);
  // console.log(mes);
  // $('#mes').text(mes.message);
  //   }
  // }
})
