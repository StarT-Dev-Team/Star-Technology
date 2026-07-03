declare namespace global {
    function withArchitectsPalette(
        ifTrue?: (() => void) | null | undefined,
        ifFalse?: (() => void) | null | undefined
    ): void;

    function withXycraftWorld(
        ifTrue?: (() => void) | null | undefined,
        ifFalse?: (() => void) | null | undefined
    ): void;

    function withChipped(ifTrue?: (() => void) | null | undefined, ifFalse?: (() => void) | null | undefined): void;

    function withFramedBlocks(
        ifTrue?: (() => void) | null | undefined,
        ifFalse?: (() => void) | null | undefined
    ): void;

    function withEffortlessBuilding(
        ifTrue?: (() => void) | null | undefined,
        ifFalse?: (() => void) | null | undefined
    ): void;
}
