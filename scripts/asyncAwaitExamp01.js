////////////////////////////////////////////////////////////////////
// Prom Promises to Async/Await

const getIDs = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([523, 883, 432, 974]);
        // reject([523, 883, 432, 974]);
    }, 1500);
    setTimeout(() => {
        reject([523, 883, 432, 974]);
    }, 2500);
});

const getRecipe = recvID => {
    return new Promise((resolve, reject) => {
        setTimeout((ID) => {
            const recipe = {
                title: 'Fresh tomato pasta',
                publisher: 'Jonas'
            };
            resolve(`${ID}: ${recipe.title}`);
        }, 1500, recvID);
    });
};

const getRelated = publisher => {
    return new Promise((resolve, reject) => {
        setTimeout(pub => {
            const recipe = {
                title: 'Italian Pizza',
                publisher: 'Kim'
            };
            resolve(`${pub}: ${recipe.title}`);
        }, 1500, publisher);
    });
};

// Async/Await
async function getRecipesAwait() {
    const IDs = await getIDs;
    console.log(IDs);
    const recipe = await getRecipe(IDs[3]);
    console.log(recipe);
    const related = await getRelated('Kim');
    console.log(related);
}
getRecipesAwait();


