function secondToLast(array){
  if(array.length < 2){
    return false;
  }else{
    return array[array.length-2];
  }
}

// console.log(secondToLast([5,6,5,4,3,2]))

function nthToLast(array,num){
  if(array.length < (1 + num)){
    return false;
  }else{
    return array[array.length - (1+num)];
  }
}

// console.log(nthToLast([5,4,3,2,1,7,8],4))
