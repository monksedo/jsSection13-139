///////////////////////////////////////////////////////////////////////////
// Asynchronus JavaScript
/*
const first = () => {
    console.log('Hey there!');
    second();
    console.log('The end!');
}

const second = () => {
    setTimeout(() => {
        console.log('Async Hey, how are you doing?');
    }, 2000);
}

first();
*/


//////////////////////////////////////////////////////////////////////////
// Call Back Hell

function getRecipe() {
    setTimeout(() => {
        const recipeID = [523, 883, 432, 974];
        console.log(recipeID);

        setTimeout((id) => {
            const recipe = {
                title: 'Fresh tomato pasta',
                publisher: 'Kim'
            };
            console.log(`${id}: ${recipe.title}`);

            setTimeout(publisher => {
                const recipe1 = {
                    title: 'Italian Pizza',
                    publisher: 'Kim'
                };
                console.log(recipe);
            }, 1000, recipe.publisher);

        }, 1500, recipeID[2]);

    }, 2000);
}
getRecipe();



