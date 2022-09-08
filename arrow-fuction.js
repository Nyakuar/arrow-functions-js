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
  
  // The window object calls the function:
  window.addEventListener("load", hello);
  
  // A button object calls the function:
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
  // If it were a normal method, it should be undefined in this case 




3
const obj = {
    count: 10,
    doSomethingLater () {
      // The traditional function binds "this" to the "obj" context.
      setTimeout(() => {
        // Since the arrow function doesn't have its own binding and
        // setTimeout (as a function call) doesn't create a binding
        // itself, the "obj" context of the traditional function will
        // be used within.
        this.count++;
        console.log(this.count);
      }, 300);
    },
  };
  
  obj.doSomethingLater();


const empty = () => {};

(() => 'foobar')();
// Returns "foobar"
// (this is an Immediately Invoked Function Expression)

const simple = (a) => a > 15 ? 15 : a;
simple(16); // 15
simple(10); // 10

const max = (a, b) => a > b ? a : b;

// Easy array filtering, mapping, etc.

const arr = [5, 6, 13, 0, 1, 18, 23];

const sum = arr.reduce((a, b) => a + b);
// 66

const even = arr.filter((v) => v % 2 === 0);
// [6, 0, 18]

const double = arr.map((v) => v * 2);
// [10, 12, 26, 0, 2, 36, 46]

// More concise promise chains
promise
  .then((a) => {
  // …
  })
  .then((b) => {
    // …
  });

// Parameterless arrow functions that are visually easier to parse
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
      // The traditional function binds "this" to the "obj" context.
      setTimeout(() => {
        // Since the arrow function doesn't have its own binding and
        // setTimeout (as a function call) doesn't create a binding
        // itself, the "obj" context of the traditional function will
        // be used within.
        this.count++;
        console.log(this.count);
      }, 300);
    },
  };
  
  obj.doSomethingLater();




const arguments = [1, 2, 3];
const int = () => arguments[0];

arr(); // 1

function foo(n) {
  const f = () => arguments[0] + n; // foo's implicit arguments binding. arguments[0] is n
  return f();
}

foo(3); // 3 + 3 = 6

