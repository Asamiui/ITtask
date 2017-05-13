var num,zong,killnum,peoplenum;
//表单改变事件
function changeNum() {
  zong = document.getElementById("num").value;
  num = Number(zong);
  console.log(num)
  //限定游戏人数
  if( num >= 4 && num <= 18 )
  {
    killnum = Math.ceil(num/4);
    console.log(killnum)
    peoplenum = num - killnum
    }
  else{
    alert("请输入正确的游戏人数");
    killnum = "&emsp;"
    peoplenum = "&emsp;"
  }
  //显示人数分配
  var k = document.getElementById("killnum");
  k.innerHTML = "杀手&emsp;" + killnum + "&emsp;人";
  var p = document.getElementById("peoplenum");
  p.innerHTML = "水民&emsp;" + peoplenum + "&emsp;人";
  }


//将杀手和水民设为数组(点击事件)
 var footzz = document.getElementById("footid")
 footzz.onclick = function () {
 if(killnum > 0)
 {
   var kilist = new Array(killnum);
   for(i = 0 ; i < killnum ;i ++ )
   {kilist[i] = '杀手'}
   console.log(kilist);
 }
  if(peoplenum > 0)
  {
    var pelist = new Array(peoplenum);
    for(i = 0 ; i < peoplenum;i ++ )
    {pelist[i] = '水民'}
    console.log(pelist);
  }
   //水民+杀手数组组合
  zonglist = pelist.concat(kilist);
   //数组乱序
   //数组乱序// zonglistL=zonglist.sort(function(){ return 0.5 - Math.random() }); //数组乱序方法1
  zonglistL = []
  for(i = 0 , z = zonglist.length ; i < z ; i++)
  {var j = Math.floor(Math.random()*zonglist.length);
  zonglistL[i] = zonglist[j];
  zonglist.splice(j,1);
}
 console.log(zonglistL);
 //页面传参
 sessionStorage.setItem("List",JSON.stringify(zonglistL));
 window.open('shenfen.html');
 }














//
