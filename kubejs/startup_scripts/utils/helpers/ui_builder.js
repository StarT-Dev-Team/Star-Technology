// priority: 1000

const $EditableMachineUI = Java.loadClass('com.gregtechceu.gtceu.api.gui.editor.EditableMachineUI');
const $ProgressTextureBar = Java.loadClass('com.gregtechceu.gtceu.api.gui.widget.ProgressTextureBar');
const $UIElement = Java.loadClass('com.lowdragmc.lowdraglib2.gui.ui.UIElement');
const $ItemSlot = Java.loadClass('com.lowdragmc.lowdraglib2.gui.ui.elements.ItemSlot');
const $FluidSlot = Java.loadClass('com.lowdragmc.lowdraglib2.gui.ui.elements.FluidSlot');
const $ItemHandlerSlot = Java.loadClass('com.lowdragmc.lowdraglib2.gui.slot.ItemHandlerSlot');
const $TaffyPosition = Java.loadClass('dev.vfyjxf.taffy.style.TaffyPosition');

/**
 * @param {internal.com.lowdragmc.lowdraglib2.gui.ui.UIElement} element
 * @param {[number, number]} pos
 */
const uiPlaceAt = (element, pos) =>
    element.layout((layout) => layout.positionType($TaffyPosition.ABSOLUTE).left(pos[0]).top(pos[1]));

/**
 * @param {internal.net.minecraftforge.items.IItemHandlerModifiable} handler
 * @param {number} index
 * @param {[number, number]} pos
 * @param {internal.com.lowdragmc.lowdraglib2.gui.texture.IGuiTexture} texture
 * @param {boolean} canPlace
 */
const uiItemSlot = (handler, index, pos, texture, canPlace) => {
    const slot = new $ItemSlot();
    if (canPlace) slot.bind(handler, index);
    else slot.bind(new $ItemHandlerSlot(handler, index).setCanPlace(() => false));
    slot.style((style) => style.backgroundTexture(texture));
    return uiPlaceAt(slot, pos);
};

/**
 * @param {internal.net.minecraftforge.fluids.capability.IFluidHandler} tank
 * @param {[number, number]} pos
 * @param {internal.com.lowdragmc.lowdraglib2.gui.texture.IGuiTexture} texture
 * @param {boolean} allowDrain
 */
const uiFluidSlot = (tank, pos, texture, allowDrain) => {
    const slot = new $FluidSlot();
    slot.bind(tank, 0);
    slot.setAllowClickFilled(true);
    slot.setAllowClickDrained(allowDrain);
    slot.slotStyle((style) => style.fillDirection($FillDirection.ALWAYS_FULL));
    slot.style((style) => style.backgroundTexture(texture));
    return uiPlaceAt(slot, pos);
};

/** @param {UIBuilderParams} settings */
global.uiBuilder = (settings) => {
    const { group, name, size, background, progress, inputs, outputs } = settings;

    return new $EditableMachineUI(
        group,
        'gtceu:' + name,
        () => new $UIElement(),
        /**
         * @param {internal.com.gregtechceu.gtceu.api.machine.WorkableTieredMachine} machine
         */
        (template, machine) => {
            template.layout((layout) => layout.width(size[0]).height(size[1]));
            template.style((style) => style.background(background));

            const recipeLogic = /** @type {internal.com.gregtechceu.gtceu.api.machine.feature.IRecipeLogicMachine} */ (
                /** @type {unknown} */ (machine)
            ).getRecipeLogic();
            const progressBar = $ProgressTextureBar.of(
                progress.texture,
                $FillDirection.LEFT_TO_RIGHT,
                progress.size[0],
                progress.size[1]
            );
            progressBar.addEventListener('tick', () => progressBar.setProgress(recipeLogic.getProgressPercent()));
            template.addChild(uiPlaceAt(progressBar, progress.pos));

            inputs.forEach((input) => {
                const { type, index, pos, texture } = input;

                if (type === 'item')
                    template.addChild(uiItemSlot(machine.importItems.storage, index, pos, texture, true));
                if (type === 'fluid')
                    template.addChild(uiFluidSlot(machine.importFluids.storages[index], pos, texture, true));
            });

            outputs.forEach((output) => {
                const { type, index, pos, texture } = output;

                if (type === 'item')
                    template.addChild(uiItemSlot(machine.exportItems.storage, index, pos, texture, false));
                if (type === 'fluid')
                    template.addChild(uiFluidSlot(machine.exportFluids.storages[index], pos, texture, false));
            });
        }
    );
};
