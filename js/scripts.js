function drawTree(a) {
  var i = 1;
  for (i = 1; i <= a*2; i++) {
    var star = '';
    var gap = ' ';
    var j = 1;
    for (j = 1; j <= i; j++) { 
      star += '*';
      var space = gap.repeat(a - star.length/2);
    }  
    if (star.length % 2 == 0) {
        continue;
    }
    console.log(space + star); 
  }
}

drawTree(5)