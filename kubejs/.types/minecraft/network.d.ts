namespace internal.net.minecraft.network.chat {
    declare interface Component {
        getString(): string;
        getString(maxLength: number): string;
    }

    declare class MutableComponent implements Component {
        getString(): string;
        getString(maxLength: number): string;
    }
}
