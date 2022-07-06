const hello = () => console.log("hello world!")


/**
 * Es2020 - Dynamic Imports
 * @param value
 * @returns {Promise<void>}
 */
const checkDynamicImportFunc = async (value) => {
    let printValue = await import('./print.js')
    printValue.print(value)
}

checkDynamicImportFunc('Dynamic import works !')

/**
 * Es2020 - BigInt
 */
const maxInteger = Number.MAX_SAFE_INTEGER
console.info(maxInteger) // 9007199254740991
console.info(maxInteger + 1) // 9007199254740992
console.info(maxInteger + 2) // 9007199254740992 ??
console.info(maxInteger + 3) // 9007199254740994

// Using BigInt
const maxIntegerBigInt = BigInt(maxInteger)
console.info(maxIntegerBigInt) // 9007199254740991n
console.info(maxIntegerBigInt + 1n) // 9007199254740992n

/**
 * Es2020 - Match All
 *
 */
const regExpr = /(name )\w+/g
const str = 'My name is Smith and whats your name?'
const matchAl = str.matchAll(regExpr)

console.info(matchAl)
console.info(Array.from(matchAl))

/**
 * Es2020 - Nullish Coalescing Operator
 */

let object = {
    car: {
        speed: 0,
        name: ""
    }
}

console.info(object.car.speed || 90) // 90
console.info(object.car.speed ?? 90) // 0

console.info(null || true) // true
console.info(null ?? true) // true

console.info(undefined || true) // true
console.info(undefined ?? true) // true

console.info(0 || true) // true
console.info(0 ?? true) // 0

console.info("" || true)// true
console.info("" ?? true) // ""

console.info([] || true) // []
console.info([] ?? true) // []


/**
 * ES2020 - Optional Chaining
 */

let person = {
    name: "John",
    age: 20
}

console.info(person.foo?.bar) // undefined
console.info(person?.name) // John

console.info(person.foo.bar) // TypeError: Cannot read property 'bar' of undefined


/**
 * ES2020 - Private class variable
 */
class MyClass {
    #privateVariable = "Hello private world"

    helloWorld() { console.info(this.#privateVariable) }
}

const myClass = new MyClass()
myClass.helloWorld() // works
// console.info(myClass.#privateVariable) // SyntaxError: Private field '#privateVariable' must be declared in an enclosing class

/**
 * ES2020 - Promise All Settled
 */
const resolvingPromise1000ms = new Promise((resolve, reject) => setTimeout(resolve, 1000))
const rejectingPromise2000ms = new Promise((resolve, reject) => setTimeout(reject, 2000))

const timeCheckpoint = Date.now()
Promise.allSettled([
    resolvingPromise1000ms,
    rejectingPromise2000ms
]).then(data => {
    const elapsedTimeInMS = Date.now() - timeCheckpoint
    console.info(`Promise.allSettled resolved after ${elapsedTimeInMS}ms`)
    console.info(data)
})

