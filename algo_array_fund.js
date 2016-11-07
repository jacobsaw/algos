// algorithms from page 20 of the coding dojo book

function countdown(num){
  var count = num;
  var array = [];
  while(count >= 0){
    array.push(count);
    count --;
  }
  return array
}

// console.log(countdown(5))

function printAndReturn(array){
  if(array.length != 2){
    return false;
  }else{
    console.log(array[0]);
    return array[1];
  }
}
// console.log(printAndReturn([4,6]))

function firstPlusLength(array){
  if (typeof array[0] != "number"){
    return false;
  }else{
    return array[0] + array.length
  }
}

// console.log(firstPlusLength([14,15,22]))

function greaterThanSecond(array){
  if (array.length == 1){
    console.log("There is only one value in this array!")
  }else{
    var count = 0;
    var newarr=[]
    for (var i = 2; i < array.length; i++){
      if(array[i] > array[1]){
        count ++;
        newarr.push(array[i])
      }
    }
    console.log(count);
    return newarr;
  }
}

// console.log(greaterThanSecond([4,5,6,3,2,6,7]))

function thisLengthThatValue(num1, num2){
  if(num1 == num2){
    console.log("Jinx!");
  }else{
    var array = [];
    for(var i =0; i <= num1; i++){
      array.push(num2);
    }
    return array;
  }
}

// console.log(thisLengthThatValue(22,6))

function fitFirstValue(array){
  if(array[0] > array.length){
    console.log("Too big!");
  }
  if(array[0] < array.length){
    console.log("Too small!");
  }
  if(array[0] == array.length){
    console.log("Just right!");
  }
}

// console.log(fitFirstValue([6,5,6,6,3,2]))
