declare namespace internal.com.gregtechceu.gtceu.utils {
    import DecimalFormat = java.text.DecimalFormat;

    const FormattingUtil: {
        DECIMAL_FORMAT_0F: DecimalFormat;
        DECIMAL_FORMAT_1F: DecimalFormat;
        DECIMAL_FORMAT_2F: DecimalFormat;
        DECIMAL_FORMAT_SIC: DecimalFormat;
        DECIMAL_FORMAT_SIC_2F: DecimalFormat;

        formatNumbers(number: number | object): string;
    };
}

declare namespace internal.kjs {
    interface LoadableClasses {
        'com.gregtechceu.gtceu.utils.FormattingUtil': typeof internal.com.gregtechceu.gtceu.utils.FormattingUtil;
    }
}
