BlockEvents.modification((event) => {
    event.modify('gtceu:nether_star_block', (block) => {
        block.lightEmission = 15;
    });

    event.modify(/xtonesreworked:*/, (block) => {
        block.destroySpeed = 0.5;
    });
});
