// Keep so doesnt bork non-HM
BlockEvents.modification((event) => {
    const no_punch = (log) => {
        event.modify(log, (block) => {
            block.requiresTool = true;
        });
    };

    no_punch(/log/);

    ['oak', 'birch', 'acacia', 'cherry', 'dark_oak', 'jungle', 'mangrove', 'spruce'].forEach((log) => {
        no_punch(`minecraft:${log}_wood`);
        no_punch(`minecraft:stripped_${log}_wood`);
    });
});
