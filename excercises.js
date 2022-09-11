Functions

function sum(a , b) {
	return a + b
}

function sub(a, b) {
	return a - b
}

function div(a , b) {
	return a / b
}

function mul(a , b) {
	return a * b
}

//let result = sum(30,4)
//console.log(result)

//let result2 = sum(4,6) + sub(9,7) + div(3,2) + mul(2,10)
//console.log(result2)

//Arrow functions
//const sumArrow = (a, b) => a + b
//console.log(sumArrow(10, 50))

//const subArrow = (a , b) => a - b
//console.log(subArrow(10 , 50))

//const divArrow = (a , b) => a / b
//console.log(divArrow(10, 2))

//const mulArrow = (a , b) => a * b
//console.log(mulArrow(10, 2))

//let result3 = mulArrow(10, 2) + sumArrow(22, 98) + divArrow(10, 2)
//console.log(result3)

//Objects
const person = {
fname:  'Kwasi',
lname: 'Asare',
shirt: 'Green',
trousers: 'black',
phone: '+233-544-332025'
}
//console.log(person.phone)
//console.log(person)
//console.log(person.fname)


const introducer = (name, shirt, assets, liabilities) => {
  const person = {
    name: name,
    shirt: shirt,
    assets: assets,
    liabilities: liabilities,
    netWorth: function() {
      return this.assets - this.liabilities
    }
  }

  const intro = `Hi, my name is ${person.name} and the color of my shirt is ${person.shirt}. My networth is $${person.netWorth()} USD`

  return intro

}
//console.log(introducer('kwasi' , 'Blue', 80000, 20000))


const fruits = ['🍌', '🍎', '🍊', '🍐', '🍌', '🍎', '🍊', '🍐', '🍌', '🍎', '🍊', '🍐', '🍌', '🍎', '🍊', '🍐', '🍌', '🍎', '🍊', '🍐']

for (let i=0; i < fruits.length; i++) {
  // console.log(fruits[i])
}

for (const fruit of fruits) {
  console.log(fruit)
 }

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const double = () => {
  let result = []
  for (const number of numbers) {
  result.push(number *2)
 }
 return result
}

//console.log(numbers)
//console.log(double([]))



const letterCounter = () => {
   const phrase = 'write your phrase' 

   let result = 0;
   
   for (const index in phrase) {
  //   console.log(Number(index) + 1)
     result = Number(index) + 1
   }
   return {result}
 }
 
//console.log(letterCounter())

const sumArray = (numbers) => {
  let result = 0;
  for (const number of numbers) {
  //console.log(number)
  result += number
 }
  return {result}
}

const nums = [1, 3, 4, 5, 7, 9]
//console.log(sumArray(nums)) 
 
 
const max = (numbers) => {
 let result = numbers [0]
 
 for (const number of numbers) {
   if (number > result) {
     result = number
     }
    }
    return {result}
  }
  
  //console.log(max([1, 2, 3, 9, 41]))
  
const letterFrequency = (phrase) => {
	// letterFrequency('haha') = {'h': 2, 'a': 2}
  //console.log(phrase)
  // Make a frequency Object {}
  let frequency = {}
  for (const letter of phrase) {
	  // check if letter exist in frequency
	  if (letter in frequency) {
		// increment the value to 1
		 frequency[letter]++ 
	   // otherwise set value to 1
	  } else {
		  frequency[letter] = 1
	  }
  }
    return frequency
}	
 
//console.log(letterFrequency('haha, i am getting the underlying principles, hahahahah'))


const wordFrequency = (phrase) => {

    const words = phrase.split (' ')
	// call letterFrequency
	return letterFrequency(words)
   }
  
//console.log(wordFrequency('haha , haha lol lol lol lol i am getting the underlying principles, hahahahah'))


//map

// not running in vscode[1, 2, 3, 4].map (number => console.log(number))

//let result = [1, 2, 3, 4].map(number => number *2)
//console.log(result)

const doubleMap = (numbers) => {
	return numbers.map(number => number * 2)
}
//console.log(doubleMap([1, 2, 3]))


// filter
const filter = (numbers, greaterThan) => {
	let result = []
	for (const number of numbers) {
		if (number > greaterThan) {
			result.push(number)
		}
	}
	return result
}
//console.log(filter([1, 2, 3, 4, 5, 6], 3))

const kays = [1, 2, 3, 4, 5, 6, 7]
//console.log(kays.filter(kay => kay > 5))

const actors = [
	{name: 'johnny', networth: 1200000},
	{name: 'amber', networth: 10021000},
	{name: 'leonardo', networth: 52100000},
]

//console.log(actors.filter(actor => actor.networth > 100000))
let networth1 = actors.reduce((a, b) => a + b.networth, 0)
//console.log(networth1)

//Reduce
const array = [1, 2, 3, 4]
const resulta = array.reduce((a, b) => a + b)
console.log(resulta)

const randomSelectFromArray = () => {
  fruits = [ 'banana', 'apple', 'mango', 'guava']
}
console.log(fruits)
