
var Player = function(playerName,maxHealth,damage,info){
  this.name = playerName;
  this.maxHealth = maxHealth;
  this.currentHealth = this.maxHealth;
  this.damage = damage;
  this.inventory = [];
  this.info = info;
  this.weapon = 0;
}

var Room = function(active,info,loot,characters,doors,usables){
  this.active = active;
  this.info = info;
  this.loot = loot;
  this.characters = characters;
  this.doors = doors;
  this.usable = usables;
}

var Loot = function(name,info,equipable){
  this.name = name;
  this.inventory = false;
  this.equipped = false;
  this.info = info;
}

var Weapon = function(name,info,damage){
  this.name = name;
  this.inventory = false;
  this.equipped = false;
  this.info = info;
  this.damage = damage;
}

var NPC = function(name,info,maxHealth,damage){
  this.name = name;
  this.hostile = false;
  this.info = info;
  this.maxHealth = maxHealth;
  this.currentHealth = this.maxHealth;
  this.damage = damage;
  this.dialogue; //ADD DIALOGUE STUFF HERE!!!!!!
}

var Usable = function(name,door,info){
  this.name = name;
  this.active = false;
  this.door = door;
  this.info = info;
}

Room.prototype.look = function() {
  if (this.active) {
    $("#story").append("<li>" + this.info[0] + "</li>");
  }
};


var look = function(userEntryArray, arrayLength, room) {
  for(var look=1;look < arrayLength;look++){
    for(var j=0;j<room.loot.length;j++){
      if(userEntryArray[look].includes(room.loot[j].name)){
        $("#story").append("<li>" + room.loot[j].info + "</li>");
      }
    }
    for(var j=0;j<room.usable.length;j++){
      if(userEntryArray[look].includes(room.usable[j].name)){
        $("#story").append("<li>" + room.usable[j].info + "</li>");
      }
    }
  }
};

var get = function(userEntryArray, arrayLength, rooms, player) {
  for(var r=0;r<rooms.length;r++){
    if(arrayLength === 1){
      $("#story").append("<li>You can't grab the air.</li>");
    }
    //If it is GET with more words
    else if(arrayLength > 1){
      for(var get=1;get<arrayLength;get++){
        for(var j=0;j<rooms[r].loot.length;j++){
          if(userEntryArray[get].includes(rooms[r].loot[j].name)){
            $("#story").append("<li>You pick up the " + rooms[r].loot[j].name + " and put it in your inventory.</li>"); //sometimes throws error not finding name
            player.inventory.push(rooms[r].loot[j])
            console.log(player)
          }
        }
      }
    }
  }
}

var equip = function(userEntryArray, arrayLength, rooms, player){
  for(var r=0;r<rooms.length;r++){
    if(userEntryArray.length === 1){
      $("#story").append("<li>You can't EQUIP nothing.</li>");
    }
    //If it is EQUIP with more words
    else if(userEntryArray.length > 1){
      for(var equip=1;equip<userEntryArray.length;equip++){
        for(var j=0;j<rooms[r].loot.length;j++){
          if(userEntryArray[equip] === player.inventory[j].name && player.inventory[j].constructor.name === "Weapon"){
            $("#story").append("<li>You EQUIP the " + player.inventory[j].name + ".</li>");
            player.weapon = player.inventory[j];
            player.damage += player.weapon.damage;
            console.log(player);
          }
        }
      }
    }
  }
}
