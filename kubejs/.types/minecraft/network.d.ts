namespace internal.net.minecraft.network.chat {
    declare interface Component {
        getString(): string;
        getString(maxLength: number): string;
    }

    import Enum = java.lang.Enum;
    import Color__Wrapper = dev.latvian.mods.rhino.mod.util.color;

    // TODO: move ClickEventAction
    type ClickEventAction =
        | 'open_url'
        | 'open_file'
        | 'run_command'
        | 'suggest_command'
        | 'change_page'
        | 'copy_to_clipboard';

    type Component__JsonAttributes = {
        color?: Color__Wrapper;
        bold?: boolean;
        italic?: boolean;
        underlined?: boolean;
        strikethrough?: boolean;
        obfuscated?: boolean;
        insertion?: string;
        font?: string;
        click?: { action: ClickEventAction; value: string } | `${ClickEventAction}:${string}`;
        hover?: Component__Wrapper;
        extra?: Component__Wrapper[];
    };

    type Component__Wrapper =
        | Component
        | null
        | string
        | number
        | Enum
        | ({ text: string } & Component__JsonAttributes)
        | ({ translate: string; with?: unknown[] } & Component__JsonAttributes)
        | Component__Wrapper[];

    declare class MutableComponent implements Component {
        getString(): string;
        getString(maxLength: number): string;
    }

    type MutableComponent__Wrapper = Component__Wrapper;
}
