function convertToRoman(num) {
    var r = '',//empty string to put roman numeral letters
        decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]; //all possible values for each roman numeral letter
        roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']; //corresponding roman numeral letters to numbers above
    
    for (var i = 0; i < decimals.length; i++) {//go through decimals
        while (num >= decimals[i]) {         //while searching decimals check for when num is greater or equal than decimal[i] 
            r += roman[i];// add roman[i] to r and keep letters that were there
            num -= decimals[i];   //subtract decimal[i] from num and make it equal to that, so 9-5= 4, so 4 is now num and goes through while loop again 
        }
    }
    return r;  //return final r string
}
