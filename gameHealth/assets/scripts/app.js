//////////////////////////////////////////////////////////////////////////
// Game Health Exercise
//

const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 15;
const MONSTER_ATTACK_VALUE = 10;
const HEAL_VALUE = 20;

const inputValue = prompt('Maximum life for player and the monster.', '100');

let setMaxLife = parseInt(inputValue);
let currMonsterHealth = setMaxLife;
let currPlayerHealth = setMaxLife;
let bonusLife = true;

adjustHealthBars(setMaxLife);

function reset() {
    currMonsterHealth = setMaxLife;
    currPlayerHealth = setMaxLife;
    resetGame(setMaxLife);
}

function endRound() {
    const initialPlayerHealth = currPlayerHealth;
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currPlayerHealth -= playerDamage;

    if (currPlayerHealth <= 0 && bonusLife) {
        bonusLife = false;
        removeBonusLife();
        currPlayerHealth = initialPlayerHealth;
        alert('You are saved!');
    }

    if (currMonsterHealth <= 0 && currPlayerHealth > 0) {
        alert('You won!');
    } else if (currPlayerHealth <= 0 && currMonsterHealth > 0) {
        alert('You loss!');
    } else if (currMonsterHealth <= 0 && currPlayerHealth <= 0) {
        alert('You have a draw');
    }

    if (currMonsterHealth <= 0 || currPlayerHealth <= 0) {
        reset();
    }
}

function attackMonster(mode) {
    let maxDamage;
    if (mode === 'ATTACK') {
        maxDamage = ATTACK_VALUE;
    } else if (mode === 'STRONG_ATTACK') {
        maxDamage = STRONG_ATTACK_VALUE;
    }
    const monsterDamage = dealMonsterDamage(maxDamage);
    currMonsterHealth -= monsterDamage;
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currPlayerHealth -= playerDamage;
    if (currMonsterHealth <= 0 && currPlayerHealth > 0) {
        alert('You won!');
    } else if (currPlayerHealth <= 0 && currMonsterHealth > 0) {
        alert('You loss!');
    } else if (currMonsterHealth <= 0 && currPlayerHealth <= 0) {
        alert('You have a draw');
    }
    endRound();
}

function attackHandler() {
    attackMonster('ATTACK');
}

function strongAttackHandler() {
    attackMonster('STRONG_ATTACK');
}

function healPlayerHandler() {
    let healValue;
    if (currPlayerHealth >= setMaxLife - HEAL_VALUE) {
        alert('You can\'t heal to more than your max initial health.');
        healValue = setMaxLife - currPlayerHealth;
    } else {
        healValue = HEAL_VALUE;
    }
    increasePlayerHealth(healValue);
    currPlayerHealth += healValue;
    endRound();
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler);