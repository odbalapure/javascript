////////////////////////////////////////
// PROMISE

// NOTE: This is the same example used in CALL BACK

// fetch list of ids of recipes
const getIds = new Promise((resolve, reject) => {
    console.log("Inside a Promise");
    
    setTimeout(() => {
        // resolve() takes some parameters, the result of a PROMISE
        resolve([1, 2, 3, 4, 5]);
        // reject([1, 2, 3, 4, 5]);
        // we dont need a reject() function in such an easy example
        // but we will need it when we are fetching some data from a server 
        // where there are many possbilities for an error to occur
    }, 1500);
});

// get recipe using recipe id 
const getRecipe = recId => {
    return new Promise((resolve, reject) => {
        setTimeout(id => {
            const recipe = { title: "Pizza again", publisher: "Om" };
            resolve(recipe.title);
        }, 1500, recId);
    });
};

// get the name of a publisher using a recipe id 
const getPublisher = publisher => {
    return new Promise((resolve, reject) => {
        setTimeout(pub => {
            resolve(pub);
        }, 1500, publisher);
    });
};

// now that we have the data fetched from a server it is time to process it 
// then - we can add an event handler when a PROMISE is fullfilled
// getIds
// .then(ids => {
//     // ids here is the result of a successfull PROMISE 
//     console.log(ids);
// })
// // catch - when a PROMISE is not fullfilled 
// .catch(error => {
//     console.log(`Error: ${error}`);
// })

getIds.then(ids => {
    console.log(`Recipe ids: ${ids}`);
    return getRecipe(ids[2]);
})
.then(recipe => {
    console.log(`Recipe fetched: ${recipe}`);
    return getPublisher("Om");
})
.then(publisher => {
    console.log(`Publisher fetched: ${publisher}`);
}) 
.catch(error => {
    console.log(`Error: ${error}`);
});