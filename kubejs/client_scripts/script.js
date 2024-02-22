// priority: 0

console.info("JEI hiding loaded");

onEvent("jei.hide.items", (event) => {
    // Hide items in JEI here
    event.hide("industrialforegoing:laser_drill");
    event.hide("industrialforegoing:ore_laser_base");
    event.hide("industrialforegoing:fluid_laser_base");

    event.hide("rebornstorage:small_item_disk");
    event.hide("rebornstorage:medium_item_disk");
    event.hide("rebornstorage:large_item_disk");
    event.hide("rebornstorage:larger_item_disk");
    event.hide("rebornstorage:small_fluid_disk");
    event.hide("rebornstorage:medium_fluid_disk");
    event.hide("rebornstorage:large_fluid_disk");
    event.hide("rebornstorage:larger_fluid_disk");

    event.hide("rebornstorage:small_item_disk_part");
    event.hide("rebornstorage:medium_item_disk_part");
    event.hide("rebornstorage:larger_item_disk_part");
    event.hide("rebornstorage:large_item_disk_part");
    event.hide("rebornstorage:small_fluid_disk_part");
    event.hide("rebornstorage:medium_fluid_disk_part");
    event.hide("rebornstorage:large_fluid_disk_part");
    event.hide("rebornstorage:larger_fluid_disk_part");

    event.hide("thermal:fluid_cell_frame");
    event.hide("create:sturdy_sheet");
    event.hide("create:precision_mechanism");
});

onEvent("client.generate_assets", (event) => {
    console.log(Text.translate("jade.modName.kubejs").string);
    event.addLang("jade.modName.kubejs", "Create Draconic Construction");
    console.log(Text.translate("jade.modName.kubejs").string);

    event.addLang("block.cdc.mekanikal_assembler", "Mekanikal Assembler");
    event.addLang("cdc.mekanikal_assembler.description", "Mekanikal Assembler");
});
