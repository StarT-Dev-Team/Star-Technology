// priority: 100

/**
 * @type {Record<string, (scene: internal.net.createmod.ponder.api.scene.SceneBuilder, util: internal.net.createmod.ponder.api.scene.SceneBuildingUtil) => void>}
 * @global
 */
let ponderScenes = {};

/** @global */
// eslint-disable-next-line no-unused-vars
let ponderUtils = (() => {
    /** @typedef {[number, number, number]} Position */
    /** @typedef {import("./types").SortStrategy} SortStrategy */
    /** @typedef {import("./types").MultiBlockStructure} MultiBlockStructure */
    /** @typedef {import("./types").ComputedMultiblockStructure} ComputedMultiblockStructure */
    /** @typedef {import("./types").MachineBlock} MachineBlock */
    /** @typedef {import("./types").MachineBlockWrapped} MachineBlockWrapped */
    /** @typedef {internal.net.createmod.ponder.api.scene.Selection} Selection */
    /** @typedef {internal.$wrapped<Selection>} SelectionWrapped */
    /** @typedef {internal.net.minecraft.core.BlockPos} BlockPos */
    /** @typedef {internal.net.minecraft.core.Direction} Direction */
    /** @typedef {internal.$wrapped<BlockPos>} BlockPosWrapped */
    /** @typedef {internal.net.createmod.ponder.foundation.PonderScene} PonderScene */
    /** @typedef {internal.net.createmod.ponder.api.scene.SceneBuilder} SceneBuilder */
    /** @typedef {internal.net.createmod.ponder.api.scene.SceneBuildingUtil} SceneBuildingUtil */

    let $UtilsJS = Java.loadClass('dev.latvian.mods.kubejs.util.UtilsJS');
    let $MetaMachineBlockEntity = Java.loadClass('com.gregtechceu.gtceu.api.blockentity.MetaMachineBlockEntity');
    let $IMachineBlock = Java.loadClass('com.gregtechceu.gtceu.api.block.IMachineBlock');
    let $IMufflerMachine = Java.loadClass('com.gregtechceu.gtceu.api.machine.feature.multiblock.IMufflerMachine');
    let $RelativeDirection = Java.loadClass('com.gregtechceu.gtceu.api.pattern.util.RelativeDirection');
    let $RecipeLogicStatus = Java.loadClass('com.gregtechceu.gtceu.api.machine.trait.RecipeLogic$Status');
    let $PipeBlockEntity = Java.loadClass('com.gregtechceu.gtceu.api.blockentity.PipeBlockEntity');
    let $InputWindowElement = Java.loadClass('net.createmod.ponder.foundation.element.InputWindowElement');
    let $ShowInputInstruction = Java.loadClass('net.createmod.ponder.foundation.instruction.ShowInputInstruction');
    let $ReplaceBlocksInstruction = Java.loadClass(
        'net.createmod.ponder.foundation.instruction.ReplaceBlocksInstruction'
    );
    let $FadeOutOfSceneInstruction = Java.loadClass(
        'net.createmod.ponder.foundation.instruction.FadeOutOfSceneInstruction'
    );
    let $DisplayWorldSectionInstruction = Java.loadClass(
        'net.createmod.ponder.foundation.instruction.DisplayWorldSectionInstruction'
    );
    let $ForgeRegistries = Java.loadClass('net.minecraftforge.registries.ForgeRegistries');

    let P = {
        /**
         * @param {string} id
         * @param {internal.net.minecraft.core.Direction=} facing
         * @returns {internal.net.minecraft.world.level.block.state.BlockState}
         */
        block: function (id, facing) {
            let block = $ForgeRegistries.BLOCKS.getValue(id);
            if (facing && block instanceof $IMachineBlock) {
                if (block.getRotationState() !== RotationState.NONE) {
                    return block.self().defaultBlockState().setValue(block.getRotationState().property, facing);
                }
            }
            return block.defaultBlockState();
        },

        /**
         * @template T
         * @template {string} U
         * @param {T[]} arr
         * @param {(value: T) => U} groupByFn
         * @returns {Record<U, T[]>}
         */
        groupBy: function (arr, groupByFn) {
            return arr.reduce((acc, value) => {
                let key = groupByFn(value);
                /** @type {T[]} */
                let entry = acc[key];
                if (!entry) {
                    acc[key] = entry = [];
                }
                entry.push(value);
                return acc;
            }, /** @type {Record<U, T[]>} */ ({}));
        },

        /**
         * @template Dict
         * @param {Dict} dict
         * @returns {[keyof Dict, Dict[keyof Dict]][]}
         */
        objectEntries: function (dict) {
            /** @type {[keyof Dict, Dict[keyof Dict]][]} */
            let ret = [];
            for (let k in dict) {
                ret.push([k, dict[k]]);
            }
            return ret;
        },

        /** @satisfies {Record<string, SortStrategy>} */
        sortStrategy: {
            controllerThenLayers: (util, controller, blocks) => {
                let groups = P.objectEntries(
                    P.groupBy(
                        blocks.map((block) => ({
                            block: block,
                            layer: block.pos.equals(controller) ? -Infinity : block.pos.y,
                        })),
                        (e) => `${e.layer}`
                    )
                ).map((arr) => arr[1]);
                groups.sort((a, b) => a[0].layer - b[0].layer);
                return groups.map((r) => r.map((x) => x.block));
            },
            distanceFromController: (util, controller, blocks) => {
                let controllerVec = util.vector().centerOf(controller);
                let groups = P.objectEntries(
                    P.groupBy(
                        blocks.map((block) => ({
                            block: block,
                            distance: util.vector().centerOf(block.pos).distanceToSqr(controllerVec),
                        })),
                        (e) => `${e.distance}`
                    )
                ).map((arr) => arr[1]);
                groups.sort((a, b) => a[0].distance - b[0].distance);
                return groups.map((r) => r.map((x) => x.block));
            },
            spyralZ: (util, controller, blocks) => {
                let bounds = [Infinity, Infinity, Infinity, -Infinity, -Infinity, -Infinity];
                for (let block of blocks) {
                    if (block.pos.x < bounds[0]) bounds[0] = block.pos.x;
                    if (block.pos.x > bounds[3]) bounds[3] = block.pos.x;
                    if (block.pos.y < bounds[1]) bounds[1] = block.pos.y;
                    if (block.pos.y > bounds[4]) bounds[4] = block.pos.y;
                    if (block.pos.z < bounds[2]) bounds[2] = block.pos.z;
                    if (block.pos.z > bounds[5]) bounds[5] = block.pos.z;
                }
                let centerBlock = [
                    Math.floor((bounds[0] + bounds[3]) / 2),
                    Math.floor((bounds[1] + bounds[4]) / 2),
                    Math.floor((bounds[2] + bounds[5]) / 2),
                ];

                return blocks
                    .map((b) => {
                        let offX = Math.floor(centerBlock[0]) - b.pos.x;
                        let offY = Math.floor(centerBlock[1]) - b.pos.y;
                        let distance = Math.max(Math.abs(offX), Math.abs(offY));
                        let angle = Math.atan2(offY, offX) + 2 * JavaMath.PI;
                        return {
                            z: b.pos.z,
                            angle: angle,
                            distance: distance,
                            block: b,
                        };
                    })
                    .sort((a, b) => {
                        if (a.z !== b.z) return b.z - a.z;
                        if (a.distance !== b.distance) return b.distance - a.distance;
                        return a.angle - b.angle;
                    })
                    .map((g) => [g.block]);
            },
            spyral: (util, controller, blocks) => {
                let bounds = [Infinity, Infinity, Infinity, -Infinity, -Infinity, -Infinity];
                for (let block of blocks) {
                    if (block.pos.x < bounds[0]) bounds[0] = block.pos.x;
                    if (block.pos.x > bounds[3]) bounds[3] = block.pos.x;
                    if (block.pos.y < bounds[1]) bounds[1] = block.pos.y;
                    if (block.pos.y > bounds[4]) bounds[4] = block.pos.y;
                    if (block.pos.z < bounds[2]) bounds[2] = block.pos.z;
                    if (block.pos.z > bounds[5]) bounds[5] = block.pos.z;
                }
                let centerBlock = [
                    Math.floor((bounds[0] + bounds[3]) / 2),
                    Math.floor((bounds[1] + bounds[4]) / 2),
                    Math.floor((bounds[2] + bounds[5]) / 2),
                ];

                return blocks
                    .filter((b) => b.state.block.id !== 'minecraft:air')
                    .map((b) => {
                        let offX = Math.floor(centerBlock[0]) - b.pos.x;
                        let offZ = Math.floor(centerBlock[2]) - b.pos.z;
                        let distance = Math.max(Math.abs(offX), Math.abs(offZ));
                        let angle = Math.atan2(offZ, offX) + 2 * JavaMath.PI;
                        return {
                            y: b.pos.y,
                            angle: angle,
                            distance: distance,
                            block: b,
                        };
                    })
                    .sort((a, b) => {
                        if (a.y !== b.y) return b.y - a.y;
                        if (a.distance !== b.distance) return b.distance - a.distance;
                        return a.angle - b.angle;
                    })
                    .map((g) => [g.block]);
            },
        },

        /**
         * @param {MultiBlockStructure["pattern"]} pattern
         * @param {(x: number, y: number, z: number, char: string) => void} callback
         */
        iterateBlockPattern: function (pattern, callback) {
            for (let z = 0; z < pattern.length; z++) {
                let aisles = pattern[z];
                for (let y = 0; y < aisles.length; y++) {
                    let aisle = Array.from(aisles[y]);
                    for (let x = 0; x < aisle.length; x++) {
                        callback(x, y, z, aisle[x]);
                    }
                }
            }
        },

        /**
         * @param {SceneBuildingUtil} util
         * @param {MultiBlockStructure} structure
         * @param {Position} controllerPosition
         * @returns {ComputedMultiblockStructure}
         */
        computeMultiData: function (util, structure, controllerPosition) {
            /** @type {BlockPos} */
            let controllerBlockPos = util.grid().at.apply(util.grid(), controllerPosition);
            /** @type {BlockPos} */
            let structureControllerBlockPos = /** @type {any} */ (null);
            let dimensions = /** @type {const} */ ([
                structure.pattern[0][0].length,
                structure.pattern[0].length,
                structure.pattern.length,
            ]);

            P.iterateBlockPattern(structure.pattern, (x, y, z, block) => {
                if (block === structure.controller) {
                    structureControllerBlockPos = util.grid().at(x, y, z);
                }
            });

            /** @type {MachineBlock[]} */
            let blocks = [];
            P.iterateBlockPattern(structure.pattern, (x, y, z, block) => {
                let state = structure.defs[block];
                if (!state || state.isAir()) return;

                let position = util.grid().at(x, y, z).subtract(structureControllerBlockPos);
                let blockPos = $RelativeDirection.offsetPos(
                    controllerBlockPos,
                    Direction.SOUTH,
                    Direction.UP,
                    false,
                    position.x,
                    position.y,
                    position.z
                );
                blocks.push({ pos: blockPos, state: state });
            });

            let minPos = blocks.slice().sort((a, b) => a.pos.compareTo(b.pos))[0].pos;
            let maxPos = blocks.slice().sort((a, b) => b.pos.compareTo(a.pos))[0].pos;

            return {
                controller: controllerBlockPos,
                dimensions: dimensions,
                bounds: [minPos, maxPos],
                cuboid: util.select().fromTo(minPos, maxPos),
                blocks: blocks,
            };
        },

        /**
         * @param {SceneBuilder} scene
         */
        triggerRerender(scene) {
            scene.addInstruction(
                new $ReplaceBlocksInstruction([-100, -100, -100, -100, -100, -100], (state) => state, false, false)
            );
        },

        /**
         * @param {SceneBuilder} scene
         * @param {BlockPosWrapped} controllerPosition
         */
        formMultiblock: function (scene, controllerPosition) {
            scene.world().modifyBlockEntity(controllerPosition, $MetaMachineBlockEntity, (be) => {
                /** @type {internal.com.gregtechceu.gtceu.api.machine.feature.multiblock.IMultiController} */
                let metaMachine = /** @type {any} */ (be.getMetaMachine());
                let pattern = metaMachine.getPattern();
                if (pattern !== null && pattern.checkPatternAt(metaMachine.getMultiblockState(), true)) {
                    metaMachine.onStructureFormed();
                }
            });
            P.triggerRerender(scene);
        },

        /**
         * @param {SceneBuilder} scene
         * @param {BlockPosWrapped[]} positions
         */
        sectionFromPositions: function (scene, positions) {
            let util = scene.scene.sceneBuildingUtil;
            return /** @type {Selection} */ (
                positions.reduce(
                    (prev, next) => (prev ? prev.add(util.select().position(next)) : util.select().position(next)),
                    /** @type {Selection | null} */ (null)
                )
            );
        },

        /**
         * @param {SceneBuilder} scene
         * @param {number} size
         */
        buildDefaultFloor: function (scene, size) {
            P.buildFloor(scene, size, (x, z) =>
                (x + z) % 2 !== 0 ? 'minecraft:snow_block' : 'minecraft:white_concrete'
            );
        },

        /**
         * @param {SceneBuilder} scene
         * @param {number} size
         */
        buildStarTFloor: function (scene, size) {
            // let offset = size % 3;
            // P.buildFloor(scene, size, (x, z) =>
            //   (Math.floor((x + offset) / 3) + Math.floor((z + offset) / 3)) % 2 === 0
            //     ? "kubejs:galvanized_steel_casing"
            //     : "kubejs:black_steel_casing"
            // );
            P.buildFloor(scene, size, (x, z) =>
                (x + z) % 2 !== 0 ? 'gtceu:high_temperature_smelting_casing' : 'kubejs:black_steel_casing'
            );
        },

        /**
         * @param {SceneBuilder} scene
         * @param {number} size
         * @param {(x: number,  z: number) => string | internal.net.minecraft.world.level.block.state.BlockState} block
         * @param {number=} offset
         */
        buildFloor: function (scene, size, block, offset) {
            offset = offset || 0;
            let sceneBuilder = scene;
            scene.addInstruction((scene) => {
                for (let x = -offset; x < size + offset; x++) {
                    for (let z = -offset; z < size + offset; z++) {
                        scene.world.setBlock([x, 0, z], block(x, z), 0);
                    }
                }
                sceneBuilder.configureBasePlate(0, 0, size);
            });
        },

        /**
         * @param {SceneBuilder} scene
         * @param {number} size
         * @param {boolean} first
         */
        resetScene: function (scene, size, first) {
            let util = scene.scene.sceneBuildingUtil;

            if (!first) {
                let everywhere = util.select().cuboid(util.grid().zero(), util.grid().at(100, 100, 100));
                scene.world().hideSection(everywhere, Direction.DOWN);
                scene.idle(20);
                scene.world().restoreBlocks(everywhere);
            }

            P.buildStarTFloor(scene, size);

            scene
                .world()
                .showSection(
                    util.select().cuboid(util.grid().zero(), util.grid().at(size - 1, 0, size - 1)),
                    Direction.UP
                );

            if (!first) {
                scene.idle(25);
                scene.addKeyframe();
            } else {
                scene.idle(5);
            }
        },

        /**
         * @param {SceneBuilder} scene
         * @param {MachineBlockWrapped[]} blocks
         * @param {internal.$wrapped<Direction> =} direction
         */
        revealBlocks: function (scene, blocks, direction) {
            blocks.forEach((block) => {
                const blockPos = $UtilsJS.blockPosOf(block.pos);
                scene.world().setBlock(block.pos, block.state, false);
                if (block.onPlace) block.onPlace(scene, blockPos);
            });

            let section = P.sectionFromPositions(
                scene,
                blocks.map((b) => b.pos)
            );
            scene.world().showSection(section, direction || Direction.DOWN);
        },

        /**
         * @param {SceneBuilder} scene
         * @param {(BlockPosWrapped)[]} blocks
         */
        breakBlocksAndHide: function (scene, blocks) {
            blocks.forEach((block) => scene.world().setBlock(block, 'minecraft:air', true));
            scene.idle(10);

            let section = P.sectionFromPositions(scene, blocks);
            scene.addInstruction((scene) => scene.baseWorldSection.erase(section));
        },

        /**
         * @param {SceneBuilder} scene
         * @param {(BlockPosWrapped)[]} blocks
         * @param {Direction=} direction
         */
        hideSectionAndRemoveBlocks: function (scene, blocks, direction) {
            let section = P.sectionFromPositions(scene, blocks);
            scene.world().hideSection(section, direction || Direction.UP);
            scene.idle(25);
            blocks.forEach((block) => scene.world().setBlock(block, 'minecraft:air', false));
        },

        /**
         * @param {SceneBuilder} scene
         * @param {internal.$wrapped<internal.net.minecraft.world.phys.Vec3>} scenePosition
         * @param {InstanceType<typeof PonderPointing>} direction
         * @param {number} from
         * @param {number} to
         * @param {number} duration
         */
        animatedCircuitConfiguration: function (scene, scenePosition, direction, from, to, duration) {
            let inputWindowElement = new $InputWindowElement(scenePosition, direction);
            let builder = inputWindowElement.builder().rightClick();
            scene.addInstruction(new $ShowInputInstruction(inputWindowElement, duration));

            let step = from <= to ? 1 : -1;
            let animDuration = 0;
            for (let i = from; step > 0 ? i <= to : i >= to; i += step) {
                let config = i;
                scene.addInstruction(() => {
                    builder.withItem(Item.of('gtceu:programmed_circuit', 1, `{Configuration:${config}}`));
                });
                animDuration += 5;
                scene.idle(i === 0 ? 10 : 5);
            }
            scene.idle(duration - animDuration);
        },

        /**
         * @param {SceneBuilder} scene
         * @param {BlockPosWrapped} controllerPosition
         * @param {boolean} active
         */
        setMultiblockActiveState(scene, controllerPosition, active) {
            scene.world().modifyBlockEntity(controllerPosition, $MetaMachineBlockEntity, (be) => {
                /** @type {internal.com.gregtechceu.gtceu.api.machine.feature.IRecipeLogicMachine} */
                let metaMachine = /** @type {any} */ (be.getMetaMachine());
                metaMachine.notifyStatusChanged(
                    active ? $RecipeLogicStatus.IDLE : $RecipeLogicStatus.WORKING,
                    active ? $RecipeLogicStatus.WORKING : $RecipeLogicStatus.IDLE
                );
            });
            P.triggerRerender(scene);
        },

        /**
         * @param {string} clz
         * @param {string[]} args
         * @param {string} ret
         */
        javaReflectionGetMethod: function (clz, args, ret) {
            const javaClz = /** @type {internal.$class<unknown>} */ (Java.loadClass(/** @type {any} */ (clz)));
            let methods = javaClz.__javaObject__.getDeclaredMethods();
            return methods.find((x) => {
                return (
                    x.parameterCount === args.length &&
                    x.parameters.every((p, i) => p.getType().getName() === args[i]) &&
                    x.returnType.getName() === ret
                );
            });
        },

        /**
         * @param {string} clz
         * @param {string} name
         */
        javaReflectionGetMethodByName: function (clz, name) {
            const javaClz = /** @type {internal.$class<unknown>} */ (Java.loadClass(/** @type {any} */ (clz)));
            let methods = javaClz.getDeclaredMethods();
            let method = /** @type {internal.java.lang.reflect.Method} */ (methods.find((x) => x.name === name));
            method.setAccessible(true);
            return function () {
                let args = Array.from(arguments);
                console.log(args.length, args);
                return method.invoke(args[0], args.slice(1));
            };
        },

        /**
         * @param {SceneBuilder} scene
         * @param {BlockPosWrapped} position
         * @param {number} duration
         */
        animateMufflerHatch(scene, position, duration) {
            scene.addInstruction(
                new PonderTickingInstruction(false, duration).onTick((scene) => {
                    let be = scene.world.getBlockEntity(position);
                    if (!(be instanceof $MetaMachineBlockEntity)) return;
                    let metaMachine = be.getMetaMachine();
                    if (!(metaMachine instanceof $IMufflerMachine)) return;
                    metaMachine.emitPollutionParticles();
                })
            );
        },

        /**
         * @param {SceneBuilder} scene
         * @param {BlockPosWrapped} position
         * @param {Direction[]} connections
         */
        setPipeConnections(scene, position, connections) {
            scene.world().modifyBlockEntity(position, $PipeBlockEntity, (be) => {
                let mask = 0;
                for (let connection of connections) {
                    mask |= 1 << connection.ordinal();
                }
                be.setConnections(mask);
            });
        },

        /**
         * @param {string} sceneName
         * @param {(scene: SceneBuilder, util: SceneBuildingUtil) => void} scene
         */
        defineScene: function (sceneName, scene) {
            ponderScenes[sceneName] = scene;
        },

        /**
         * @param {SceneBuilder} scene
         * @param {SelectionWrapped} selection
         */
        showSectionImmediately: function (scene, selection) {
            scene.addInstruction(
                new $DisplayWorldSectionInstruction(0, Direction.DOWN, selection, () => scene.scene.baseWorldSection)
            );
        },

        /**
         * @param {SceneBuilder} scene
         * @param {SelectionWrapped} selection
         */
        hideSectionImmediately: function (scene, selection) {
            scene.addInstruction(
                new $FadeOutOfSceneInstruction(0, Direction.UP, scene.world().makeSectionIndependent(selection))
            );
        },

        /**
         * @param {SceneBuilder} scene
         * @param {ComputedMultiblockStructure} multi
         * @param {Position} offset
         * @param {number} duration
         */
        moveMulti: function (scene, multi, offset, duration) {
            let util = scene.scene.sceneBuildingUtil;
            let offsetPos = util.grid().at(offset[0], offset[1], offset[2]);

            P.hideSectionImmediately(scene, multi.cuboid);
            let link = scene.world().showIndependentSectionImmediately(multi.cuboid);
            scene.world().moveSection(link, util.vector().of(offset[0], offset[1], offset[2]), duration);
            scene.idle(duration);
            scene.addInstruction((scene) => {
                scene.resolve(link).setEmpty();
            });

            scene.world().setBlocks(multi.cuboid, 'minecraft:air', false);

            let newMinPos = multi.bounds[0].offset(offsetPos);
            let newMaxPos = multi.bounds[1].offset(offsetPos);
            /** @type {ComputedMultiblockStructure} */
            let newMulti = {
                controller: multi.controller.offset(offsetPos),
                dimensions: multi.dimensions,
                bounds: [newMinPos, newMaxPos],
                cuboid: util.select().fromTo(newMinPos, newMaxPos),
                blocks: multi.blocks.map((b) => ({
                    pos: b.pos.offset(offsetPos),
                    state: b.state,
                    onPlace: b.onPlace,
                })),
            };
            for (let block of newMulti.blocks) {
                scene.world().setBlock(block.pos, block.state, false);
            }
            P.showSectionImmediately(scene, newMulti.cuboid);
            return newMulti;
        },

        instructions: {
            showInputInstruction: $ShowInputInstruction,
            replaceBlocksInstruction: $ReplaceBlocksInstruction,
            displayWorldSectionInstruction: $DisplayWorldSectionInstruction,
            fadeOutOfSceneInstruction: $FadeOutOfSceneInstruction,
        },
    };

    return P;
})();
