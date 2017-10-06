function mutation(arr) {
  var string = arr.join().toLowerCase().split(',');
  var sortOne = string[0].split('').sort();
  var sortTwo = string[1].split('').sort();
  var count = [];
  for (i=0; i<sortTwo.length;i++){
    count.push(sortOne.indexOf(sortTwo[i]));
  }
   count.sort(function(a, b){return a-b});
  if (count[0]=== -1){
    return false;
  }
  return true;
}


mutation(["hello", "hey"]);
