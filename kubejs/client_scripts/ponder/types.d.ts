type Position = [number, number, number];

type Selection =
    | Internal.Selection
    | Position
    | [Position, Position]
    | [number, number, number, number, number, number];

interface MachineBlock {
    pos: BlockPos;
    state: Internal.BlockState;
    onPlace?: (scene: Internal.SceneBuilder, pos: BlockPos) => void;
}

type SortStrategy = (
    util: Internal.SceneBuildingUtil,
    controller: BlockPos,
    blocks: MachineBlock[]
) => MachineBlock[][];

interface MultiBlockStructure {
    pattern: string[][];
    controller: string;
    defs: Record<string, Internal.BlockState>;
}

interface ComputedMultiblockStructure {
    controller: BlockPos;
    dimensions: [number, number, number];
    cuboid: Internal.Selection;
    bounds: [BlockPos, BlockPos];
    blocks: MachineBlock[];
}
