function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested .target');
}

function increaseRankBy(n){
  const lis = document
  //.getElementById('app')
  .querySelectorAll('ul.ranked-list li');

for (let i = 0; i < lis.length; i++) {
  lis[i].innerHTML = parseInt(lis[i].innerHTML)+n;
}
}

function deepestChild() {
    // console.log(document.getElementsByTagName('grand-bode'))
var list =document.getElementsByTagName('div')
  // var list = document.querySelectorAll('div#grand-bode');
  // var i;
    console.log("!!!!!!!!"+list.length)
  for(var i=0; i<list.length; i++){
console.log("!!!!!!!!"+list[i].getElementById('grand-bode'))
  var subList=list[0].getElementsByTagName('grand-bode')

  };

  return list[list.length-1];


}
