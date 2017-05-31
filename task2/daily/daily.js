
  var btk = document.getElementById("btn-kill");
  var btd = document.getElementById("btn-die");
  var btl = document.getElementById("btn-live");
  var btc = document.getElementById("btn-choose");
  var Day = document.getElementById("day");
  var dailyN = document.getElementById("daynum");
  var date ;
  var ListObject = JSON.parse(sessionStorage.getItem("ListObject"));
  var dailyNum = document.getElementsByClassName("Num");
  var dailyRes = document.getElementsByClassName('Res');

// window.onload = function(){

  //接受黑夜死亡的人
  var lightDie = JSON.parse(sessionStorage.getItem("lightDie"));
  if(lightDie == null) {lightDie = []};
  //接受白天死亡的人
  var darkDie = JSON.parse(sessionStorage.getItem("darkDie"));
  if(darkDie == null) {darkDie = []};
  var colorCon = sessionStorage.getItem("colorCon");
  //接受天数参数
  date = Number(sessionStorage.getItem("Day"));
  console.log(date)
  //接受变色参数
  //杀手杀人页面后
  if(colorCon == "1"){
    //从杀手界面获取被杀的玩家号码
    //创建天数段落
    for(i=0 ;i < date ; i++)
    {
      DN =  document.createElement('p');
      DN.className = "Num";
      Day.insertBefore(DN,btk);
      var dailyNum = document.getElementsByClassName("Num");
      dailyNum[i].innerHTML = '第' + (i+1) +'天';
      if(i <date-1){
      DR = document.createElement('p');
      DR.className = "Res";
      Day.insertBefore(DR,btk);
      var k = darkDie[i];
      dailyRes[i].innerHTML = "黑夜：" + (lightDie[i]+1) + "号玩家死亡，他的身份是水民"+'<br>'+"白天："+ (darkDie[i]+1) +"号玩家死亡，他的身份是" + ListObject[k].name}
    }
  var killNum = Number(sessionStorage.getItem("killN")) + 1
    //在天数下面写当天晚上的结果
    killR = document.createElement('span');
    btk.appendChild(killR);
    killR.className = "resultword";
    killR.innerHTML =  killNum + '号玩家被杀死，他的身份是水民';
    btk.style.background = "orange";}
  //投票页面后
  else if(colorCon == "0"){
    for(i=0 ;i < date ; i++)
    {
      DN =  document.createElement('p');
      DN.className = "Num";
      Day.insertBefore(DN,btk);
      dailyNum[i].innerHTML = '第' + (i+1) +'天';
      if(i <date-1){
      DR = document.createElement('p');
      DR.className = "Res";
      Day.insertBefore(DR,btk);
      var k = darkDie[i];
      dailyRes[i].innerHTML = "黑夜：" + (lightDie[i]+1) + "号玩家死亡，他的身份是水民"+'<br>'+"白天："+ (darkDie[i]+1) +"号玩家死亡，他的身份是" + ListObject[k].name}
    }
    btk.style.background = "#29BDE0";}
    //首次进入页面
    else{
      DN =  document.createElement('p');
      DN.className = "Num";
      Day.insertBefore(DN,btk);
      var dailyNum = document.getElementsByClassName("Num");
      dailyNum[0].innerHTML = '第' + "1" +'天'
    }
  //点击出现结果
  $(".Num").click(function () {
      var hideP = $(this).next();
      if (hideP.css('display') == 'none')  {
          hideP.show();
      }
      else if ($(this).text()!="第"+date+"天") {
          hideP.hide();
      }
  });
btk.onclick = function () {
    if(btk.style.background != "orange")
    {window.location.href = "../killer/killer.html"}
    else{
      alert("已执行过本操作")
    }
  }
// }
btd.onclick = function () {
if(btk.style.background == "orange" && btd.style.background != "orange" && btl.style.background != "orange")
{btd.style.background = "orange";
 alert("请亡灵发言")}
 else if (btk.style.background != "orange") {
   alert("不要跳跃操作")
 }
 else{
   alert("已执行过本操作")
 }
}
btl.onclick = function (){
if(btk.style.background == "orange" && btd.style.background == "orange" && btl.style.background != "orange" && btc.style.background != "orange")
{btl.style.background = "orange";
  alert("请在场玩家讨论")}
  else if (btk.style.background != "orange" ||btd.style.background != "orange") {
    alert("不要跳跃操作")
  }
  else{
    alert("已经执行过本操作")
  }
}
btc.onclick = function () {
  if(btk.style.background != "orange" ||btd.style.background != "orange" ||btl.style.background != "orange")
  {alert("不要跳跃操作")}
  else
 {window.location.href = "../vote/vote.html"}
}
function GG(){
  var message = confirm("真的要退出游戏么")
  if(message == true){
    sessionStorage.clear();
    window.location.href = "../group/group.html"
  }
}
function view(){
  alert("点击天数查看当日情况")
}

// for(i=2 ;i<date ; i++)
// {
//   DN =  document.createElement('p');
//   DN.className = "Num";
//   Day.insertBefore(DN,btk);
//   dailyNum = document.getElementsByClassName("Num");
//   dailyNum.innerHTML = '第' + date +'天'
// }

// if(colorCon == "0"){
//   killNum = Number(sessionStorage.getItem("killN")) + 1
//   killR = document.createElement('span');
//   dailyN.appendChild(killR);
//   killR.className = "resultword";
//   killR.innerHTML =  killNum + '号玩家被杀死，他的身份是水民'
//   dailyNum = document.createElement('p');
//   dailyNum.className = "dailyN";
//   Day.insertBefore(dailyNum,btk);
//   dailyNum.innerHTML = '第' + date +'天'
//   btk.style.background = "#29BDE0";}
