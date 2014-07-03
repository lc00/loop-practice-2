var animals = ['rat', 'cat', 'butterfly', 'marmot', 'ocelot'];

var func0 = function(element, index, array){
	if(index !== array.length-1 ){
		console.log(element);
	}
}

// var forEach = function(array, callback){
// 	for (var i =0; i<array.length; i++){
// 		callback(array[i], i, array);
// 	}
// }

// var map = function(array, callback){
// 	var newArr = [];
// 	for(var i=0; i<array.length; i++){
// 		newArr.push(callback(array[i], i, array));

// 	}
// 	return newArr;
// };

// var filter = function(array, callback){
// 	var blankArr = [];
// 	for(var i=0; i<array.length; i++){
// 		if(callback(array[i], i, array)){
// 			blankArr.push(array[i]);
// 		}
// 	}
// 	return blankArr;
// }

var biggerThan5 = function(element){
	return element > 5;
}


$(document).on('ready', function() {
	/* 1 */
	animals.forEach(func0);
	
	/* 2 */
	var result = animals.filter(function(element, index, array){
		if(index % 2 === 0){
			return( element);
		}
	})	
	console.log(result)

	/* 3 */
	
	console.log(animals.reverse());


	/* 4 */
	animals.forEach(function(element, index){
		if(index === 0 || index === 4){
			console.log(element)
		}
		else {
			console.log(element + "\n" + element)
		}
	})

});