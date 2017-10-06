function destroyer(arr) {
  var toRemove=[];
   for(i=1; i<arguments.length; i++){   ****** 

     toRemove.push(arguments[i]);
   }
  
   var answer= arguments[0].filter(filterIt);*****
  
    function filterIt(value){
      for (i=0; i<toRemove.length;i++){
        if (value === toRemove[i]){
          return false;
        }
      }
        return true;
     }
  return answer;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

returns [1,1]
