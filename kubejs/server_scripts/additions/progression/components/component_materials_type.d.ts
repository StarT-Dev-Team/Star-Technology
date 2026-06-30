export interface ComponentMaterial {
    tiers: {
        tier: GTTier;
        tier0?: GTTier;
        tier1?: GTTier;
        tier2?: GTTier;
    };
    materials: {
        tierMaterial: string;
        primMaterial?: string;
        supMaterial?: string;
        wire?: string;
        wireMechanical?: string;
        wireCoil?: string;
        pipeCoil?: string;
        glass?: string;
        rotorMaterial?: string;
        cable: string;
        cable1: string;
        chip: string;
        grind?: string;
        solder?: string;
        lubricant?: string;
        primRubber?: string;
        supRubber?: string;
        plastic?: string;
        superconductor?: string;
        battery?: string;
        elctrlyzWire?: string;
        tierFluid?: string;
        coolant?: string;
        catalyst?: string;
        primMagnet?: string;
        supMagnet?: string;
        pipeMaterial?: string;
        miscMaterial?: string;
        buzz?: string;
        fluidStorage?: string;
        itemStorage?: string;
    };
    scaling?: {
        scaler: number;
        EU: number;
    };
    researchData?: {
        default: {
            ifDRS: boolean;
            cwuD: number;
            duraD: number;
            EUTD: number;
        };
        special: {
            ifSRS: boolean;
            cwuS: number;
            duraS: number;
            EUTS: number;
        };
    };
}
