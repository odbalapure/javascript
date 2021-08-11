////////////////////////////////////////
// ASYC AWAIT 

// the then-catch syntax is complex to consume PROMISES
// async await makes it easy to consume PROMISES

// fetch list of ids of recipes
const getIds = new Promise((resolve, reject) => {
    console.log("Inside a Promise");
    
    setTimeout(() => {
        resolve([1, 2, 3, 4, 5]);
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

// ASYNC function runs in the background 
async function getRecipesAw() {
    // await stops the code to execute unless and until the PROMISE is resolved or rejected
    const ids = await getIds;
    console.log("Async ids:", ids);

    const recipe = await getRecipe(ids[2]);
    console.log("Async recipe:", recipe);

    const publisher = await getPublisher("Om Balapure");
    console.log("Async publisher:", publisher);

    // NOTE: await expr can only be used inside an ASYNC function
    // if you add a return statement in an async function - it means that the PROMISED is resolved
    return recipe;
}

// getRecipesAw();

// const result = getRecipesAw();
// console.log(result);
// if we simply log the result, it will print PROMISE {<pending>}
// because async function runs in the background 
// when we log the recipe the async function - getRecipesAw is still running in the background 
// recipe is a PROMISE and we dont have a result yet and cannot log it 
// and the code that logs the "recipe" is synchronous 

// processing result returned from an ASYNC function
getRecipesAw().then(result => console.log("Async recipe - then:", result));










