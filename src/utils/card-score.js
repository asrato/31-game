export const cardValues = {
    'A': 1,
    '1': 1,
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
    '10': 10,
    'J': 10,
    'Q': 10,
    'K': 10
};

export const getPossibleScores = (handCards, newCard, previousScore) => {
    let scores = [];

    if (newCard.value === 'A')
        scores.push(previousScore + 11);

    scores.push(previousScore + cardValues[newCard.value]);

    return scores;
};