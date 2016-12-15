function isPalindrome(str) {
  if (str == null) return false
  
  var s = str.toLowerCase().replace(/[^a-z0-9]/g, '')
  var n = s.length
  
  for (var i = 0; i < s.length; i++) {
    if (s[i] !== s[n - i - 1]) return false
  }
  
  return true
}
