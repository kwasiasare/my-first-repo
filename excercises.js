//Functions

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

let result2 = sum(4,6) + sub(9,7) + div(3,2) + mul(2,10)
console.log(result2)

//Arrow functions
const sumArrow = (a, b) => a + b
console.log(sumArrow(10, 50))

const subArrow = (a , b) => a - b
console.log(subArrow(10 , 50))

const divArrow = (a , b) => a / b
console.log(divArrow(10, 2))

const mulArrow = (a , b) => a * b
console.log(mulArrow(10, 2))

let result3 = mulArrow(10, 2) + sumArrow(22, 98) + divArrow(10, 2)
console.log(result3)

//Objects
const person = {
fname:  'Kwasi',
lname: 'Asare',
shirt: 'Green',
trousers: 'black',
phone: '+233-544-332025'
}
console.log(person.phone)
console.log(person)
console.log(person.fname)


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
console.log(introducer('kwasi' , 'Blue', 80000, 20000))


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

console.log(numbers)
console.log(double([]))



const letterCounter = () => {
   const phrase = 'write your phrase' 

   let result = 0;
   
   for (const index in phrase) {
     //console.log(Number(index) + 1)
     result = Number(index) + 1
   }
   return {result}
 }
 
console.log(letterCounter())

const sumArray = (numbers) => {
  let result = 0;
  for (const number of numbers) {
  //console.log(number)
  result = result + number
 }
  return {result}
}

const nums = [1, 3, 4, 5, 7, 9]
console.log(sumArray(nums)) 
 
 
const max = (numbers) => {
 let result = numbers [0]
 
 for (const number of numbers) {
   if (number > result) {
     result = number
     }
    }
    return {result}
  }
  
  console.log(max([1, 2, 3, 9, 41]))
  
const letterFrequency = (phrase) => {
  console.log(phrase)
  for (const letter of phrase) {
   console
  
}

console.log(letterFrequency('haha'))
   

