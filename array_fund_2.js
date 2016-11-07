// practice alogrithms from page 22

function biggieSize(array){
  for(var i = 0; i < array.length; i++){
    if(array[i] >= 0){
      array[i] = "big";
    }
  }
  return array
}

// console.log( biggieSize([5,4,0,-6,-7,88,-9]))

function printLowReturnHigh(array){
  var lowest = array[0];
  var highest = array[0];
  for(var i = 0; i < array.length; i++){
    if(typeof array[i] != "number"){
      return false;
    }else{
      if(array[i] < lowest){
        lowest = array[i];
      }
      if(array[i] > highest){
        highest = array[i];
      }
    }
  }
  console.log(lowest);
  return highest;
}

// console.log(printLowReturnHigh([5,4,6,"fart",8,88,43,2,3]))

function printOneReturnAnother(array){
  console.log(array[array.length-2]);
  for(var i = 0; i < array.length; i++){
    if(typeof array[i] != "number"){
      return false;
    }else{
      if(array[i] %2 != 0){
        return array[i];
      }
    }
  }
  return false;
}

// console.log(printOneReturnAnother([2,8,76,4,2,55,77,88,22]))

function doubleVision(array){
  var newarr = [];
  for(var i = 0; i < array.length; i++){
    if(typeof array[i] != "number"){
      return false;
    }else{
      newarr.push(array[i]*2);
    }
  }
  return newarr;
}

// console.log(doubleVision([5,6,4,2,2,444,67]))

function countPositives(array){
  var count = 0;
  for(var i = 0; i < array.length; i++){
    if(typeof array[i] != "number"){
      return false;
    }else{
      if(array[i] > 0){
        count++
      }
    }
  }
  array[array.length-1] = count;
  return array
}

// console.log(countPositives([5,-7,-2,8,-4,55,777,22,3]))

function evenOdds(array){
  var even = 0;
  var odd = 0;
  for(var i = 0; i < array.length; i++){
    if(typeof array[i] != "number"){
      even = 0;
      odd = 0;
    }else{
      if(array[i] %2 == 0){
        odd = 0;
        even++
        if(even == 3){
          console.log("Even more so!");
          even = 0;
        }
      }
      if(array[i] %2 != 0){
        odd++;
        even = 0;
        if(odd == 3){
          console.log("That's odd!");
          odd = 0;
        }
      }
    }
  }
}

// console.log(evenOdds([55,4,3,22,5,7,9,4]))

function incrementSeconds(array){
  for(var i = 1; i < array.length; i= i + 2){
    if(typeof array[i] != "number"){
      return false;
    }else{
      array[i] = array[i] + 1;
      console.log(array[i]);
    }
  }
  return array;
}
// console.log(incrementSeconds([3,4,5,6,3,2,8,77]))

function previousLengths(array){
  for(var i = array.length - 1; i >= 0; i--){
    array[i+1] = array[i].length;
  }
  array[0] = 0;
  return array;
}

// console.log(previousLengths(["beans", "farts", "pumpkins", "christmas"]))

function addSevenToMost(array){
  var newarr = [];
  for(var i = 1; i < array.length; i++){
    newarr.push(array[i] + 7);
  }
  return newarr;
}

// console.log(addSevenToMost([5,6,77,44,33,23]))

function reverseArray(array){
  var temp;
  for(var i = 0; i <= Math.floor(array.length/2); i++){
    temp = array[i];
    array[i] = array[(array.length-1) - i]
    array[(array.length-1)-i] = temp
  }
  return array;
}

// console.log(reverseArray([1,2,3,4,5]))
