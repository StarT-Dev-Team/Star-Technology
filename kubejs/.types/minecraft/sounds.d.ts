declare namespace internal.net.minecraft.sounds {
    interface SoundEvent extends $object<{ name: 'net.minecraft.sounds.SoundEvent'; registryEntry: true }> {}

    type SoundSource__EnumKeys =
        'MASTER' | 'MUSIC' | 'RECORDS' | 'WEATHER' | 'BLOCKS' | 'HOSTILE' | 'NEUTRAL' | 'PLAYERS' | 'AMBIENT' | 'VOICE';

    interface SoundSource extends $object<{
        name: 'net.minecraft.sounds.SoundSource';
        enumClass: typeof SoundSource;
    }> {}

    const SoundSource: $class<SoundSource> & {
        MASTER: SoundSource;
        MUSIC: SoundSource;
        RECORDS: SoundSource;
        WEATHER: SoundSource;
        BLOCKS: SoundSource;
        HOSTILE: SoundSource;
        NEUTRAL: SoundSource;
        PLAYERS: SoundSource;
        AMBIENT: SoundSource;
        VOICE: SoundSource;
    };
}
