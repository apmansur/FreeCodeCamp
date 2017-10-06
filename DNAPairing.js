function pairElement(str) {
  var arrayOG= str.split('');
  var arrayPair =[];
  for (var i=0; i<arrayOG.length; i++){
    switch (arrayOG[i]){
      case 'A':
        arrayPair.push(['A','T']);
        break;
      case 'T':
        arrayPair.push(['T','A']);
        break;
      case 'C':
        arrayPair.push(['C','G']);
        break;
      case 'G':
        arrayPair.push(['G','C']);
        break;   
    }
  }
  
  return arrayPair;
}
