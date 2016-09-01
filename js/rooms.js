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
  [sword,stick],
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
    "You're in ROOM 2 now. There is a POTION lying in the middle of the floor, and 3 DOORS leading EAST, WEST, and SOUTH.",
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
  [potion],
  //characters
  [],
  //doors
  [southDoor2, westDoor2],
  //usables
  [],
  // exits
  ['SOUTH', 'EAST', 'WEST']
);
rooms.push(room2)
northDoor1.destination = room2
eastDoor3.destination = room2

var room3 = new Room(
  //active
  false,
  //info
  [
    //Main description
    "You enter a narrow stone corridor. Two DOORS lead to the EAST and to the WEST. A giant SPIDER blocks the WEST DOOR.",
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
  [spider],
  //doors
  [eastDoor3],
  //usables
  [],
  // exits
  'EAST'
);
rooms.push(room3)
westDoor2.destination = room3
