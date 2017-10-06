function fearNotLetter(str) {
  var count=[]; //stores numbers corresponding to letters in str
  var countAdd=[]; //has numbers corresponding to str and missing letter
  var answer=[]; // stores number corresponding to missing letter

    for (var i=0; i<str.length; i++){  //finds corresponding numbers to letters in str and stores them in count
      count.push(str.charCodeAt(i));
      }
  count.sort(function(a, b){return a-b});//sorts count so that numbers are from lowest to highest
  var difference= ((count[(count.length)-1]-count[0]));//finds the difference between the max number in count and the lowest number
    for (var j=count[0]; j <= (count[0]+difference); j++){
    countAdd.push(j);
      }//takes the difference that is suppose to exist and counts from the lowest number so you end up with all numbers corresponding to letters including missing letters
    for (var k=0; k<countAdd.length; k++){
      if (count.indexOf(countAdd[k]) < 0){
      answer.push(countAdd[k]);
        }//looks for missing letters by checking of countAdd has numbers count doesnt, those letters are stored in answer
  }
  if (answer.length === 0){
    console.log("undefined");
  }
  else {
    return String.fromCharCode(answer);//returns letters corresponding to numbers in answer
  }

}
