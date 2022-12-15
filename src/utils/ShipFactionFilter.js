const ships = [
  { name: "Caldari Navy Hookbill", faction: "Caldari Navy Faction" },
  { name: "Imperial Navy Slicer", faction: "Amarr Navy Faction" },
  { name: "Republic Fleet Firetail", faction: "Minmatar Navy Faction" },
  { name: "Federation Navy Comet", faction: "Gallente Navy Faction" },
  { name: "Crucifier Navy Issue", faction: "Amarr Navy Faction" },
  { name: "Vigil Fleet Issue", faction: "Minmatar Navy Faction" },
  { name: "Griffin Navy Issue", faction: "Caldari Navy Faction" },
  { name: "Maulus Navy Issue", faction: "Gallente Navy Faction" },
  { name: "Skybreaker", faction: "Edencom" },
  { name: "Probe Fleet Issue", faction: "Minmatar Navy Faction" },
  { name: "Heron Navy Issue", faction: "Caldari Navy Faction" },
  { name: "Magnate Navy Issue", faction: "Amarr Navy Faction" },
  { name: "Imicus Navy Issue", faction: "Gallente Navy Faction" },
  { name: "Caracal Navy Issue", faction: "Caldari Navy Faction" },
  { name: "Omen Navy Issue", faction: "Amarr Navy Faction" },
  { name: "Stabber Fleet Issue", faction: "Minmatar Navy Faction" },
  { name: "Vexor Navy Issue", faction: "Gallente Navy Faction" },
  { name: "Scythe Fleet Issue", faction: "Minmatar Navy Faction" },
  { name: "Augoror Navy Issue", faction: "Amarr Navy Faction" },
  { name: "Osprey Navy Issue", faction: "Caldari Navy Faction" },
  { name: "Exequror Navy Issue", faction: "Gallente Navy Faction" },
  { name: "Stormbringer", faction: "Edencom" },
  { name: "Raven Navy Issue", faction: "Caldari Navy Faction" },
  { name: "Apocalypse Navy Issue", faction: "Amarr Navy Faction" },
  { name: "Megathron Navy Issue", faction: "Gallente Navy Faction" },
  { name: "Tempest Fleet Issue", faction: "Minmatar Navy Faction" },
  { name: "Armageddon Navy Issue", faction: "Amarr Navy Faction" },
  { name: "Dominix Navy Issue", faction: "Gallente Navy Faction" },
  { name: "Scorpion Navy Issue", faction: "Caldari Navy Faction" },
  { name: "Typhoon Fleet Issue", faction: "Minmatar Navy Faction" },
  { name: "Thunderchild", faction: "Edencom" },
  { name: "Brutix Navy Issue", faction: "Gallente Navy Faction" },
  { name: "Drake Navy Issue", faction: "Caldari Navy Faction" },
  { name: "Harbinger Navy Issue", faction: "Amarr Navy Faction" },
  { name: "Hurricane Fleet Issue", faction: "Minmatar Navy Faction" },
  { name: "Cyclone Fleet Issue", faction: "Minmatar Navy Faction" },
  { name: "Ferox Navy Issue", faction: "Caldari Navy Faction" },
  { name: "Myrmidon Navy Issue", faction: "Gallente Navy Faction" },
  { name: "Prophecy Navy Issue", faction: "Amarr Navy Faction" },
  { name: "Coercer Navy Issue", faction: "Amarr Navy Faction" },
  { name: "Thrasher Fleet Issue", faction: "Minmatar Navy Faction" },
  { name: "Cormorant Navy Issue", faction: "Caldari Navy Faction" },
  { name: "Catalyst Navy Issue", faction: "Gallente Navy Faction" },
  { name: "Naglfar Fleet Issue", faction: "Minmatar Navy Faction" },
  { name: "Revelation Navy Issue", faction: "Amarr Navy Faction" },
  { name: "Moros Navy Issue", faction: "Gallente Navy Faction" },
  { name: "Phoenix Navy Issue", faction: "Caldari Navy Faction" },
  { name: "Succubus", faction: "Sansha's Nation" },
  { name: "Cruor", faction: "Blood Raider" },
  { name: "Daredevil", faction: "Serpentis" },
  { name: "Worm", faction: "Guristas Pirates" },
  { name: "Dramiel", faction: "Angel Cartel" },
  { name: "Astero", faction: "Sisters of Eve" },
  { name: "Garmur", faction: "Mordu's Legion" },
  { name: "Gila", faction: "Guristas Pirates" },
  { name: "Phantasm", faction: "Sansha's Nation" },
  { name: "Cynabal", faction: "Angel Cartel" },
  { name: "Vigilant", faction: "Serpentis" },
  { name: "Ashimmu", faction: "Blood Raider" },
  { name: "Stratios", faction: "Sisters of Eve" },
  { name: "Orthrus", faction: "Mordu's Legion" },
  { name: "Nightmare", faction: "Sansha's Nation" },
  { name: "Machariel", faction: "Angel Cartel" },
  { name: "Vindicator", faction: "Serpentis" },
  { name: "Rattlesnake", faction: "Guristas Pirates" },
  { name: "Bhaalgorn", faction: "Blood Raider" },
  { name: "Nestor", faction: "Sisters of Eve" },
  { name: "Barghest", faction: "Mordu's Legion" },
  { name: "Vehement", faction: "Serpentis" },
  { name: "Chemosh", faction: "Blood Raider" },
  { name: "Caiman", faction: "Guristas Pirates" },
  { name: "Dagon", faction: "Blood Raider" },
  { name: "Loggerhead", faction: "Guristas Pirates" },
  { name: "Revenant", faction: "Sansha' Nation" },
  { name: "Vendetta", faction: "Serpentis" },
  { name: "Vanquisher", faction: "Serpentis" },
  { name: "Molok", faction: "Blood Raider" },
  { name: "Komodo", faction: "Guristas Pirates" },
];

const ShipFactionFilter = (ship) => {
  const filter = ship.typeName;
  const regex = new RegExp(filter);

  const filtered = ships.filter((ship) => {
    return regex.exec(ship.name);
  });

  if (filtered.length >= 1 && filtered[0].name === filter) {
    return filtered[0];
  } else {
    return undefined;
  }
};

export default ShipFactionFilter;
