var rooms = []
var template = new Room(
  //active
  false,
  //info
  [
    //Main description
    "Main Room description",
    //North description
    "North of room",
    //East description
    "East of room",
    //South description
    "South of Room",
    //West description
    "West of Room"
  ],
  //loot
  [],
  //characters
  [],
  //doors
  [],
  //usables
  []
);

var room1 = new Room(
  //active
  true,
  //info
  [
    //Main description
    "It's a room. There is a SWORD and a COIN in it. A DOOR leads to the NORTH.",
    //North description
    "North of room",
    //East description
    "East of room",
    //South description
    "South of Room",
    //West description
    "West of Room"
  ],
  //loot
  [sword,coin],
  //characters
  [],
  //doors
  [],
  //usables
  [door1]
);
rooms.push(room1)

var room2 = new Room(
  //active
  false,
  //info
  [
    //Main description
    "It's a room. There is a GATE leading NORTH and a DOOR leading SOUTH.",
    //North description
    "North of room",
    //East description
    "East of room",
    //South description
    "South of Room",
    //West description
    "West of Room"
  ],
  //loot
  [],
  //characters
  [],
  //doors
  [],
  //usables
  [door1]
);
rooms.push(room2)
