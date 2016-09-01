
var Player = function(playerName,maxHealth,damage,info){
  this.name = playerName;
  this.maxHealth = maxHealth;
  this.currentHealth = this.maxHealth;
  this.damage = damage;
  this.inventory = [];
  this.info = info;
  this.weapon = false;
  this.isAlive = true;
}

var Room = function(active,info,loot,characters,doors,usables, exits){
  this.active = active;
  this.info = info;
  this.loot = loot;
  this.characters = characters;
  this.doors = doors;
  this.usable = usables;
  this.exits = exits
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

var NPC = function(name,info,maxHealth,damage, droppedItems){
  this.name = name;
  this.hostile = false;
  this.info = info;
  this.maxHealth = maxHealth;
  this.currentHealth = this.maxHealth;
  this.damage = damage;
  this.isAlive = true;
  this.droppedItems = droppedItems
}

var Dialogue = function(){
  this.response = response;
  this.playerResponse = playerResponse;
}

var Usable = function(name,door,info){
  this.name = name;
  this.active = false;
  this.door = door;
  this.info = info;
}

var Door = function (name, direction, destination, locked, info) {
  this.name = name;
  this.direction = direction;
  this.destination = destination;
  this.locked = locked;
  this.info = info
}

Room.prototype.look = function() {
  if (this.active) {
    $("#story").append("<li>" + this.info[0] + "</li>");
  }

};

Player.prototype.printInventory = function() {
  $("#player-inventory").empty();
  for(var i = 0; i< this.inventory.length; i++){
    $("#player-inventory").append("<li>" + this.inventory[i].name + "</li>")
  }
};

Player.prototype.equipWeapon = function(userEntryArray){
  var inInventory = false;
    if(userEntryArray.length === 1){
      $("#story").append("<li>You can't EQUIP nothing.</li>");
    }
    else if(userEntryArray.length > 1){
      for(var equip=1;equip<userEntryArray.length;equip++){
        for(var j=0;j<this.inventory.length;j++){
          if(userEntryArray[equip] === this.inventory[j].name){
            inInventory = true;
          if(!this.weapon){
            if(this.inventory[j].constructor.name === "Weapon"){
              $("#story").append("<li>You EQUIP the " + this.inventory[j].name + ".</li>");
              this.weapon = this.inventory[j];
              this.damage = this.weapon.damage;
              console.log(this);
              this.inventory.splice($.inArray(this.inventory[j], this.inventory), 1);
              $("#player-weapon").text(this.weapon.name);
            }
          }
          else if(this.weapon){
            if(this.inventory[j].constructor.name === "Weapon"){
              this.inventory.push(this.weapon);
              this.weapon = false;
              $("#player-weapon").text("none");
              this.equipWeapon(userEntryArray);
            }
          }
        }
        else if((userEntryArray[equip] != this.inventory[j].name)){
          inInventory = false;
        }
      }
    }
  }
  if(!inInventory){
    for(var equip=1;equip<userEntryArray.length;equip++){
      $("#story").append("<li>" + userEntryArray[equip] + " is not in your inventory.</li>");
    }
  }

  this.printInventory();
}

Player.prototype.getLoot = function(userEntryArray, rooms){
  for(var r=0;r<rooms.length;r++){
    if(userEntryArray.length === 1){
      $("#story").append("<li>You reach out infront of you and grab. You open it to see you have grabbed nothing.</li>");
    }
    else if(userEntryArray.length > 1){
      for(var get=1;get<userEntryArray.length;get++){
        for(var j=0;j<rooms[r].loot.length;j++){
          if(userEntryArray[get].includes(rooms[r].loot[j].name) && rooms[r].active){
            $("#story").append("<li>You pick up the " + rooms[r].loot[j].name + " and put it in your inventory.</li>");
            this.inventory.push(rooms[r].loot[j]);
            rooms[r].loot.splice($.inArray(rooms[r].loot[j], rooms[r].loot), 1);
            console.log(this);
          }
        }
      }
    }
  }

  this.printInventory();

}

Player.prototype.dropLoot = function(userEntryArray, rooms){
  if(userEntryArray.length === 1){
    $("#story").append("<li>You cannot drop nothing.</li>");
  }
  else if(userEntryArray.length > 1){
    for(var r=0;r<rooms.length;r++){
      for(var drop = 1; drop < userEntryArray.length; drop++){
        for(var j = 0; j<this.inventory.length;j++){
          if(userEntryArray[drop].includes(this.inventory[j].name)){
            $("#story").append("<li>You drop the " + this.inventory[j].name + "</li>");
            rooms[r].loot.push(this.inventory[j]);
            this.inventory.splice($.inArray(this.inventory[j], this.inventory), 1);
            console.log(this);
          }
        }
      }
    }
  }
  this.printInventory();
}

NPC.prototype.dropItems = function() {
  for(var room = 0; room < rooms.length; room++) {
    if (rooms[room].active) {
      rooms[room].loot.push(this.droppedItems)
      $("#story").append("<li>" + this.name + " drops a " + this.droppedItems.name + " onto the floor!</li>")
    }
  }
}

var look = function(userEntryArray, arrayLength, rooms) {
  for (var r = 0; r < rooms.length; r++) {
    if (arrayLength === 1 && rooms[r].active) {
      $("#story").append("<li>" + rooms[r].info[0] + "</li>");
    }
    else if (arrayLength > 1) {
      if (rooms[r].active) {
        for(var look=1;look < arrayLength;look++){
          for(var j=0;j<rooms[r].loot.length;j++){
            if(userEntryArray[look].includes(rooms[r].loot[j].name)){
              $("#story").append("<li>" + rooms[r].loot[j].info + "</li>");
            }
          }
          for(var j=0;j<rooms[r].usable.length;j++){
            if(userEntryArray[look].includes(rooms[r].door[j].name)){
              $("#story").append("<li>" + rooms[r].door[j].info + "</li>");
            }
          }
        }
      }
    }
  }
};

var open = function(words, numberOfWords, rooms) {
  if (numberOfWords <= 1) {
    $("#story").append("<li>To OPEN a DOOR, type 'OPEN' and then the direction the DOOR is facing, such as 'NORTH' or 'SOUTH'.");
  }
  else if (numberOfWords > 1) {
    for (var r=0; r < rooms.length; r++) {
      console.log(rooms[r])
      if (rooms[r].active === true) {
        for (var w=0; w < numberOfWords; w++) {
          for (var d=0; d < rooms[r].doors.length; d++) {
            if (words[w].includes(rooms[r].doors[d].direction)) {
              $("#story").append("<li>You OPEN the " + rooms[r].doors[d].direction + " DOOR and enter the next room.</li>")
              rooms[r].doors[d].destination.active = true;
              rooms[r].active = false;
              $("#story").append("<li>" + rooms[r].doors[d].destination.info[0] + "</li>")
            }
          }
        }
      }
    }
  }
};

var attack = function(userEntryArray, numberOfWords, rooms, player) {
  if(userEntryArray.length === 1){
    $("#story").append("<li>Please select something to ATTACK.</li>");
  }
  //If it is ATTACK with more words
  else if(userEntryArray.length > 1){
    for(var r=0;r<rooms.length;r++){
      for(var attack=1;attack<userEntryArray.length;attack++){
        for(var k=0; k<rooms[r].characters.length; k++){
          if((userEntryArray[attack].includes(rooms[r].characters[k].name)) && (rooms[r].characters[k].isAlive === true)){
            $("#story").append("<li>YOU attack " + rooms[r].characters[k].name + " and they take " + player.damage + " damage.</li>");
            rooms[r].characters[k].currentHealth -= player.damage;
            console.log(rooms[r].characters[k]);
            if (rooms[r].characters[k].currentHealth <= 0) {
              rooms[r].characters[k].isAlive = false;
              $("#story").append("<li>" + rooms[r].characters[k].name + " has died!</li>")
              rooms[r].characters[k].dropItems();
            }
            else if (rooms[r].characters[k].currentHealth > 0) {
              $("#story").append("<li>" + rooms[r].characters[k].name + " attacks you and deals " + rooms[r].characters[k].damage + " damage!</li>")
              player.currentHealth -= rooms[r].characters[k].damage;
              if (player.currentHealth <= 0) {
                player.isAlive = false;
                $("#play-game").hide();
                $("#lose-screen").fadeToggle(5000);
              }
              console.log(player.currentHealth);
            }
          }
          else if (rooms[r].characters[k].isAlive === false) {
            $("#story").append("<li>You can't attack that.</li>")
          }
        }
      }
    }
  }
};

Player.prototype.usePotion = function(potion) {
  for (var item = 0; item < this.inventory.length; item++) {
    if (this.inventory[item] === potion) {
      if (this.currentHealth < this.maxHealth) {
        this.currentHealth += 5;
        $("#story").append("<li> You drink the potion and feel rejuvinated as your wounds heal.</li>")
        if (this.currentHealth > this.maxHealth) {
          this.currentHealth = this.maxHealth;
        }
        this.inventory.splice($.inArray(this.inventory[item], this.inventory), 1);
      }
      else if (this.currentHealth === this.maxHealth) {
        this.inventory.splice($.inArray(this.inventory[item], this.inventory), 1);
        $("#story").append("<li> You drink the potion. It is tasteless and gives you a warm feeling inside, but other than that you notice no effects.</li>")
      }
    }
  }
  this.printInventory();
}
