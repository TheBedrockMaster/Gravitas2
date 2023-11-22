// priority 10

let gtceuIngots = [
  "aluminium",
  "americium",
  "annealed_copper",
  "antimony",
  "battery_alloy",
  "beryllium",
  "blue_alloy",
  "chromium",
  "cobalt",
  "cobalt_brass",
  "cupronickel",
  "damascus_steel",
  "darmstadtium",
  "duranium",
  "electrum",
  "enriched_naquadah",
  "enriched_naquadah_trinium_europium_duranide",
  "europium",
  "gallium",
  "gallium_arsenide",
  // "graphene", no fluid
  "hsse",
  "hssg",
  "hsss",
  "indium",
  "indium_gallium_phosphide",
  "indium_tin_barium_titanium_cuprate",
  "invar",
  "iridium",
  "kanthal",
  "lead",
  "magnalium",
  "magnesium_diboride",
  "manganese",
  "manganese_phosphide",
  "mercury_barium_calcium_cuprate",
  "molybdenum",
  "naquadah",
  "naquadah_alloy",
  "naquadria",
  "neodymium",
  "neutronium",
  "nichrome",
  "nickel_zinc_ferrite",
  "niobium",
  "niobium_nitride",
  "niobium_titanium",
  "osmiridium",
  "osmium",
  "palladium",
  "platinum",
  "plutonium",
  "plutonium_241",
  "potin",
  "red_alloy",
  "rhodium",
  "rhodium_plated_palladium",
  // "ruridit", no fluid
  "ruthenium",
  "ruthenium_trinium_americium_neutronate",
  "samarium",
  "samarium_iron_arsenic_oxide",
  "silicon",
  "soldering_alloy",
  "stainless_steel",
  "tantalum",
  "thorium",
  "tin_alloy",
  "titanium",
  "trinium",
  "tritanium",
  "tungsten",
  "tungsten_carbide",
  "tungsten_steel",
  "ultimet",
  "uranium",
  "uranium_235",
  "uranium_rhodium_dinaquadide",
  "uranium_triplatinum",
  "vanadium",
  "vanadium_gallium",
  "vanadium_steel",
  "yttrium",
  "yttrium_barium_cuprate"
]

let tfcStonei = [
  "granite",
  "diorite",
  "gabbro",
  "shale",
  "claystone",
  "limestone",
  "conglomerate",
  "dolomite",
  "chert",
  "chalk",
  "rhyolite",
  "basalt",
  "andesite",
  "dacite",
  "quartzite",
  "slate",
  "phyllite",
  "schist",
  "gneiss",
  "marble"
]
let tfcSaplingz = [
  "acacia",
  "ash",
  "aspen",
  "birch",
  "blackwood",
  "chestnut",
  "douglas_fir",
  "hickory",
  "kapok",
  "mangrove",
  "maple",
  "oak",
  "palm",
  "pine",
  "rosewood",
  "sequoia",
  "spruce",
  "sycamore",
  "white_cedar",
  "willow"
]

let tfcMetalz = [
  'bismuth',
  'bismuth_bronze',
  'black_bronze',
  'bronze',
  'brass',
  'copper',
  'gold',
  'nickel',
  'rose_gold',
  'silver',
  'tin',
  'zinc',
  'sterling_silver',
  'wrought_iron',
  'steel',
  'black_steel',
  'blue_steel',
  'red_steel',
  'tungsten_carbide',
  'damascus_steel',
  'tungsten_steel',
  'cobalt_brass',
  'vanadium_steel',
  'ultimet',
  'invar',
  'aluminium',
  'titanium'
]
//Will be added to later
let tfcDusts = [
  'sulfur'
]
const addItemTags = (/** @type {TagEvent.Item} */ event) => {
  event.add("forge:ingots/iron", "tfc:metal/ingot/cast_iron")
  event.add("forge:rods/iron", "tfc:metal/rod/cast_iron")
  event.add("forge:plates/iron", "tfc:metal/sheet/cast_iron")
  event.add("forge:dusts/diamond", "tfc:powder/diamond")

  gtceuIngots.forEach((ingot) => {
    event.add("tfc:pileable_ingots", `gtceu:${ingot}_ingot`)
  })

  tfcStonei.forEach((stone) => {
    event.add("forge:slabs/cobblestone", `tfc:rock/cobble/${stone}_slab`)
  })

  tfcSaplingz.forEach((sapling) => {
    event.add("forge:saplings", `tfc:wood/sapling/${sapling}`)
  })

  tfcMetalz.forEach((metal) => {
    event.add(`forge:plates/${metal}`, `tfc:metal/sheet/${metal}`)
    event.add(`forge:plates/double/${metal}`, `tfc:metal/double_sheet/${metal}`)

    event.add(`forge:sheets/${metal}`, `gtceu:${metal}_plate`)
    event.add(`forge:double_sheets/${metal}`, `gtceu:${metal}_double_plate`)
    event.add(`forge:sheets`, `gtceu:${metal}_plate`)
    event.add(`forge:double_sheets`, `gtceu:${metal}_double_plate`)
  })

  event.add("forge:plates/iron", "tfc:metal/sheet/cast_iron")
  event.add("forge:plates/double/iron", "tfc:metal/double_sheet/cast_iron")

  event.add(`forge:sheets/cast_iron`, `gtceu:iron_plate`)
  event.add(`forge:double_sheets/cast_iron`, `gtceu:iron_double_plate`)
  event.add("firmalife:sweetener", "#tfc:sweetener")
  event.add("forge:treated_wood", "firmalife:treated_wood")

  event.add('tfc:any_knapping', ['minecraft:flint', 'gtceu:rubber_plate', 'gtceu:polyethylene_plate', 'gtceu:polytetrafluoroethylene_plate', 'gtceu:polybenzimidazole_plate'])
  event.add('tfc:flint_knapping', 'minecraft:flint')
  event.add('tfc:rubber_knapping', ['gtceu:rubber_plate', 'gtceu:polyethylene_plate', 'gtceu:polytetrafluoroethylene_plate', 'gtceu:polybenzimidazole_plate'])

  GTRegistries.MATERIALS.forEach(id => {
      event.add('tfc:saws', `gtceu:${id}_saw`)
      event.add('tfc:hammers', `gtceu:${id}_hammer`)
      event.add('tfc:knives', `gtceu:${id}_knife`)
  })

  gtceuToolsGT.forEach((metal) => {
    event.add('forge:double_ingots', `gregitas:double_${metal.id}_ingot`)
    event.add(`forge:double_ingots/${metal.id}`, `gregitas:double_${metal.id}_ingot`)
  })

  tfcDusts.forEach((dust) => {
    event.add(`forge:dusts/${dust}`, `tfc:powder/${dust}`)
  })
}