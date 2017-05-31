var clickCD = document.getElementById("clickCD"),
    fanpai = document.getElementById("fanpai"),
    jieguo = document.getElementById("jieguo"),
    jieguoW = document.getElementById("jieguoW"),
    topNum = document.getElementById("topNum"),
    jieguoW = document.getElementById("jieguoW");
    var x = 2, y = 2 ;
clickCD.onclick = function () {
  //接收参数
    List = JSON.parse(sessionStorage.getItem("List"));
    console.log(List);

      if (x == 2 * List.length)
      {
        clickCD.value = "法官查看" ;
        topNum.innerHTML = (List.length);
        jieguoW.style.visibility = "visible" ;
        jieguoW.innerHTML = List.pop();
        // window.open('faguan.html')
      }
      else if (x > 2 * List.length) {
        clickCD.value = "法官查看" ;
        topNum.innerHTML = (List.length);
        jieguoW.innerHTML = List.pop();
        jieguoW.style.visibility = "visible" ;
        window.location.href = '../judge/judge.html';
      }
      else if (x % 2 == 0 )
      {
        fanpai.style.display = "none";
        jieguo.style.display = "block";
        jieguoW.style.visibility = "visible" ;
        jieguoW.innerHTML = List[x/2 - 1];
        clickCD.value = "隐藏并查看" + (y) + "号身份";
        topNum.innerHTML = (y-1);
      }
      else if (x % 2 == 1)
      {
        jieguo.style.display = "none" ;
        fanpai.style.display = "block";
        jieguoW.style.visibility = "hidden" ;
        clickCD.value = "查看" + (Math.floor(y)) + "号身份";
        topNum.innerHTML = (Math.floor(y));
      }
      x++ , y = y + 0.5;
    }
