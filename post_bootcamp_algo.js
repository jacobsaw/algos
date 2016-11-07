function print255(){
  for(var i = 1; i < 256; i++){
    console.log(i);
  }
}

// console.log(print255())

function printOdd(){
  for(var i = 1; i <1000; i = i+2){
    console.log(i);
  }
}

// console.log(printOdd())

function printSum(){
  var sum = 0;
  for(var i = 1; i <5000; i = i+2){
    sum = sum + i;
  }
  console.log(sum)
}
// console.log(printSum())

function printValue(array){
  for(var i = 0; i < array.length; i++){
    console.log(array[i])
  }
}
// console.log(printValue([3,4,5,6,77,66,44,22222,4]))

function findMax(array){
  var max = array[0];
  for(var i = 1; i < array.length; i++){
    if(array[i] > max){
      max = array[i];
    }
  }
  return max;
}

// console.log(findMax([5,6,-2888,5,4,3,2,66,7,8]))

function averageValues(array){
  var sum = array[0];
  for(var i = 1; i < array.length; i++){
    sum = sum + array[i]
  }
  console.log(sum/array.length)
}

// console.log(averageValues([5,4,23,2,2,2,2,45,6]))

function buildArray(){
  array = [];
  for(var i = 1; i < 256; i = i + 2){
    array.push(i)
  }
  return array;
}
// console.log(buildArray())

function greaterThan(num,array){
  var count = 0;
  for(var i = 0; i < array.length; i++){
    if(array[i] > num){
      count ++;
    }
  }
  return count;
}

// console.log(greaterThan(4,[5,4,6,7,77,77,3,2,1]))

function squareValues(array){
  for(var i = 0; i < array.length; i++){
    array[i] = array[i] * array[i];
  }
  return array;
}
// console.log(squareValues([4,5,6,7]))

function eliminateNegatives(array){
  for(var i = 0; i < array.length; i++){
    if(array[i] < 0){
      array[i] = 0;
    }
  }
  return array;
}
// console.log(eliminateNegatives([5,4,3,2,-1,-4,-777]))

function minMaxAvg(array){
  var min = array[0];
  var max = array[0];
  var sum = array[0];
  for(var i = 1; i < array.length; i++){
    if(array[i] > max){
      max = array[i];
    }
    if(array[i] < min){
      min = array[i];
    }
    sum = sum + array[i];
  }
  return [min, max, sum/array.length]
}

// console.log(minMaxAvg([5,6,7,8888,44,3,222]))

function dumbShift(array){
  for(var i = 0; i <array.length; i++){
    if(i != array.length-1){
      array[i] = array[i+1];
    }else{
      array[i] = 0;
    }
  }
  return array
}
// console.log(dumbShift([5,4,4,44,4,5,7,5,2,1]))

function negToString(array){
  for(var i = 0; i < array.length; i++){
    if(typeof array[i] != "number"){
    }else{
      if(array[i] < 0){
        array[i] = "dojo"
      }
    }
  }
  return array;
}

// console.log(negToString([5,6,7,4,3,-1,-5]))

function randomVal(){
  var array = []
  for(var i = 0; i < 10; i++){
    array.push(Math.floor(Math.random()*(100-1)+1));
  }
  return array;
}
// console.log(randomVal())

function firstLastSwitch(array){
  var temp = array[0];
  array[0] = array[array.length-1];
  array[array.length-1] = temp;
  return array;
}

// console.log(firstLastSwitch([5,4,4,4,6,87]))

function reverseArray(array){
  var temp;
  for(var i = 0; i < Math.floor(array.length/2); i++){
    temp = array[i];
    array[i] = array[(array.length-1)-i];
    array[(array.length-1)-i] = temp;
  }
  return array;
}

// console.log(reverseArray([5,6,7,8]))

function insertVal(array, index, num){
  for(var i = array.length - 1; i > index - 1; i--){
    array[i+1] = array[i];
  }
  array[index] = num;
  return array;
}

// console.log(insertVal([1,2,3,4,5,6],4,555555))

function removeNegs(array){
  for(var i = 0; i < array.length; i++){
    if(typeof array[i] != "number"){
      return false;
    }else{
      if(array[i] < 0){
        for(var x = i; x < array.length; x++){
          array[x] = array[x+1];
        }
        array.pop();
        i--;
      }
    }
  }
  return array;
}

// console.log(removeNegs([1,2,3,-4,-5,-6,7,-78,8,8]))
