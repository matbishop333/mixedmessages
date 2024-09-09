const messages = [
    'Heed this warning, for what lies ahead may not be what it seems. Tread carefully, or be lost in the shadows.', 'Ahead, uncertainty awaits. Prepare yourself, or stumble, you will.', 'The road ahead is fraught with peril. Stay alert, or you may find yourself in deep trouble.', 'A darkness stirs before you. Only the wise will navigate its treacherous depths.', 'Great challenge, there is. Ready yourself, or falter, you might.', 'Caution is the best companion on this journey. Take it lightly, and you may regret it.', 'A great trial awaits. Do not let your courage falter, or you will face dire consequences.', 'The path ahead, shrouded in mystery it is. Trust in your instincts, you must.', 'The journey will test your resolve. Strengthen your mind, or the way forward may consume you.', 'Beware, traveler. The unknown looms ahead, and it does not suffer fools gladly.']

let usedMessages = [];

function getRandomMessage () {
    if (usedMessages.length === messages.length) {
        console.log('You have been given all the advice we have for you. Good luck.');
        return null;
    }

    let randomIndex; 
    do {randomIndex = Math.floor(Math.random() * messages.length);
    } while (usedMessages.includes(randomIndex));

    usedMessages.push = randomIndex;

    return messages[randomIndex];
};