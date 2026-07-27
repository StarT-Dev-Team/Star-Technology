// priority: 100000

/* eslint-disable */

// === StarT Core Loader ===

const $StarTAbyssalContainmentMachine = Java.loadClass(
    'com.startechnology.start_core.machine.abyssal_containment.StarTAbyssalContainmentMachine'
);

// === Object Loader ===
const JSONObject = Java.loadClass('com.google.gson.JsonObject');

// === GTCEu Fluid Class Loader ===
const FluidIngredientJS = Java.loadClass(
    'com.gregtechceu.gtceu.integration.kjs.recipe.components.GTRecipeComponents$FluidIngredientJS'
);

// === Java Classes required for locating structures ===

const $ServerLevel = Java.loadClass('net.minecraft.server.level.ServerLevel');
const $BlockPos = Java.loadClass('net.minecraft.core.BlockPos');
const $ChunkPos = Java.loadClass('net.minecraft.world.level.ChunkPos');
const $SectionPos = Java.loadClass('net.minecraft.core.SectionPos');
const $ResourceLocation = Java.loadClass('net.minecraft.resources.ResourceLocation');
const $Registries = Java.loadClass('net.minecraft.core.registries.Registries');
const $HolderSet = Java.loadClass('net.minecraft.core.HolderSet');
const $Holder = Java.loadClass('net.minecraft.core.Holder');

/* eslint-enable */
