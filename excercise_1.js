 var file;
 
 function initialize(file){
  //using synchronously file system
  var fs = require('fs')
  var contents = fs.readFileSync(file, 'utf8')
  //split into an 'str' array with \n  as separator
  var str = contents.split("\n").map(function (val) {
      return String(val)
  });
  //if you look blacklist.txt file it contains begining and end 
  //'============' string . I want to put it out from array, and 
  //re-declare new array without '============' string.
  last = str.length-2
  list = str.slice(1, last)
  return list
 }
 
 function check_blacklist(name, phone) {
  //find the array, with similar parameter: name(concating)' '(concating)phone
     return list.includes(name+' '+phone);
 }
 
 //call the blacklist file
 initialize('blacklist.txt');
 
 //output of function with parameters:
 // 'Andi' as string parameter, and 1341441 as int parameter
 console.log(check_blacklist('Andi',1341441));
