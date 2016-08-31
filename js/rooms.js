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
  [sword,coin,stick],
  //characters
  [Fred],
  //doors
  [northDoor1],
  //usables
  [],
  // exits
  'NORTH'
);
rooms.push(room1)
southDoor2.destination = room1

var room2 = new Room(
  //active
  false,
  //info
  [
    //Main description
    "You're in ROOM 2 now. There are DRUGS in the middle of the floor, and a DOOR leading SOUTH.",
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
  [drugs],
  //characters
  [],
  //doors
  [southDoor2],
  //usables
  [],
  // exits
  'SOUTH'
);
rooms.push(room2)
northDoor1.destination = room2
