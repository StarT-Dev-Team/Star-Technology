declare namespace internal.kjs {
    import Block = net.minecraft.world.level.block.Block;
    import BlockIDPredicate = dev.latvian.mods.kubejs.block.predicate.BlockIDPredicate;
    import BlockStateFunction = com.startechnology.start_core.integration.ponder.BlockStateFunction;

    interface TypeWrappers {
        'net.createmod.ponder.api.scene.Selection':
            | net.minecraft.world.level.levelgen.structure.BoundingBox
            | net.minecraft.core.BlockPos
            | TypeWrappers['net.minecraft.core.BlockPos']
            | [
                  net.minecraft.core.BlockPos | TypeWrappers['net.minecraft.core.BlockPos'],
                  net.minecraft.core.BlockPos | TypeWrappers['net.minecraft.core.BlockPos'],
              ]
            | [number, number, number, number, number, number];
        'net.minecraft.world.level.block.state.BlockState': Block | BlockIDPredicate | string;
        'com.startechnology.start_core.integration.ponder.BlockStateFunction': (
            predicate: BlockIDPredicate
        ) => BlockStateFunction;
    }
}

type PonderPalette = internal.net.createmod.ponder.api.PonderPalette;
declare const PonderPalette: typeof internal.net.createmod.ponder.api.PonderPalette;

type PonderPointing = internal.net.createmod.catnip.math.Pointing;
declare const PonderPointing: typeof internal.net.createmod.catnip.math.Pointing;

type PonderTickingInstruction = internal.com.startechnology.start_core.integration.ponder.PonderTickingInstruction;
declare const PonderTickingInstruction: typeof internal.com.startechnology.start_core.integration.ponder.PonderTickingInstruction;
