'use strict';
// 1 - splitAndMerge
	let testString = "My name is John";
	function splitAndMerge(str, sp) {
		let newArr = str.split("");
		let newStr = "";
		for(var i = 0; i <= newArr.length-1; i++) {
			if(newArr[i] !== sp && newArr[i] !== " "){
				newStr = newStr + newArr[i];
				if(i !== newArr.length-1) {
					newStr += sp;
				}
			}
		}
		return newStr;
	}
	splitAndMerge(testString, ",");


// 2 - convert
	let testObj = {
		name: 'Jeremy', 
		age: 24, 
		role: 'Software Engineer'
	};

	function convert(obj) {
		const r = Object.keys(obj).map(function(key){
			return [String(key), obj[key]];
		});
		return r;
	}
	convert(testObj);


// 3 - converts dash/underscore
	function toCamelCase(text) {
    return text.replace(/^([A-Z])|[\s-_]+(\w)/g, function(match, p1, p2, offset) {
        if (p2) {
        	return p2.toUpperCase();
        } else {
        	return p1.toUpperCase();
        }
              
    });
	}

	console.log(toCamelCase("the-stealth-warrior"));

	console.log(toCamelCase("The_Stealth_Warrior"));


// 4 - reverses each word	
	let testStr = " A fun little challenge! ";

	function reverseString(str) {
    	return str.split("").reverse().join("");
	}
	console.log(reverseString(testStr));


//5 - stringExpansion (работает с ошибкой)
	function stringExpansion(str) {
    	let newArr = str.split("");
        let newString = "";
    	for(let i = 0; i < newArr.length - 1; i++) {
    		if(parseInt(newArr[i])){
    			let numberArr = [];
                if(!parseInt(newArr[i + 1])) {
                   numberArr.push( newArr[i + 1].repeat(newArr[i]));
                   newString += numberArr.join(""); 
                }
    		} else  {
                newString += newArr[i];
            }
            
    	}
        return newString;
    	
    }
    console.log(stringExpansion('2abcde2'));

// 5 - Исправила ошибки проверки для первых и последних символов. Исправленный код ниже:

function stringExpansion(str) {
  let newArr = str.split("");
  let newString = "";

  for(let i = 0; i < newArr.length; i++) {
    if(i == newArr.length-1) {
      if(isNaN(parseInt(newArr[i]))) {
        newString += newArr[i];
      }
    } else {
      if(!isNaN(parseInt(newArr[i]))) {
        if(isNaN(newArr[i + 1])) {
          let numberArr = [];
          numberArr.push( newArr[i + 1].repeat(newArr[i]));
          newString += numberArr.join("");
          i++;
        }
      } else {
          newString += newArr[i];
        }
      }
  }
    return newString;
}

console.log(stringExpansion('0a2b0c3de2'));		
