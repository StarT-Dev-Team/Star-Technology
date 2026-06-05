// packmode: hard
// Keep so doesnt bork non-HM
WorldgenEvents.remove((event) => {
    event.removeSpawns((entity) => {
        entity.mobs = [
            'monster',
            'creature',
            'ambient',
            'axolotls',
            'underground_water_creatures',
            'water_creatures',
            'water_ambient',
        ];
    });
});
