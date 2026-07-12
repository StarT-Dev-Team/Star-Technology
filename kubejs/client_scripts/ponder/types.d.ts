import BlockPos = internal.net.minecraft.core.BlockPos;
import BlockState = internal.net.minecraft.world.level.block.state.BlockState;

import SceneBuildingUtil = internal.net.createmod.ponder.api.scene.SceneBuildingUtil;
import SceneBuilder = internal.net.createmod.ponder.api.scene.SceneBuilder;
import Selection = internal.net.createmod.ponder.api.scene.Selection;

export interface MachineBlock {
    pos: BlockPos;
    state: BlockState;
    onPlace?: (scene: SceneBuilder, pos: BlockPos) => void;
}

export interface MachineBlockWrapped {
    pos: internal.$wrapped<BlockPos>;
    state: internal.$wrapped<BlockState>;
    onPlace?: (scene: SceneBuilder, pos: BlockPos) => void;
}

export type SortStrategy = (util: SceneBuildingUtil, controller: BlockPos, blocks: MachineBlock[]) => MachineBlock[][];

export interface MultiBlockStructure {
    pattern: readonly string[][];
    controller: string;
    defs: Record<string, BlockState>;
}

export interface ComputedMultiblockStructure {
    controller: BlockPos;
    dimensions: readonly [number, number, number];
    cuboid: Selection;
    bounds: [BlockPos, BlockPos];
    blocks: MachineBlock[];
}
