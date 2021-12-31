const video = {
  title: "title",
  tags: ["a", "b", "c"],
  showTags() {
    /*
    this.tags.forEach(function(tag) {
      console.log(this.title, tag);
    });
    */

    // 'title' will be "undefined"
    // If you console log the "this", you will notice that "this"
    //    points to the global object  not 'video'
    // To fix the issue pass "this" as an argument to forEach

    // this.tags.forEach(function(tag) {
    //   console.log(this.title, tag);
    // }, this);

    /* NOTE: Not all the methods in JS have the ability to pass "this" argument
        So we can use arrow functions in this case */

    // Also we can use an arrow function to fix "this" scope issue
    this.tags.forEach((tag) => {
      console.log(this.title, tag);
    });

    // TRICK SOLUTION 1
    // this.title prints undefined
    // const rating = function () {
    //   console.log(`${this.title} has a rating of 4.5`)
    // }

    // To overcome this problem preserve the THIS
    // const self = this;
    // const rating = function() {
    //   console.log(`${self.title} has a rating of 5.0`)
    // }

    /* NOTE: Even if you used an old fashion "function" instead of a
        function expression the result would be the same */

    // TRICK SOLUTION 2
    // Using an arrow function solves the issue as the arrow function uses THIS
    //    from it's parent scope, hence no need to preserve THIS explicitly
    const rating = () => {
      console.log(`${this.title} has a rating of 5.0`);
    };

    rating();
  },

  /*
  NOTE: Arrow function does not get its own THIS keyword
    They will get the THIS from its surrounding OR their parent's THIS keyword
    And the parent scope of price() is the global scope and "title" is not
    the part of a global scope hence it prints "undefined"

    Q. A question might arise that "const video = {}" is a block then how come price() remains in the global scope?
    => As it is an object literal not a code block ({ }) and a scope is created using 'functions' in Javascript.
  */

  price: () => {
    console.log(`${this.title}: costs $20`);
  },
};

/**
 * MOST IMPORTANT:
 * "this" refers to the object the function is a property of
 * "this" value will always depend on the object that calls the function
 * "this" does not always point to the current object
 * "this" refers to whoever called the function in which you used the "this"
 */

video.showTags();

class Person {
  constructor() {
    this.name = "Om";
  }

  showName() {
    console.log(this.name);
  }
}

new Person().showName();
