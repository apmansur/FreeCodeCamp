function myReplace(str, before, after) {  
    function changeCase(given, target){
      // function to check case for each letter in given word in order to match it withthe casing in the target word
      var givenArray=given.split('');
      var targetArray=target.split('');
        for (var i=0; i< Math.min(targetArray.length, givenArray.length); i++){//Math.min makes it so you only go through th length of the shortest word between given and target
           if (/[A-Z]/.test(givenArray[i])) {
                targetArray[i] = targetArray[i].toUpperCase();
            }
            // if sourceArr[i] is not upper case then convert targetArr[i] to lower case
            else targetArray[i] = targetArray[i].toLowerCase();
        }
        // join modified targetArr to string and return
        return (targetArray.join(""));
    }
  return str.replace(before, changeCase(before,after));
}
