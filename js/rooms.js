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
    "YOU are in a dark, cold room, roughly ten feet by ten feet across. The walls and floor are made of stone blocks, with a wooden DOOR on the NORTH wall, and the only light source comes from a small torch on the NORTH wall.",
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
    "The room is filled with candles all around the edges. There are 3 DOORS leading EAST, WEST, and SOUTH.",
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
  [southDoor2, westDoor2, eastDoor2],
  //usables
  [],
  // exits
  ['SOUTH', 'EAST', 'WEST']
);
rooms.push(room2)
northDoor1.destination = room2
eastDoor3.destination = room2
westDoor6.destination = room2

var room3 = new Room(
  //active
  false,
  //info
  [
    //Main description
    "You enter a narrow stone corridor almost completely covered in dusty cobwebs. Two DOORS lead to the EAST and to the WEST.",
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
  [eastDoor3, westDoor3],
  //usables
  [],
  // exits
  'EAST'
);
rooms.push(room3)
westDoor2.destination = room3

var room4 = new Room(
  //active
  false,
  //info
  [
    //Main description
    "You find yourself in an ancient SHRINE. There are DOORS on the NORTH and EAST walls. The statue of a long forgotten GODDESS smiles benevolently at the WEST end of the room. You feel strangely at ease, yet when you gaze at the NORTH DOOR you feel a forboding presense behind it.",
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
  [northDoor4, eastDoor4],
  //usables
  [],
  // exits
  'West'
);
rooms.push(room4)
westDoor3.destination = room4
southDoor5.destination = room4

var room5 = new Room(
  //active
  false,
  //info
  [
    //Main description
    "A huge wrestling RING takes up the center of the room, and crowds of cheering spectators line the bleachers around it. A small DOOR is on the SOUTH wall, and a large stone DOOR can be seen on the NORTH wall.",
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
  [johnCena],
  //doors
  [finalDoor, southDoor5],
  //usables
  [],
  // exits
  'West'
);
rooms.push(room5)
northDoor4.destination = room5

var room6 = new Room(
  //active
  false,
  //info
  [
    //Main description
    "A small streams runs through the middle of the room from the NORTH end to the SOUTH. There are DOORS on the NORTH, WEST, and EAST walls.",
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
  [westDoor6, northDoor6, eastDoor6],
  //usables
  [],
  // exits
  'West'
);
rooms.push(room6)
eastDoor2.destination = room6
southDoor7.destination = room6
westDoor8.destination = room6

var room7 = new Room(
  //active
  false,
  //info
  [
    //Main description
    "Ruined beds and tables indicate that this room might have once been a barracks long ago. There are DOORS on the SOUTH and EAST walls.",
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
  [mace],
  //characters
  [],
  //doors
  [southDoor7, eastDoor7],
  //usables
  [],
  // exits
  'West'
);
rooms.push(room7)
northDoor6.destination = room7
westDoor9.destination = room7

var room8 = new Room(
  //active
  false,
  //info
  [
    //Main description
    "The first thing you notice about this room is the stench. There is a DOOR on the West wall.",
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
  [ogre],
  //doors
  [westDoor8],
  //usables
  [],
  // exits
  'West'
);
rooms.push(room8)
eastDoor6.destination = room8

var room9 = new Room(
  //active
  false,
  //info
  [
    //Main description
    "A small hole in the ceiling lets sunlight filter in from above. There is a DOOR on the West wall.",
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
  [key],
  //characters
  [],
  //doors
  [westDoor9],
  //usables
  [],
  // exits
  'West'
);
rooms.push(room9)
eastDoor7.destination = room9

var winRoom = new Room(
  //active
  false,
  //info
  [
    //Main description
    "You win!",
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
  [],
  // exits
  'West'
);
rooms.push(winRoom)
