////////////////////////////////////////////////////////////////////
// From Callback Hell to Promises

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

getIDs.then(IDs => {
    console.log(IDs);
    return getRecipe(IDs[3]);
}).then(recipe => {
    console.log(recipe);
    return getRelated('Kim');
}).then(recipe => {
    console.log(recipe);
}).catch(error => {
    console.log(error, 'Error!')
});


