class Test extends Object {
    constructor() {

    }
}

Object.testFun = () => {
    console.log("it is testFun")
    return "it is testFun from Object"
}

console.log(Test.testFun())

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    sayHi() {
        console.log("my name is " + this.name + ", my age is " + this.age)
    }
}

function NewPerson(name, age) {
    if (!(this instanceof NewPerson)) {
        throw new Error("请使用 new NewPerson")
    }
    this.name = name
    this.age = age
}
NewPerson.prototype.sayHi = () => {
    console.log("my name is " + this.name + ", my age is " + this.age)
}

let xiaoMing = new Person('xiaoMing', 23)
xiaoMing.sayHi()
let xiaoHong = new Person('xiaoHong', 18)
xiaoHong.sayHi()

var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];

console.log(arr.flat(Infinity).sort((a, b) => a - b).filter((a, b, c) => c.indexOf(a) === b))