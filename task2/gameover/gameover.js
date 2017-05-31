var PENUM = Number(sessionStorage.getItem("PENUM"));
var peNUM = Number(sessionStorage.getItem("peNUM"));
var ListObject = JSON.parse(sessionStorage.getItem("ListObject"));
var bta = document.getElementById("bta");
var lightDie = JSON.parse(sessionStorage.getItem("lightDie"));
if(lightDie == null) {lightDie = []};
//接受白天死亡的人
var darkDie = JSON.parse(sessionStorage.getItem("darkDie"));
if(darkDie == null) {darkDie = []};
var KILLNUM = Number(sessionStorage.getItem("KILLNUM"));
var gameOver = JSON.parse(sessionStorage.getItem("gameOver")),
picture = document.getElementById("picture"),
content = document.getElementById("content");

window.onload = function () {
  RE = document.createElement("p");
  RE.className = "resultword";
  content.appendChild(RE);
  if(gameOver[0] = 0)
  {RE.innerHTML = "水民胜利，本轮游戏共抓出杀手" + KILLNUM + "人" + "共经历了" + gameOver[1] + "天"}
  else
  {RE.innerHTML = "杀手胜利，本轮游戏共消灭水民" + (PENUM - peNUM) + "人" + "共经历了" + gameOver[1] + "天"};
  for(i=0;i<gameOver[1];i++)
  {
    dailyList = document.createElement("div");
    dailyList.className = "List";
    content.appendChild(dailyList);
    var List = document.getElementsByClassName("List");
    var k = darkDie[i];
    List[i].innerHTML ="第"+(i+1)+"天" +"<br>"+ "白天：" + (lightDie[i]+1) + "号玩家死亡，他的身份是水民"+'<br>'+"黑夜："+ (darkDie[i]+1) +"号玩家死亡，他的身份是" + ListObject[k].name
  }
}
bta.onclick = function(){
  alert("开始新游戏咯");
  //清除缓存
  sessionStorage.clear();
  window.location.href = "../group/group.html";
}
