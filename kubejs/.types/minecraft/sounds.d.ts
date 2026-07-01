declare namespace internal.net.minecraft.sounds {
    interface SoundEvent {
        readonly __net_minecraft_sounds_SoundEvent: unique symbol;
    }
    class SoundEvent {}

    type SoundEvent__Wrapper = SoundEvent | string;

    type SoundSource__EnumKeys =
        | 'MASTER'
        | 'MUSIC'
        | 'RECORDS'
        | 'WEATHER'
        | 'BLOCKS'
        | 'HOSTILE'
        | 'NEUTRAL'
        | 'PLAYERS'
        | 'AMBIENT'
        | 'VOICE';

    interface SoundSource {
        readonly __net_minecraft_sounds_SoundSource: unique symbol;
    }

    class SoundSource {
        static MASTER: SoundSource;
        static MUSIC: SoundSource;
        static RECORDS: SoundSource;
        static WEATHER: SoundSource;
        static BLOCKS: SoundSource;
        static HOSTILE: SoundSource;
        static NEUTRAL: SoundSource;
        static PLAYERS: SoundSource;
        static AMBIENT: SoundSource;
        static VOICE: SoundSource;
    }

    type SoundSource__Wrapper = SoundSource | SoundSource__EnumKeys | Lowercase<SoundSource__EnumKeys>;
}
