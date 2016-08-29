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
    "It's a room.",
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
  []
);
rooms.push(room1)
