$(function() {
    const baseURL = 'https://deckofcardsapi.com/api/deck/';

    // 1. make a sinlge req to API to get new card and console.log value and suit
    async function getCard() {
        let data = await $.getJSON(`${baseURL}new/draw/`);
        let { suit, value } = data.cards[0];
        console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`);
    }

    // 2. mak req to get one more card from the same deck
    async function addCard() {
        let firstCard = await $.getJSON(`${baseURL}new/draw/`);
        let deckId = firstCard.deck_id;
        let secondCard = await $.getJSON(`${baseURL}${deckId}/draw/`);
        [firstCard, secondCard].forEach(card => {
            let{ suit, value } = card.cards[0];
            console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`);
        });
    }

    // 3. html for deck w/ button
    async function setup() {
        let $btn = $('button');
        let $cardArea = $('#card-area');
        let deckData = await $.getJSON(`${baseURL}/new/shuffle/`);

        $btn.show().on('click', async function() {
            let card = await $.getJSON(`${baseURL}/${deckData.deck_id}/draw/`);
            let deck = cardData.cards[0].image;
            let angle = Math.random() * 90 - 45;
            let x = Math.random() * 40 - 20;
            let y = Math.random() * 40 - 20;
            $cardArea.append(
                $('<img>', {
                    src: deck,
                    css: {
                         transform: `translate(${x}px, ${y}px) rotate(${angle}deg)`
                    }
                })
            );
            if (card.remaining === 0) $btn.remove();
        });
    }
    setup();
})