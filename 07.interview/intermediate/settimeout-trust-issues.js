console.log("Start");

setTimeout(() => {
  console.log("Callback Function");
}, 1000);

console.log("End");

// Suppose there are 1 million of lines of code that will take more than 1000ms 
// So in this case the setTimeout will be called once the million lines of code complete execution 

/* Simulate blocking of MAIN thread */
let startDate = new Date().getTime();
let endDate = startDate;
// Run while loop for 2s
while (endDate < startDate + 2000) {
  endDate = new Date().getTime();
  console.log(endDate);
}

console.log("While Expires!");

/* NOTE: Even if you pass 0ms to setTimeout it does not mean the output will be synchronous */