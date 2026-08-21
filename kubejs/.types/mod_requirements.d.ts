declare namespace global {
    function withModsLoaded(
        mods: string | string[],
        ifTrue: (() => void) | null | undefined,
        ifFalse?: (() => void) | null | undefined
    ): void;
}
