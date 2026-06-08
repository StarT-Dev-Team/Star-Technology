PlayerEvents.tick((event) => {
    const { player } = event;

    // Sand Erosion
    if (global.packmode !== 'abydos') {
        (() => {
            if (player.hasEffect('kubejs:sand_erosion')) {
                let effects = ['minecraft:slowness'];

                if (player.age % 40 === 0) {
                    effects.forEach((effect) => {
                        player.potionEffects.add(effect, 60, 1, false, false);
                    });
                }

                if (player.age % 100 === 0) {
                    player.potionEffects.add('minecraft:hunger', 100, 2, false, false);
                    event.server.runCommandSilent(
                        `execute as ${event.player.username} run damage ${event.player.username} 2 kubejs:heat_exhaustion`
                    );
                }

                if (player.age % 200 === 0) {
                    player.tell(Text.translate('effects.sand_erosion.message'));
                }
            }
        })();
    }

    // Radiation Poisoning
    if (player.hasEffect('kubejs:radiation_poisoning')) {
        let effects = ['minecraft:poison'];

        if (player.age % 40 === 0) {
            effects.forEach((effect) => {
                player.potionEffects.add(effect, 60, 1, false, false);
            });
        }

        if (player.age % 40 === 0) {
            if (player.getHealth() <= 2) {
                event.server.runCommandSilent(
                    `execute as ${event.player.username} run damage ${event.player.username} 100 kubejs:radiation`
                );
                return;
            }
            event.server.runCommandSilent(
                `execute as ${event.player.username} run damage ${event.player.username} 4 kubejs:radiation`
            );
        }

        if (player.age % 200 === 0) {
            player.tell(Text.translate('effects.radiation.message'));
        }
    }

    // Toxic Atmosphere
    if (player.hasEffect('kubejs:toxic_atmosphere')) {
        let effects = [
            'minecraft:weakness',
            'minecraft:nausea',
            'minecraft:darkness' /*, ' minecraft:mining_fatigue'*/,
        ];

        if (player.age % 40 === 0) {
            effects.forEach((effect) => {
                player.potionEffects.add(effect, 60, 1, false, false);
            });
        }
    }

    // Abyssal Drain
    if (player.hasEffect('kubejs:abyssal_drain')) {
        let effects = ['minecraft:darkness'];

        if (player.age % 40 === 0) {
            effects.forEach((effect) => {
                player.potionEffects.add(effect, 60, 1, false, false);
            });

            if (Math.random() > 0.95) {
                event.server.runCommandSilent(
                    `execute as ${event.player.username} run damage ${event.player.username} 100 kubejs:abyssal_pull`
                );
            }
        }
    }

    // Uranium Fever
    if (player.hasEffect('kubejs:uranium_fever')) {
        let effects = ['minecraft:speed', 'minecraft:haste'];

        if (player.age % 50 === 0) {
            effects.forEach((effect) => {
                player.potionEffects.add(effect, 200, 19, false, false);
            });

            if (Math.random() > 0.9) {
                event.server.runCommandSilent(
                    `execute at ${event.player.username} run summon thermal:fire_tnt ${Math.floor(event.player.x)} ${Math.floor(event.player.y)} ${Math.floor(event.player.z)}`
                );
                event.server.runCommandSilent(
                    `execute as ${event.player.username} run damage ${event.player.username} 500 kubejs:radiation`
                );
            }
        }

        if (player.age % 200 === 0) {
            player.tell(Text.translate('effects.uranium_fever.message'));
        }
    }
});
