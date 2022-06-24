export const possibleCardValues = ['A', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']; // 14 cards
export const possibleCardSuits = ['clubs', 'diamonds', 'hearts', 'spades']; // 4 suites
/**
 * clubs = ♣
 * diamonds = ♦
 * hearts = ♥
 * spades = ♠
 */

export const getRandomCard = (pickedCards) => {
    let cardIndex, suitIndex, card;
    const cardMax = 13.99, suitMax = 3.99;

    cardIndex = Math.floor(Math.random() * cardMax);
    suitIndex = Math.floor(Math.random() * suitMax);

    card = {
        value: possibleCardValues[cardIndex],
        suit: possibleCardSuits[suitIndex]
    };

    while (pickedCards.some(({value, suit}) => card.value === value && card.suit === suit)) {
        cardIndex = Math.floor(Math.random() * cardMax);
        suitIndex = Math.floor(Math.random() * suitMax);

        card = {
            value: possibleCardValues[cardIndex],
            suit: possibleCardSuits[suitIndex]
        };
    }

    return card;
};