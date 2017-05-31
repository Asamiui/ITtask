//属性代表含义：
//dieday：死亡日期  name：角色  number：号码  state：状态（live、die）diestyle:白天或者黑夜死  黑1白2
var fat = document.getElementById("fat"),
    btn = document.getElementById("sure"),
    small = document.getElementsByClassName("small"),
    date,
    colorCon = '1',
    ListObject = [];
window.onload= function () {
  //接受白天死亡的人
  var lightDie = JSON.parse(sessionStorage.getItem("lightDie"));
  if(lightDie == null) {lightDie = []};
  //接受天数参数
  var date = Number(sessionStorage.getItem("Day"));
  console.log(date)
  //接收水民人数
  var peNUM = Number(sessionStorage.getItem("peNUM"));
  console.log(peNUM)
  //接受参数（身份排列）,获取法官查看页面所有的任务信息，生成盒子
  List = JSON.parse(sessionStorage.getItem("List"));
  console.log(List);
  for(i = 0 ;i < List.length ; i ++)
  {son = document.createElement('div');
  son2 = document.createElement('p');
  knife = document.createElement("img");
  son3 = document.createElement('img');
  son.className = "small";
  son.innerHTML= List[i];
  son2.innerHTML = (i+1) + '号' ;
  son.appendChild(son2);
  fat.appendChild(son);
  son.appendChild(son3);}
  //接收参数（按照每个人的属性排列）
  ListObject = JSON.parse(sessionStorage.getItem("ListObject"))
  console.log(ListObject);
  var chooseNum;
  //让已死亡的人变红色
  diedNumm = JSON.parse(sessionStorage.getItem("diedNum"));
  if(diedNumm == null) {diedNumm = []};
  for(i = 0 ; i < diedNumm.length ; i++){
    var z = diedNumm[i];
    small[z].style.background = "gray";
  }
  //杀人环节
  var diedNum = JSON.parse(sessionStorage.getItem("diedNum"));
  if(diedNum == null){diedNum = []};
  //杀手选择杀人
  for(x=0;x<small.length;x++){
  	small[x].index=x;
  	small[x].onclick=function(){
      if(small[this.index].style.background == "gray")
      {alert("死人不能再杀")}
  		else if(ListObject[this.index].name=="杀手") {
  			alert("杀手不能杀自己");
  		}
      else{
  			if (chooseNum!= undefined) {
          //先检查有没有被选中的人，如果有则将其颜色先还原
  				small[chooseNum].style.background="#95E1D3";
  				ListObject[this.index].state="live";
          diedNum.pop();
          lightDie.pop();
          peNUM = peNUM + 1;
  		}
  			small[this.index].style.background="#F73859";
  			chooseNum=this.index;
        //选中的下标存储起来,改变玩家状态，记录死亡玩家号码
        diedNum.push(chooseNum);
        lightDie.push(chooseNum);
        console.log(diedNum);
  			ListObject[this.index].state="killed";
        ListObject[this.index].dieday= date;
        ListObject[this.index].diestyle= 1 ;
        console.log(ListObject);
        peNUM = peNUM - 1;
        sessionStorage.setItem("peNUM",peNUM);
        sessionStorage.setItem("killN",chooseNum);
        sessionStorage.setItem("diedNum",JSON.stringify(diedNum));
        sessionStorage.setItem("lightDie",JSON.stringify(lightDie))
        console.log(lightDie)
  		}
  	}
  }

  btn.onclick = function(){
    if(chooseNum == undefined){
    alert("请杀人")
    }
    else{
  window.location.href = "../daily/daily.html"
  sessionStorage.setItem("colorCon","1");
  sessionStorage.setItem("ListObject",JSON.stringify(ListObject))
}
}
}
//
