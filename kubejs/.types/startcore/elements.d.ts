declare namespace internal.com.startechnology.start_core.elements {
    import Element = com.gregtechceu.gtceu.api.data.chemical.Element;
    
    const StarTElements: {
        // Abydos elements
        Zapolgium: Element;
        Akreyrium: Element;
        Dysprosium: Element;

        // End elements
        Xeproda: Element;
        Rhexis: Element;
        Chalyblux: Element;
        Voidic: Element;
        Dragon: Element;
        Riftic: Element;
        Faetic: Element;

        // Extra elements
        Mystery: Element;
        Excited: Element;
        Skystone: Element;
        Fluix: Element;
        Star: Element;
        Soul: Element;

        // Gate elements
        PurifiedNaquadah: Element;
        Echo: Element;

        // Nether elements
        Mythril: Element;
        Adamantine: Element;
        Estalt: Element;
        EnrichedEstalt: Element;
        Calamatium: Element;
        Isovol: Element;
        AncientNetherite: Element;
        Aurourium: Element;

        // Netherite elements
        Debris: Element;
        Netherite: Element;
        PureNetherite: Element;

        // Nuclear elements
        Uranium233: Element;
        Plutonium238: Element;
        Plutonium244: Element;
        Americium241: Element;
        Curium244: Element;
        Californium252: Element;
        Einsteinium253: Element;
    }
}

declare namespace internal.kjs {
    interface LoadableClasses {
        'com.startechnology.start_core.elements.StarTElements': typeof internal.com.startechnology.start_core.elements.StarTElements;
    }
}