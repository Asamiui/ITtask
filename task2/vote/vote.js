var fat = document.getElementById("fat"),
    btn = document.getElementById("sure"),
    small = document.getElementsByClassName("small"),
    date,
    colorCon = '0',
    ListObject = [];
    darkDie = [];
    //为结果页面创建对象
    gameOver = [];
window.onload= function () {
  var darkDie = JSON.parse(sessionStorage.getItem("darkDie"));
  if(darkDie == null) {darkDie = []};
  //设置天数
  date = Number(sessionStorage.getItem("Day"));
  console.log(date)
  //接收杀手和平民人数
  peNUM = Number(sessionStorage.getItem("peNUM"));
  killNUM = Number(sessionStorage.getItem("killNUM"));
  //接受参数，获取法官查看页面所有的任务信息，生成盒子
  List = JSON.parse(sessionStorage.getItem("List"));
  console.log(List);
  for(i = 0 ;i < List.length ; i ++)
  {son = document.createElement('div');
  son2 = document.createElement('p');
  son.className = "small";
  son.innerHTML= List[i];
  son2.innerHTML = (i+1) + '号' ;
  son.appendChild(son2);
  fat.appendChild(son);}
  ListObject = JSON.parse(sessionStorage.getItem("ListObject"))
  console.log(ListObject);
  var chooseNum;
  //让死亡玩家变色
  var z;
  var diedNum
  diedNum = JSON.parse(sessionStorage.getItem("diedNum"));
  console.log(diedNum)
  for(i = 0 ; i<diedNum.length ; i++){
    z = diedNum[i];
    small[z].style.background = "gray";
  }

//投票环节
for(x=0;x<small.length;x++){
  small[x].index=x;
  small[x].onclick=function(){
    if(small[this.index].style.background == "gray")
    {alert("死人不能再杀")}
    else{
      if (chooseNum!= undefined) {
        small[chooseNum].style.background="#95E1D3";
        //先检查有没有被选中的人，如果有则将其颜色先还原
        ListObject[this.index].state="live";
        darkDie.pop();
        diedNum.pop();
        if(ListObject[chooseNum].name == "杀手")
        {killNUM = killNUM + 1}
        else
        {peNUM = peNUM + 1};
    }
      small[this.index].style.background="#F73859";
      chooseNum=this.index;
      //选中的下标存储起来,改变玩家状态，记录死亡玩家号码
      diedNum.push(chooseNum);
      darkDie.push(chooseNum);
      console.log(diedNum);
      ListObject[this.index].state="killed";
      ListObject[this.index].dieday=date;
      ListObject[this.index].diestyle= 2;
      console.log(ListObject);
      if(ListObject[chooseNum].name == "杀手")
      {killNUM = killNUM - 1}
      else
      {peNUM = peNUM - 1}
      console.log(peNUM);
      console.log(killNUM);
      sessionStorage.setItem("killN",chooseNum)
      sessionStorage.setItem("diedNum",JSON.stringify(diedNum))
      sessionStorage.setItem("darkDie",JSON.stringify(darkDie))
      console.log(darkDie)
  }
}
}

btn.onclick =function (){
  sessionStorage.setItem("killNUM",killNUM);
  sessionStorage.setItem("peNUM",peNUM);
  console.log(killNUM);
  console.log(peNUM);
  if(chooseNum == undefined){
  alert("请选人")
  }
  else if(killNUM >= peNUM){
  alert("杀手胜利");
  gameOver[0] = 1;
  window.location.href = "../gameover/gameover.html"
  }
  else if(killNUM == 0){
  alert("水民胜利");
  gameOver[0] = 0;
  window.location.href = "../gameover/gameover.html"
  }
  else{
  //将数组中每个人变为对象，赋予属性；
  sessionStorage.setItem("colorCon","0")
  //天数+1
  date ++ ;
  console.log(date);
  sessionStorage.setItem("Day",date);
  window.location.href = "../daily/daily.html"
}
gameOver[1] = date;
sessionStorage.setItem("gameOver",JSON.stringify(gameOver))
}
}
