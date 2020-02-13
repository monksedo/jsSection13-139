///////////////////////////////////////////////////////////////////
// ES10 Features
//

// Example - 1 layer array
const array = [1, 2, 3, 4, 5, 6, 7];
const flat = array.flat();
console.log(`flat array ${flat}`);

// Example1 - mix of flat level array
const array1 = [1, 2, [3, 4], 5, [6, 7], 8, 9];
const flat1 = array1.flat();
console.log(`Flat array ${flat1}`);

// Example2 - multi-level deep array
const array2 = [1, 2, [3, 32, 54, 54, [4, 5, 12, 21, [6, 32, 22, [7, [10, [11, [8, 9]]]]]]]];
const flat2 = array2.flat();
console.log(`Defraut flat() ${flat2}`); // Default flat() will return flatten upto 2 level

const flatN = array2.flat(2);   // flat(2) can flatten out multi-level array
console.log(`Let try flat(2) ${flatN}`);

const zooAnimal = ['🦮', '🐎', ['🐢', '🐘', '🐫', ['🐇', '🦎', '🐊', ['🐍', '🦖', '🦕', '🐉',
  ['🕊', '🐓', '🦚', '🐌', ['🦂', '🦈', '🐳', '🐀']]]]]];
const animal = zooAnimal.flat(5);
console.log(animal);

// Exmaple flatten array data and map data with flatMap()
const zooChaos = zooAnimal.flatMap(animal => animal + '🦖');
console.log(zooChaos);

const data = ['name1', 'col1', 'col2', 'subtotal', , , , 'summary'];
const data1 = data.flat();    // Use flat to clean up data from array.
console.log(data1);

// Example clean up email string with trimStart() and trimEnd()
const email1 = '                chris@gmail.com';
const email2 = 'tim@gmail.com                     ';
console.log(email1.trimStart());
console.log(email2.trimEnd());


// Exampe converting array data to object with value pair data using Object.fromEntries
const userProfiles = [['commanderTom', 25], ['derekZlander', 21], ['bungaria', 35]];
const obj = Object.fromEntries(userProfiles);
console.log(obj);

// Reverse back to array
const arrayAgain = Object.entries(obj);
console.log(arrayAgain);

// Example try {} catch {}
try {
  4 + 5;
} catch {
  console.log('You messed up' + error);
}