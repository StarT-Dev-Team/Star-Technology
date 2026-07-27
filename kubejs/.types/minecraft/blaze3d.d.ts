declare namespace internal.com.mojang.blaze3d.vertex {
    interface PoseStack extends $object<'com.mojang.blaze3d.vertex.PoseStack'> {
        translate(x: number, y: number, z: number): void;
        scale(x: number, y: number, z: number): void;
        // mulPose(quaternion: Quaternionf): void;
        // rotateAround(quaternion: Quaternionf, x: number, y: number, z: number): void;
        pushPose(): void;
        popPose(): void;
        setIdentity(): void;
        // mulPoseMatrix(matrix: Matrix4f): void;
    }
}
