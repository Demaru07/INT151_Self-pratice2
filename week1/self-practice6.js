const greet = (name, formatter) => formatter(name)

const shout = text => text.toUpperCase() + '!!!'

const sad = text => text.toUpperCase() + 'T-T'

console.log(greet('Alice', shout)); //ALICE!!!
console.log(greet('Alice', sad)); //ALICET-T

let y = 100 //global variable
let sum = 5
sum = 2
function getScore(x) {
  let y = 10 //local variable
  //global function
  let mid = 40
  let final = 30
  function doSomething() {
    console.log(`dosomething: ${y + sum + x + mid + final}`)
    //83
    //y (global),sum(global), y (local), x(local (parameter)) mid (local), final (local)
  }
  return mid + final + x + y + sum
}
const score = getScore(1)
console.log(score)
// console.log(x, mid, final) //cannot access

const z = 1
function makeAdder(x) {
  console.log(x);
  //  console.log(y) //y is not defined
  console.log(z);
  return function doSomething(y) {
    return x + y + z
  }
  // return doSomething //return function
  //  return doSomething() //return result of function
}
const add5 = makeAdder(5)  //add5 จำค่า x = 5
 const add10 = makeAdder(10) //add10 จำค่า x = 10
 console.log(add5(3))  // 8
 console.log(add10(3)) // 13

 //Practice-G1
 function idGenerator(){
    let count = 0
    function increment(){
        return ++count
    }
    return increment
}
 
const idGen = idGenerator()
 
console.log(idGen())
console.log(idGen())
console.log(idGen())