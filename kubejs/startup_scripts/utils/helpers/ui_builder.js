// priority: 1000

const $EditableMachineUI = Java.loadClass('com.gregtechceu.gtceu.api.gui.editor.EditableMachineUI');
const $GTSlotWidget = Java.loadClass('com.gregtechceu.gtceu.api.gui.widget.SlotWidget');
const $GTTankWidget = Java.loadClass('com.gregtechceu.gtceu.api.gui.widget.TankWidget');

/** @param {UIBuilderParams} settings */
global.uiBuilder = (settings) => {
    const { group, name, size, background, progress, inputs, outputs } = settings;

    return new $EditableMachineUI(
        group,
        'gtceu:' + name,
        () => new WidgetGroup(),
        /**
         * @param {internal.com.gregtechceu.gtceu.api.machine.WorkableTieredMachine} machine
         */
        (template, machine) => {
            template.setSize(size[0], size[1]);
            template.setBackground(background);

            template.addWidget(
                new ProgressWidget(
                    () =>
                        /** @type {internal.com.gregtechceu.gtceu.api.machine.feature.IRecipeLogicMachine} */ (
                            /** @type {unknown} */ (machine)
                        )
                            .getRecipeLogic()
                            .getProgressPercent(),
                    progress.pos[0],
                    progress.pos[1],
                    progress.size[0],
                    progress.size[1],
                    /** @type {any} */ (progress.texture)
                )
            );

            inputs.forEach((input) => {
                const { type, index, pos, texture } = input;

                if (type === 'item')
                    template.addWidget(
                        new $GTSlotWidget(machine.importItems.storage, index, pos[0], pos[1], true, true).setBackground(
                            texture
                        )
                    );
                if (type === 'fluid')
                    template.addWidget(
                        new $GTTankWidget(
                            machine.importFluids.storages[index],
                            pos[0],
                            pos[1],
                            true,
                            true
                        ).setBackground(texture)
                    );
            });

            outputs.forEach((output) => {
                const { type, index, pos, texture } = output;

                if (type === 'item')
                    template.addWidget(
                        new $GTSlotWidget(
                            machine.exportItems.storage,
                            index,
                            pos[0],
                            pos[1],
                            true,
                            false
                        ).setBackground(texture)
                    );
                if (type === 'fluid')
                    template.addWidget(
                        new $GTTankWidget(
                            machine.exportFluids.storages[index],
                            pos[0],
                            pos[1],
                            true,
                            false
                        ).setBackground(texture)
                    );
            });
        }
    );
};
