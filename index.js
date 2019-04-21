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
// var list =document.querySelectorAll('div#grand-node')
//   // var list = document.querySelectorAll('div#grand-bode');
//   // var i;
// 
//   while(list.length>0){
// 
//     var sublist = list[0].querySelectorAll('div#grand-node')
//     console.log(sublist)
//     if (sublist.length==0){
//       console.log("!!"+list[0].innerHTML);
//       return list[0]
//     }
  var grandNode = document.querySelector('#grand-node');
  var deepestNode = grandNode.children[0];
  for (var i = 0; !deepestNode.children[i]; i) {
    deepestNode = deepestNode.children[0]
  }
  return deepestNode;
}


  return list[list.length-1];


}
