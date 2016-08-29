
var Player = function(playerName,maxHealth,damage,info){
  this.name = playerName;
  this.maxHealth = maxHealth;
  this.currentHealth = this.maxHealth;
  this.damage = damage;
  this.inventory = [];
  this.info = info;
}

var Room = function(active,info,loot,characters,doors,usables){
  this.active = active;
  this.info = info;
  this.loot = loot;
  this.characters = characters;
  this.doors = doors;
  this.usable = usables;
}

var Loot = function(name,info){
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
