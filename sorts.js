function bubbleSort(array){
	for( var i = 1; i < array.length; i++){
		var change = false;
		for(var j = 0; j < array.length - i; j++){
			var temp;
			if(array[j] > array[j+1]){
				change = true;
				temp = array[j+1];
				array[j+1] = array[j];
				array[j] = temp;
			}
		}
		if(change == false){
			return array;
		}
	}
	return array;
}

// bubbleSort([5,6,7,8,5,43,2]);

function selectionSort(array){
	var min, index;
	for(var i = 0; i < array.length -1; i++){
		min = array[i];
		index = i;
		for(var j = i +1; j < array.length; j++){
			if(min > array[j]){
				min = array[j];
				index = j;
			}
		}
		if(index != i){
			array[index] = array[i];
			array[i] = min;
		}
	}
	return array;
}
// selectionSort([5,6,7,8,5,43,2]);

function insertionSort(array){
	var temp, j;
	for(var i =1; i < array.length; i++){
		if(array[i] < array[i-1]){
			temp = array[i];
			j = i -1;
			while(temp < array[j] && j >= 0){
				array[j+1] = array[j];
				j--;
			}
			array[j+1] = temp;
		}
	}
	return array;
}

// insertionSort([5,7,8,6,4,2,5,7,9])

function findPrimes(num){
	if(num <2){
		return [];
	}
	var array = [2];
	for(var i = 3; i <= num; i = i+2){
		var is_prime = true;
		for(var j = 0; j < array.length; j++){
			if(i % array[j] == 0){
				is_prime = false;
				break;
			}
		}
		if(is_prime){
			array.push(i);
		}
	}
	return array;
}

findPrimes(50)




