let randomNumberArr = [];
const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)
const randomNumber1 = Math.random(); // produces random number between 0 (including) and 1 (excluding)

for (let i = 1; i <= 10; i++) {
    randomNumberArr.push(randomNumber);
    console.log(i, randomNumber);
}

for (let i = 0; i < randomNumberArr.length; i++) {
    if (randomNumberArr[i] > .7) {
        console.log(`${i} The random number is greater than 0.7 => ${randomNumberArr[i]}`);
    } else {
        console.log(`${i} The random number is smaller than 0.6 => ${randomNumberArr[i]}`);
    }
}

for (let i = randomNumberArr.length - 1; i > 0; i--) {
    if (randomNumberArr[i] > .7) {
        console.log(`${i} The random number is greater than 0.7 => ${randomNumberArr[i]}`);
    } else {
        console.log(`${i} The random number is smaller than 0.6 => ${randomNumberArr[i]}`);
    }
}

let j = 1
for (const num of randomNumberArr) {
    console.log(j, num);
    j++;
}

if (randomNumber > 0.7 && randomNumber1 > 0.7) {
    alert(`Random numbers ${randomNumber} and ${randomNumber1}, both numbers are greater than 0.7`)
} else if (randomNumber < 0.2 || randomNumber1 < 0.2) {
    alert(`${randomNumber}, ${randomNumber1} one of the number is smaller than 0.2`);
}