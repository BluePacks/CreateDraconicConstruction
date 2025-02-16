onEvent("recipes", (event) => {
    // RECIPE REMOVALS

    let conductorsCap = [
        "green",
        "light_gray",
        "magenta",
        "blue",
        "cyan",
        "brown",
        "red",
        "yellow",
        "white",
        "lime",
        "gray",
        "light_blue",
        "purple",
        "orange",
        "black",
        "pink",
    ];
    conductorsCap.forEach((Color) => {
        event.remove({
            id: "railways:sequenced_assembly/" + Color + "_conductor_cap",
        });
    });

    event.remove({ mod: "refinedstorage" });
    event.remove({ mod: "rebornstorage" });
    event.remove({ mod: "extradisks" });
    event.remove({ mod: "rsrequestify" });
    event.remove({ mod: "toms_storage" });
    event.remove({ id: "createaddition:mixing/electrum" });
    event.remove({ id: "createoreexcavation:drilling/redstone" });
    event.remove({ id: "createoreexcavation:drilling/gold" });
    event.remove({ id: "createoreexcavation:drilling/hardened_diamond" });
    event.remove({ id: "createoreexcavation:drilling/diamond" });
    event.remove({ id: "createoreexcavation:drilling/emerald" });
    event.remove({ id: "createoreexcavation:drilling/hardened_emerald" });
    event.remove({ id: "createoreexcavation:drilling/zinc" });
    event.remove({ id: "createoreexcavation:drilling/iron" });
    event.remove({ id: "createoreexcavation:extractor/water" });
    event.remove({
        id: "createaddition:compat/mekanism/rose_quartz_enriching",
    });
    event.remove({ id: "create:crafting/materials/electron_tube" });
    event.remove({ id: "create:milling/andesite" });
    event.remove({ id: "create:crafting/kinetics/basin" });
    event.remove({ id: "create:crafting/kinetics/contraption_controls" });
    event.remove({ id: "create:crafting/kinetics/mechanical_drill" });
    event.remove({ id: "create:crafting/kinetics/mechanical_saw" });
    event.remove({ id: "create:crafting/kinetics/mechanical_mixer" });
    event.remove({ id: "create:crafting/kinetics/mechanical_press" });
    event.remove({ id: "create:crafting/kinetics/deployer" });
    event.remove({ id: "create:crafting/kinetics/mechanical_roller" });
    event.remove({ id: "create:crafting/curiosities/brown_toolbox" });
    event.remove({ id: "create:crafting/kinetics/depot" });
    event.remove({ id: "create:crafting/kinetics/radial_chassis" });
    event.remove({ id: "create:crafting/kinetics/linear_chassis" });
    event.remove({ id: "create:crafting/kinetics/mechanical_harvester" });
    event.remove({ id: "railways:crafting/track_switch_andesite" });
    event.remove({ id: "create:crafting/kinetics/mechanical_plough" });
    event.remove({ id: "create:crafting/logistics/andesite_funnel" });
    event.remove({ id: "create:crafting/logistics/andesite_tunnel" });
    event.remove({ id: "create:crafting/kinetics/portable_storage_interface" });
    event.remove({ id: "create:crafting/kinetics/chute" });
    event.remove({ id: "create:crafting/kinetics/gearbox" });
    event.remove({ id: "create:crafting/kinetics/belt_connector" });
    event.remove({ id: "create:compacting/andesite_from_flint" });
    event.remove({ id: "create:crushing/diorite" });
    event.remove({ id: "thermal:device_rock_gen" });
    event.remove({ id: "thermal:machine_frame" });
    event.remove({ id: "thermal:device_water_gen" });
    event.remove({ id: "thermal:device_composter" });
    event.remove({ id: "thermal:device_collector" });
    event.remove({ id: "thermal:device_nullifier" });
    event.remove({ id: "thermal:device_potion_diffuser" });
    event.remove({ id: "thermal:device_tree_extractor" });
    event.remove({ id: "thermal:device_fisher" });
    event.remove({ id: "create:crafting/kinetics/encased_fan" });
    event.remove({ id: "create:crafting/kinetics/encased_chain_drive" });
    event.remove({ id: "create:mixing/andesite_alloy" });
    event.remove({ id: "create:mixing/andesite_alloy_from_zinc" });
    event.remove({ id: "tconstruct:compat/create/andesite_alloy_iron" });
    event.remove({ id: "tconstruct:compat/create/andesite_alloy_zinc" });
    event.remove({ id: "refinedstorageaddons:wireless_crafting_grid" });
    event.remove({ id: "create:crafting/kinetics/copper_valve_handle" });
    event.remove({ id: "create:crafting/kinetics/fluid_tank" });
    event.remove({ id: "create:crafting/kinetics/smart_fluid_pipe" });
    event.remove({ id: "create:crafting/kinetics/portable_fluid_interface" });
    event.remove({ id: "create:crafting/kinetics/fluid_valve" });
    event.remove({ id: "create:crafting/kinetics/hose_pulley" });
    event.remove({ id: "create:crafting/kinetics/hose_pulley" });
    event.remove({ id: "create:crafting/kinetics/mechanical_pump" });
    event.remove({ id: "create:crafting/kinetics/item_drain" });
    event.remove({ id: "create:crafting/kinetics/spout" });
    event.remove({ id: "create:crafting/kinetics/rope_pulley" });
    event.remove({ id: "thermal:fluid_cell" });
    event.remove({ id: "thermal:fluid_cell_frame" });
    event.remove({ type: "thermal:lapidary_fuel" });
    event.remove({ id: "minecraft:pressing/zinc_sheet" });
    event.remove({ id: "create:item_application/railway_casing" });
    event.remove({ id: "create:sequenced_assembly/sturdy_sheet" });
    event.remove({ id: "create:crafting/logistics/brass_funnel" });
    event.remove({ id: "create:crafting/logistics/brass_tunnel" });
    event.remove({ id: "create:crafting/logistics/stockpile_switch" });
    event.remove({ id: "create:crafting/logistics/content_observer" });
    event.remove({ id: "create:crafting/logistics/display_link" });
    event.remove({ id: "create:crafting/logistics/powered_latch" });
    event.remove({ id: "create:crafting/logistics/powered_toggle_latch" });
    event.remove({ id: "create:crafting/logistics/pulse_extender" });
    event.remove({ id: "create:crafting/logistics/pulse_repeater" });
    event.remove({ id: "create:crafting/logistics/redstone_link" });
    event.remove({ id: "create:crafting/logistics/stockpile_switch" });
    event.remove({ id: "create:crafting/kinetics/smart_chute" });
    event.remove({ id: "create:crafting/kinetics/elevator_pulley" });
    event.remove({ id: "create:crafting/kinetics/mechanical_arm" });
    event.remove({ id: "create:crafting/kinetics/mechanical_crafter" });
    event.remove({ id: "create:crafting/kinetics/rotation_speed_controller" });
    event.remove({ id: "create:crafting/kinetics/track_observer" });
    event.remove({
        id: "create:crafting/kinetics/track_observer_from_other_plates",
    });
    event.remove({ id: "create:crafting/kinetics/track_signal" });
    event.remove({ id: "create:crafting/kinetics/train_trapdoor" });
    event.remove({ id: "create:crafting/kinetics/train_door" });
    event.remove({ id: "create:crafting/kinetics/track_station" });
    event.remove({ id: "create:crafting/kinetics/controls" });
    event.remove({ id: "railways:crafting/track_switch_brass" });
    event.remove({ id: "railways:crafting/remote_lens" });
    event.remove({ id: "railways:crafting/track_coupler" });
    event.remove({
        id: "create:crushing/update_one/scrap_precision_mechanism",
    });
    event.remove({ id: "mekanism:control_circuit/ultimate" });
    event.remove({ id: "mekanism:control_circuit/elite" });
    event.remove({ id: "mekanism:control_circuit/advanced" });
    event.remove({ id: "mekanism:control_circuit/basic" });
    event.remove({ id: "create:sequenced_assembly/precision_mechanism" });
    event.remove({ id: "create:crafting/materials/rose_quartz" });
    event.remove({ id: "create:compacting/granite_from_flint" });
    event.remove({ id: "create:compacting/diorite_from_flint" });
    event.remove({ id: "mekanism:crusher" });
    event.remove({ id: "autosmithingtable:auto_smithing_table" });
    event.remove({ id: "mekanism:tier_installer/elite" });
    event.remove({ id: "mekanism:tier_installer/advanced" });
    event.remove({ id: "mekanism:tier_installer/ultimate" });
    event.remove({ id: "mekanism:tier_installer/basic" });
    event.remove({ id: /mekanism:factory\// });
    event.remove({ id: "mekanism:combiner" });
    event.remove({ id: "mekanism:enrichment_chamber" });
    event.remove({ id: "mekanism:metallurgic_infuser" });
    event.remove({ id: "mekanism:fuelwood_heater" });
    event.remove({ id: "mekanism:energized_smelter" });
    event.remove({ id: "mekanism:formulaic_assemblicator" });
    event.remove({ id: "mekanism:steel_casing" });
    event.remove({ id: "mekanism:precision_sawmill" });
    event.remove({ id: "mekanism:oredictionificator" });
    event.remove({ id: "mekanism:personal_barrel" });
    event.remove({ id: "mekanism:personal_chest" });
});
