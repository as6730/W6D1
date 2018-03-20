
function sum() {
  let total = 0;

  for (let i = 0; i < arguments.length; ++i) {
    total += arguments[i];
  }

  return total;
}



function sumWithSpread(...args) {
  let total = 0;

  for (let i = 0; i < args.length; ++i) {
    total += args[i];
  }

  return total;
}

Function.prototype.myBind = function(...args) {
  let newThis = args[0]; // breakfast
  let fParams = args.slice(1);

  const that = this;
  return function(...arg) {
    fParams = fParams.concat(arg);
    that.apply(newThis, fParams);
  };

};

class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

// const markov = new Cat("Markov");
// const breakfast = new Cat("Breakfast");
// const x = markov.says.myBind(breakfast, "meow");
// console.log(x("Kush"));
// console.log(x("aKush"));
// console.log(x("4Kush"));
// markov.says.myBind(breakfast, "meow", "Kush")();
// markov.says.myBind(breakfast)("meow", "a tree");
// markov.says.myBind(breakfast, "meow")("Markov");
// const notMarkovSays = markov.says.myBind(breakfast);
// notMarkovSays("meow", "me");


// function curriedSum(numArgs) {
//   let numbers = [];
//   let total = 0;
//   console.log("outer: " + numArgs);
//   function _curriedSum(...num) {
//     numbers.push(num);
//     total += num;
//     if (numbers.length === numArgs) {
//       console.log(numbers);
//     } else {
//       console.log(numbers);
//       // return _curriedSum;
//     }
//   }
//
//   // return _curriedSum;
// }

function curriedSum(numArgs) {
  const numbers = [];

  function _curriedSum(num) {
    numbers.push(num);

    if (numbers.length === numArgs) {
      let total = 0;

      numbers.forEach(function(n) {
        total += n;
      });
      return total;
    } else {
      return _curriedSum;
    }
  }

  return _curriedSum;
}

// const sum3 = curriedSum(4);
// sum3(5); // => 56
// sum3(2);
// sum3(2);
// sum3(3);

Function.prototype.curry = function(numArgs) {
  const collection = [];
  const fn = this;

  function _curry(num) {
    collection.push(num);
    if (collection.length === numArgs) {
      return fn(...collection);
    } else {
      return _curry;
    }
  }

  return _curry;
};

// var yeet = sum.curry(3);
// yeet(4);
// console.log(yeet(4));
// Math.function.apply(null, **)
Function.prototype.curryWithApply = function(numArgs) {
  const collection = [];
  const fn = this;

  function _curry(num) {
    collection.push(num);

    if (collection.length === numArgs) {
      // debugger
      // return fn.apply(null, collection);
      return fn.apply(fn, collection);
    } else {
      return _curry;
    }
  }

  return _curry;

};

let test = sum.curryWithApply(3);
test(3);
test(3);
console.log(test(3));
