global.amethystblock = (tick) => {
    const { block, level } = tick;
    const pos = block.getPos();
    const Direction = java("net.minecraft.core.Direction");

    const growAmethystBuds = () => {
        Direction.values().forEach((face) => {
            const offsetPos = pos.relative(face);
            const adjacentBlockId = level.getBlock(offsetPos).id;
            const chanceOfGrowth = 0.1;
            const randomValue = Math.random();

            const blockTypes = {
                "minecraft:air": "small_rose_quartz_bud",
                "biomesoplenty:small_rose_quartz_bud": "medium_rose_quartz_bud",
                "biomesoplenty:medium_rose_quartz_bud": "large_rose_quartz_bud",
                "biomesoplenty:large_rose_quartz_bud": "rose_quartz_cluster",
            };

            const blockType = blockTypes[adjacentBlockId];
            if (blockType && randomValue < chanceOfGrowth) {
                const command = `setblock ${offsetPos.getX()} ${offsetPos.getY()} ${offsetPos.getZ()} biomesoplenty:${blockType}[facing=${face}]`;
                tick.server.runCommandSilent(command);
            }
        });
    };

    growAmethystBuds();
};

onEvent("block.registry", (event) => {
    event
        .create("budding_rose_quartz")
        .displayName("Budding Rose Quartz")
        .material("amethyst")
        .hardness(2.0)
        .tagBlock("forge:budding_blocks")
        .tagBlock("forge:mineable/paxel")
        .tagBlock("minecraft:crystal_sound_blocks")
        .tagBlock("minecraft:mineable/pickaxe")
        .tagBlock("tconstruct:mineable/pickadze")
        .requiresTool(true)
        .noDrops()
        .tagBlock("cdc:mineable/crystal_collector")
        .randomTick((tick) => global.amethystblock(tick));
});
