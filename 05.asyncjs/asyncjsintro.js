////////////////////////////////////////
// EVENT LOOP

// const second = () => {
//     setTimeout(() => {
//         console.log("Second function");
//     }, 2000);
//     console.log("Outside function");
// }

// const first = () => {
//     console.log("First function");
//     second(); 
//     console.log("THE END");
// };

// op: 
// First function - THE END - Second function
// first();

/* 
- The callback functions attached to setTimeOut are pushed to the MESSAGE QUEUE
- This happens exactly with the DOM events. The "Event Listener" sits in the WEP API waiting for a certain event to happen
- Now to call and execute these callback functions EVENT LOOP comes in. It constantly monitors the MESSAGE QUEUE and the EXEC stack
*/

////////////////////////////////////////
// CALL BACKS

// simulating fetching of data from a server
function getRecipe() {
    setTimeout(() => {
        const recipeId = [1, 2, 3, 4, 5];
        console.log(recipeId);
        
        // we have received recipe ids from the server 
        setTimeout(id => {
            const recipe = { title: "Pasta", publisher: "Om" };
            console.log(`${id}: ${recipe.title}`);

            // lets say we want to fetch some another recipe of the same publisher
            setTimeout(publisher => {
                console.log(`Finding recipes of ${publisher} again...`);
                const anotherRecipe = { title: "Pizza", publisher: "Om" };
                console.log(anotherRecipe);
            }, 1500, recipe.publisher);
            
            // we can pass some arguments to the callback function after the TIMEOUT
        }, 1000, recipeId[3]);
    }, 1500);
}

getRecipe();


 



