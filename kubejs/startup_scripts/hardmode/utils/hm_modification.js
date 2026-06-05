// packmode: hard
// Keep so doesnt bork non-HM
BlockEvents.modification((event) => {
    const noPunch = (log) => {
        event.modify(log, (block) => {
            block.requiresTool = true;
        });
    };

    noPunch(/log/);

    ['oak', 'birch', 'acacia', 'cherry', 'dark_oak', 'jungle', 'mangrove', 'spruce'].forEach((log) => {
        noPunch(`minecraft:${log}_wood`);
        noPunch(`minecraft:stripped_${log}_wood`);
    });
});
