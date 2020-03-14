//////////////////////////////////////////////////////////////////////////
// Game Health Exercise
//

const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 20;

const MODE_ATTACK = 'ATTACK';
const MODE_STRONG_ATTACK = 'STRONG_ATTACK';
const LOG_EVENT_PLAYER_ATTACK = 'PLAYER_ATTACK';
const LOG_EVENT_PLAYER_STRONG_ATTACK = 'PLAYER_STRONG_ATTACK';
const LOG_EVENT_MONSTER_ATTACK = 'MONSTER_ATTACK';
const LOG_EVENT_PLAYER_HEAL = 'PLAYER_HEAL';
const LOG_EVENT_GAME_OVER = 'GAME_OVER';

const inputValue = prompt('Maximum life for player and the monster.', '100');

let setMaxLife = parseInt(inputValue);
let battleLog = [];

if (isNaN(setMaxLife) || setMaxLife <= 0) {
    setMaxLife = 100;
}

let currMonsterHealth = setMaxLife;
let currPlayerHealth = setMaxLife;
let bonusLife = true;

adjustHealthBars(setMaxLife);

function writeToLog(ev, val, monHealth, playHealth) {
    let logEntry = {
        event: ev,
        value: val,
        finalMonsterHealth: monHealth,
        finalPlayerHealth: playHealth
    };

    switch (ev) {
        case LOG_EVENT_PLAYER_ATTACK:
            logEntry.target = 'MONSTER';
            break;
        case LOG_EVENT_PLAYER_STRONG_ATTACK:
            logEntry = {
                event: ev,
                value: val,
                target: 'MONSTER',
                finalMonsterHealth: monHealth,
                finalPlayerHealth: playHealth
            };
            break;
        case LOG_EVENT_MONSTER_ATTACK:
            logEntry = {
                event: ev,
                value: val,
                target: 'PLAYER',
                finalMonsterHealth: monHealth,
                finalPlayerHealth: playHealth
            };
            break;
        case LOG_EVENT_PLAYER_HEAL:
            logEntry = {
                event: ev,
                value: val,
                target: 'PLAYER',
                finalMonsterHealth: monHealth,
                finalPlayerHealth: playHealth
            };
            break;
        case LOG_EVENT_GAME_OVER:
            logEntry = {
                event: ev,
                value: val,
                finalMonsterHealth: monHealth,
                finalPlayerHealth: playHealth
            };
            break;
        default:
            logEntry = {};
    }
    battleLog.push(logEntry);
}

function reset() {
    currMonsterHealth = setMaxLife;
    currPlayerHealth = setMaxLife;
    resetGame(setMaxLife);
}

// End game / reset game
function endRound() {
    const initialPlayerHealth = currPlayerHealth;
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currPlayerHealth -= playerDamage;
    writeToLog(LOG_EVENT_MONSTER_ATTACK, playerDamage, currMonsterHealth, currPlayerHealth);

    if (currPlayerHealth <= 0 && bonusLife) {
        bonusLife = false;
        removeBonusLife();
        currPlayerHealth = initialPlayerHealth;
        alert('You are saved!');
    }

    if (currMonsterHealth <= 0 && currPlayerHealth > 0) {
        alert('You won!');
        writeToLog(LOG_EVENT_GAME_OVER, 'PLAYER WON', currMonsterHealth, currPlayerHealth);
    } else if (currPlayerHealth <= 0 && currMonsterHealth > 0) {
        alert('You loss!');
        writeToLog(LOG_EVENT_GAME_OVER, 'MONSTER WON', currMonsterHealth, currPlayerHealth);
    } else if (currMonsterHealth <= 0 && currPlayerHealth <= 0) {
        alert('You have a draw');
        writeToLog(LOG_EVENT_GAME_OVER, 'A DRAW', currMonsterHealth, currPlayerHealth);
    }

    if (currMonsterHealth <= 0 || currPlayerHealth <= 0) {
        reset();
    }
}

// Attack monster function
function attackMonster(mode) {
    let maxDamage;
    let logEvent;
    if (mode === MODE_ATTACK) {
        maxDamage = ATTACK_VALUE;
        logEvent = LOG_EVENT_PLAYER_ATTACK;
    } else if (mode === MODE_STRONG_ATTACK) {
        maxDamage = STRONG_ATTACK_VALUE;
        logEvent = LOG_EVENT_PLAYER_STRONG_ATTACK;
    }
    const damage = dealMonsterDamage(maxDamage);
    currMonsterHealth -= damage;
    writeToLog(logEvent, damage, currMonsterHealth, currPlayerHealth);
    endRound();
}

// Normal attack mode
function attackHandler() {
    attackMonster(MODE_ATTACK);
}

// Strong attack mode
function strongAttackHandler() {
    attackMonster(MODE_STRONG_ATTACK);
}

// Heal Player Life
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
    writeToLog(LOG_EVENT_PLAYER_ATTACK, healValue, currMonsterHealth, currPlayerHealth);
    endRound();
}

// Print log with for loop
function printLogHandler() {
    // for loop
    /*
    for (let i = 0; i < battleLog.length; i++) {
        console.log(i, battleLog[i]);
    }
    */

    // for of loop

    let i = 0;
    for (const obj of battleLog) {
        console.log(`#${i}`);
        for (const key in obj) {
            console.log(`${key} => ${obj[key]}`);
        }
        i++;
    }


    // for in loop


}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler);
logBtn.addEventListener('click', printLogHandler);