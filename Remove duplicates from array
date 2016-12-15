var uniqueInOrder=function(iterable){
  //your code here - remember iterable can be a string or an array
  
  var array = iterable.toUpperCase().split('').sort();
  var uniqueArray = array.filter(function(elem, pos) {
    return array.indexOf(elem) == pos;
  }); 
  return uniqueArray;
}
