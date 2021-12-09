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

    // Use an arrow function to fix the above issue
    this.tags.forEach((tag) => {
      console.log(this.title, tag);
    });
  },
};

/**
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
