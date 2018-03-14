function largestOfFour(arr) {
    var largestOfFour = [];
    for (var i = 0; i < arr.length; i++) {
      var sortArr = arr[i].sort(function(a, b) {
        return a - b;
      });
      
      largestOfFour.push(arr[i].pop());
    }
    
    return largestOfFour;
  }
  
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
  