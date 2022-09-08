function aarowfuction(){
    console.log("function");
  }

  // Arrow Function
const aarowfuction = () => {
    console.log("function");
  }


const myFunc = () => "value";

 
hello = function() {
    document.getElementById("demo").innerHTML += this;
  }
  
  window.addEventListener("load", hello);
  document.getElementById("btn").addEventListener("click", hello);



class num {
    a = 1;
    autoBoundMethod = () => {
      console.log(this.a);
    }
  }
  
  const c = new num();
  c.autoBoundMethod(); // 1
  const { autoBoundMethod } = num;
  autoBoundMethod(); // 1


const obj = {
    count: 10,
    doSomethingLater () {
      setTimeout(() => {

        this.count++;
        console.log(this.count);
      }, 300);
    },
  };
  
  obj.doSomethingLater();


const empty = () => {};

(() => 'foobar')();

const simple = (a) => a > 15 ? 15 : a;
simple(16); // 15
simple(10); // 10

const max = (a, b) => a > b ? a : b;

const arr = [5, 6, 13, 0, 1, 18, 23];
const sum = arr.reduce((a, b) => a + b);
const even = arr.filter((v) => v % 2 === 0);
const double = arr.map((v) => v * 2);
promise
  .then((a) => {
  // …
  })
  .then((b) => {
  
  });


setTimeout(() => {
  console.log('I happen sooner');
  setTimeout(() => {
    // deeper code
    console.log('I happen later');
  }, 1);
}, 1);



const words = {
    count: 10,
    doSomethingLater () {
      setTimeout(() => {
     
        this.count++;
        console.log(this.count);
      }, 300);
    },
  };
  obj.doSomethingLater();




const arguments = [1, 2, 3];
const int = () => arguments[0];

arr(); // 1

function wod(n) {
  const f = () => arguments[0] + n; // foo's implicit arguments binding. arguments[0] is n
  return f();
}


foo(3); // 3 + 3 = 6

let myFunction = (a, b) => a * b;
document.getElementById("demo").innerHTML = myFunction(4, 5);


class kuar {
  a = 1;
  constructor() {
    this.method = this.method.bind(this);
  }
  method() {
    console.log(this.a);
  }
}