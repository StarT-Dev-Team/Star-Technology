// priority: 1000

global.getGtMaterial = (item) => {
    const ms = ChemicalHelper['getMaterialStack(net.minecraft.world.item.ItemStack)'](
        item instanceof Item ? item : Item.of(item)
    );
    if (!ms || ms.isEmpty()) return null;
    return ms;
};

global.coilMachineTempDisplay = (controller, components) => {
    if (controller instanceof $CoiledMulti && controller.isFormed()) {
        components.add(
            Component.translatable(
                'gtceu.multiblock.blast_furnace.max_temperature',
                Component.literal(
                    `§c${$FormattingUtil.formatNumbers(controller.getCoilType().getCoilTemperature() + 100 * Math.max(0, controller.getTier() - GTValues.MV))}K§r`
                )
            )
        );
    }
};

global.multiSmelterParallelDisplay = (controller, components) => {
    if (controller instanceof $CoiledMulti && controller.isFormed()) {
        components.add(
            Component.translatable(
                'gtceu.multiblock.multi_furnace.heating_coil_level',
                controller.getCoilType().getLevel()
            )
        );
        components.add(
            Component.translatable(
                'gtceu.multiblock.multi_furnace.heating_coil_discount',
                controller.getCoilType().getEnergyDiscount()
            )
        );
    }
};

global.crackerOverclockDisplay = (controller, components) => {
    if (controller instanceof $CoiledMulti && controller.isFormed()) {
        const coilTier = controller.getCoilTier();
        const discount = coilTier > 9 ? 0.9 + (coilTier - 9) * 0.025 : coilTier * 0.1;

        components.add(
            Component.translatable(
                'gtceu.multiblock.cracking_unit.energy',
                $FormattingUtil.DECIMAL_FORMAT_0F.format((1.0 - discount) * 100.0)
            )
        );
    }
};

global.pyrolyseOvenOverclockDisplay = (controller, components) => {
    if (controller instanceof $CoiledMulti && controller.isFormed()) {
        components.add(
            Component.translatable(
                'gtceu.multiblock.pyrolyse_oven.speed',
                controller.getCoilTier() == 0 ? 75 : 50 * (controller.getCoilTier() + 1)
            )
        );
    }
};

global.chemicalOverclockDisplay = (controller, components) => {
    if (controller instanceof $CoiledMulti && controller.isFormed()) {
        const coilTier = controller.getCoilTier();

        components.add(Component.translatable('gtceu.multiblock.chemical_reactor.speed', 75 + coilTier * 25));
        components.add(Component.translatable('gtceu.multiblock.chemical_reactor.energy', 100 - 5 * coilTier));
    }
};
