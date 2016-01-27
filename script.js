var animals = ['rat', 'cat', 'butterfly', 'marmot', 'ocelot']
console.log(animals)

// for (i =0; i<= animals.length; i++) {

// }

// function popFrom(Array) {
// 	Array.pop();
// 	return Array; 
// }
// testPopFrom = popFrom(animals);
// console.log(testPopFrom);
// console.log(animals);

//------------------------------------------

// function popOdds(Array) {
// 	var filteredArray = Array.filter(function(element, index) {
// 		return index % 2 === 0;
// 	});
// 	return filteredArray;
// }

// testPopOdds = popOdds(animals);
// console.log(testPopOdds);


//------------------------------------------

// function reverseOrder (Array) {
// 	newArray = [];
// 	for (var i = Array.length - 1; i >= 0; i -= 1) {
// 		console.log(Array[i]);
// 		newArray.push(Array[i]);
// 	}
// 	return newArray; 
// }

// testReverseOrder = reverseOrder(animals);
// console.log(testReverseOrder);

//------------------------------------------

function lameFunction (Array) {
	for (var i=0; i < Array.length; i++) {
		if (i === 0 || i === Array.length-1) {
			console.log(Array[i]);
		}
		else {
			console.log(Array[i]);
			console.log(Array[i]);
		}
	}
}
lameFunction(animals);

//------------------------------------------








