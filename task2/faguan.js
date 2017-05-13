var fat = document.getElementById("fat"),
    btn = document.getElementById("begin");





window.onload = function () {
  List = JSON.parse(sessionStorage.getItem("List"));
  console.log(List);
  for(i = 0 ;i < List.length ; i ++)
  {son = document.createElement('div');
  son2 = document.createElement('p');
  son.class = "zjz";
  son.innerHTML= List[i];
  // son.style.border = "2px solid white";
  // son.style.backgroundColor = "orange";
  // son.style.margin = '2rem 1rem';
  // son.style.width = '30vw';
  // son.style.height = '30vw';
  // son.style.fontSize = '1.5rem';
  // son.style.lineHeight = "17vw";
  // son.style.textAlign = 'center';
  son2.innerHTML = (i+1) + '号' ;
  son.appendChild(son2);
  fat.appendChild(son);}
}
