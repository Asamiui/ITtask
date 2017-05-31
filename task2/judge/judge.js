var fat = document.getElementById("fat"),
    btn = document.getElementById("begin");
    ListObject = []
window.onload= function () {
  //接受参数
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
}
btn.onclick =function (){
  for(i = 0 ; i < List.length ; i++)
  {
    ListObject[i] = {};
    ListObject[i].name = List[i];
    ListObject[i].number = (i+1) + "号" ;
    ListObject[i].state = "live";
    ListObject[i].dieday = 0 ;
    ListObject[i].diestyle = 0;
    console.log(ListObject);
  }
  var date = 1;
  sessionStorage.setItem("Day",date)
  sessionStorage.setItem("ListObject",JSON.stringify(ListObject))
  window.location.href = '../daily/daily.html';
}
